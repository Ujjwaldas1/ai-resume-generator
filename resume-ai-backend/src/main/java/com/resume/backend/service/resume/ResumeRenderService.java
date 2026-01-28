package com.resume.backend.service.resume;

import com.resume.backend.service.resume.dto.ResumeData;

public interface ResumeRenderService {
    String render(String templateHtml, ResumeData data);
}
