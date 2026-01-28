import React, { useState, useEffect, useCallback, useRef } from "react";
import StepIndicator from "../../components/common/StepIndicator";
import { generateResume, generateResumePdf, downloadBlob } from "../../api/ResumeService";

import { useForm, useFieldArray } from "react-hook-form";
// import Resume from "../../components/ResumeTemplate";




import {
    FaTrash,
    FaPlusCircle,
    FaChevronDown,
    FaChevronUp,
    FaUser,
    FaBriefcase,
    FaGraduationCap,
    FaAward,
    FaCode,
    FaLanguage,
    FaHeart,
    FaArrowLeft,
    FaEye,
} from "react-icons/fa";





const FormEditStep = React.memo(({
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
    setCurrentStep,
    experienceFields,
    educationFields,
    certificationsFields,
    projectsFields,
    languagesFields,
    interestsFields,
    skillsFields,
    activeSection,
    setActiveSection,
    currentStep,
    selectedTemplate,
    setSelectedTemplate
}) => {
    const renderInput = (name, label, type = "text", required = false) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                {...register(name, { required: required ? `${label} is required` : false })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder={`Enter your ${label.toLowerCase()}`}
            />
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );

    const renderTextarea = (name, label, required = false, rows = 4) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                {...register(name, { required: required ? `${label} is required` : false })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                rows={rows}
                placeholder={`Describe your ${label.toLowerCase()}`}
            />
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );

    const renderSection = (fields, label, icon, fieldsConfig, defaultValues = {}) => {
        const fieldArray = {
            skills: skillsFields,
            experience: experienceFields,
            education: educationFields,
            certifications: certificationsFields,
            projects: projectsFields,
            languages: languagesFields,
            interests: interestsFields
        }[fields];
        return (
            <div className="bg-gray-900 rounded-xl border border-gray-800">
                <button
                    type="button"
                    onClick={() => setActiveSection(activeSection === fields ? null : fields)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors rounded-xl"
                >
                    <div className="flex items-center gap-3">
                        {icon}
                        <h3 className="text-xl font-semibold text-white">{label}</h3>
                        <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full">
                            {fieldArray.fields.length}
                        </span>
                    </div>
                    {activeSection === fields ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeSection === fields && (
                    <div className="px-6 pb-6 space-y-4">
                        {fieldArray.fields.map((field, index) => (
                            <div key={field.id} className="bg-black p-6 rounded-lg border border-gray-800 space-y-4">
                                {fieldsConfig.map((fieldName) => (
                                    <div key={fieldName}>
                                        {fieldName === "responsibility" || fieldName === "description" ? (
                                            renderTextarea(
                                                `${fields}.${index}.${fieldName}`,
                                                fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
                                                false,
                                                3
                                            )
                                        ) : (
                                            renderInput(
                                                `${fields}.${index}.${fieldName}`,
                                                fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                                            )
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => fieldArray.remove(index)}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm"
                                >
                                    <FaTrash />
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => fieldArray.append(
                                fieldsConfig.reduce((acc, key) => ({ ...acc, [key]: defaultValues[key] || "" }), {})
                            )}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <FaPlusCircle />
                            Add {label.slice(0, -1)}
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <StepIndicator currentStep={currentStep} />
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Customize Your Resume</h1>
                        <p className="text-gray-400">Review and edit the AI-generated content to perfect your resume</p>
                    </div>
                    <button
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                        <FaArrowLeft />
                        Back to AI
                    </button>
                </div>



                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Personal Information */}
                    <div className="bg-black rounded-2xl border border-gray-800 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <FaUser className="text-blue-500" />
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderInput("personalInformation.fullName", "Full Name", "text", true)}
                            {renderInput("personalInformation.email", "Email", "email", true)}
                            {renderInput("personalInformation.phoneNumber", "Phone Number", "tel")}
                            {renderInput("personalInformation.location", "Location")}
                            {renderInput("personalInformation.linkedIn", "LinkedIn URL", "url")}
                            {renderInput("personalInformation.gitHub", "GitHub URL", "url")}
                            {renderInput("personalInformation.portfolio", "Portfolio URL", "url")}
                        </div>
                    </div>
                    {/* Professional Summary */}
                    <div className="bg-black rounded-2xl border border-gray-800 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Professional Summary</h2>
                        {renderTextarea("summary", "Professional Summary", true, 5)}
                    </div>
                    {/* Dynamic Sections */}
                    <div className="space-y-6">
                        {renderSection("skills", "Skills", <FaCode className="text-green-500" />, ["title", "level"])}
                        {renderSection("experience", "Work Experience", <FaBriefcase className="text-yellow-500" />,
                            ["jobTitle", "company", "location", "duration", "responsibility"])}
                        {renderSection("education", "Education", <FaGraduationCap className="text-purple-500" />,
                            ["degree", "university", "location", "graduationYear"])}
                        {renderSection("certifications", "Certifications", <FaAward className="text-red-500" />,
                            ["title", "issuingOrganization", "year"])}
                        {renderSection("projects", "Projects", <FaCode className="text-blue-500" />,
                            ["title", "description", "technologiesUsed", "githubLink"])}
                        {renderSection("languages", "Languages", <FaLanguage className="text-indigo-500" />, ["name"])}
                        {renderSection("interests", "Interests", <FaHeart className="text-pink-500" />, ["name"])}
                    </div>
                    <div className="flex gap-4 justify-center pt-8">
                        <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all"
                        >
                            Back to AI Generation
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2"
                        >
                            <FaEye />
                            Preview Resume
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});



export default FormEditStep;
