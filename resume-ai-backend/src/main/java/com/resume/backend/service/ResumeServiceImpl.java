package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String description) throws IOException {

        // Step 1: Load the template
        String template = loadPromptFromFile("resume_prompt.txt");

        // Step 2: Replace variable
        String finalPrompt = template.replace("{{userDescription}}", description);

        // Step 3: Send prompt to DeepSeek
        Prompt prompt = new Prompt(finalPrompt);
        String rawOutput = chatClient.prompt(prompt).call().content();

        // Step 4: Extract PURE JSON
        String cleanJson = extractJson(rawOutput);

        // Step 5: Convert JSON → Map
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> parsed = mapper.readValue(cleanJson, Map.class);

        // Step 6: Wrap in "data" (frontend expects it)
        Map<String, Object> response = new HashMap<>();
        response.put("data", parsed);

        return response;
    }

    private String extractJson(String text) {
        int start = text.indexOf("{");
        int end = text.lastIndexOf("}");
        if (start != -1 && end != -1 && start < end) {
            return text.substring(start, end + 1);
        }
        throw new RuntimeException("Model did not return valid JSON:\n" + text);
    }

    private String loadPromptFromFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        return new String(resource.getInputStream().readAllBytes());
    }
}


