package com.resume.backend.service.resume.dto;

import lombok.Data;
import java.util.List;

@Data
public class ResumeData {

    private PersonalInformation personalInformation;
    private String summary;
    private List<String> skills;
    private List<ExperienceItem> experience;
    private List<EducationItem> education;
    private List<String> certifications;
    private List<ProjectItem> projects;
    private List<String> languages;
    private List<String> interests;

}
