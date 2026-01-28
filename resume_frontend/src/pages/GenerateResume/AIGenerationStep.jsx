import React, { useRef } from "react";
import { FaBrain, FaPaperPlane, FaSync, FaTrash, FaMagic } from "react-icons/fa";
import StepIndicator from "../../components/common/StepIndicator";

const AIGenerationStep = React.memo(({
    description,
    setDescription,
    loading,
    handleGenerate,
    samplePrompts,
    currentStep,
    setCurrentStep
}) => {
    const textareaRef = useRef(null);

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4">
            <div className="max-w-4xl w-full">
                <StepIndicator currentStep={currentStep} />
                <div className="bg-black rounded-2xl border border-gray-800 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                            <FaBrain className="text-2xl text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            AI Resume Generator
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Describe your professional experience and let our AI create a perfect resume in seconds
                        </p>
                    </div>

                    {/* Textarea */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-lg font-semibold text-white mb-4">
                                Tell us about your professional background
                            </label>

                            <textarea
                                ref={textareaRef}
                                disabled={loading}
                                className="w-full h-64 px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 transition-colors text-lg"
                                placeholder="Example: I'm a senior software engineer..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">
                                    Be specific about your roles, achievements, skills, and education
                                </p>
                                <span className={`text-sm ${description.length > 50 ? 'text-green-500' : 'text-gray-500'}`}>
                                    {description.length}/3000
                                </span>
                            </div>
                        </div>

                        {/* Sample Prompts */}
                        <div className="bg-gray-900 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <FaMagic className="text-blue-500" />
                                Need inspiration? Try these examples:
                            </h3>

                            <div className="grid gap-3">
                                {samplePrompts.map((prompt, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setDescription(prompt)}
                                        className="text-left p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <button
                                onClick={handleGenerate}
                                disabled={loading || !description.trim()}
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg"
                            >
                                {loading ? (
                                    <>
                                        <FaSync className="animate-spin" />
                                        Generating Resume...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Generate Professional Resume
                                    </>
                                )}
                            </button>

                            {description && (
                                <button
                                    onClick={() => setDescription("")}
                                    disabled={loading}
                                    className="px-6 py-4 bg-gray-800 text-gray-300 font-semibold rounded-xl hover:bg-gray-700 transition-all flex items-center gap-2"
                                >
                                    <FaTrash />
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AIGenerationStep;
