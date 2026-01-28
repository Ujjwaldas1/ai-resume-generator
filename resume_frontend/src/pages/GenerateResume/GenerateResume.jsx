import React, { useState, useCallback } from "react";
import toast from "react-hot-toast";

import AIGenerationStep from "./AIGenerationStep";
import FormEditStep from "./FormEditStep";
import PreviewStep from "./PreviewStep";

import StepIndicator from "../../components/common/StepIndicator";
import { generateResume } from "../../api/ResumeService";
import { useForm, useFieldArray } from "react-hook-form";

const GenerateResume = () => {

    const [data, setData] = useState({
        personalInformation: {
            fullName: "",
            email: "",
            phoneNumber: "",
            location: "",
            linkedIn: "",
            gitHub: "",
            portfolio: "",
        },
        summary: "",
        skills: [],
        experience: [],
        education: [],
        certifications: [],
        projects: [],
        languages: [],
        interests: [],
    });

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({ defaultValues: data });

    const [currentStep, setCurrentStep] = useState(1);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState("classic-1"); // Default template

    const experienceFields = useFieldArray({ control, name: "experience" });
    const educationFields = useFieldArray({ control, name: "education" });
    const certificationsFields = useFieldArray({ control, name: "certifications" });
    const projectsFields = useFieldArray({ control, name: "projects" });
    const languagesFields = useFieldArray({ control, name: "languages" });
    const interestsFields = useFieldArray({ control, name: "interests" });
    const skillsFields = useFieldArray({ control, name: "skills" });

    const samplePrompts = [
        "Software engineer with 5 years of experience in React and Node.js.",
        "Marketing manager with 8 years of digital marketing experience.",
        "CS graduate with internship experience in app development.",
        "Project manager with PMP certification."
    ];

    const handleGenerate = useCallback(async () => {
        if (!description.trim()) {
            toast.error("Please describe your background.");
            return;
        }

        try {
            setLoading(true);
            toast.loading("Generating resume...", { id: "ai-generation" });

            const responseData = await generateResume(description);
            const resumeData = responseData?.data || responseData;

            const processedData = {
                personalInformation: resumeData.personalInformation || {},
                summary: resumeData.summary || "",
                skills: resumeData.skills || [],
                experience: resumeData.experience || [],
                education: resumeData.education || [],
                certifications: resumeData.certifications || [],
                projects: resumeData.projects || [],
                languages: resumeData.languages || [],
                interests: resumeData.interests || [],
            };

            reset(processedData);
            setData(processedData);
            setCurrentStep(2);

            toast.success("Resume generated!", { id: "ai-generation" });
        } catch (e) {
            toast.error("AI failed to generate resume.");
        } finally {
            setLoading(false);
        }
    }, [description, reset]);

    const onSubmit = (formData) => {
        setData(formData);
        setCurrentStep(3);
    };

    const downloadPDF = useCallback(async () => {
        setIsDownloading(true);
        const toastId = toast.loading("Preparing PDF...");

        try {
            const response = await fetch("http://localhost:8080/api/v1/resume/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    templateId: selectedTemplate,
                    dataMap: data,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "PDF generation failed");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = `${data.personalInformation?.fullName || "resume"}_resume.pdf`;
            a.click();

            window.URL.revokeObjectURL(url);
            toast.success("PDF ready!", { id: toastId });
        } catch (error) {
            console.error("PDF Error:", error);
            toast.error(error.message || "PDF generation failed", { id: toastId });
        } finally {
            setIsDownloading(false);
        }
    }, [data, selectedTemplate]);

    return (
        <div className="bg-black min-h-screen">
            {currentStep === 1 && (
                <AIGenerationStep
                    description={description}
                    setDescription={setDescription}
                    loading={loading}
                    handleGenerate={handleGenerate}
                    samplePrompts={samplePrompts}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {currentStep === 2 && (
                <FormEditStep
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    control={control}
                    onSubmit={onSubmit}
                    setCurrentStep={setCurrentStep}
                    experienceFields={experienceFields}
                    educationFields={educationFields}
                    certificationsFields={certificationsFields}
                    projectsFields={projectsFields}
                    languagesFields={languagesFields}
                    interestsFields={interestsFields}
                    skillsFields={skillsFields}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    currentStep={currentStep}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
            )}

            {currentStep === 3 && (
                <PreviewStep
                    data={data}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    downloadPDF={downloadPDF}
                    isDownloading={isDownloading}
                    setCurrentStep={setCurrentStep}
                    currentStep={currentStep}
                />
            )}
        </div>
    );
};

export default GenerateResume;
