package com.resume.backend.controller;

import com.resume.backend.controller.dto.ResumeRequest;
import com.resume.backend.service.resume.ResumeDataConverter;
import com.resume.backend.service.resume.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/resume")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @Autowired
    private ResumeDataConverter resumeDataConverter;

    @GetMapping("/health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(Map.of(
                "status", "ok",
                "service", "resume-ai-backend"
        ));
    }

    // ============================
    //          PREVIEW
    // ============================
    @PostMapping("/preview")
    public ResponseEntity<String> preview(@RequestBody ResumeRequest request) {
        try {
            if (request.getTemplateId() == null)
                return ResponseEntity.badRequest().body("templateId is required");

            var data = request.getData();

            if (data == null && request.getDataMap() != null) {
                data = resumeDataConverter.convertFromMap(request.getDataMap());
            }
            
            if (data == null) {
                return ResponseEntity.badRequest().body("Resume data is required");
            }

            String html = resumeService.generatePreview(request.getTemplateId(), data);
            return ResponseEntity.ok()
                    .contentType(org.springframework.http.MediaType.TEXT_HTML)
                    .body(html);

        } catch (Exception e) {
            e.printStackTrace();   // 🔥 see actual error in console
            return ResponseEntity.status(500)
                    .body("Error: " + e.getMessage());
        }

    }

    // ============================
    //         PDF GENERATE
    // ============================
    @PostMapping("/generate")
    public ResponseEntity<byte[]> generate(@RequestBody ResumeRequest request) {
        try {
            if (request.getTemplateId() == null)
                return ResponseEntity.status(400).build();

            var data = request.getData();

            if (data == null && request.getDataMap() != null) {
                data = resumeDataConverter.convertFromMap(request.getDataMap());
            }
            
            if (data == null) {
                return ResponseEntity.status(400).body("Resume data is required".getBytes());
            }

            byte[] pdfBytes = resumeService.generatePDF(request.getTemplateId(), data);

            // -------- FILENAME LOGIC --------
            String fullName = "";
            if (data.getPersonalInformation() != null) {
                fullName = data.getPersonalInformation().getFullName();
            }

            String fileName = fullName.isBlank()
                    ? "resume.pdf"
                    : fullName.replaceAll("\\s+", "_") + "_resume.pdf";

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=" + fileName)
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfBytes);

        } catch (Exception e) {
            e.printStackTrace();   // 🔥 see actual error in console
            String errorMessage = "PDF generation failed: " + e.getMessage();
            if (e.getCause() != null) {
                errorMessage += " - " + e.getCause().getMessage();
            }
            return ResponseEntity.status(500)
                    .body(errorMessage.getBytes());
        }

    }
}
