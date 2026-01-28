export default function ATSResumePreview({ resume }) {
    if (!resume) return null;

    const p = resume.personalInformation;

    return (
        <div className="bg-white text-black p-10 max-w-[800px] mx-auto font-serif">

            {/* Header */}
            <div className="text-center">
                <h1 className="text-2xl font-bold">{p.fullName}</h1>
                <p className="text-sm mt-1">
                    {p.email} | {p.phoneNumber} | {p.location}
                </p>
                <p className="text-sm">
                    {p.linkedIn} {p.gitHub && `| ${p.gitHub}`}
                </p>
            </div>

            <hr className="my-4" />

            {/* Summary */}
            <section>
                <h2 className="font-bold text-sm uppercase">Summary</h2>
                <p className="mt-1 text-sm">{resume.summary}</p>
            </section>

            <hr className="my-4" />

            {/* Skills */}
            <section>
                <h2 className="font-bold text-sm uppercase">Skills</h2>
                <ul className="list-disc ml-5 text-sm">
                    {resume.skills?.map((s, i) => (
                        <li key={i}>{s.title}</li>
                    ))}
                </ul>
            </section>

            {/* Experience, Projects, Education – we’ll add next */}
        </div>
    );
}
