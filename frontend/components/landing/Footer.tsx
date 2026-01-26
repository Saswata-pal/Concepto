'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import ConceptoLogo from '@/components/ui/ConceptoLogo';

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0f1a] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="hover:scale-110 transition-transform duration-300">
                                <ConceptoLogo className="w-10 h-10" />
                            </div>
                            <span className="text-xl font-bold gradient-text-vibrant">Concepto</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            AI-powered learning platform that adapts to how you learn best.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="#demo" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Interactive Demo
                                </Link>
                            </li>
                            <li>
                                <Link href="#comparison" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Comparison
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#research" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Research Insights
                                </Link>
                            </li>
                            <li>
                                <Link href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#support" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-b border-white/10">
                    <div className="flex items-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-sm">AI-Powered</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <span className="text-sm">Privacy First</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                        <span className="text-sm">Accessibility Focused</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">Multi-Language</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
                    <p>© 2026 Concepto. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#cookies" className="hover:text-white transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
