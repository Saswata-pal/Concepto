"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const StickyBanner = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={cn(
                "sticky top-0 z-50 flex items-center justify-center px-4 py-3 text-center text-sm font-medium",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
