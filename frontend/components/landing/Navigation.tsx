'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';
import ConceptoLogo from '@/components/ui/ConceptoLogo';
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from '@/components/ui/resizable-navbar';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const mainNavItems = [
        { name: 'Use Cases', link: '#personas' },
        { name: 'Features', link: '#comparison' },
    ];

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo>
                    <div className="hover:scale-110 transition-transform duration-300">
                        <ConceptoLogo className="w-10 h-10" />
                    </div>
                    <span className="text-xl font-bold gradient-text-vibrant">Concepto</span>
                </NavbarLogo>

                <div className="flex items-center space-x-8">
                    {/* Product Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsProductOpen(!isProductOpen)}
                            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                        >
                            <span>Product</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-2xl overflow-hidden">
                                <Link href="#features" className="block px-4 py-3 hover:bg-white/5 transition-colors">
                                    <div className="font-semibold text-white">Features</div>
                                    <div className="text-sm text-gray-400">Explore capabilities</div>
                                </Link>
                                <Link href="#how-it-works" className="block px-4 py-3 hover:bg-white/5 transition-colors">
                                    <div className="font-semibold text-white">How It Works</div>
                                    <div className="text-sm text-gray-400">3-step process</div>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                        >
                            <span>Resources</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isResourcesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-2xl overflow-hidden">
                                <Link href="#faq" className="block px-4 py-3 hover:bg-white/5 transition-colors">
                                    <div className="font-semibold text-white">FAQ</div>
                                    <div className="text-sm text-gray-400">Common questions</div>
                                </Link>
                            </div>
                        )}
                    </div>

                    <NavItems items={mainNavItems} />
                </div>

                <div className="flex items-center space-x-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center space-x-2 px-3 py-2 glass-card rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <Globe className="w-4 h-4 text-teal-400" />
                            <span className="text-sm text-white">{selectedLanguage.flag}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 glass-card rounded-xl shadow-2xl overflow-hidden">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setSelectedLanguage(lang);
                                            setIsLanguageOpen(false);
                                        }}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors ${selectedLanguage.code === lang.code ? 'bg-teal-600/20' : ''}`}
                                    >
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className="text-sm font-medium text-white">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/auth/login">
                        <NavbarButton variant="secondary">Sign In</NavbarButton>
                    </Link>
                    <Link href="/auth/register">
                        <NavbarButton variant="primary">Get Started</NavbarButton>
                    </Link>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo>
                        <div className="hover:scale-110 transition-transform duration-300">
                            <ConceptoLogo className="w-10 h-10" />
                        </div>
                        <span className="text-xl font-bold gradient-text-vibrant">Concepto</span>
                    </NavbarLogo>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                        How It Works
                    </Link>
                    <Link href="#personas" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                        Use Cases
                    </Link>
                    <Link href="#comparison" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                        FAQ
                    </Link>

                    <div className="flex flex-col gap-3 pt-4">
                        <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <NavbarButton variant="secondary" className="w-full">
                                Sign In
                            </NavbarButton>
                        </Link>
                        <Link href="/auth/register" onClick={() => setIsMobileMenuOpen(false)}>
                            <NavbarButton variant="primary" className="w-full">
                                Get Started
                            </NavbarButton>
                        </Link>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
