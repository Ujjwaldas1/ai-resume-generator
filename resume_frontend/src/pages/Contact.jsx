import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-black text-white min-h-screen" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
            {/* Hero Section */}
            <section className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-full mb-8">
                        <span className="text-xs font-medium text-gray-300">Get in Touch</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{lineHeight: '1.1', letterSpacing: '-0.03em'}}>
                        Contact Us
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto" style={{lineHeight: '1.6'}}>
                        Have questions or need support? We're here to help you create the perfect resume and advance your career.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-6 bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="p-8 bg-black rounded-2xl border border-gray-800">
                            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                            <p className="text-gray-400 mb-8">We typically respond within 24 hours</p>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                                        placeholder="What's this regarding?"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors h-32 resize-none"
                                        placeholder="Tell us how we can help you..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    We're here to help you create the perfect resume. Whether you have questions 
                                    about our AI technology, need support with your resume, or want to discuss 
                                    enterprise solutions, we'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 bg-black rounded-xl border border-gray-800">
                                    <div className="bg-gray-900 p-3 rounded-lg flex-shrink-0">
                                        <FaEnvelope className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                                        <p className="text-gray-400">support@resumeai.com</p>
                                        <p className="text-gray-400">info@resumeai.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-black rounded-xl border border-gray-800">
                                    <div className="bg-gray-900 p-3 rounded-lg flex-shrink-0">
                                        <FaPhone className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                        <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-black rounded-xl border border-gray-800">
                                    <div className="bg-gray-900 p-3 rounded-lg flex-shrink-0">
                                        <FaMapMarkerAlt className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                                        <p className="text-gray-400">123 AI Street, Tech City</p>
                                        <p className="text-gray-400">Innovation District, TC 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-black rounded-xl border border-gray-800">
                                    <div className="bg-gray-900 p-3 rounded-lg flex-shrink-0">
                                        <FaClock className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                                        <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-400 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-gray-400 text-sm">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-black">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-400">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "How does the AI resume generation work?",
                                answer: "Our advanced AI analyzes your input description using natural language processing to create professional, achievement-focused content that highlights your skills and experience in the most compelling way possible."
                            },
                            {
                                question: "Can I edit the generated resume?",
                                answer: "Absolutely! After the AI generates your resume, you can fully customize every section using our intuitive editing interface. Add, remove, or modify content to perfectly match your needs."
                            },
                            {
                                question: "Are the resumes ATS-friendly?",
                                answer: "Yes! All our templates are designed to be ATS (Applicant Tracking System) friendly, ensuring your resume gets through automated screening systems while maintaining a professional appearance."
                            },
                            {
                                question: "What file formats can I download my resume in?",
                                answer: "Currently, we support high-quality PDF downloads - the most widely accepted format for job applications. We're continuously working on adding more export options in future updates."
                            },
                            {
                                question: "Is my data secure and private?",
                                answer: "Your privacy is our priority. All data is encrypted and stored securely. We never share your personal information with third parties, and you can delete your data at any time."
                            },
                            {
                                question: "Do you offer enterprise solutions?",
                                answer: "Yes! We provide customized enterprise solutions for companies looking to streamline their hiring process. Contact us for pricing and feature details tailored to your organization's needs."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden">
                                <input 
                                    type="checkbox" 
                                    id={`faq-${index}`} 
                                    className="hidden peer" 
                                />
                                <label 
                                    htmlFor={`faq-${index}`} 
                                    className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-900 transition-colors"
                                >
                                    <span className="text-lg font-medium pr-4">{faq.question}</span>
                                    <svg 
                                        className="w-5 h-5 text-gray-400 transition-transform peer-checked:rotate-180 flex-shrink-0" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </label>
                                <div className="max-h-0 peer-checked:max-h-96 overflow-hidden transition-all duration-300">
                                    <div className="p-6 pt-0 border-t border-gray-800">
                                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
                        Ready to Create Your Resume?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join thousands of professionals who have transformed their job search with ResumeAI
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/generate-resume" 
                            className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-all"
                        >
                            Create Your Resume Now
                        </Link>
                        <Link 
                            to="/services" 
                            className="px-8 py-4 bg-transparent text-white text-base font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-all"
                        >
                            View Pricing
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-gray-500">No credit card required • Free to start • Export anytime</p>
                </div>
            </section>
        </div>
    )
}

export default Contact