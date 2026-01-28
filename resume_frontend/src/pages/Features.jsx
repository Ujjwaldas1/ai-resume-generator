import React from 'react'
import { Link } from 'react-router-dom'
import { 
    FaRobot, 
    FaShieldAlt, 
    FaFileAlt, 
    FaMagic, 
    FaDownload, 
    FaSearch,
    FaSync,
    FaUserTie,
    FaChartLine,
    FaMobileAlt,
    FaLock,
    FaStar
} from 'react-icons/fa'

function Features() {
    const mainFeatures = [
        {
            icon: FaRobot,
            title: "AI-Powered Content Generation",
            description: "Our advanced AI analyzes your experience and creates professional, achievement-focused content that resonates with hiring managers and recruiters.",
            highlights: [
                "Natural language processing",
                "Industry-specific terminology",
                "Achievement-oriented writing",
                "Professional tone optimization"
            ]
        },
        {
            icon: FaShieldAlt,
            title: "ATS Optimization",
            description: "Ensure your resume passes through Applicant Tracking Systems with built-in optimization for keywords, formatting, and structure.",
            highlights: [
                "Keyword optimization",
                "Formatting compliance",
                "Structure analysis",
                "Compatibility scoring"
            ]
        },
        {
            icon: FaFileAlt,
            title: "Professional Templates",
            description: "Choose from expertly designed templates crafted by career experts and optimized for various industries and experience levels.",
            highlights: [
                "15+ modern designs",
                "Industry-specific layouts",
                "Customizable sections",
                "Print-ready formatting"
            ]
        },
        {
            icon: FaMagic,
            title: "Smart Customization",
            description: "Real-time editing with intelligent suggestions helps you tailor your resume for specific roles and companies.",
            highlights: [
                "Real-time preview",
                "Smart suggestions",
                "Role-specific tailoring",
                "Instant formatting"
            ]
        },
        {
            icon: FaDownload,
            title: "One-Click Export",
            description: "Download your resume as a high-quality PDF, perfectly formatted for online applications and professional printing.",
            highlights: [
                "High-quality PDF export",
                "Multiple format options",
                "Print optimization",
                "Mobile-friendly versions"
            ]
        },
        {
            icon: FaSearch,
            title: "Job Match Analysis",
            description: "Get insights on how well your resume matches specific job descriptions with our intelligent analysis tool.",
            highlights: [
                "Job description parsing",
                "Skill gap analysis",
                "Keyword matching",
                "Improvement suggestions"
            ]
        }
    ];

    const featureCategories = [
        {
            title: "AI Technology",
            features: [
                "Advanced NLP algorithms",
                "Context-aware content generation",
                "Industry-specific optimization",
                "Real-time editing suggestions"
            ]
        },
        {
            title: "Design & Formatting",
            features: [
                "Professional template library",
                "Customizable layouts",
                "ATS-friendly formatting",
                "Mobile-responsive designs"
            ]
        },
        {
            title: "Career Tools",
            features: [
                "Job match analysis",
                "Skill gap identification",
                "Industry insights",
                "Career progression tracking"
            ]
        }
    ];

    const technicalFeatures = [
        {
            title: "Smart Content Analysis",
            description: "Our AI analyzes your input to identify key skills, achievements, and experiences, then structures them for maximum impact.",
            icon: FaChartLine
        },
        {
            title: "Real-time Collaboration",
            description: "Work on your resume with career coaches or mentors with our real-time collaboration features.",
            icon: FaSync
        },
        {
            title: "Professional Standards",
            description: "All content follows industry best practices and professional writing standards for your field.",
            icon: FaUserTie
        },
        {
            title: "Mobile Optimization",
            description: "Create and edit your resume on any device with our fully responsive design system.",
            icon: FaMobileAlt
        },
        {
            title: "Data Security",
            description: "Your information is encrypted and secure. We never share your data with third parties.",
            icon: FaLock
        },
        {
            title: "Quality Assurance",
            description: "Every resume undergoes multiple quality checks to ensure professional standards are met.",
            icon: FaStar
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-8">
                        <span className="text-xs font-medium text-gray-300">Powerful Features</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{lineHeight: '1.1', letterSpacing: '-0.03em'}}>
                        Everything You Need to Stand Out
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto" style={{lineHeight: '1.6'}}>
                        Discover the comprehensive suite of AI-powered tools designed to create professional, 
                        ATS-optimized resumes that get you noticed by employers and land your dream job.
                    </p>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Core Features
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Advanced tools powered by cutting-edge AI technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group"
                            >
                                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                    <feature.icon className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2">
                                    {feature.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex} className="flex items-center text-sm text-gray-300">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Categories */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Comprehensive Toolset
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Everything you need for career success in one platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featureCategories.map((category, index) => (
                            <div key={index} className="p-8 bg-gray-950 rounded-2xl border border-gray-800">
                                <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                                <ul className="space-y-4">
                                    {category.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-300">
                                            <FaStar className="text-yellow-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Features */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Advanced Technology
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Built with the latest technology for superior results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technicalFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group text-center"
                            >
                                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 mx-auto group-hover:bg-white group-hover:text-black transition-colors">
                                    <feature.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Why Choose ResumeAI?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-green-500">For Job Seekers</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <FaStar className="text-green-500 mr-3 flex-shrink-0" />
                                    Save 10+ hours on resume writing
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-green-500 mr-3 flex-shrink-0" />
                                    Increase interview chances by 3x
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-green-500 mr-3 flex-shrink-0" />
                                    Professional results in minutes
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-green-500 mr-3 flex-shrink-0" />
                                    Tailored for your target roles
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-gray-950 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-blue-500">Technology Advantages</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <FaStar className="text-blue-500 mr-3 flex-shrink-0" />
                                    Advanced AI and machine learning
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-blue-500 mr-3 flex-shrink-0" />
                                    Continuous algorithm improvements
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-blue-500 mr-3 flex-shrink-0" />
                                    Real-time processing and analysis
                                </li>
                                <li className="flex items-center">
                                    <FaStar className="text-blue-500 mr-3 flex-shrink-0" />
                                    Enterprise-grade security
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                        Ready to Experience These Features?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals who have transformed their job search with our AI-powered features
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/generate-resume" 
                            className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all"
                        >
                            Try All Features Free
                        </Link>
                        <Link 
                            to="/pricing" 
                            className="px-8 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all"
                        >
                            View Pricing Plans
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-gray-500">
                        No credit card required • Free to start • All features included
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Features