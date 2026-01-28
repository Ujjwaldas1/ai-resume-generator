package com.resume.backend.service.template;

import com.resume.backend.model.Template;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@Service
public class TemplateServiceImpl implements TemplateService {

    private static final String TEMPLATE_PATH = "src/main/resources/templates/";

    @Autowired
    private TemplateBundle bundle;

    // -----------------------------
    // EXISTING CODE (UNCHANGED)
    // -----------------------------

    @Override
    public List<Template> getAvailableTemplates() {
        return List.of(
                new Template("classic-1", "Classic Template", "Professional ATS-friendly layout"),
                new Template("modern-1", "Modern Template 1", "Clean modern design"),
                new Template("modern-2", "Modern Template 2", "Minimal professional style"),
                new Template("simple-1", "Simple Template", "Straightforward and simple design")
        );
    }

    @Override
    public String loadTemplate(String templateId) {
        if (templateId == null || templateId.isBlank()) {
            throw new RuntimeException("templateId cannot be null");
        }

        try {
            Path path = Path.of(TEMPLATE_PATH + templateId + ".html");
            String html = Files.readString(path);

            bundle.put(templateId, html);
            return html;

        } catch (Exception e) {
            throw new RuntimeException("Failed to load template: " + templateId, e);
        }
    }
}
