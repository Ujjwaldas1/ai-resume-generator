package com.resume.backend.controller;

import com.resume.backend.service.template.TemplateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/templates")
public class TemplatePreviewController {

    @Autowired
    private TemplateService templateService;

    @GetMapping("/preview/{templateId}")
    public ResponseEntity<String> getTemplatePreview(@PathVariable String templateId) {
        try {
            // Load raw template HTML
            String html = templateService.loadTemplate(templateId);

            // Return as raw HTML so iframe can load it
            return ResponseEntity.ok()
                    .contentType(MediaType.TEXT_HTML)
                    .body(html);

        } catch (Exception e) {
            return ResponseEntity.status(404).body("<h3>Template Not Found</h3>");
        }
    }
}

