'use client';

import { Search, Users, Shield, Rocket } from 'lucide-react';

export default function FutureRoadmap() {
    const phases = [
        {
            icon: Search,
            title: 'Research & Discovery',
            description: 'Deep collaboration with educators, accessibility experts, and diverse learners to understand real needs.',
            status: 'Current Phase',
            color: 'purple',
        },
        {
            icon: Users,
            title: 'Co-Design & Prototyping',
            description: 'Building prototypes with the communities we serve, not for them. Iterating based on real feedback.',
            status: 'Next',
            color: 'blue',
        },
        {
            icon: Shield,
            title: 'Ethical AI & Privacy',
            description: 'Ensuring our AI respects user dignity, privacy, and autonomy. No data exploitation, ever.',
            status: 'Ongoing',
            color: 'green',
        },
        {
            icon: Rocket,
            title: 'Gradual Evolution',
            description: 'Thoughtful, responsible development into a real platform—when it\'s ready, not when it\'s rushed.',
            status: 'Future',
            color: 'pink',
        },
    ];

    const colorMap: Record<string, { bg: string; text: string; gradient: string; badge: string }> = {
        purple: {
            bg: 'from-purple-50 to-pink-50',
            text: 'text-purple-600',
            gradient: 'from-purple-500 to-pink-500',
            badge: 'bg-purple-100 text-purple-700',
        },
        blue: {
            bg: 'from-blue-50 to-cyan-50',
            text: 'text-blue-600',
            gradient: 'from-blue-500 to-cyan-500',
            badge: 'bg-blue-100 text-blue-700',
        },
        green: {
            bg: 'from-green-50 to-emerald-50',
            text: 'text-green-600',
            gradient: 'from-green-500 to-emerald-500',
            badge: 'bg-green-100 text-green-700',
        },
        pink: {
            bg: 'from-pink-50 to-rose-50',
            text: 'text-pink-600',
            gradient: 'from-pink-500 to-rose-500',
            badge: 'bg-pink-100 text-pink-700',
        },
    };

    return (
        <section id="roadmap" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        <span className="gradient-text">Future Vision</span> & Roadmap
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        We're taking a research-first, human-centered approach. No timelines. No promises. Just honest, thoughtful progress.
                    </p>
                </div>

                {/* Phases */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        const colors = colorMap[phase.color];

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-30 group-hover:opacity-50 transition-opacity`} />

                                <div className="relative p-8">
                                    {/* Status Badge */}
                                    <div className="mb-6">
                                        <span className={`px-3 py-1 ${colors.badge} text-xs font-semibold rounded-full`}>
                                            {phase.status}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {phase.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-accessible leading-relaxed">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Commitment Statement */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-purple-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
                            Our Commitment
                        </h3>
                        <div className="space-y-4 text-gray-700 text-accessible">
                            <p className="leading-relaxed">
                                <strong className="text-purple-600">We will not rush.</strong> Building truly accessible, inclusive technology takes time, research, and collaboration with the communities we serve.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-blue-600">We will not compromise.</strong> Accessibility and user dignity are non-negotiable. We'll build it right, or we won't build it at all.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-green-600">We will be transparent.</strong> This is a concept initiative. We're honest about what exists and what doesn't.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-pink-600">We will listen.</strong> The best ideas come from learners, educators, and accessibility experts—not just technologists.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
