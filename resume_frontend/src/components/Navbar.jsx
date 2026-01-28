import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if we're on the landing page
    const isLandingPage = location.pathname === '/';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled || !isLandingPage 
                ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <Link to="/" className="text-xl font-semibold text-white" style={{letterSpacing: '-0.01em'}}>
                            ResumeAI
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Home
                        </Link>
                        
                        <Link 
                            to="/features" 
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link 
                            to="/services" 
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === '/services' ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Services
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`text-sm font-medium transition-colors ${
                                location.pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Contact
                        </Link>


                        <Link 
  to="/about"
  className={`text-sm font-medium transition-colors ${
      location.pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'
  }`}
>
  About
</Link>

                    </div>

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            to="/generate-resume" 
                            className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-all"
                        >
                            Get Started
                        </Link>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-4 pt-4">
                            <Link 
                                to="/" 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-medium transition-colors ${
                                    location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Home
                            </Link>
                            <a 
                                href="#features" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                Features
                            </a>
                            <Link 
                                to="/services" 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-medium transition-colors ${
                                    location.pathname === '/services' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Services
                            </Link>
                            <Link 
                                to="/contact" 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-medium transition-colors ${
                                    location.pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;