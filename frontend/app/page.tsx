'use client';

import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import ProblemStatement from '@/components/landing/ProblemStatement';
import HowItWorks from '@/components/landing/HowItWorks';
import FeatureGrid from '@/components/landing/FeatureGrid';
import PersonaShowcase from '@/components/landing/PersonaShowcase';
import PlatformComparison from '@/components/landing/PlatformComparison';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingChat from '@/components/ui/FloatingChat';
import { BackgroundLines } from '@/components/ui/background-lines';

export default function ConceptoLanding() {
    return (
        <main className="min-h-screen bg-[#0f1729]">
            <BackgroundLines className="w-full flex-col h-full">
                {/* Progress Bar */}
                <ProgressBar />

                {/* Navigation */}
                <Navigation />

                {/* Hero Section */}
                <Hero />

                {/* Problem Statement */}
                <ProblemStatement />

                {/* How It Works */}
                <HowItWorks />

                {/* Feature Grid */}
                <FeatureGrid />

                {/* Persona Showcase */}
                <PersonaShowcase />

                {/* Platform Comparison */}
                <PlatformComparison />

                {/* FAQ */}
                <FAQ />

                {/* Footer */}
                <Footer />

                {/* Utility Components */}
                <ScrollToTop />
                <FloatingChat />
            </BackgroundLines>
        </main>
    );
}