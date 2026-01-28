package com.resume.backend.service.resume;

import com.resume.backend.service.template.TemplateService;
import com.resume.backend.service.resume.dto.ResumeData;
import com.resume.backend.service.pdf.PdfGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResumeServiceImpl implements ResumeService {

    @Autowired
    private TemplateService templateService;

    @Autowired
    private ResumeRenderService renderService;

    @Autowired
    private PdfGeneratorService pdfGeneratorService; // will connect in Step 4

    @Override
    public String generatePreview(String templateId, ResumeData data) {

        // 1. Load template
        String templateHtml = templateService.loadTemplate(templateId);

        // 2. Render HTML with user data
        String renderedHtml = renderService.render(templateHtml, data);

        return renderedHtml;
    }

    @Override
    public byte[] generatePDF(String templateId, ResumeData data) {

        // 1. Load template
        String templateHtml = templateService.loadTemplate(templateId);

        // 2. Render HTML
        String renderedHtml = renderService.render(templateHtml, data);

        // 3. Generate PDF
        return pdfGeneratorService.generatePDF(renderedHtml);
    }
}
