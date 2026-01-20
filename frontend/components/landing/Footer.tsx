'use client';

import Link from 'next/link';
import { Heart, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">C</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Concepto</span>
                        </div>
                        <p className="text-gray-400 text-accessible mb-6 max-w-md">
                            A conceptual education initiative reimagining learning for every mind. Built with accessibility, empathy, and human dignity at the core.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-pink-500 fill-current" />
                            <span>for inclusive learning</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Explore</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#vision" className="hover:text-purple-400 transition-colors">
                                    Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="#learners" className="hover:text-purple-400 transition-colors">
                                    Learners
                                </Link>
                            </li>
                            <li>
                                <Link href="#roadmap" className="hover:text-purple-400 transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-purple-400 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:hello@concepto.app"
                                    className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Email Us</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/concepto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/company/concepto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/concepto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-sm text-gray-500">
                            © {currentYear} Concepto. A Concept Initiative.
                        </p>

                        {/* Links */}
                        <div className="flex items-center space-x-6 text-sm">
                            <Link href="#" className="hover:text-purple-400 transition-colors">
                                Accessibility Statement
                            </Link>
                            <Link href="#" className="hover:text-purple-400 transition-colors">
                                Privacy Principles
                            </Link>
                        </div>
                    </div>

                    {/* Closing Message */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 italic">
                            "Where there is light, there is learning. Where there is learning, there is hope."
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
