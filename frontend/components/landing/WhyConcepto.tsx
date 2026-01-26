'use client';

import { Shield, Heart, Lightbulb, Users } from 'lucide-react';

export default function WhyConcepto() {
    const differentiators = [
        {
            icon: Shield,
            title: 'Accessibility-First Design Philosophy',
            description: 'We don\'t add accessibility as a feature—we build it into the foundation. Every decision starts with "How does this work for everyone?"',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Heart,
            title: 'Human-Centered AI',
            description: 'Our AI serves humans, not the other way around. It adapts to how you think, not how it was trained to think.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: Lightbulb,
            title: 'No One-Size-Fits-All Education',
            description: 'We reject the idea that all learners should consume content the same way. Diversity in learning is strength, not a problem.',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: Users,
            title: 'Designed with Empathy, Not Assumptions',
            description: 'We collaborate with diverse learners, educators, and accessibility experts—not just technologists—to build something truly inclusive.',
            gradient: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section id="why-concepto" className="py-24 md:py-36 bg-[#020617] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Why <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Concepto</span> is Different
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                        We're not building another learning platform. We're reimagining what education technology can be.
                    </p>
                </div>

                {/* Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
                            >
                                {/* Glow Effect on Hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur transition duration-500`} />

                                <div className="relative p-10 md:p-12">
                                    {/* Icon */}
                                    <div className="mb-8">
                                        <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl items-center justify-center group-hover:scale-110 transition-transform shadow-2xl overflow-hidden relative`}>
                                            <div className="absolute inset-0 bg-white/20 group-hover:scale-150 transition-transform duration-500" />
                                            <Icon className="w-10 h-10 text-white relative z-10" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
