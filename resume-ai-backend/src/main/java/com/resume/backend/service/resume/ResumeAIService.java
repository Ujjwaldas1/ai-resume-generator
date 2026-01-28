package com.resume.backend.service.resume;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeAIService {

    private final OllamaChatModel ollamaChatModel;
    private final PromptLoader promptLoader;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Core AI method already in your project.
     * Returns raw string output from DeepSeek (often includes ```json blocks).
     */
    public String generateResumeJson(String userDescription) {
        try {
            log.info("Loading resume prompt template");

            String promptText = promptLoader.loadResumePrompt()
                    .replace("{{userDescription}}", userDescription == null ? "" : userDescription);

            UserMessage message = new UserMessage(promptText);
            Prompt prompt = new Prompt(List.of(message));

            log.info("Calling Ollama AI service...");

            ChatResponse response = ollamaChatModel.call(prompt);

            if (response == null || response.getResult() == null || response.getResult().getOutput() == null) {
                throw new RuntimeException("Ollama returned null/empty response");
            }

            String content = response.getResult().getOutput().getContent();
            log.info("AI response received, length: {}", content.length());

            return content;

        } catch (Exception e) {
            log.error("AI error: {}", e.getMessage());
            throw new RuntimeException("Failed to generate resume JSON from AI service: " + e.getMessage(), e);
        }
    }

    /**
     * New method required by AIResumeController.
     * Converts the raw AI output into a parsed JSON Map.
     */
    public Map<String, Object> generateFromDescription(String description) {
        try {
            // 1️⃣ Call your existing AI method
            String aiOutput = generateResumeJson(description);

            // 2️⃣ Extract valid JSON from AI output
            String cleanedJson = extractCleanJson(aiOutput);

            // 3️⃣ Parse JSON → Map
            return objectMapper.readValue(cleanedJson, Map.class);

        } catch (Exception e) {
            log.error("Error parsing AI JSON: {}", e.getMessage());
            throw new RuntimeException("Failed to parse AI JSON: " + e.getMessage(), e);
        }
    }

    /**
     * Cleans AI output by removing ```json ... ``` blocks or extracting
     * the JSON object between { and }.
     */
    private String extractCleanJson(String output) {
        if (output == null) return "{}";

        // Case 1 — AI wraps JSON inside ```json ... ```
        if (output.contains("```json")) {
            int start = output.indexOf("```json") + 7;
            int end = output.indexOf("```", start);

            if (end > start) {
                String extracted = output.substring(start, end).trim();
                return repairJson(extracted);
            }
        }

        // Case 2 — Fallback: find the first '{' and last '}'
        int first = output.indexOf("{");
        int last = output.lastIndexOf("}");

        if (first != -1 && last != -1 && last > first) {
            String extracted = output.substring(first, last + 1).trim();
            return repairJson(extracted);
        }

        // Default fallback
        return repairJson(output.trim());
    }
    
    /**
     * Repairs common JSON syntax errors that AI models sometimes produce.
     * Fixes issues like unquoted string values, trailing commas, etc.
     */
    private String repairJson(String json) {
        if (json == null || json.trim().isEmpty()) {
            return json;
        }
        
        try {
            // First, try to parse as-is to see if it's already valid
            objectMapper.readValue(json, Map.class);
            return json; // Already valid
        } catch (Exception e) {
            log.debug("JSON needs repair: {}", e.getMessage());
        }
        
        // Fix unquoted string values after colons
        // Pattern matches: "key": value, where value is not quoted and not a JSON literal/number
        java.util.regex.Pattern unquotedValuePattern = java.util.regex.Pattern.compile(
            "(\"[^\"]+\"\\s*:\\s*)([^\"\\[\\]{}0-9\\-\\s][^,\\[\\]{}]*?)([,}\\]\\n\\r])",
            java.util.regex.Pattern.MULTILINE
        );
        
        java.util.regex.Matcher matcher = unquotedValuePattern.matcher(json);
        StringBuffer result = new StringBuffer();
        
        while (matcher.find()) {
            String prefix = matcher.group(1);
            String value = matcher.group(2).trim();
            String suffix = matcher.group(3);
            
            // Skip if it's already properly formatted
            if (value.startsWith("\"") && value.endsWith("\"") ||
                value.equals("null") || value.equals("true") || value.equals("false") ||
                value.matches("^-?\\d+(\\.\\d+)?([eE][+-]?\\d+)?$") ||
                value.startsWith("{") || value.startsWith("[")) {
                matcher.appendReplacement(result, matcher.group(0));
                continue;
            }
            
            // Quote the unquoted string value
            String escapedValue = value.replace("\\", "\\\\").replace("\"", "\\\"");
            String quotedValue = "\"" + escapedValue + "\"";
            matcher.appendReplacement(result, prefix + quotedValue + suffix);
        }
        matcher.appendTail(result);
        
        String repairedStr = result.toString();
        
        // Fix trailing commas before closing braces/brackets
        repairedStr = repairedStr.replaceAll(",\\s*([}\\]])", "$1");
        
        // Fix multiple consecutive commas
        repairedStr = repairedStr.replaceAll(",\\s*,", ",");
        
        log.debug("JSON repair completed");
        return repairedStr;
    }
}
