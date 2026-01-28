package com.resume.backend.service.resume.dto;

import lombok.Data;

@Data
public class ExperienceItem {
    private String position;
    private String company;
    private String startDate;
    private String endDate;
    private String description;
}
