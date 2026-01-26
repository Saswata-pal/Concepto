'use client';

import { Brain, Target, TrendingUp, Zap } from 'lucide-react';

export default function ResearchInsights() {
    return (
        <section id="research" className="relative py-24 bg-gradient-to-b from-[#1a2332] to-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Research <span className="gradient-text-vibrant">Insights</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Our approach is backed by extensive research into learning patterns and user needs
                    </p>
                </div>

                {/* Research Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* User Pain Points */}
                    <div className="glass-card rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">User Pain Points</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Difficulty processing multiple content formats</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Lack of personalization in learning tools</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Time wasted searching for relevant information</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Fragmented learning experience across platforms</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Solutions */}
                    <div className="glass-card rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Solutions</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Universal AI that understands all content types</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Adaptive learning paths based on your style</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Instant knowledge extraction and insights</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="text-teal-400 font-bold">•</span>
                                <span>Unified platform for all learning resources</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Market Gap */}
                <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Market Gap Analysis</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Current learning platforms fall into three categories: content-specific (like Khan Academy for videos),
                        general AI assistants (like ChatGPT), or search engines. None combine multi-format analysis with
                        personalized, interactive learning experiences.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                            <div className="text-2xl font-bold text-teal-400 mb-1">73%</div>
                            <div className="text-sm text-gray-400">of learners use 3+ platforms</div>
                        </div>
                        <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">5.2hrs</div>
                            <div className="text-sm text-gray-400">wasted weekly on tool-switching</div>
                        </div>
                        <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                            <div className="text-2xl font-bold text-indigo-400 mb-1">89%</div>
                            <div className="text-sm text-gray-400">want personalized learning</div>
                        </div>
                    </div>
                </div>

                {/* Category Innovation */}
                <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Why Concepto is Different</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Concepto creates a new category: <strong className="text-teal-400">Universal Learning Intelligence</strong>.
                        We're not just another AI tool or content platform—we're the first system that truly adapts to how each
                        individual learns, regardless of the source material.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-teal-400 font-bold">1</span>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">Multi-Modal AI</div>
                                <div className="text-sm text-gray-400">Process any content type seamlessly</div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-cyan-400 font-bold">2</span>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">Adaptive Learning</div>
                                <div className="text-sm text-gray-400">Personalized to your unique style</div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-indigo-400 font-bold">3</span>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">Knowledge Synthesis</div>
                                <div className="text-sm text-gray-400">Connect concepts across sources</div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-purple-400 font-bold">4</span>
                            </div>
                            <div>
                                <div className="font-semibold text-white mb-1">Interactive Engagement</div>
                                <div className="text-sm text-gray-400">Active learning, not passive consumption</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
