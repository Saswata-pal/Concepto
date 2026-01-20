'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'Is Concepto a real product I can use today?',
            answer: 'No, Concepto is currently a concept initiative in the research and design phase. We\'re collaborating with educators, accessibility experts, and learners to understand real needs before building. We believe in doing it right, not doing it fast.',
        },
        {
            question: 'Why focus on accessibility from the start?',
            answer: 'Because accessibility isn\'t a feature—it\'s a fundamental right. Traditional education platforms exclude millions of learners not because they can\'t learn, but because systems aren\'t designed for how they learn. We\'re building from the ground up to serve everyone.',
        },
        {
            question: 'Who is Concepto designed for?',
            answer: 'Concepto is designed for every learner—visual thinkers, auditory processors, neurodiverse individuals, those with different pacing needs, and everyone in between. Good accessibility design makes learning better for everyone, regardless of ability.',
        },
        {
            question: 'How is this different from existing learning platforms?',
            answer: 'Most platforms add accessibility as an afterthought. Concepto makes it the foundation. We don\'t create one experience for all—we create one intelligent system that adapts to how each individual learns best.',
        },
        {
            question: 'What AI technologies will Concepto use?',
            answer: 'We\'re exploring human-centered AI for adaptive content generation, personalized explanations, and multi-modal learning synthesis. Our AI will serve learners, respect privacy, and maintain user dignity—never exploit data or manipulate behavior.',
        },
        {
            question: 'When will Concepto be available?',
            answer: 'We don\'t have a timeline. We\'re committed to a research-first approach, working closely with the communities we serve. We\'ll launch when it\'s ready to truly serve diverse learners—not when it\'s convenient.',
        },
        {
            question: 'Can I contribute or provide feedback?',
            answer: 'Absolutely! We\'re building this with learners, educators, and accessibility experts—not just for them. Your insights, experiences, and feedback are invaluable. Reach out through our contact form to get involved.',
        },
        {
            question: 'Will Concepto be free or paid?',
            answer: 'We\'re still exploring sustainable models. Our goal is to make adaptive learning accessible to as many people as possible while ensuring we can maintain quality and continue development. We\'re considering freemium, institutional licensing, and grant-funded options.',
        },
        {
            question: 'How will you ensure privacy and data protection?',
            answer: 'User privacy and dignity are non-negotiable. We\'re committed to transparent data practices, minimal data collection, and giving users full control over their information. No selling data. No dark patterns. Ever.',
        },
        {
            question: 'What makes you qualified to build this?',
            answer: 'We\'re not claiming to have all the answers—that\'s why we\'re taking a collaborative, research-first approach. We\'re working with accessibility experts, educators, cognitive scientists, and most importantly, diverse learners themselves to build something truly inclusive.',
        },
    ];

    return (
        <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-accessible">
                        Everything you need to know about Concepto and our vision.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus-visible-ring"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 text-accessible leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all focus-visible-ring"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
