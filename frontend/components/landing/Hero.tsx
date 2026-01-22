'use client';

import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';
import Link from 'next/link';
import { Particles } from '@/components/ui/particles';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 transition-colors duration-500">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Particles Effect */}
            <Particles
                className="absolute inset-0"
                quantity={80}
                ease={80}
                color="#a855f7"
                refresh={false}
            />

            {/* Shooting Stars & Stars Background (Dark Mode Only) */}
            <div className="hidden dark:block absolute inset-0">
                <ShootingStars
                    starColor="#9E00FF"
                    trailColor="#2EB9DF"
                    minSpeed={10}
                    maxSpeed={20}
                />
                <StarsBackground
                    starDensity={0.0002}
                    twinkleProbability={0.8}
                />
            </div>

            {/* Circular Path Animated Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large circular orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
                    <div className="absolute inset-0 animate-circular-orbit">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40" />
                    </div>
                    <div className="absolute inset-0 animate-circular-orbit-reverse" style={{ animationDelay: '3s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40" />
                    </div>
                </div>

                {/* Medium circular orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                    <div className="absolute inset-0 animate-circular-orbit" style={{ animationDelay: '1.5s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full blur-xl opacity-50" />
                    </div>
                    <div className="absolute inset-0 animate-circular-orbit-reverse" style={{ animationDelay: '4.5s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />
                    </div>
                </div>

                {/* Floating gradient orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-600 via-violet-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
                <div className="text-center space-y-8">
                    {/* Badge with glassmorphism */}
                    <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl hover:bg-white/15 transition-all group">
                        <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                            A Conceptual Learning Platform
                        </span>
                        <Zap className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                    </div>

                    {/* Main Headline with animated gradient */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="block text-gray-900 dark:text-white drop-shadow-2xl transition-colors">Learning,</span>
                        <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                            Reimagined for Every Mind
                        </span>
                    </h1>

                    {/* Subheadline with enhanced styling */}
                    <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-300 text-accessible leading-relaxed transition-colors">
                        Concepto is a <strong className="text-gray-900 dark:text-white font-bold transition-colors">conceptual education ecosystem</strong> designed to adapt to how different humans learn—through{' '}
                        <span className="text-purple-700 dark:text-purple-400 font-semibold transition-colors">sight</span>,{' '}
                        <span className="text-pink-700 dark:text-pink-400 font-semibold transition-colors">sound</span>,{' '}
                        <span className="text-blue-700 dark:text-blue-400 font-semibold transition-colors">structure</span>,{' '}
                        <span className="text-cyan-700 dark:text-cyan-400 font-semibold transition-colors">pace</span>, and{' '}
                        <span className="text-violet-700 dark:text-violet-400 font-semibold transition-colors">cognition</span>.
                    </p>

                    {/* Vision Statement */}
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-700 dark:text-gray-400 italic transition-colors">
                        Imagining a future where accessibility is not an add-on, but the foundation.
                    </p>

                    {/* CTA Buttons with modern styling */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <Link
                            href="#vision"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all focus-visible-ring inline-flex items-center space-x-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative flex items-center space-x-2">
                                <Brain className="w-5 h-5" />
                                <span>See How Concepto Thinks</span>
                            </span>
                            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#why-concepto"
                            className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/20 hover:border-purple-400/50 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all focus-visible-ring"
                        >
                            Why Accessibility Matters
                        </Link>
                    </div>

                    {/* Trust Indicators with glassmorphism */}
                    <div className="pt-12 flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-white/5 backdrop-blur-xl rounded-full border border-gray-200 dark:border-white/10 transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                            <span className="text-sm text-gray-800 dark:text-gray-300 font-medium transition-colors">Concept Initiative</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-white/5 backdrop-blur-xl rounded-full border border-gray-200 dark:border-white/10 transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                            <span className="text-sm text-gray-800 dark:text-gray-300 font-medium transition-colors">Accessibility-First Design</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-white/5 backdrop-blur-xl rounded-full border border-gray-200 dark:border-white/10 transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <span className="text-sm text-gray-800 dark:text-gray-300 font-medium transition-colors">Human-Centered AI</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator with modern styling */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2 bg-white/5 backdrop-blur-xl">
                    <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
