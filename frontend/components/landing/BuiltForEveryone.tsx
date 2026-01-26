'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap, Microscope, CheckCircle2, ArrowRight } from 'lucide-react';

const personas = [
    {
        id: 'professionals',
        title: 'Professionals',
        subtitle: 'Stay ahead in your career by quickly mastering new skills and industry knowledge',
        icon: Briefcase,
        bullets: [
            'Analyze industry reports and whitepapers',
            'Learn new frameworks and methodologies',
            'Understand complex business documents'
        ],
        cta: 'Explore Use Cases',
        color: 'from-blue-500 to-cyan-500',
        imageGradient: 'from-blue-900/20 via-blue-800/10 to-transparent'
    },
    {
        id: 'students',
        title: 'Students',
        subtitle: 'Ace your studies with personalized learning paths and automated study materials',
        icon: GraduationCap,
        bullets: [
            'Convert textbooks into interactive guides',
            'Generate custom quizzes and flashcards',
            'Bypass complex jargon with simpler explanations'
        ],
        cta: 'Start Learning',
        color: 'from-purple-500 to-pink-500',
        imageGradient: 'from-purple-900/20 via-purple-800/10 to-transparent'
    },
    {
        id: 'researchers',
        title: 'Researchers',
        subtitle: 'Digest massive amounts of information and connect dots across disciplines',
        icon: Microscope,
        bullets: [
            'Synthesize findings from multiple papers',
            'Visualize complex theoretical links',
            'Manage and query multi-modal research assets'
        ],
        cta: 'Try Research Lab',
        color: 'from-cyan-500 to-emerald-500',
        imageGradient: 'from-cyan-900/20 via-cyan-800/10 to-transparent'
    }
];

export default function BuiltForEveryone() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextPersona = () => setActiveIndex((prev) => (prev + 1) % personas.length);
    const prevPersona = () => setActiveIndex((prev) => (prev - 1 + personas.length) % personas.length);

    const activePersona = personas[activeIndex];

    return (
        <section id="built-for-everyone" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        Built For <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Everyone</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Whether you&apos;re learning, teaching, or researching—Concepto adapts to your needs
                    </p>
                </div>

                <div className="relative group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePersona.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Side: Placeholder Image/Visual */}
                                <div className={`relative min-h-[300px] lg:min-h-[500px] bg-gradient-to-br ${activePersona.imageGradient} flex items-center justify-center p-12`}>
                                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className={`w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br ${activePersona.color} flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)]`}
                                    >
                                        <activePersona.icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                                    </motion.div>

                                    {/* Abstract floating elements */}
                                    <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/20 animate-bounce" />
                                    <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-white/40 animate-ping" />
                                    <div className="absolute top-1/2 right-20 w-8 h-8 rounded-full bg-blue-500/10 blur-md animate-pulse" />
                                </div>

                                {/* Right Side: Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center space-y-8 bg-[#020617]/40">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                            {activePersona.title}
                                        </h3>
                                        <p className="text-lg text-gray-400 leading-relaxed">
                                            {activePersona.subtitle}
                                        </p>
                                    </div>

                                    <ul className="space-y-4">
                                        {activePersona.bullets.map((bullet, i) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                key={i}
                                                className="flex items-start space-x-3 group/item"
                                            >
                                                <CheckCircle2 className={`w-6 h-6 mt-0.5 shrink-0 bg-clip-text text-transparent bg-gradient-to-r ${activePersona.color}`} />
                                                <span className="text-gray-300 group-hover/item:text-white transition-colors">{bullet}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                                        <button className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r ${activePersona.color} text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center space-x-2`}>
                                            <span>{activePersona.cta}</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </button>

                                        {/* Carousel Controls (Integrated) */}
                                        <div className="flex items-center space-x-4">
                                            <button
                                                onClick={prevPersona}
                                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <div className="flex space-x-2">
                                                {personas.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? `w-8 bg-gradient-to-r ${activePersona.color}` : 'w-2 bg-white/20'}`}
                                                    />
                                                ))}
                                            </div>
                                            <button
                                                onClick={nextPersona}
                                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
