'use client';

import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export default function Vision() {
    const principles = [
        {
            icon: Heart,
            title: 'Inclusion Without Segregation',
            description: 'One system that adapts to every learner, not separate systems for different abilities.',
        },
        {
            icon: Users,
            title: 'Accessibility as Foundation',
            description: 'Not an afterthought or add-on—accessibility is built into the core architecture.',
        },
        {
            icon: Lightbulb,
            title: 'Human Diversity is Strength',
            description: 'Different minds learn differently. That\'s not a problem to solve—it\'s a reality to embrace.',
        },
        {
            icon: Target,
            title: 'Education Should Adapt',
            description: 'Instead of forcing humans to adapt to rigid systems, we build systems that adapt to humans.',
        },
    ];

    return (
        <section id="vision" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="gradient-text">Vision & Philosophy</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        Traditional education excludes millions of learners. Not because they can't learn—but because systems aren't designed for how they learn.
                    </p>
                </div>

                {/* Manifesto */}
                <div className="mb-20 max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-purple-100">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            The Concepto Manifesto
                        </h3>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 text-accessible">
                            <p className="leading-relaxed">
                                <strong className="text-purple-600">We believe</strong> that every human deserves to learn in the way that works for their mind—not in the way that's easiest to build.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-pink-600">We recognize</strong> that visual learners, auditory learners, neurodiverse thinkers, and those with different abilities aren't edge cases—they're the majority.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-blue-600">We commit</strong> to building technology that serves humans, not the other way around.
                            </p>
                            <p className="leading-relaxed">
                                <strong className="text-indigo-600">We imagine</strong> a future where "accessible learning" is simply called "learning."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                                            {principle.title}
                                        </h4>
                                        <p className="text-gray-600 text-accessible leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bridge Statement */}
                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                        <p className="text-lg font-semibold text-purple-900">
                            Concepto is the bridge between human diversity and learning systems
                        </p>
                    </div>
                    <p className="text-gray-600 text-accessible">
                        We're not just building features. We're reimagining what education technology can be when it starts with empathy.
                    </p>
                </div>
            </div>
        </section>
    );
}
