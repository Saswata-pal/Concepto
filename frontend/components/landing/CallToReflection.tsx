'use client';

import { MessageCircle, Mail } from 'lucide-react';

export default function CallToReflection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Question */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    What if education adapted to humans—
                    <br />
                    <span className="text-purple-100">instead of humans adapting to systems?</span>
                </h2>

                {/* Supporting Text */}
                <p className="text-xl md:text-2xl text-purple-100 mb-12 text-accessible">
                    That's the future we're imagining. And we'd love your voice in shaping it.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:hello@concepto.app"
                        className="group px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all focus-visible-ring inline-flex items-center space-x-2"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Share Your Feedback</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-purple-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-purple-800/70 hover:shadow-lg transition-all focus-visible-ring inline-flex items-center space-x-2"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Join the Conversation</span>
                    </a>
                </div>

                {/* Footer Note */}
                <p className="mt-12 text-purple-100 text-sm">
                    Every voice matters. Every perspective counts. Let's build this together.
                </p>
            </div>
        </section>
    );
}
