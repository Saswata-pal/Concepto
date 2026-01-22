'use client';

import { Sparkles } from 'lucide-react';

export default function Vision() {
    return (
        <section id="vision" className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-cyan-950/30 overflow-hidden transition-colors duration-500">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10"></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Bridge Statement */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-purple-200 dark:border-purple-800 shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            The Concepto Difference
                        </h3>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-accessible leading-relaxed mb-6">
                            We're not just building another learning platform. We're <strong className="text-purple-600 dark:text-purple-400">reimagining education</strong> from the ground up—starting with the belief that <strong className="text-pink-600 dark:text-pink-400">every mind deserves to learn in the way that works for them</strong>.
                        </p>
                        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-500 dark:via-pink-500 dark:to-cyan-500 rounded-full shadow-lg">
                            <p className="text-base md:text-lg font-semibold text-white">
                                Accessibility isn't a feature—it's our foundation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
