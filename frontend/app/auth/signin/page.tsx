'use client';

import Link from 'next/link';
import { Particles } from '@/components/ui/particles';
import { Brain } from 'lucide-react';

export default function SignInPage() {
    const handleGoogleSignIn = () => {
        // Google OAuth logic will go here
        console.log('Google Sign In clicked');
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

            {/* Sign In Card */}
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
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sign in to continue your learning journey
                        </p>
                    </div>

                    {/* Google Sign In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all group"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            Continue with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                                Secure authentication powered by Google
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            Don't have an account?{' '}
                            <Link
                                href="/auth/register"
                                className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                            >
                                Get Started
                            </Link>
                        </p>
                    </div>

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
