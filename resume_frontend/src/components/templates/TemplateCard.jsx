import React from "react";

export default function TemplateCard({ id, title, description, selected, onSelect }) {
    return (
        <div
            className={`p-4 border rounded-xl cursor-pointer transition-all bg-gray-900
            ${selected ? "border-blue-500 shadow-2xl scale-[1.02]" : "border-gray-700"}`}
            onClick={() => onSelect(id)}
        >
            {/* Preview Container */}
            <div className="relative h-44 w-full bg-black rounded-md overflow-hidden">

                {/* Loader */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm animate-pulse">
                    Loading preview...
                </div>

                {/* Iframe Preview */}
                <iframe
                    src={`http://localhost:8080/api/v1/templates/preview/${id}`}
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{
                        width: "600px",
                        height: "900px",
                        transform: "scale(0.22)",
                        transformOrigin: "top left",
                        border: "none",
                    }}
                />
            </div>

            {/* Title */}
            <div className="mt-3 text-white font-semibold">{title}</div>
            <div className="text-sm text-gray-400">{description}</div>

            {/* Select Button */}
            <button
                type="button"
                className="mt-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(id);
                }}
            >
                Select
            </button>
        </div>
    );
}
