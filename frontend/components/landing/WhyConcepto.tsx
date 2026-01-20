'use client';

import { Shield, Heart, Lightbulb, Users } from 'lucide-react';

export default function WhyConcepto() {
    const differentiators = [
        {
            icon: Shield,
            title: 'Accessibility-First Design Philosophy',
            description: 'We don\'t add accessibility as a feature—we build it into the foundation. Every decision starts with "How does this work for everyone?"',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Heart,
            title: 'Human-Centered AI',
            description: 'Our AI serves humans, not the other way around. It adapts to how you think, not how it was trained to think.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Lightbulb,
            title: 'No One-Size-Fits-All Education',
            description: 'We reject the idea that all learners should consume content the same way. Diversity in learning is strength, not a problem.',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: Users,
            title: 'Designed with Empathy, Not Assumptions',
            description: 'We collaborate with diverse learners, educators, and accessibility experts—not just technologists—to build something truly inclusive.',
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section id="why-concepto" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Why <span className="gradient-text">Concepto</span> is Different
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        We're not building another learning platform. We're reimagining what education technology can be.
                    </p>
                </div>

                {/* Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Gradient Accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                                <div className="p-8">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-accessible leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Comparison Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 border-2 border-purple-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                            Traditional vs. Concepto Approach
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Traditional Approach */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3" />
                                    Traditional Platforms
                                </h4>
                                <div className="space-y-3 text-gray-600">
                                    <p className="flex items-start">
                                        <span className="mr-2">❌</span>
                                        <span>One format for all learners</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">❌</span>
                                        <span>Accessibility as an afterthought</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">❌</span>
                                        <span>Fixed pacing and structure</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">❌</span>
                                        <span>Assumes all minds work the same</span>
                                    </p>
                                </div>
                            </div>

                            {/* Concepto Approach */}
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                                    Concepto's Vision
                                </h4>
                                <div className="space-y-3 text-gray-700">
                                    <p className="flex items-start">
                                        <span className="mr-2">✅</span>
                                        <span className="font-medium">Adaptive multi-modal learning</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">✅</span>
                                        <span className="font-medium">Accessibility as foundation</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">✅</span>
                                        <span className="font-medium">Learner-controlled experience</span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="mr-2">✅</span>
                                        <span className="font-medium">Celebrates cognitive diversity</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
