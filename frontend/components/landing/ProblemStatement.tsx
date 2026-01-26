'use client';

import { X, Check } from 'lucide-react';

export default function ProblemStatement() {
    const painPoints = [
        'Overwhelmed by scattered learning resources',
        'Can\'t process different content formats efficiently',
        'One-size-fits-all learning doesn\'t work',
        'Wasting time searching for relevant information'
    ];

    const solutions = [
        'Unified platform for all resource types',
        'AI analyzes PDFs, videos, images, and more',
        'Personalized to your learning style',
        'Instant insights and knowledge extraction'
    ];

    return (
        <section id="problem" className="relative py-24 bg-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Learning Shouldn't Be This <span className="gradient-text-vibrant">Hard</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Traditional learning tools force you to adapt to them. Concepto adapts to you.
                    </p>
                </div>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Before - Pain Points */}
                    <div className="glass-card rounded-2xl p-8 border border-red-500/20">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                <X className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Without Concepto</h3>
                        </div>
                        <ul className="space-y-4">
                            {painPoints.map((point, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After - Solutions */}
                    <div className="glass-card rounded-2xl p-8 border border-teal-500/20 glow-teal">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <Check className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">With Concepto</h3>
                        </div>
                        <ul className="space-y-4">
                            {solutions.map((solution, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Customer Testimonial */}
                <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                            👩‍🎓
                        </div>
                        <div className="flex-1">
                            <p className="text-lg md:text-xl text-gray-300 italic mb-4">
                                "Concepto transformed how I learn. Instead of juggling multiple tools, I can analyze any resource—PDFs, videos, articles—all in one place. It's like having a personal AI tutor that actually understands how I learn best."
                            </p>
                            <div>
                                <div className="font-semibold text-white">Maria Rodriguez</div>
                                <div className="text-sm text-gray-400">Computer Science Student, MIT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
