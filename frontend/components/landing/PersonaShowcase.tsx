'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useQueries } from '@/hooks/useQueries';

export default function PersonaShowcase() {
    const { personas } = useQueries();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPersona = () => {
        setCurrentIndex((prev) => (prev + 1) % personas.length);
    };

    const prevPersona = () => {
        setCurrentIndex((prev) => (prev - 1 + personas.length) % personas.length);
    };

    const currentPersona = personas[currentIndex];

    return (
        <section id="personas" className="relative py-24 bg-gradient-to-b from-[#1a2332] to-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built for <span className="gradient-text-vibrant">Everyone</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From students to professionals, Concepto adapts to your unique learning needs
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Persona Avatar */}
                            <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-6xl flex-shrink-0">
                                {currentPersona.image}
                            </div>

                            {/* Persona Content */}
                            <div className="flex-1">
                                <div className="mb-4">
                                    <h3 className="text-3xl font-bold text-white mb-1">{currentPersona.name}</h3>
                                    <p className="text-teal-400 font-semibold">{currentPersona.role}</p>
                                </div>

                                <p className="text-lg text-gray-300 mb-6 italic">
                                    "{currentPersona.useCase}"
                                </p>

                                <div className="space-y-3">
                                    {currentPersona.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevPersona}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 glass-card rounded-full hover:bg-white/10 transition-all"
                        aria-label="Previous persona"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextPersona}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 glass-card rounded-full hover:bg-white/10 transition-all"
                        aria-label="Next persona"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {personas.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'w-8 bg-teal-500'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to persona ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
