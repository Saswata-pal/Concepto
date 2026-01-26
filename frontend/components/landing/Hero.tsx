'use client';

import { useState } from 'react';
import { ArrowRight, Brain, FileText, Video, Image as ImageIcon, Globe as GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { StickyBanner } from '@/components/ui/sticky-banner';

const resourceTypes = [
    { id: 'pdf', name: 'PDF Document', icon: FileText, color: 'from-purple-500 to-indigo-500' },
    { id: 'video', name: 'Video', icon: Video, color: 'from-pink-500 to-red-500' },
    { id: 'image', name: 'Image', icon: ImageIcon, color: 'from-teal-500 to-cyan-500' },
    { id: 'web', name: 'Web Article', icon: GlobeIcon, color: 'from-blue-500 to-cyan-500' },
];

export default function Hero() {
    const [selectedResource, setSelectedResource] = useState(resourceTypes[0]);

    const headlineText = "Learn from Any Resource with AI";

    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0f1729]">
            {/* Sticky Banner */}
            <StickyBanner className="bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500">
                <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
                    🎉 Now supporting 9+ content formats with AI-powered analysis.{" "}
                    <Link href="#features" className="font-semibold underline decoration-white/50 hover:decoration-white transition-all">
                        Explore Features →
                    </Link>
                </p>
            </StickyBanner>

            <div className="flex-1 flex items-center justify-center pt-16">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Decorative Borders */}
                    <div className="absolute inset-y-0 left-0 h-full w-px bg-white/10">
                        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 right-0 h-full w-px bg-white/10">
                        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/10">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Headline with Word Animation */}
                        <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            {headlineText.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className={`mr-2 inline-block ${word === "Any" || word === "Resource"
                                            ? "gradient-text-vibrant"
                                            : word === "AI"
                                                ? "text-teal-400"
                                                : ""
                                        }`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Value Proposition */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            className="relative z-10 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mt-6"
                        >
                            Upload documents, videos, images, or links. Concepto's AI analyzes, explains, and helps you understand any content—personalized to how you learn best.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1 }}
                            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center mt-8"
                        >
                            <Link
                                href="/auth/register"
                                className="relative group px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2 overflow-hidden shadow-lg shadow-teal-500/25"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                <Brain className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Get Started Free</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </Link>

                            <Link
                                href="/auth/login"
                                className="relative group px-8 py-4 glass-card text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all inline-flex items-center justify-center overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10">Sign In</span>
                            </Link>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1.2 }}
                            className="flex flex-wrap gap-6 justify-center pt-8"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                <span className="text-sm text-gray-400">Multi-format Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                <span className="text-sm text-gray-400">AI-Powered Analysis</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                                <span className="text-sm text-gray-400">Personalized Learning</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
