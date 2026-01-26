"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Brain, Headphones, BookOpen, Sparkles } from "lucide-react";

const content = [
    {
        title: "Visual Learning Paths",
        description:
            "Transform complex concepts into visual stories. Our AI-powered system creates custom visual explanations tailored to how your mind processes information. See concepts come to life through diagrams, animations, and interactive visualizations.",
        content: (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 text-white p-8">
                <Brain className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold">Visual Learning</h3>
            </div>
        ),
    },
    {
        title: "Audio Explanations",
        description:
            "Listen and learn at your own pace. Every concept is transformed into clear, engaging audio explanations. Perfect for auditory learners, multitasking, or accessibility needs. Your learning companion that speaks your language.",
        content: (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-8">
                <Headphones className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold">Audio Learning</h3>
            </div>
        ),
    },
    {
        title: "Interactive Quizzes",
        description:
            "Test your understanding with adaptive quizzes that adjust to your learning level. Get instant feedback, track your progress, and identify areas for improvement. Learning that evolves with you.",
        content: (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 text-white p-8">
                <BookOpen className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold">Smart Quizzes</h3>
            </div>
        ),
    },
    {
        title: "Personalized Experience",
        description:
            "Your learning journey is unique. Concepto adapts to your pace, preferences, and cognitive style. Choose how you want to learn—visual, audio, text, or a combination. Education that celebrates how your mind works.",
        content: (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 text-white p-8">
                <Sparkles className="w-20 h-20 mb-4" />
                <h3 className="text-2xl font-bold">Your Way</h3>
            </div>
        ),
    },
];

export default function ConceptModulesSticky() {
    return (
        <section id="modules" className="py-24 md:py-36 bg-[#020617]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        How{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Concepto Works
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">
                        Scroll to explore our adaptive learning modules
                    </p>
                </div>

                {/* Sticky Scroll Component */}
                <StickyScroll content={content} />
            </div>
        </section>
    );
}
