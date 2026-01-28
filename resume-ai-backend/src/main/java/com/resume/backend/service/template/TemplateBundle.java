package com.resume.backend.service.template;

import org.springframework.stereotype.Component;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class TemplateBundle {

    private final Map<String, String> cache = new ConcurrentHashMap<>();

    public boolean has(String key) {
        if (key == null) return false;   // ✅ FIX
        return cache.containsKey(key);
    }

    public String get(String key) {
        if (key == null) return null;    // ✅ FIX
        return cache.get(key);
    }

    public void put(String key, String html) {
        if (key == null) return;         // ✅ FIX
        cache.put(key, html);
    }
}
