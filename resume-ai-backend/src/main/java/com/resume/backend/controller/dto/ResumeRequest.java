package com.resume.backend.controller.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.resume.backend.service.resume.dto.ResumeData;
import lombok.Data;

import java.util.Map;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResumeRequest {
    private String templateId;
    private ResumeData data;
    private Map<String, Object> dataMap; // For flexible data structure from frontend
}
