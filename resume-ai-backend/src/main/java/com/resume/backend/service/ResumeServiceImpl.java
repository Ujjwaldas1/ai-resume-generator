package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private ChatClient chatClient;
    private boolean modelLoaded = false;
    private final Object modelLock = new Object();

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
        // Preload the model in background
        preloadModel();
    }

    private void preloadModel() {
        Thread preloadThread = new Thread(() -> {
            try {
                // Send a simple test prompt to warm up the model
                String testPrompt = "Hello, this is a test.";
                Prompt prompt = new Prompt(testPrompt);
                chatClient.prompt(prompt).call().content();
                synchronized (modelLock) {
                    modelLoaded = true;
                }
                System.out.println("AI model preloaded successfully");
            } catch (Exception e) {
                System.err.println("Model preloading failed: " + e.getMessage());
            }
        });
        preloadThread.setDaemon(true);
        preloadThread.start();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {

        String promptString = this.loadPromptFromFile("resume_prompt.txt");
        String promptContent = this.putValuesTemplate(promptString, Map.of(
                "userDescription", userResumeDescription
        ));

        try {
            Prompt prompt = new Prompt(promptContent);
            System.out.println("Sending prompt to AI model...");
            String response = chatClient.prompt(prompt).call().content();
            System.out.println("AI response received, length: " + response.length());
            System.out.println("AI response content: " + response.substring(0, Math.min(200, response.length())));
            
            Map<String, Object> stringObjectMap = parseMultipleResponses(response);
            
            // Check if the response is valid
            if (stringObjectMap.get("data") == null) {
                System.err.println("AI response parsing failed, using fallback");
                return generateFallbackResume(userResumeDescription);
            }
            
            return stringObjectMap;
        } catch (Exception e) {
            // Fallback to template-based generation if AI fails
            System.err.println("AI model failed, using fallback: " + e.getMessage());
            e.printStackTrace();
            return generateFallbackResume(userResumeDescription);
        }
    }

    private Map<String, Object> generateFallbackResume(String userDescription) {
        Map<String, Object> fallbackData = new HashMap<>();
        
        // Create a basic resume structure based on the description
        Map<String, Object> data = new HashMap<>();
        
        // Extract name from description if possible
        String fullName = "";
        if (userDescription.toLowerCase().contains("i'm") || userDescription.toLowerCase().contains("i am")) {
            String[] words = userDescription.split("\\s+");
            for (int i = 0; i < words.length - 1; i++) {
                if (words[i].toLowerCase().equals("i'm") || words[i].toLowerCase().equals("i") && words[i+1].toLowerCase().equals("am")) {
                    if (i + 2 < words.length) {
                        fullName = words[i + 2] + " " + words[i + 3];
                        break;
                    }
                }
            }
        }
        
        // Personal Information - only fill what's mentioned
        Map<String, Object> personalInfo = new HashMap<>();
        personalInfo.put("fullName", fullName);
        personalInfo.put("email", "");
        personalInfo.put("phoneNumber", "");
        personalInfo.put("location", "");
        personalInfo.put("linkedIn", "");
        personalInfo.put("gitHub", "");
        personalInfo.put("portfolio", "");
        data.put("personalInformation", personalInfo);
        
        // Summary - use the user's description
        data.put("summary", userDescription);
        
        // Skills - only extract what's explicitly mentioned
        List<Map<String, Object>> skills = new ArrayList<>();
        if (userDescription.toLowerCase().contains("coding") || userDescription.toLowerCase().contains("programming")) {
            Map<String, Object> skill1 = new HashMap<>();
            skill1.put("title", "Programming");
            skill1.put("level", "");
            skills.add(skill1);
        }
        if (userDescription.toLowerCase().contains("algorithm")) {
            Map<String, Object> skill2 = new HashMap<>();
            skill2.put("title", "Algorithms");
            skill2.put("level", "");
            skills.add(skill2);
        }
        if (userDescription.toLowerCase().contains("software")) {
            Map<String, Object> skill3 = new HashMap<>();
            skill3.put("title", "Software Development");
            skill3.put("level", "");
            skills.add(skill3);
        }
        if (userDescription.toLowerCase().contains("problem")) {
            Map<String, Object> skill4 = new HashMap<>();
            skill4.put("title", "Problem Solving");
            skill4.put("level", "");
            skills.add(skill4);
        }
        data.put("skills", skills);
        
        // Experience - leave empty for manual input
        data.put("experience", new ArrayList<>());
        
        // Education - leave empty for manual input
        data.put("education", new ArrayList<>());
        
        // Projects - leave empty for manual input
        data.put("projects", new ArrayList<>());
        
        // Certifications - leave empty for manual input
        data.put("certifications", new ArrayList<>());
        
        // Languages - leave empty for manual input
        data.put("languages", new ArrayList<>());
        
        // Interests - only extract what's explicitly mentioned
        List<Map<String, Object>> interests = new ArrayList<>();
        if (userDescription.toLowerCase().contains("coding") || userDescription.toLowerCase().contains("programming")) {
            Map<String, Object> interest1 = new HashMap<>();
            interest1.put("name", "Programming");
            interests.add(interest1);
        }
        if (userDescription.toLowerCase().contains("problem")) {
            Map<String, Object> interest2 = new HashMap<>();
            interest2.put("name", "Problem Solving");
            interests.add(interest2);
        }
        if (userDescription.toLowerCase().contains("algorithm")) {
            Map<String, Object> interest3 = new HashMap<>();
            interest3.put("name", "Algorithms");
            interests.add(interest3);
        }
        data.put("interests", interests);
        
        fallbackData.put("data", data);
        fallbackData.put("think", "Fallback generation used - only populated fields mentioned in user description");
        
        System.out.println("Fallback data generated successfully");
        return fallbackData;
    }

    String loadPromptFromFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        try (var inputStream = resource.getInputStream()) {
            return new String(inputStream.readAllBytes());
        }
    }


    String putValuesTemplate(String template, Map<String ,String > values){
        for(Map.Entry<String ,String> entry : values.entrySet()){
            template = template.replace("{{"+ entry.getKey() +"}}",entry.getValue() );
        }
        return  template;
    }
    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        // Extract content inside <think> tags
        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        if (thinkStart != -1 && thinkEnd != -1) {
            String thinkContent = response.substring(thinkStart, thinkEnd).trim();
            jsonResponse.put("think", thinkContent);
        } else {
            jsonResponse.put("think", null); // Handle missing <think> tags
        }

        // Extract content that is in JSON format
        int jsonStart = response.indexOf("```json") + 7; // Start after ```json
        int jsonEnd = response.lastIndexOf("```");       // End before ```
        if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                // Convert JSON string to Map using Jackson ObjectMapper
                ObjectMapper objectMapper = new ObjectMapper();
                @SuppressWarnings("unchecked")
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null); // Handle invalid JSON
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", null); // Handle missing JSON
        }

        return jsonResponse;
    }
}
