'use client';

import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Vision from '@/components/landing/Vision';
import ConceptModulesSticky from '@/components/landing/ConceptModulesSticky';
import Learners from '@/components/landing/Learners';
import WhyConcepto from '@/components/landing/WhyConcepto';
import FutureRoadmap from '@/components/landing/FutureRoadmap';
import FAQ from '@/components/landing/FAQ';
import TrustSection from '@/components/landing/TrustSection';
import CallToReflection from '@/components/landing/CallToReflection';
import Footer from '@/components/landing/Footer';

export default function ConceptoLanding() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Vision />
            <ConceptModulesSticky />
            <Learners />
            <WhyConcepto />
            <FutureRoadmap />
            <FAQ />
            <TrustSection />
            <CallToReflection />
            <Footer />
        </main>
    );
}