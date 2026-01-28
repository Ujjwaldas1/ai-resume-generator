package com.resume.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Template {
    private String id;
    private String name;
    private String description;
}
