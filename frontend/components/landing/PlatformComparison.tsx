'use client';

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Brain, Zap, Share2, Layers, Shield, Sparkles } from 'lucide-react';

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        icon: Brain,
        title: 'Adaptive Intelligence',
        description: 'Personalized learning that adapts to you',
        color: 'from-purple-500 to-indigo-500',
        ctaText: 'Learn More',
        content: () => (
            <p className="text-white">
                Concepto learns how you learn. It adjusts content difficulty, summary patterns, and quiz complexity to match your current knowledge level.
                <br /><br />
                Our AI analyzes your interaction patterns, comprehension speed, and retention rates to create a truly personalized learning experience. Whether you're a visual learner, prefer detailed explanations, or learn best through practice, Concepto adapts to your unique style.
                <br /><br />
                The system continuously refines its understanding of your preferences, ensuring that every session is optimized for maximum learning efficiency.
            </p>
        ),
    },
    {
        icon: Layers,
        title: 'Multi-Modal Synthesis',
        description: 'Connect knowledge across all formats',
        color: 'from-pink-500 to-red-500',
        ctaText: 'Explore',
        content: () => (
            <p className="text-white">
                Don't just read or watch—connect. We treat PDFs, videos, and articles as a single knowledge web, allowing you to cross-reference concepts instantly.
                <br /><br />
                Concepto's unique architecture breaks down silos between different content types. When you're reading a PDF about machine learning, the system can instantly pull relevant video explanations, code examples, and related articles to provide comprehensive understanding.
                <br /><br />
                This interconnected approach mirrors how human memory works, creating stronger neural pathways and deeper comprehension.
            </p>
        ),
    },
    {
        icon: Zap,
        title: 'Active Recall Engine',
        description: 'Never forget what you learn',
        color: 'from-teal-500 to-cyan-500',
        ctaText: 'Discover',
        content: () => (
            <p className="text-white">
                Stop forgetting what you read. Concepto automatically generates flashcards and quizzes from your content to ensure long-term retention.
                <br /><br />
                Based on proven spaced repetition algorithms, our Active Recall Engine schedules review sessions at optimal intervals. The system identifies concepts you're struggling with and provides targeted practice to strengthen weak areas.
                <br /><br />
                Studies show active recall is 2-3x more effective than passive review. Concepto makes this powerful technique effortless and automatic.
            </p>
        ),
    },
    {
        icon: Share2,
        title: 'Collaborative Knowledge',
        description: 'Learn better together',
        color: 'from-blue-500 to-cyan-500',
        ctaText: 'Connect',
        content: () => (
            <p className="text-white">
                Learning is better together. Share your analyzed resources, notes, and knowledge graphs with your team or study group in real-time.
                <br /><br />
                Concepto enables seamless collaboration without sacrificing personalization. Team members can contribute to shared knowledge bases while maintaining their individual learning paths and preferences.
                <br /><br />
                Perfect for study groups, research teams, or corporate training programs where collective intelligence amplifies individual learning.
            </p>
        ),
    },
    {
        icon: Shield,
        title: 'Secure & Private',
        description: 'Your data, your control',
        color: 'from-green-500 to-emerald-500',
        ctaText: 'Security',
        content: () => (
            <p className="text-white">
                Your intellectual property matters. We use enterprise-grade encryption and ensure your personal data is never used to train public models.
                <br /><br />
                Concepto is built with privacy-first architecture. All your content, notes, and learning data are encrypted end-to-end. You maintain full ownership and control over your information.
                <br /><br />
                We're GDPR and CCPA compliant, with transparent data policies and the ability to export or delete your data at any time. Your learning journey stays yours.
            </p>
        ),
    },
    {
        icon: Sparkles,
        title: 'Smart Summarization',
        description: 'Extract insights instantly',
        color: 'from-yellow-500 to-orange-500',
        ctaText: 'Try It',
        content: () => (
            <p className="text-white">
                Get the gist in seconds. Our AI extracts key points, actionable items, and summary tables from hours of content instantly.
                <br /><br />
                Concepto's summarization goes beyond simple text extraction. It understands context, identifies main arguments, recognizes supporting evidence, and structures information hierarchically.
                <br /><br />
                Whether you're processing research papers, business documents, or educational videos, get comprehensive summaries that capture the essence without losing critical details.
            </p>
        ),
    },
];

export default function PlatformComparison() {
    const [active, setActive] = useState<(typeof cards)[number] | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <section id="comparison" className="relative py-24 bg-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Choose <span className="gradient-text-vibrant">Concepto</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Click on any feature to explore how Concepto transforms your learning experience
                    </p>
                </div>

                {/* Expandable Cards */}
                <>
                    <AnimatePresence>
                        {active && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[90]"
                            />
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {active ? (
                            <div className="fixed inset-0 grid place-items-center z-[100]">
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[110]"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col glass-card border border-white/20 sm:rounded-3xl overflow-hidden"
                                >
                                    <div className={`w-full h-48 bg-gradient-to-br ${active.color} flex items-center justify-center`}>
                                        {React.createElement(active.icon, { className: "w-24 h-24 text-white" })}
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-4">
                                            <motion.h3
                                                layoutId={`title-${active.title}-${id}`}
                                                className="text-2xl font-bold text-white mb-2"
                                            >
                                                {active.title}
                                            </motion.h3>
                                            <motion.p
                                                layoutId={`description-${active.description}-${id}`}
                                                className="text-gray-400"
                                            >
                                                {active.description}
                                            </motion.p>
                                        </div>

                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-sm leading-relaxed h-64 md:h-fit pb-4 overflow-auto [scrollbar-width:thin] [scrollbar-color:rgba(20,184,166,0.3)_transparent]"
                                        >
                                            {typeof active.content === "function" ? active.content() : active.content}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    layoutId={`card-${card.title}-${id}`}
                                    key={`card-${card.title}-${id}`}
                                    onClick={() => setActive(card)}
                                    className="group relative glass-card rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-2"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                                    <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <motion.h3
                                        layoutId={`title-${card.title}-${id}`}
                                        className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors"
                                    >
                                        {card.title}
                                    </motion.h3>

                                    <motion.p
                                        layoutId={`description-${card.description}-${id}`}
                                        className="text-gray-400 text-sm mb-4"
                                    >
                                        {card.description}
                                    </motion.p>

                                    <motion.button
                                        className="px-4 py-2 text-sm rounded-full font-semibold bg-white/5 hover:bg-teal-500 hover:text-white text-gray-300 transition-all border border-white/10"
                                    >
                                        {card.ctaText}
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </div>
                </>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/auth/register"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all shadow-lg"
                    >
                        <span>Start Learning Smarter</span>
                        <Zap className="w-5 h-5 fill-current" />
                    </a>
                </div>
            </div>
        </section>
    );
}
