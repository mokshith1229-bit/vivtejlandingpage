import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import DeepDive from '../components/DeepDive';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import StickyCTA from '../components/StickyCTA';

export default function HomePage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const openDemo = () => setIsDemoOpen(true);
    const closeDemo = () => setIsDemoOpen(false);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar onOpenDemo={openDemo} />
            <main>
                <Hero onOpenDemo={openDemo} />
                <Features />
                <HowItWorks />
                <Industries />
                <DeepDive />
                <Integrations />
                <Testimonials />
                <Pricing />
                <FAQ />
                <CTA />
            </main>
            <Footer />
            <StickyCTA onOpen={openDemo} />
            <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
        </div>
    );
}
