'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useQueries } from '@/hooks/useQueries';

export default function FAQ() {
    const { faqs } = useQueries();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24 bg-[#0f1729] overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="gradient-text-vibrant">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Everything you need to know about Concepto
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-slide-up">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 glass-card text-white font-semibold rounded-xl border border-teal-500/30 hover:bg-teal-500/10 transition-all"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
