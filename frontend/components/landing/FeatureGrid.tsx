'use client';

import { FileText, Video, Image, Globe, Headphones, Code, BookOpen, FileSpreadsheet, Presentation } from 'lucide-react';

const features = [
    { icon: FileText, title: 'PDF Analysis', description: 'Extract concepts from documents', color: 'from-purple-500 to-indigo-500' },
    { icon: Video, title: 'Video Learning', description: 'Transcribe and analyze lectures', color: 'from-pink-500 to-red-500' },
    { icon: Image, title: 'Visual Processing', description: 'Understand diagrams and images', color: 'from-teal-500 to-cyan-500' },
    { icon: Globe, title: 'Web Articles', description: 'Summarize online content', color: 'from-blue-500 to-cyan-500' },
    { icon: Headphones, title: 'Audio Content', description: 'Transcribe podcasts and lectures', color: 'from-green-500 to-teal-500' },
    { icon: Code, title: 'Code Analysis', description: 'Understand programming concepts', color: 'from-yellow-500 to-orange-500' },
    { icon: BookOpen, title: 'eBooks', description: 'Interactive reading experience', color: 'from-indigo-500 to-purple-500' },
    { icon: FileSpreadsheet, title: 'Data Files', description: 'Analyze spreadsheets and data', color: 'from-cyan-500 to-blue-500' },
    { icon: Presentation, title: 'Presentations', description: 'Extract key slides and points', color: 'from-orange-500 to-red-500' },
];

export default function FeatureGrid() {
    return (
        <section id="features" className="relative py-24 bg-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Learn from <span className="gradient-text-vibrant">Any Format</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Concepto's AI understands and analyzes every type of learning resource
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group glass-card rounded-2xl p-6 border border-white/10 hover-lift cursor-pointer"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>

                                {/* Hover Effect - AI Badge */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="inline-flex items-center space-x-1 px-3 py-1 bg-teal-500/20 rounded-full border border-teal-500/30">
                                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                                        <span className="text-xs text-teal-400 font-semibold">AI-Powered</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">And many more formats coming soon...</p>
                    <a
                        href="#demo"
                        className="inline-block px-8 py-4 glass-card text-white font-semibold rounded-xl border border-teal-500/30 hover:bg-teal-500/10 transition-all"
                    >
                        Explore All Features
                    </a>
                </div>
            </div>
        </section>
    );
}
