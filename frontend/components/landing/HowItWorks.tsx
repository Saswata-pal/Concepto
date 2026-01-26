'use client';

import { Upload, Cpu, Lightbulb } from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: 'Add Resource',
        description: 'Upload files or paste links',
        details: 'Support for PDFs, videos, images, web articles, audio files, and more',
        color: 'from-purple-500 to-indigo-500'
    },
    {
        icon: Cpu,
        title: 'AI Analyzes',
        description: 'Our AI processes your content',
        details: 'Extract key concepts, build knowledge graphs, and identify learning patterns',
        color: 'from-teal-500 to-cyan-500'
    },
    {
        icon: Lightbulb,
        title: 'Learn Interactively',
        description: 'Engage with personalized content',
        details: 'Interactive exercises, quizzes, summaries, and adaptive learning paths',
        color: 'from-cyan-500 to-blue-500'
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-[#0f1729] to-[#1a2332] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-large opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How <span className="gradient-text-vibrant">Concepto</span> Works
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Three simple steps to transform any resource into an interactive learning experience
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Connector Line (hidden on mobile, shown on desktop between cards) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-transparent -z-10" />
                                )}

                                <div className="glass-card rounded-2xl p-8 border border-white/10 hover-lift h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-lg text-gray-300 mb-4">{step.description}</p>
                                    <p className="text-sm text-gray-400">{step.details}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#demo"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transition-all"
                    >
                        <span>Try It Yourself</span>
                        <Lightbulb className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
