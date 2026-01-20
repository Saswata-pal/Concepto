'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#vision', label: 'Vision' },
        { href: '#learners', label: 'Learners' },
        { href: '#why-concepto', label: 'Why Concepto' },
        { href: '#roadmap', label: 'Future Roadmap' },
        { href: '#faq', label: 'FAQ' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-effect shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 gradient-primary blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative w-10 h-10 md:w-12 md:h-12 gradient-primary rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl md:text-2xl">C</span>
                            </div>
                        </div>
                        <span className="text-xl md:text-2xl font-bold gradient-text">
                            Concepto
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50 focus-visible-ring"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="#explore"
                            className="px-6 py-2.5 gradient-primary text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all focus-visible-ring"
                        >
                            Explore the Concept
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible-ring"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden glass-effect border-t border-gray-200">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors focus-visible-ring"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#explore"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 gradient-primary text-white font-medium rounded-lg text-center hover:shadow-lg transition-all focus-visible-ring"
                        >
                            Explore the Concept
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
