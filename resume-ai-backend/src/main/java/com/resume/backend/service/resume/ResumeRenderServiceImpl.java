package com.resume.backend.service.resume;

import com.resume.backend.service.resume.dto.ResumeData;
import org.springframework.stereotype.Service;

@Service
public class ResumeRenderServiceImpl implements ResumeRenderService {

    @Override
    public String render(String templateHtml, ResumeData data) {

        if (templateHtml == null) return "";
        if (data == null) return templateHtml;

        /* ===============================
           PERSONAL INFORMATION
        =============================== */
        if (data.getPersonalInformation() != null) {
            templateHtml = templateHtml.replace("{{fullName}}", safe(data.getPersonalInformation().getFullName()));
            templateHtml = templateHtml.replace("{{email}}", safe(data.getPersonalInformation().getEmail()));
            templateHtml = templateHtml.replace("{{phoneNumber}}", safe(data.getPersonalInformation().getPhoneNumber()));
            templateHtml = templateHtml.replace("{{location}}", safe(data.getPersonalInformation().getLocation()));

            templateHtml = templateHtml.replace("{{linkedIn}}", safe(data.getPersonalInformation().getLinkedIn()));
            templateHtml = templateHtml.replace("{{gitHub}}", safe(data.getPersonalInformation().getGitHub()));
            templateHtml = templateHtml.replace("{{portfolio}}", safe(data.getPersonalInformation().getPortfolio()));
        }

        templateHtml = templateHtml.replace("{{summary}}", safe(data.getSummary()));

        /* ===============================
           SKILLS
        =============================== */
        StringBuilder skillsHtml = new StringBuilder();
        if (data.getSkills() != null) {
            data.getSkills().forEach(skill -> {
                if (!safe(skill).isEmpty()) {
                    skillsHtml.append("<li>").append(skill).append("</li>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#skills}}",
                skillsHtml.length() > 0 ? skillsHtml.toString() : "");

        /* ===============================
           EXPERIENCE
        =============================== */
        StringBuilder expHtml = new StringBuilder();
        if (data.getExperience() != null) {
            data.getExperience().forEach(e -> {
                if (e != null && (!safe(e.getPosition()).isEmpty() || !safe(e.getCompany()).isEmpty())) {
                    expHtml.append("<div class='experience-item'>")
                            .append("<strong>").append(safe(e.getPosition())).append("</strong>")
                            .append(" | ").append(safe(e.getCompany()))
                            .append("<br>")
                            .append(safe(e.getStartDate())).append(" - ").append(safe(e.getEndDate()))
                            .append("<p>").append(safe(e.getDescription())).append("</p>")
                            .append("</div>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#experience}}",
                expHtml.length() > 0 ? expHtml.toString() : "");

        /* ===============================
           EDUCATION
        =============================== */
        StringBuilder eduHtml = new StringBuilder();
        if (data.getEducation() != null) {
            data.getEducation().forEach(e -> {
                if (e != null && (!safe(e.getDegree()).isEmpty() || !safe(e.getInstitution()).isEmpty())) {
                    eduHtml.append("<div class='education-item'>")
                            .append("<strong>").append(safe(e.getDegree())).append("</strong>")
                            .append(" | ").append(safe(e.getInstitution()))
                            .append(" (").append(safe(e.getYear())).append(")")
                            .append("</div>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#education}}",
                eduHtml.length() > 0 ? eduHtml.toString() : "");

        /* ===============================
           PROJECTS
        =============================== */
        StringBuilder projectHtml = new StringBuilder();
        if (data.getProjects() != null) {
            data.getProjects().forEach(p -> {
                if (p != null && !safe(p.getTitle()).isEmpty()) {
                    projectHtml.append("<div class='project-item'>")
                            .append("<strong>").append(safe(p.getTitle())).append("</strong>")
                            .append("<p>").append(safe(p.getDescription())).append("</p>")
                            .append("<em>").append(safe(p.getTechStack())).append("</em>")
                            .append("</div>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#projects}}",
                projectHtml.length() > 0 ? projectHtml.toString() : "");

        /* ===============================
           CERTIFICATIONS
        =============================== */
        StringBuilder certHtml = new StringBuilder();
        if (data.getCertifications() != null) {
            data.getCertifications().forEach(c -> {
                if (!safe(c).isEmpty()) {
                    certHtml.append("<li>").append(c).append("</li>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#certifications}}",
                certHtml.length() > 0 ? certHtml.toString() : "");

        /* ===============================
           LANGUAGES
        =============================== */
        StringBuilder langHtml = new StringBuilder();
        if (data.getLanguages() != null) {
            data.getLanguages().forEach(l -> {
                if (!safe(l).isEmpty()) {
                    langHtml.append("<li>").append(l).append("</li>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#languages}}",
                langHtml.length() > 0 ? langHtml.toString() : "");

        /* ===============================
           INTERESTS
        =============================== */
        StringBuilder interestHtml = new StringBuilder();
        if (data.getInterests() != null) {
            data.getInterests().forEach(i -> {
                if (!safe(i).isEmpty()) {
                    interestHtml.append("<li>").append(i).append("</li>");
                }
            });
        }
        templateHtml = templateHtml.replace("{{#interests}}",
                interestHtml.length() > 0 ? interestHtml.toString() : "");

        /* ===============================
           FINAL CLEANUP (CRITICAL)
        =============================== */
        templateHtml = templateHtml
                .replace("{{/skills}}", "")
                .replace("{{/experience}}", "")
                .replace("{{/education}}", "")
                .replace("{{/projects}}", "")
                .replace("{{/certifications}}", "")
                .replace("{{/languages}}", "")
                .replace("{{/interests}}", "");

        return templateHtml;
    }

    private String safe(String s) {
        return s == null ? "" : s;
    }
}
