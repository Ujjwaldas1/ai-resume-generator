import React from "react";
import TemplateCard from "./TemplateCard";


export default function TemplateSelector({ selectedTemplate, onSelect }) {
    const templates = [
        { id: "classic-1", title: "Classic Template", description: "ATS Friendly" },
        { id: "modern-1", title: "Modern Template 1", description: "Professional layout" },
        { id: "modern-2", title: "Modern Template 2", description: "Clean minimal style" },
        { id: "simple-1", title: "Simple Template", description: "Minimal & Clear" },
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {templates.map((t) => (
                <TemplateCard
                    key={t.id}
                    {...t}
                    selected={selectedTemplate === t.id}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
}
