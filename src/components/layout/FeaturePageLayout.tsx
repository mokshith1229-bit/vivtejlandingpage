import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import StickyCTA from '../StickyCTA';
import DemoModal from '../DemoModal';

interface FeaturePageLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function FeaturePageLayout({ title, description, children }: FeaturePageLayoutProps) {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const openDemo = () => setIsDemoOpen(true);
    const closeDemo = () => setIsDemoOpen(false);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            <Navbar onOpenDemo={openDemo} />

            <main className="pt-20">
                {/* Pass down openDemo to children if needed via Context, or individual components could take it as prop. 
            For now, assuming children handle their own CTA clicks via context or props if needed. 
            We can clone elements if necessary, but standard is just standard CTA buttons. 
        */}
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, { onOpenDemo: openDemo });
                    }
                    return child;
                })}
            </main>

            <Footer />
            <StickyCTA onOpen={openDemo} />
            <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
        </div>
    );
}
