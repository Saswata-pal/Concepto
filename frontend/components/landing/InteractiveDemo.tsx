'use client';

import { useState } from 'react';
import { Sliders, ToggleLeft, ToggleRight, Play } from 'lucide-react';

export default function InteractiveDemo() {
    const [comprehensionLevel, setComprehensionLevel] = useState(50);
    const [features, setFeatures] = useState({
        visualLearning: true,
        audioSupport: false,
        interactiveQuizzes: true,
        knowledgeGraph: false
    });

    const toggleFeature = (feature: keyof typeof features) => {
        setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
    };

    return (
        <section id="demo" className="relative py-24 bg-gradient-to-b from-[#0f1729] to-[#1a2332] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-large opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Try <span className="gradient-text-vibrant">Concepto</span> Live
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Adjust the settings to see how Concepto personalizes your learning experience
                    </p>
                </div>

                {/* Interactive Demo */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Controls */}
                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                                <Sliders className="w-6 h-6 text-teal-400" />
                                <span>Customize Your Experience</span>
                            </h3>

                            {/* Comprehension Slider */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-gray-300 mb-3">
                                    Knowledge Level: {comprehensionLevel}%
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={comprehensionLevel}
                                    onChange={(e) => setComprehensionLevel(Number(e.target.value))}
                                    className="w-full h-2 bg-indigo-900/50 rounded-full appearance-none cursor-pointer slider"
                                    style={{
                                        background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${comprehensionLevel}%, #1e293b ${comprehensionLevel}%, #1e293b 100%)`
                                    }}
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Beginner</span>
                                    <span>Intermediate</span>
                                    <span>Expert</span>
                                </div>
                            </div>

                            {/* Feature Toggles */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Learning Features</h4>

                                {Object.entries(features).map(([key, value]) => (
                                    <button
                                        key={key}
                                        onClick={() => toggleFeature(key as keyof typeof features)}
                                        className="w-full flex items-center justify-between p-4 glass-card rounded-xl hover:bg-white/5 transition-all"
                                    >
                                        <span className="text-white font-medium">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </span>
                                        {value ? (
                                            <ToggleRight className="w-8 h-8 text-teal-400" />
                                        ) : (
                                            <ToggleLeft className="w-8 h-8 text-gray-600" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Action Button */}
                            <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all flex items-center justify-center space-x-2">
                                <Play className="w-5 h-5" />
                                <span>Start Learning</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Live Preview */}
                    <div className="glass-card rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Live Preview</h3>

                        <div className="space-y-4">
                            {/* Content Complexity Indicator */}
                            <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                                <div className="text-sm font-semibold text-gray-400 mb-2">Content Complexity</div>
                                <div className="text-lg font-bold text-white">
                                    {comprehensionLevel < 33 ? 'Simplified Explanations' :
                                        comprehensionLevel < 66 ? 'Balanced Detail' :
                                            'Advanced Concepts'}
                                </div>
                            </div>

                            {/* Active Features */}
                            <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                                <div className="text-sm font-semibold text-gray-400 mb-3">Active Features</div>
                                <div className="space-y-2">
                                    {Object.entries(features).map(([key, value]) => value && (
                                        <div key={key} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                                            <span className="text-sm text-gray-300">
                                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sample Content */}
                            <div className="bg-indigo-900/30 rounded-xl p-4 border border-white/5">
                                <div className="text-sm font-semibold text-gray-400 mb-3">Sample Learning Path</div>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs text-teal-400 font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-white font-medium">Introduction</div>
                                            <div className="text-xs text-gray-400">Core concepts overview</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs text-cyan-400 font-bold">2</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-white font-medium">Deep Dive</div>
                                            <div className="text-xs text-gray-400">Detailed explanations</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs text-indigo-400 font-bold">3</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm text-white font-medium">Practice</div>
                                            <div className="text-xs text-gray-400">Interactive exercises</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
