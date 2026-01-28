package com.resume.backend.controller;

import com.resume.backend.service.resume.ResumeAIService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/v1/ai")
@RequiredArgsConstructor
public class AIController {

    private final ResumeAIService resumeAIService;

    @PostMapping("/generate")
    public ResponseEntity<?> generateResume(@RequestBody Map<String, String> request) {
        try {
            String description = request.get("description");
            if (description == null || description.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(Map.of("error", "description is required"));
            }
            
            log.info("Generating resume from description: {}", description.substring(0, Math.min(50, description.length())));
            
            // Generate resume data from AI
            Map<String, Object> resumeData = resumeAIService.generateFromDescription(description);
            
            // Create response structure that frontend expects
            Map<String, Object> response = new HashMap<>();
            response.put("data", resumeData);
            response.put("think", "Generated resume based on user description");
            
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            log.error("Error generating resume", e);
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Failed to generate resume";
            
            // Provide helpful error messages
            if (errorMessage.contains("Cannot connect to Ollama") || errorMessage.contains("Connection refused")) {
                errorMessage = "Ollama service is not running. Please start Ollama with: ollama serve";
            } else if (errorMessage.contains("model not available") || errorMessage.contains("model")) {
                errorMessage = "Ollama model not found. Please install it with: ollama pull deepseek-r1:1.5b";
            }
            
            return ResponseEntity.status(500)
                .body(Map.of(
                    "error", errorMessage,
                    "details", e.getClass().getSimpleName(),
                    "hint", "Check backend console logs for more details"
                ));
        } catch (Exception e) {
            log.error("Unexpected error generating resume", e);
            String errorMessage = e.getMessage() != null ? e.getMessage() : "Failed to generate resume";
            return ResponseEntity.status(500)
                .body(Map.of(
                    "error", errorMessage,
                    "details", e.getClass().getSimpleName(),
                    "hint", "Check backend console logs for more details"
                ));
        }
    }
}

