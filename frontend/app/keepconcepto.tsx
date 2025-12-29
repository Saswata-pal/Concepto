'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Sparkles, BookOpen, Video, FileText, Headphones, Brain,
    Check, ChevronDown, ChevronRight, ArrowRight, Star,
    GraduationCap, Briefcase, Building2, Target, Zap,
    MessageSquare, HelpCircle, Download, PlayCircle,
    Users, BarChart, Shield, Globe, Award, TrendingUp,
    Clock, CheckCircle, XCircle
} from 'lucide-react';

export default function KeepConceptoLanding() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-[#F5F1E8] text-[#1a1a1a]">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-[#F5F1E8] border-b border-[#E5DCC8]">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B4CE6] via-[#9D7AFF] to-[#B794F6] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-[#1a1a1a]">
                            KeepConcepto
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="#services" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6B4CE6] transition-colors">
                            SERVICES
                        </a>
                        <a href="#case-studies" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6B4CE6] transition-colors">
                            CASE STUDIES
                        </a>
                        <a href="#insights" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6B4CE6] transition-colors">
                            INSIGHTS
                        </a>
                        <a href="#about" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6B4CE6] transition-colors">
                            ABOUT
                        </a>
                        <a href="#contact" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6B4CE6] transition-colors">
                            CONTACTS
                        </a>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/register"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6B4CE6] via-[#9D7AFF] to-[#FF6B9D] text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                No Wasted Learning.
                                <br />
                                <span className="bg-gradient-to-r from-[#6B4CE6] via-[#9D7AFF] to-[#FF6B9D] bg-clip-text text-transparent">
                                    No Wasted Time.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                                We transform videos and documents into exactly what you need, and nothing you don't. Forget bloated
                                courses or over-engineered features. We deliver a lean, custom, and adaptive
                                learning platform designed to solve your specific challenges and hit your goals.
                            </p>
                            <Link
                                href="/register"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#6B4CE6] via-[#9D7AFF] to-[#FF6B9D] text-white font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Right Illustration */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#6B4CE6]/20 via-[#9D7AFF]/20 to-[#FF6B9D]/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white rounded-3xl border-2 border-[#E5DCC8] p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#6B4CE6] bg-gradient-to-r from-[#6B4CE6]/10 to-transparent">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6B4CE6] to-[#9D7AFF] flex items-center justify-center">
                                            <Video className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Video to Audio</div>
                                            <div className="text-xs text-gray-500">Learn on the go</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#FF6B9D] bg-gradient-to-r from-[#FF6B9D]/10 to-transparent">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B9D] to-[#FF8FAB] flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Smart Summaries</div>
                                            <div className="text-xs text-gray-500">Visual concepts</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#22C55E] bg-gradient-to-r from-[#22C55E]/10 to-transparent">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center">
                                            <Brain className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">AI Quizzes</div>
                                            <div className="text-xs text-gray-500">Test knowledge</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                question: 'How long does a typical project take?',
                                answer: 'It depends on the scope. Simple learning modules take 1-2 weeks, while larger platforms may take 3-5 weeks with active collaboration.'
                            },
                            {
                                question: 'Will you handle hosting, domain, and deployment?',
                                answer: 'Yes! We provide full-service deployment including hosting setup, domain configuration, and ongoing maintenance support.'
                            },
                            {
                                question: 'What if I need support after launch?',
                                answer: 'We offer 24/7 technical support and maintenance packages to ensure your platform runs smoothly post-launch.'
                            },
                            {
                                question: 'Do you work with international clients?',
                                answer: 'Absolutely! We work with clients globally and support multiple languages and time zones.'
                            },
                            {
                                question: 'Do you offer competitive pricing for startups?',
                                answer: 'Yes, we have special pricing packages for startups and early-stage companies. Contact us for details.'
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="border-2 border-[#E5DCC8] rounded-2xl overflow-hidden bg-white hover:border-[#6B4CE6] transition-all"
                            >
                                <button
                                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold hover:bg-[#F5F1E8] transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${activeFAQ === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {activeFAQ === index && (
                                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-[#E5DCC8] pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                        <h3 className="text-3xl font-bold mb-8">
                            Learning Engineering & AI Integration
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: GraduationCap,
                                title: 'Custom Learning Platforms',
                                desc: 'We build fast, scalable, and adaptive learning applications tailored to your exact needs.',
                                gradient: 'from-[#6B4CE6] to-[#9D7AFF]'
                            },
                            {
                                icon: Brain,
                                title: 'AI & Automation',
                                desc: 'From intelligent content extraction to workflow automation and data analysis, we integrate AI that delivers results.',
                                gradient: 'from-[#FF6B9D] to-[#FFB366]'
                            },
                            {
                                icon: Target,
                                title: 'Adaptive Learning & Performance',
                                desc: 'Thoughtful, high-performance learning experiences designed for user retention and blazing-fast load times.',
                                gradient: 'from-[#22C55E] to-[#10B981]'
                            },
                            {
                                icon: Shield,
                                title: 'Proactive Maintenance',
                                desc: 'We handle all updates, security, and performance tuning to keep your platform reliable and secure.',
                                gradient: 'from-[#3B82F6] to-[#06B6D4]'
                            },
                            {
                                icon: MessageSquare,
                                title: 'On-Demand Support',
                                desc: 'Get expert technical support to handle any issues and keep your learning platform running smoothly.',
                                gradient: 'from-[#8B5CF6] to-[#A78BFA]'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Technical SEO & Optimization',
                                desc: 'We continuously monitor and optimize your platform for peak performance.',
                                gradient: 'from-[#EC4899] to-[#F472B6]'
                            }
                        ].map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={i}
                                    className="group p-6 rounded-2xl border-2 border-[#E5DCC8] bg-white hover:border-[#6B4CE6] hover:shadow-xl transition-all cursor-pointer"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a1a1a] text-white py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B4CE6] to-[#9D7AFF] flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-bold">KeepConcepto</span>
                            </div>
                            <p className="text-sm text-gray-400">
                                Helping you build fast, user-focused learning platforms.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Contact</h4>
                            <a href="mailto:support@keepconcepto.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                                support@keepconcepto.com
                            </a>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Social</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div>Instagram</div>
                                <div>Facebook</div>
                                <div>Twitter</div>
                                <div>LinkedIn</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Company</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div>About</div>
                                <div>Services</div>
                                <div>Contact Us</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                        © 2025 KEEPCONCEPTO. All rights reserved
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}
