import React from 'react'
import { Link } from 'react-router-dom'
import { FaRobot, FaFileAlt, FaBullseye, FaCrown, FaUsers, FaCheck, FaTimes, FaStar } from 'react-icons/fa'

function Services() {
    const pricingPlans = [
        {
            name: "Free",
            price: "$0",
            description: "Perfect for getting started",
            features: [
                "1 AI-generated resume",
                "3 professional templates",
                "PDF download",
                "Basic editing tools",
                "Standard support"
            ],
            cta: "Get Started",
            popular: false,
            link: "/generate-resume"
        },
        {
            name: "Pro",
            price: "$9.99",
            period: "/month",
            description: "Most popular for professionals",
            features: [
                "Unlimited AI resumes",
                "15+ premium templates",
                "Advanced AI features",
                "Priority support",
                "Resume analytics",
                "ATS optimization",
                "Custom sections"
            ],
            cta: "Upgrade to Pro",
            popular: true,
            link: "/generate-resume"
        },
        {
            name: "Enterprise",
            price: "$29.99",
            period: "/month",
            description: "For teams and organizations",
            features: [
                "Everything in Pro",
                "Team collaboration",
                "Custom branding",
                "API access",
                "Dedicated support",
                "Advanced analytics",
                "Custom templates"
            ],
            cta: "Contact Sales",
            popular: false,
            link: "/contact"
        }
    ];

    const featureComparison = [
        { feature: "AI Resume Generation", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
        { feature: "Templates Available", free: "3", pro: "15+", enterprise: "All + Custom" },
        { feature: "PDF Downloads", free: "✓", pro: "✓", enterprise: "✓" },
        { feature: "ATS Optimization", free: "✗", pro: "✓", enterprise: "✓" },
        { feature: "Priority Support", free: "✗", pro: "✓", enterprise: "✓" },
        { feature: "Resume Analytics", free: "✗", pro: "✓", enterprise: "✓" },
        { feature: "Team Collaboration", free: "✗", pro: "✗", enterprise: "✓" },
        { feature: "Custom Branding", free: "✗", pro: "✗", enterprise: "✓" },
        { feature: "API Access", free: "✗", pro: "✗", enterprise: "✓" }
    ];

    return (
        <div className="bg-black text-white min-h-screen" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-8">
                        <span className="text-xs font-medium text-gray-300">Our Services</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{lineHeight: '1.1', letterSpacing: '-0.03em'}}>
                        Powerful Resume Services
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto" style={{lineHeight: '1.6'}}>
                        Discover our comprehensive range of AI-powered resume creation services designed to help you land your dream job.
                    </p>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            What We Offer
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Professional tools designed to maximize your career opportunities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                <FaRobot className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">AI Resume Generation</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Our advanced AI analyzes your background and creates a professional, 
                                tailored resume that highlights your strengths and matches industry standards.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Personalized content generation
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Industry-specific optimization
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    ATS-friendly formatting
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Professional language enhancement
                                </li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                <FaFileAlt className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Multiple Templates</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Choose from a variety of professionally designed templates 
                                that suit different industries and career levels.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Modern and classic designs
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Industry-specific layouts
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Customizable sections
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Print and digital optimized
                                </li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                <FaBullseye className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Job-Specific Optimization</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Optimize your resume for specific job roles and companies 
                                to increase your chances of getting noticed.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Keyword optimization
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Role-specific tailoring
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Company research integration
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                                    Performance tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Pricing Plans
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Choose the plan that works best for your career goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div 
                                key={index} 
                                className={`relative p-8 rounded-2xl border transition-all ${
                                    plan.popular 
                                        ? 'bg-white text-black border-white transform scale-105 shadow-2xl' 
                                        : 'bg-black text-white border-gray-800 hover:border-gray-700'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                            <FaStar className="text-yellow-400" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`mb-6 ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {plan.description}
                                </p>
                                
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && (
                                        <span className={`text-lg ${plan.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <FaCheck className={`mr-3 flex-shrink-0 ${
                                                plan.popular ? 'text-black' : 'text-green-500'
                                            }`} />
                                            <span className={plan.popular ? 'text-gray-700' : 'text-gray-300'}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Link 
                                    to={plan.link}
                                    className={`w-full py-4 px-6 rounded-lg font-medium text-center block transition-all ${
                                        plan.popular 
                                            ? 'bg-black text-white hover:bg-gray-900' 
                                            : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Feature Comparison
                        </h2>
                        <p className="text-lg text-gray-400">
                            See how our plans stack up against each other
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-800">
                                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                                    <th className="text-center py-4 px-6 font-semibold">Free</th>
                                    <th className="text-center py-4 px-6 font-semibold">Pro</th>
                                    <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {featureComparison.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                                        <td className="py-4 px-6 font-medium">{row.feature}</td>
                                        <td className="py-4 px-6 text-center">
                                            <span className={row.free === "✗" ? "text-red-500" : "text-green-500"}>
                                                {row.free}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <span className={row.pro === "✗" ? "text-red-500" : "text-green-500"}>
                                                {row.pro}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <span className={row.enterprise === "✗" ? "text-red-500" : "text-green-500"}>
                                                {row.enterprise}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-black border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals who have successfully landed their dream jobs with our AI resume maker.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/generate-resume" 
                            className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all"
                        >
                            Start Creating Your Resume
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-8 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services