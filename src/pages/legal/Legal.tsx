import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { ArrowRight, FileText, Shield, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Legal({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const documents = [
        {
            icon: FileText,
            title: "Terms of Service",
            desc: "Read the rules, guidelines, and terms that govern your use of the CallFlow platform.",
            link: "/terms-of-service"
        },
        {
            icon: Shield,
            title: "Privacy Policy",
            desc: "Understand how we collect, use, and protect your personal and company data.",
            link: "/privacy-policy"
        },
        {
            icon: ShieldCheck,
            title: "DPA & GDPR Compliance",
            desc: "Details on our Data Processing Agreement and how we comply with European data protection laws.",
            link: "/privacy-policy" // Routing to privacy for now as placeholder for DPA
        }
    ];

    return (
        <FeaturePageLayout
            title="Legal Center | CallFlow CRM"
            description="Access CallFlow's legal agreements, privacy policies, and security information."
        >
            <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                            Legal Center
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We take transparency, security, and privacy seriously. Find all our legal policies and agreements below.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {documents.map((doc, idx) => (
                            <Link to={doc.link} key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all group flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                    <doc.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{doc.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 flex-1">
                                    {doc.desc}
                                </p>
                                <div className="text-indigo-600 font-bold text-sm flex items-center">
                                    Read Policy <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-200 text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Have legal questions?</h3>
                        <p className="text-slate-600 mb-6">If you need to execute a custom Enterprise DPA or have questions about our terms, please contact our legal team.</p>
                        <a href="mailto:legal@callflow.com" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-md">
                            Email legal@callflow.com
                        </a>
                    </div>

                </div>
            </section>
        </FeaturePageLayout>
    );
}
