import React, { useEffect, useState } from "react";
import { FaFilePdf, FaEdit, FaSync, FaExpand, FaCompress, FaEye } from "react-icons/fa";
import StepIndicator from "../../components/common/StepIndicator";
import toast from "react-hot-toast";

const PreviewStep = React.memo(({
    data,
    selectedTemplate,
    setSelectedTemplate,
    downloadPDF,
    isDownloading,
    setCurrentStep,
    currentStep,
}) => {
    const [previewHtml, setPreviewHtml] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [zoom, setZoom] = useState(100);

    useEffect(() => {
        fetchPreview();
    }, [data, selectedTemplate]);

    const fetchPreview = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("http://localhost:8080/api/v1/resume/preview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    templateId: selectedTemplate,
                    dataMap: data,
                }),
            });

            const html = await res.text();
            setPreviewHtml(html);
        } catch {
            toast.error("Preview failed to load");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const iframe = document.getElementById("resumeFrame");
        if (!iframe) return;
        const doc = iframe.contentDocument;
        doc.open();
        doc.write(previewHtml);
        doc.close();
    }, [previewHtml]);

    const templates = [
        { id: "classic-1", name: "Classic", description: "Traditional & Professional", color: "blue" },
        { id: "modern-1", name: "Modern Pro", description: "Clean & Contemporary", color: "purple" },
        { id: "modern-2", name: "Modern Bold", description: "Creative & Eye-catching", color: "pink" },
        { id: "simple-1", name: "Minimalist", description: "Simple & Elegant", color: "green" },
    ];

    const colorMap = {
        blue: "border-blue-500 bg-blue-500/10 hover:bg-blue-500/20",
        purple: "border-purple-500 bg-purple-500/10 hover:bg-purple-500/20",
        pink: "border-pink-500 bg-pink-500/10 hover:bg-pink-500/20",
        green: "border-green-500 bg-green-500/10 hover:bg-green-500/20",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <FaEye className="text-blue-400" />
                        Resume Preview
                    </h1>
                    <p className="text-gray-400">Review your resume and select your preferred template</p>
                </div>

                <StepIndicator currentStep={currentStep} />

                {/* TEMPLATE SELECTOR */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl mb-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-1">Choose Your Template</h3>
                            <p className="text-gray-400 text-sm">Select a design that matches your style</p>
                        </div>
                        <div className="text-sm text-gray-500">
                            {templates.length} templates available
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {templates.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setSelectedTemplate(t.id)}
                                className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${selectedTemplate === t.id
                                        ? colorMap[t.color]
                                        : "border-gray-700 bg-gray-800/30 hover:bg-gray-800/50 hover:border-gray-600"
                                    }`}
                            >
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold text-white mb-1">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.description}</p>
                                </div>
                                {selectedTemplate === t.id && (
                                    <div className="absolute top-3 right-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Preview Panel */}
                    <div className={`flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${isFullscreen ? "fixed inset-4 z-50" : ""
                        }`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Live Preview
                            </h3>
                            <div className="flex items-center gap-3">
                                {/* Zoom Controls */}
                                <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-1.5">
                                    <button
                                        onClick={() => setZoom(Math.max(50, zoom - 10))}
                                        className="text-gray-400 hover:text-white text-sm font-semibold"
                                    >
                                        −
                                    </button>
                                    <span className="text-white text-sm font-medium w-12 text-center">
                                        {zoom}%
                                    </span>
                                    <button
                                        onClick={() => setZoom(Math.min(150, zoom + 10))}
                                        className="text-gray-400 hover:text-white text-sm font-semibold"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => setIsFullscreen(!isFullscreen)}
                                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white"
                                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                                >
                                    {isFullscreen ? <FaCompress size={16} /> : <FaExpand size={16} />}
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-xl relative"
                            style={{ height: isFullscreen ? "calc(100vh - 180px)" : "1100px" }}>
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                                    <div className="text-center">
                                        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <p className="text-gray-600 font-medium">Loading preview...</p>
                                    </div>
                                </div>
                            )}
                            <iframe
                                id="resumeFrame"
                                title="Resume Preview"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    transform: `scale(${zoom / 100})`,
                                    transformOrigin: "top left",
                                    minWidth: `${100 / (zoom / 100)}%`,
                                    minHeight: `${100 / (zoom / 100)}%`
                                }}
                            />
                        </div>
                    </div>

                    {/* Action Panel */}
                    <div className="lg:w-80 space-y-4">
                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>

                            <button
                                onClick={downloadPDF}
                                disabled={isDownloading}
                                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-green-500/20 mb-3 group"
                            >
                                <FaFilePdf className="text-xl group-hover:scale-110 transition-transform" />
                                {isDownloading ? "Downloading..." : "Download PDF"}
                            </button>

                            <button
                                onClick={() => setCurrentStep(2)}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 mb-3 group"
                            >
                                <FaEdit className="text-xl group-hover:scale-110 transition-transform" />
                                Edit Resume
                            </button>

                            <button
                                onClick={() => setCurrentStep(1)}
                                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 border border-gray-700 group"
                            >
                                <FaSync className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                                Start New Resume
                            </button>
                        </div>

                        {/* Tips Panel */}
                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-blue-400">💡</span>
                                Pro Tips
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">•</span>
                                    <span>Try different templates to see which suits your industry best</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">•</span>
                                    <span>Use zoom controls to inspect details closely</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-0.5">•</span>
                                    <span>Download PDF when you're satisfied with the result</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PreviewStep;