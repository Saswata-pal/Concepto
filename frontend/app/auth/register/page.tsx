'use client';

import Link from 'next/link';
import { Particles } from '@/components/ui/particles';
import { Brain, Sparkles } from 'lucide-react';

export default function RegisterPage() {
    const handleGoogleSignUp = () => {
        // Google OAuth logic will go here
        console.log('Google Sign Up clicked');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 transition-colors duration-500">
            {/* Particles Background */}
            <Particles
                className="absolute inset-0"
                quantity={60}
                ease={80}
                color="#a855f7"
                refresh={false}
            />

            {/* Register Card */}
            <div className="relative z-10 w-full max-w-md px-6">
                <div className="bg-white dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center space-x-3 mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 gradient-primary blur-lg opacity-50" />
                            <div className="relative w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                                <Brain className="w-7 h-7 text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-bold gradient-text">Concepto</span>
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Start Learning Today
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Join thousands of learners on their conceptual journey
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span>Personalized learning paths</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                            </div>
                            <span>AI-powered concept explanations</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                            </div>
                            <span>Accessibility-first design</span>
                        </div>
                    </div>

                    {/* Google Sign Up Button */}
                    <button
                        onClick={handleGoogleSignUp}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 gradient-primary text-white rounded-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all group"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                fill="white"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="white"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="white"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="white"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="font-semibold">
                            Sign up with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                                Free forever 
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link
                                href="/auth/signin"
                                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                    {/* Terms */}
                    <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
                        By signing up, you agree to our{' '}
                        <Link href="/terms" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                            Privacy Policy
                        </Link>
                    </p>

                    {/* Back to Home */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
