'use client';

import { Headphones, Image, FileText, Gauge, Bot, Layers } from 'lucide-react';

export default function ConceptModules() {
    const modules = [
        {
            icon: Headphones,
            title: 'Audio-First Learning Concepts',
            description: 'Human-style narration that explains concepts through sound. Adjustable tone, speed, and complexity for different learning needs.',
            badge: 'Concept Preview',
            features: ['Natural voice synthesis', 'Adaptive pacing', 'Multi-language support'],
        },
        {
            icon: Image,
            title: 'Visual-First Comprehension Tools',
            description: 'Comics, diagrams, and visual stories that make abstract concepts concrete and memorable.',
            badge: 'Concept Preview',
            features: ['Comic-style explanations', 'Interactive diagrams', 'Flow visualizations'],
        },
        {
            icon: FileText,
            title: 'Simplified & Adaptive Content',
            description: 'Content that automatically adjusts complexity, structure, and presentation based on learner needs.',
            badge: 'Concept Preview',
            features: ['Complexity slider', 'Structured summaries', 'Concept breakdowns'],
        },
        {
            icon: Gauge,
            title: 'Focus, Pacing & Structure Support',
            description: 'Tools to help learners maintain focus, control their pace, and navigate content in ways that work for their cognition.',
            badge: 'Concept Preview',
            features: ['Distraction-free modes', 'Custom pacing controls', 'Progress tracking'],
        },
        {
            icon: Bot,
            title: 'AI-Assisted Learning Companion',
            description: 'An intelligent assistant that understands how you learn and adapts explanations, examples, and support accordingly.',
            badge: 'Concept Preview',
            features: ['Personalized explanations', 'Confusion detection', 'Adaptive questioning'],
        },
        {
            icon: Layers,
            title: 'Multi-Modal Content Synthesis',
            description: 'Seamlessly combines audio, visual, and text-based learning into one cohesive, adaptive experience.',
            badge: 'Concept Preview',
            features: ['Synchronized experiences', 'Format switching', 'Cross-modal learning'],
        },
    ];

    return (
        <section id="modules" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                        <span className="text-sm font-semibold text-purple-900">
                            Proposed Capabilities
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        <span className="gradient-text">Concept Modules</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        These are the foundational capabilities we're designing to make learning truly adaptive and accessible.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {modules.map((module, index) => {
                        const Icon = module.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                                        {module.badge}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="inline-flex w-16 h-16 gradient-primary rounded-xl items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {module.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-accessible leading-relaxed mb-6">
                                    {module.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Important Note */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 text-center border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                            These are Conceptual Modules
                        </h3>
                        <p className="text-gray-700 text-accessible leading-relaxed">
                            Concepto is currently in the <strong>concept and research phase</strong>. These modules represent our vision for how adaptive learning technology should work. We're collaborating with educators, accessibility experts, and learners to refine these ideas before building them into reality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
