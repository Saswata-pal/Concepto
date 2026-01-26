'use client';

import { Shield, Heart, Lock, CheckCircle } from 'lucide-react';

export default function TrustSection() {
    const commitments = [
        {
            icon: Shield,
            title: 'Accessibility Standards',
            description: 'Committed to WCAG 2.1 AAA standards and beyond. Accessibility isn\'t compliance—it\'s our core mission.',
        },
        {
            icon: Heart,
            title: 'Ethical AI Commitment',
            description: 'AI that serves humans, respects dignity, and never exploits. Transparent, explainable, and accountable.',
        },
        {
            icon: Lock,
            title: 'Privacy & User Dignity',
            description: 'Your data is yours. Minimal collection, maximum control, zero exploitation. Always.',
        },
        {
            icon: CheckCircle,
            title: 'Inclusive Development',
            description: 'Built with diverse communities, not just for them. Real collaboration, real voices, real impact.',
        },
    ];

    return (
        <section className="py-24 md:py-36 bg-[#020617] relative">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Built with <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Care & Responsibility</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">
                        These aren't just promises—they're the principles guiding every decision we make.
                    </p>
                </div>

                {/* Commitments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {commitments.map((commitment, index) => {
                        const Icon = commitment.icon;
                        return (
                            <div
                                key={index}
                                className="group text-center space-y-6"
                            >
                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 bg-slate-900 border border-white/10 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <Icon className="w-10 h-10 text-white relative z-10" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white">
                                    {commitment.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-base leading-relaxed font-medium">
                                    {commitment.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Statement */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            A Concept Built with Intention
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed font-medium">
                            Concepto is more than a technology project—it's a commitment to reimagining education with empathy, accessibility, and human dignity at its core. We're taking our time to get this right because the learners we serve deserve nothing less.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
