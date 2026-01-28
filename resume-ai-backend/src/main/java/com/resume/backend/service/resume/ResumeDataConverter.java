package com.resume.backend.service.resume;

import com.resume.backend.service.resume.dto.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Component
public class ResumeDataConverter {

    @SuppressWarnings("unchecked")
    public ResumeData convertFromMap(Map<String, Object> dataMap) {

        ResumeData resumeData = new ResumeData();

        if (dataMap == null) return resumeData;

        try {

            // ---------------- PERSONAL INFORMATION ----------------
            if (dataMap.containsKey("personalInformation")) {
                Map<String, Object> personalInfo = (Map<String, Object>) dataMap.get("personalInformation");
                PersonalInformation pi = new PersonalInformation();

                pi.setFullName(getString(personalInfo, "fullName"));
                pi.setEmail(getString(personalInfo, "email"));
                pi.setPhoneNumber(getString(personalInfo, "phoneNumber"));
                pi.setLocation(getString(personalInfo, "location"));
                pi.setLinkedIn(getString(personalInfo, "linkedIn"));
                pi.setGitHub(getString(personalInfo, "gitHub"));
                pi.setPortfolio(getString(personalInfo, "portfolio"));

                resumeData.setPersonalInformation(pi);
            }

            // ---------------- SUMMARY ----------------
            resumeData.setSummary(getString(dataMap, "summary"));

            // ---------------- SKILLS ----------------
            resumeData.setSkills(extractStringList(dataMap.get("skills")));

            // ---------------- EXPERIENCE ---------------- 
            if (dataMap.containsKey("experience")) {
                List<Map<String, Object>> raw = (List<Map<String, Object>>) dataMap.get("experience");
                List<ExperienceItem> list = new ArrayList<>();

                for (Map<String, Object> e : raw) {
                    ExperienceItem ex = new ExperienceItem();
                    ex.setCompany(getString(e, "company"));
                    // Handle both "position" and "jobTitle" field names
                    String position = getString(e, "position");
                    if (position.isEmpty()) {
                        position = getString(e, "jobTitle");
                    }
                    ex.setPosition(position);
                    // Handle date fields - support both "startDate"/"endDate" and "duration"
                    String startDate = getString(e, "startDate");
                    String endDate = getString(e, "endDate");
                    if (startDate.isEmpty() && endDate.isEmpty()) {
                        String duration = getString(e, "duration");
                        if (!duration.isEmpty()) {
                            // Try to parse duration or use as is
                            startDate = duration;
                        }
                    }
                    ex.setStartDate(startDate);
                    ex.setEndDate(endDate);
                    // Handle both "description" and "responsibility" field names
                    String description = getString(e, "description");
                    if (description.isEmpty()) {
                        description = getString(e, "responsibility");
                    }
                    ex.setDescription(description);
                    list.add(ex);
                }
                resumeData.setExperience(list);
            }

            // ---------------- EDUCATION ---------------- 
            if (dataMap.containsKey("education")) {
                List<Map<String, Object>> raw = (List<Map<String, Object>>) dataMap.get("education");
                List<EducationItem> list = new ArrayList<>();

                for (Map<String, Object> e : raw) {
                    EducationItem ed = new EducationItem();
                    ed.setDegree(getString(e, "degree"));
                    // Handle both "institution" and "university" field names
                    String institution = getString(e, "institution");
                    if (institution.isEmpty()) {
                        institution = getString(e, "university");
                    }
                    ed.setInstitution(institution);
                    // Handle both "year" and "graduationYear" field names
                    String year = getString(e, "year");
                    if (year.isEmpty()) {
                        year = getString(e, "graduationYear");
                    }
                    ed.setYear(year);
                    list.add(ed);
                }
                resumeData.setEducation(list);
            }

            // ---------------- CERTIFICATIONS ----------------
            resumeData.setCertifications(extractStringList(dataMap.get("certifications")));

            // ---------------- LANGUAGES ----------------
            resumeData.setLanguages(extractStringList(dataMap.get("languages")));

            // ---------------- INTERESTS ----------------
            resumeData.setInterests(extractStringList(dataMap.get("interests")));

            // ---------------- PROJECTS ---------------- 
            if (dataMap.containsKey("projects")) {
                List<Map<String, Object>> raw = (List<Map<String, Object>>) dataMap.get("projects");
                List<ProjectItem> list = new ArrayList<>();

                for (Map<String, Object> p : raw) {
                    ProjectItem proj = new ProjectItem();
                    proj.setTitle(getString(p, "title"));
                    proj.setDescription(getString(p, "description"));
                    // Handle both "techStack" and "technologiesUsed" field names
                    Object techStackObj = p.get("techStack");
                    if (techStackObj == null) {
                        techStackObj = p.get("technologiesUsed");
                    }
                    proj.setTechStack(String.join(", ", extractStringList(techStackObj)));
                    // Handle both "link" and "githubLink" field names
                    String link = getString(p, "link");
                    if (link.isEmpty()) {
                        link = getString(p, "githubLink");
                    }
                    proj.setLink(link);
                    list.add(proj);
                }

                resumeData.setProjects(list);
            }

        } catch (Exception e) {
            log.error("Error converting frontend map to ResumeData", e);
        }

        return resumeData;
    }


    // ---------------- SAFE HELPERS ----------------

    private String getString(Map<String, Object> map, String key) {
        if (map == null) return "";
        Object v = map.get(key);
        return v == null ? "" : v.toString();
    }

    private List<String> extractStringList(Object obj) {
        List<String> result = new ArrayList<>();

        if (obj == null) return result;

        if (obj instanceof List<?> list) {

            for (Object item : list) {

                if (item instanceof String s) {
                    result.add(s);
                    continue;
                }

                if (item instanceof Map<?, ?> m) {
                    Object extracted =
                            m.get("title") != null ? m.get("title") :
                                    m.get("value") != null ? m.get("value") :
                                            m.get("name")  != null ? m.get("name")  : "";

                    result.add(extracted.toString());
                }
            }
        }

        return result;
    }

}
