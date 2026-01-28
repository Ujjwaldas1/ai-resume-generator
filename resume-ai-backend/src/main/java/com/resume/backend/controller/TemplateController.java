package com.resume.backend.controller;

import com.resume.backend.model.Template;
import com.resume.backend.service.template.TemplateService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/templates")
@CrossOrigin("*")
public class TemplateController {

    private final TemplateService templateService;

    public TemplateController(TemplateService templateService) {
        this.templateService = templateService;
    }

    @GetMapping
    public ResponseEntity<List<Template>> getAllTemplates() {
        return ResponseEntity.ok(templateService.getAvailableTemplates());
    }

    @GetMapping("/{templateId}")
    public ResponseEntity<?> getTemplate(@PathVariable String templateId) {
        try {
            return ResponseEntity.ok(templateService.loadTemplate(templateId));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}

