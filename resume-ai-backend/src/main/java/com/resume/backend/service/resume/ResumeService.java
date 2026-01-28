package com.resume.backend.service.resume;

import com.resume.backend.service.resume.dto.ResumeData;

public interface ResumeService {

    String generatePreview(String templateId, ResumeData data);

    byte[] generatePDF(String templateId, ResumeData data);
}
