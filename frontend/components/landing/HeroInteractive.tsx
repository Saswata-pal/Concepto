'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Video, Image as ImageIcon, Code, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

const resourceTypes = [
    { id: 'document', label: 'Document', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'video', label: 'Video', icon: Video, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'image', label: 'Image', icon: ImageIcon, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { id: 'code', label: 'Code', icon: Code, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
];

export default function HeroInteractive() {
    const [activeType, setActiveType] = useState(resourceTypes[0]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative bg-[#020617]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="mb-8">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
                            Select Resource Type
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {resourceTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => {
                                        setActiveType(type);
                                        setStep(0);
                                    }}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${activeType.id === type.id
                                            ? 'bg-white/10 border-white/20 text-white'
                                            : 'bg-transparent border-white/5 text-gray-500 hover:border-white/10 hover:text-white'
                                        }`}
                                >
                                    <type.icon className={`w-4 h-4 ${activeType.id === type.id ? type.color : ''}`} />
                                    <span className="text-sm font-medium">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Simulation Content */}
                    <div className="relative min-h-[300px] bg-slate-900/50 rounded-xl border border-white/5 p-6 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeType.id + step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-lg ${activeType.bg}`}>
                                        <activeType.icon className={`w-6 h-6 ${activeType.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {activeType.label} Analysis
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {activeType.id === 'document' && 'Upload PDFs, Word docs, or text files for instant AI-powered analysis.'}
                                            {activeType.id === 'video' && 'Process lecture videos, tutorials, or meetings into structured notes.'}
                                            {activeType.id === 'image' && 'Extract concepts, text, and diagrams from static images or slides.'}
                                            {activeType.id === 'code' && 'Understand complex repositories, documentation, and logic flows.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar / Loading State */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            {step < 3 ? (
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                            ) : (
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            )}
                                            <span className="text-xs font-mono text-blue-400">
                                                {step === 0 && 'Initializing AI...'}
                                                {step === 1 && 'Scanning structure...'}
                                                {step === 2 && 'Extracting core concepts...'}
                                                {step === 3 && 'Analysis Complete.'}
                                            </span>
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-mono">
                                            {step === 0 && '12%'}
                                            {step === 1 && '45%'}
                                            {step === 2 && '89%'}
                                            {step === 3 && '100%'}
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                                            initial={{ width: '0%' }}
                                            animate={{
                                                width: step === 0 ? '12%' : step === 1 ? '45%' : step === 2 ? '89%' : '100%'
                                            }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                        />
                                    </div>

                                    {/* Simulated Output Lines */}
                                    <div className="space-y-2 bg-slate-950/50 p-4 rounded-lg font-mono text-[11px]">
                                        {step >= 1 && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300">
                                                > {activeType.id === 'document' ? 'Identified 12 key sections in "Research_Paper.pdf"' :
                                                    activeType.id === 'video' ? 'Detected 4 speakers and 8 topic shifts' :
                                                        activeType.id === 'image' ? 'Processing visual hierarchy and text' :
                                                            'Mapped 43 function dependencies'}
                                            </motion.div>
                                        )}
                                        {step >= 2 && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-300">
                                                > Generating multi-modal learning pathways...
                                            </motion.div>
                                        )}
                                        {step >= 3 && (
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-300">
                                                > Done! Ready for deep dive.
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom CTA */}
                    <button className="w-full mt-8 group/btn relative flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300">
                        <span>Try This Example</span>
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
        </div>
    );
}
