package com.resume.backend.service.resume.dto;

import lombok.Data;

@Data
public class PersonalInformation {
    private String fullName;
    private String email;
    private String phoneNumber;
    private String location;
    private String linkedIn;
    private String gitHub;
    private String portfolio;
}
