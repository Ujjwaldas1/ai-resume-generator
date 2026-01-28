import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaAward, FaGlobe } from 'react-icons/fa'

function About() {
    const teamMembers = [
        {
            name: "John Smith",
            role: "Lead AI Engineer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            description: "Former Google AI researcher with 8+ years in machine learning and natural language processing."
        },
        {
            name: "Sarah Johnson",
            role: "UX Designer",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            description: "Product design expert passionate about creating intuitive user experiences for career development."
        },
        {
            name: "Mike Chen",
            role: "Full Stack Developer",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            description: "Full-stack developer specializing in scalable applications and modern web technologies."
        }
    ];

    const stats = [
        { number: "50K+", label: "Resumes Created", icon: FaRocket },
        { number: "94%", label: "Interview Success Rate", icon: FaChartLine },
        { number: "100+", label: "Industries Served", icon: FaGlobe },
        { number: "4.9★", label: "Average Rating", icon: FaAward }
    ];

    return (
        <div className="bg-black text-white min-h-screen" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-8">
                        <span className="text-xs font-medium text-gray-300">About ResumeAI</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{lineHeight: '1.1', letterSpacing: '-0.03em'}}>
                        Revolutionizing Resume Creation
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto" style={{lineHeight: '1.6'}}>
                        We're transforming how people create professional resumes using cutting-edge AI technology to unlock career opportunities worldwide.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Our mission is to democratize professional resume creation by making it accessible, 
                            efficient, and effective for everyone. We believe that everyone deserves a professional 
                            resume that showcases their skills and experience in the best possible light.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                <FaRocket className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We use advanced AI algorithms to analyze your professional background and 
                                generate tailored resumes that highlight your strengths and match industry standards.
                                Our technology ensures your resume stands out in competitive job markets.
                            </p>
                        </div>
                        
                        <div className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                                <FaLightbulb className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                            <p className="text-gray-400 leading-relaxed">
                                By combining natural language processing with industry best practices, 
                                we create resumes that are both human-friendly and ATS-optimized. Our 
                                continuous learning system adapts to evolving hiring trends and requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-8 bg-gray-950 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all group">
                                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:bg-white group-hover:text-black transition-colors">
                                    <stat.icon className="text-2xl" />
                                </div>
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Our Team
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Meet the passionate professionals behind ResumeAI's innovative technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-gray-700 transition-all text-center group">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-white transition-colors">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-300 mb-4 font-medium">{member.role}</p>
                                <p className="text-gray-400 leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Our Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gray-950 rounded-2xl border border-gray-800">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <FaUsers className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">User-Centric</h3>
                            <p className="text-gray-400">
                                Every feature is designed with our users' career success in mind. We prioritize 
                                intuitive experiences that deliver real value to job seekers.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gray-950 rounded-2xl border border-gray-800">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <FaRocket className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-400">
                                We continuously push the boundaries of AI technology to provide cutting-edge 
                                resume solutions that adapt to the evolving job market.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gray-950 rounded-2xl border border-gray-800">
                            <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <FaAward className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Excellence</h3>
                            <p className="text-gray-400">
                                We're committed to delivering exceptional quality in every resume generated, 
                                ensuring our users present their best professional selves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals who have accelerated their job search with AI-powered resumes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/generate-resume" 
                            className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all"
                        >
                            Create Your Resume
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-8 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About