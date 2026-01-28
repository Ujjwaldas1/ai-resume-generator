package com.resume.backend.service.template;

import com.resume.backend.model.Template;
import java.util.List;

public interface TemplateService {

    // Loads raw HTML template file
    String loadTemplate(String templateId);

    // List templates for UI
    List<Template> getAvailableTemplates();
}
