"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10",
                className
            )}
        >
            {children}
        </nav>
    );
};

export const NavBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16",
                className
            )}
        >
            {children}
        </div>
    );
};

export const NavItems = ({
    items,
    className,
}: {
    items: { name: string; link: string }[];
    className?: string;
}) => {
    return (
        <div className={cn("flex items-center space-x-8", className)}>
            {items.map((item, idx) => (
                <Link
                    key={`nav-item-${idx}`}
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export const NavbarLogo = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <Link href="/" className={cn("flex items-center space-x-2 group", className)}>
            {children}
        </Link>
    );
};

export const NavbarButton = ({
    children,
    variant = "primary",
    className,
    onClick,
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
}) => {
    const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all focus-visible-ring";
    const variantStyles = {
        primary: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105",
        secondary: "glass-card text-white border border-white/10 hover:bg-white/10",
    };

    return (
        <button
            onClick={onClick}
            className={cn(baseStyles, variantStyles[variant], className)}
        >
            {children}
        </button>
    );
};

export const MobileNav = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("md:hidden", className)}>
            {children}
        </div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between px-4 h-16",
                className
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
    className,
}: {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}) => {
    return (
        <button
            onClick={onClick}
            className={cn("text-white p-2", className)}
            aria-label="Toggle menu"
        >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    );
};

export const MobileNavMenu = ({
    children,
    isOpen,
    onClose,
    className,
}: {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn("glass-card border-t border-white/10 overflow-hidden", className)}
                >
                    <div className="px-4 py-4 space-y-3">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
