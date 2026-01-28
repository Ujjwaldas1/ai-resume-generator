export default function TemplatePreviewFrame({ html }) {
    return (
        <div
            id="resume-container"
            className="w-full bg-white shadow-lg border border-gray-700 rounded-lg p-4"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
