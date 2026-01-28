package com.resume.backend.service.pdf;

public interface PdfGeneratorService {
    byte[] generatePDF(String htmlContent);
}
