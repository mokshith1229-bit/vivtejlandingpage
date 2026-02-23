import React, { useState } from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Search, ChevronDown, ChevronUp, Book, MessageCircle, Settings, Users, ArrowRight } from 'lucide-react';

export default function HelpCenter({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const categories = [
        { title: "Getting Started", icon: Book, desc: "Setup guides, onboarding, and basics." },
        { title: "Account & Billing", icon: Settings, desc: "Manage your subscription and invoices." },
        { title: "Managing Leads", icon: Users, desc: "Importing, routing, and scoring leads." },
        { title: "Communication Channels", icon: MessageCircle, desc: "WhatsApp, Calls, Email, and SMS." }
    ];

    const faqs = [
        {
            q: "How do I import leads from an Excel file?",
            a: "Navigate to the Leads tab, click 'Import', and select 'CSV/Excel'. Map your columns to the CallFlow fields and click confirm. The import usually processes up to 10,000 rows per minute."
        },
        {
            q: "Can I use my existing Twilio number?",
            a: "Yes! Go to Settings > Integrations > Telephony. Select 'Bring Your Own Carrier' and enter your Twilio Account SID and Auth Token."
        },
        {
            q: "How do I set up a round-robin lead routing rule?",
            a: "Go to Settings > Lead Routing. Create a new rule, select your trigger criteria (e.g., Source = Facebook), and add the agents you want included in the round-robin distribution."
        },
        {
            q: "Is it possible to record calls automatically?",
            a: "Absolutely. Admins can enable force-recording at the organizational level under Settings > Compliance. Note that local consent laws apply and you may need to enable the automated warning tone."
        },
        {
            q: "What happens if I exceed my monthly user limit?",
            a: "You won't be locked out. We simply pro-rate the addition of any new users automatically onto your next billing cycle."
        }
    ];

    return (
        <FeaturePageLayout
            title="Help Center | CallFlow Support"
            description="Find answers, guides, and contact support for CallFlow CRM."
        >
            {/* Hero / Search */}
            <section className="pt-32 pb-20 bg-[#0A0B1A] relative text-center text-white">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        How can we help?
                    </h1>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Search our knowledge base or browse categories to find answers quickly.
                    </p>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-14 pr-4 py-5 font-medium border-2 border-white/10 rounded-2xl leading-5 bg-white/5 backdrop-blur-md placeholder-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-white focus:text-slate-900 transition-all shadow-xl"
                            placeholder="Search for articles, guides, or keywords..."
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-indigo-100 group transition-all">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                                    <cat.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{cat.title}</h3>
                                <p className="text-sm text-slate-500 mb-4">{cat.desc}</p>
                                <div className="text-indigo-600 font-bold text-sm flex items-center group-hover:text-indigo-700">
                                    Browse articles <ArrowRight className="w-4 h-4 ml-1 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-display">Frequently Asked Questions</h2>
                    <p className="text-slate-500 mb-12">Quick answers to our most common support tickets.</p>

                    <div className="space-y-4 text-left">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border rounded-xl overflow-hidden transition-colors ${openFaq === idx ? 'border-indigo-500 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                >
                                    <span className={`font-bold text-left ${openFaq === idx ? 'text-indigo-600' : 'text-slate-900'}`}>
                                        {faq.q}
                                    </span>
                                    {openFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-indigo-500 shrink-0 ml-4" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                                    )}
                                </button>

                                {openFaq === idx && (
                                    <div className="px-6 pb-5 pt-1 bg-white">
                                        <div className="h-px w-full bg-slate-100 mb-4"></div>
                                        <p className="text-slate-600 leading-relaxed text-[15px]">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support CTA */}
            <section className="py-20 bg-indigo-50 text-center">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center mb-6">
                        <span className="text-3xl">👋</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Still need help?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Our support team is available 24/7. We typically reply within 15 minutes.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-md hover:bg-indigo-700 transition-colors">
                            Contact Support
                        </button>
                        <button className="px-8 py-3 bg-white text-indigo-600 border border-slate-200 font-bold rounded-xl shadow-sm hover:border-indigo-600 hover:text-indigo-700 transition-colors">
                            Visit Community Forum
                        </button>
                    </div>
                </div>
            </section>

        </FeaturePageLayout>
    );
}
