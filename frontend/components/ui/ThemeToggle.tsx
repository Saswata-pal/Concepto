'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
        // Check if theme preference exists in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
            document.documentElement.classList.toggle('light', savedTheme === 'light');
        } else {
            // Default to dark theme
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        // Update document classes
        if (newTheme) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };

    // Don't render until mounted to avoid hydration issues
    if (!mounted) {
        return (
            <div className="w-16 h-8 bg-gray-700/30 rounded-full animate-pulse" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center gap-2 px-3 py-2 glass-card rounded-xl hover:bg-white/10 transition-all duration-300 focus-visible-ring"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Toggle Container */}
            <div className="relative w-12 h-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 dark:from-slate-700 dark:to-slate-600 rounded-full transition-all duration-500">
                {/* Sliding Circle */}
                <div
                    className={`absolute top-0.5 w-5 h-5 bg-gradient-to-br from-white to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-full shadow-lg transform transition-all duration-500 ease-out flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0.5'
                        }`}
                >
                    {/* Icon inside circle */}
                    {isDark ? (
                        <Moon className="w-3 h-3 text-indigo-400" />
                    ) : (
                        <Sun className="w-3 h-3 text-amber-500" />
                    )}
                </div>

                {/* Background Icons (faded) */}
                <div className="absolute inset-0 flex items-center justify-between px-1.5">
                    <Sun className={`w-3 h-3 transition-all duration-500 ${isDark ? 'text-gray-600 opacity-30' : 'text-amber-400 opacity-70'
                        }`} />
                    <Moon className={`w-3 h-3 transition-all duration-500 ${isDark ? 'text-indigo-300 opacity-70' : 'text-gray-600 opacity-30'
                        }`} />
                </div>
            </div>

            {/* Text Label (responsive - hidden on mobile) */}
            <span className="hidden sm:block text-xs font-medium text-gray-400 dark:text-gray-300 group-hover:text-gray-300 dark:group-hover:text-white transition-colors">
                {isDark ? 'Dark' : 'Light'}
            </span>

            {/* Glow Effect on Hover */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark
                    ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10'
                    : 'bg-gradient-to-r from-amber-500/10 to-orange-500/10'
                }`} />
        </button>
    );
}
