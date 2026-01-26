"use client";

import React from "react";
import { motion } from "motion/react";
import ConceptoLogo from "./ConceptoLogo";

export const LoaderOne = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1729]">
            <div className="flex flex-col items-center gap-4">
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ConceptoLogo className="w-24 h-24" />
                    </motion.div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-white font-semibold text-lg"
                >
                    <span className="gradient-text-vibrant">Concepto</span>
                </motion.div>

                {/* Loading Dots */}
                <div className="flex gap-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 bg-teal-400 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mt-4">
                    <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
