import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/generate-resume");
    };


    return (
        <div className="bg-black text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>


            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6">

                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-8">
                        <span className="text-xs font-medium text-gray-300">Trusted by 50,000+ professionals</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ lineHeight: '1.1', letterSpacing: '-0.03em' }}>
                        Your AI-Powered
                        <span className="block mt-2">Resume Assistant</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
                        Create professional, ATS-optimized resumes in minutes. Our AI analyzes your experience and crafts compelling content tailored to your target role.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                        <button onClick={handleGetStarted} className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all">
                            Create Your Resume
                        </button>
                        <button className="px-8 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all">
                            View Examples
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 border-t border-gray-800">
                        <div>
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <div className="text-sm text-gray-500">Resumes Created</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">94%</div>
                            <div className="text-sm text-gray-500">Interview Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">4.9★</div>
                            <div className="text-sm text-gray-500">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Everything You Need to Stand Out
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Professional tools designed to help you land your next opportunity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                                title: "AI-Powered Content",
                                description: "Advanced algorithms analyze your experience and generate compelling, role-specific content that resonates with hiring managers."
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "ATS Optimization",
                                description: "Built-in optimization ensures your resume passes Applicant Tracking Systems while maintaining professional appearance."
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                ),
                                title: "Professional Templates",
                                description: "Choose from expertly designed templates crafted by career experts and optimized for various industries."
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: "Real-Time Editing",
                                description: "See changes instantly as you edit. Our intuitive interface makes customization effortless and efficient."
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ),
                                title: "Secure & Private",
                                description: "Your data is encrypted and stored securely. We never share your information with third parties."
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                ),
                                title: "Export to PDF",
                                description: "Download your resume as a high-quality PDF ready to submit. Compatible with all major job platforms."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-32 px-6 bg-black">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Three Steps to Your Perfect Resume
                        </h2>
                        <p className="text-lg text-gray-400">
                            Professional results in minutes, not hours
                        </p>
                    </div>

                    <div className="space-y-16">
                        {[
                            {
                                step: "1",
                                title: "Share Your Experience",
                                description: "Tell us about your work history, skills, and career goals through our intuitive form. The more details you provide, the better your resume will be."
                            },
                            {
                                step: "2",
                                title: "AI Generates Content",
                                description: "Our advanced AI analyzes your input and creates professional, achievement-focused content that highlights your unique value proposition."
                            },
                            {
                                step: "3",
                                title: "Review & Download",
                                description: "Customize the generated content, choose your preferred template, and download your polished resume ready for submission."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1 pt-3">
                                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-32 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                            Trusted by Professionals Worldwide
                        </h2>
                        <p className="text-lg text-gray-400">
                            See what our users have to say about their experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Ujjwal Das",
                                role: "Software Engineer at Tech Corp",
                                image: "https://randomuser.me/api/portraits/men/1.jpg",
                                text: "ResumeAI helped me land interviews at top tech companies. The AI-generated content was spot-on and saved me hours of writing.",
                                rating: 5
                            },
                            {
                                name: "Riya Sharma",
                                role: "Marketing Manager",
                                image: "https://randomuser.me/api/portraits/women/2.jpg",
                                text: "The templates are clean and professional. I received compliments from recruiters about how well-structured my resume was.",
                                rating: 5
                            },
                            {
                                name: "Arjun Patel",
                                role: "Product Manager",
                                image: "https://randomuser.me/api/portraits/men/3.jpg",
                                text: "Best resume builder I've used. The AI perfectly captured my experience and achievements in a compelling way.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-8 leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 bg-black border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ letterSpacing: '-0.03em' }}>
                        Ready to Advance Your Career?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join thousands of professionals who have transformed their job search with ResumeAI
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={handleGetStarted} className="px-10 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all">
                            Create Your Resume Now
                        </button>
                        <button className="px-10 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all">
                            View Pricing
                        </button>
                    </div>
                    <p className="mt-10 text-sm text-gray-500">No credit card required • Free to start • Export anytime</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-gray-800 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold">ResumeAI</span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Professional AI-powered resume builder trusted by thousands of job seekers worldwide.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#features" className="text-gray-500 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Templates</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Examples</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Security</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-gray-600">
                            © 2024 ResumeAI. All rights reserved.
                        </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-600 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;