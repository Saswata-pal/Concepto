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
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Built with <span className="gradient-text">Care & Responsibility</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        These aren't just promises—they're the principles guiding every decision we make.
                    </p>
                </div>

                {/* Commitments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {commitments.map((commitment, index) => {
                        const Icon = commitment.icon;
                        return (
                            <div
                                key={index}
                                className="group text-center"
                            >
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {commitment.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-accessible leading-relaxed">
                                    {commitment.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Statement */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 text-center border-2 border-purple-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            A Concept Built with Intention
                        </h3>
                        <p className="text-lg text-gray-700 text-accessible leading-relaxed">
                            Concepto is more than a technology project—it's a commitment to reimagining education with empathy, accessibility, and human dignity at its core. We're taking our time to get this right because the learners we serve deserve nothing less.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
