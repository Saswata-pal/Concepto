'use client';

import { Eye, Ear, Brain, Zap, Users, Sparkles } from 'lucide-react';

export default function Learners() {
    const learnerPersonas = [
        {
            icon: Eye,
            title: 'Visual-First Learners',
            description: 'Those who understand through diagrams, comics, infographics, and visual storytelling.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-50 to-cyan-50',
        },
        {
            icon: Ear,
            title: 'Audio-First Learners',
            description: 'Those who grasp concepts through narration, explanations, and auditory processing.',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-50 to-pink-50',
        },
        {
            icon: Brain,
            title: 'Neurodiverse Thinkers',
            description: 'Those with ADHD, autism, dyslexia, or other cognitive differences who need adaptive pacing and structure.',
            color: 'from-indigo-500 to-purple-500',
            bgColor: 'from-indigo-50 to-purple-50',
        },
        {
            icon: Zap,
            title: 'Pace-Adaptive Learners',
            description: 'Those who need content broken down differently—faster, slower, or with varied complexity levels.',
            color: 'from-orange-500 to-red-500',
            bgColor: 'from-orange-50 to-red-50',
        },
        {
            icon: Users,
            title: 'Multi-Modal Learners',
            description: 'Those who learn best through a combination of visual, audio, and interactive experiences.',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-50 to-emerald-50',
        },
        {
            icon: Sparkles,
            title: 'Everyone Else',
            description: 'Because good accessibility design makes learning better for everyone, regardless of ability.',
            color: 'from-pink-500 to-rose-500',
            bgColor: 'from-pink-50 to-rose-50',
        },
    ];

    return (
        <section id="learners" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Designed for <span className="gradient-text">Every Learner</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        Concepto is built for the diversity of human minds. Not as separate experiences, but as one adaptive system.
                    </p>
                </div>

                {/* Personas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {learnerPersonas.map((persona, index) => {
                        const Icon = persona.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105"
                            >
                                {/* Card Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${persona.bgColor} opacity-50 group-hover:opacity-70 transition-opacity`} />

                                {/* Card Content */}
                                <div className="relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200 group-hover:border-purple-300 rounded-2xl h-full">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${persona.color} rounded-xl items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {persona.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-accessible leading-relaxed">
                                        {persona.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Emphasis Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 text-center border-2 border-purple-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Inclusion Without Segregation
                        </h3>
                        <p className="text-lg text-gray-700 text-accessible leading-relaxed mb-6">
                            Concepto doesn't create separate experiences for different learners. Instead, it provides{' '}
                            <strong className="text-purple-600">one intelligent system</strong> that adapts its presentation, pacing, and format based on how each individual learns best.
                        </p>
                        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            <span className="font-semibold text-purple-900">
                                One System. Many Experiences. Zero Barriers.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
