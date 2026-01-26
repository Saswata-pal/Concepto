'use client';

import { Sparkles } from 'lucide-react';

export default function Vision() {
    return (
        <section id="vision" className="relative py-12 md:py-20 bg-[#020617] overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bridge Statement */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-white/10 shadow-3xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            The Concepto Difference
                        </h3>
                        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium mb-10">
                            We're not just building another learning platform. We're <strong className="text-purple-400 font-bold">reimagining education</strong> from the ground up—starting with the belief that <strong className="text-pink-400 font-bold">every mind deserves to learn in the way that works for them</strong>.
                        </p>
                        <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
                            <p className="text-lg md:text-xl font-bold text-white">
                                Accessibility isn't a feature—it's our foundation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
