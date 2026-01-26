'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

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
        { href: '#built-for-everyone', label: 'For Everyone' },
        { href: '#why-concepto', label: 'Why Concepto' },
        { href: '#roadmap', label: 'Future Roadmap' },
        { href: '#faq', label: 'FAQ' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-white/10'
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
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 focus-visible-ring"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Theme Toggler */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <AnimatedThemeToggler
                            className="p-2.5 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/15 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all focus-visible-ring"
                        />
                        <Link
                            href="/auth/signin"
                            className="px-5 py-2.5 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus-visible-ring"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/auth/register"
                            className="px-6 py-2.5 gradient-primary text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all focus-visible-ring"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Theme Toggler */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <AnimatedThemeToggler
                            className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/10 backdrop-blur-xl border border-slate-300/50 dark:border-white/20 text-gray-700 dark:text-white hover:bg-slate-300/80 dark:hover:bg-white/15 transition-colors focus-visible-ring"
                        />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible-ring"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors focus-visible-ring"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2">
                            <AnimatedThemeToggler
                                className="flex-1 px-4 py-3 rounded-lg bg-slate-200/80 dark:bg-white/10 backdrop-blur-xl border border-slate-300/50 dark:border-white/20 text-gray-700 dark:text-white hover:bg-slate-300/80 dark:hover:bg-white/15 hover:border-purple-400/50 transition-all focus-visible-ring flex items-center justify-center"
                            />
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/auth/signin"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-center border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus-visible-ring"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/auth/register"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-3 gradient-primary text-white font-medium rounded-lg text-center hover:shadow-lg transition-all focus-visible-ring"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
