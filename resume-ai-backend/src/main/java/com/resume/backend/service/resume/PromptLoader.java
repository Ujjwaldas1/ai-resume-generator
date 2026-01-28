package com.resume.backend.service.resume;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;

@Component
public class PromptLoader {

    public String loadResumePrompt() {
        try {
            ClassPathResource resource = new ClassPathResource("resume_prompt.txt");
            byte[] bytes = resource.getInputStream().readAllBytes();
            return new String(bytes, StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new RuntimeException("Failed to load resume_prompt.txt", e);
        }
    }
}