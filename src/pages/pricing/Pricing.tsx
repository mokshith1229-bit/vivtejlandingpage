import React, { useState } from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Check, Info, ArrowRight, HelpCircle } from 'lucide-react';

export default function Pricing({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

    const tiers = [
        {
            name: "Starter",
            description: "Perfect for small teams getting started with outbound calling.",
            price: billingCycle === 'annual' ? 29 : 39,
            features: [
                "Up to 5 Users",
                "Basic Call Routing",
                "Call Recording (30 days)",
                "Standard Analytics",
                "Email Support",
                "Mobile App Access"
            ],
            highlighted: false,
            cta: "Start Free Trial",
            buttonClass: "bg-white text-indigo-600 border-2 border-indigo-100 hover:border-indigo-600"
        },
        {
            name: "Professional",
            description: "Everything you need for a growing, high-velocity sales team.",
            price: billingCycle === 'annual' ? 79 : 99,
            features: [
                "Up to 25 Users",
                "Advanced Call Routing & Queues",
                "Call Recording (Unlimited)",
                "Advanced Custom Analytics",
                "Priority 24/7 Support",
                "WhatsApp & SMS Integration",
                "Custom API Access",
                "Dedicated Account Manager"
            ],
            highlighted: true,
            cta: "Start Free Trial",
            buttonClass: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 border-2 border-indigo-600"
        },
        {
            name: "Enterprise",
            description: "Advanced security and unlimited flexibility for large organizations.",
            price: "Custom",
            features: [
                "Unlimited Users",
                "Custom Workflow Sequences",
                "Advanced AI Transcription",
                "SLA Guarantee (99.99%)",
                "On-Premise Deployment Option",
                "Custom Data Residency",
                "SSO & Directory Sync",
                "Premium Onboarding"
            ],
            highlighted: false,
            cta: "Contact Sales",
            buttonClass: "bg-slate-900 text-white hover:bg-slate-800 border-2 border-slate-900",
            action: onOpenDemo // Assuming contact sales opens demo/contact modal
        }
    ];

    const faqs = [
        {
            q: "Can I switch plans later?",
            a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept all major credit cards, PayPal, and bank wire transfers for Enterprise customers on annual contracts."
        },
        {
            q: "Is there a free trial available?",
            a: "Yes! All plans come with a 14-day free trial, no credit card required to start."
        },
        {
            q: "Do I need to sign a contract?",
            a: "No, CallFlow offers month-to-month billing with no long-term commitments needed, unless you opt for a discounted annual plan."
        }
    ];

    return (
        <FeaturePageLayout
            title="Pricing | CallFlow CRM"
            description="Simple, transparent pricing for sales teams of all sizes. Start your free trial today."
        >
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0B1A]">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-900/40 blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-900/30 blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-display">
                        Simple, scalable pricing.
                    </h1>
                    <p className="text-xl text-indigo-100/80 max-w-2xl mx-auto mb-12">
                        No hidden fees. No surprise charges. Choose the plan that best fits your growing sales team.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4 mb-16">
                        <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
                            className="relative w-16 h-8 bg-indigo-600/50 rounded-full p-1 border border-indigo-400/30 transition-colors focus:outline-none"
                        >
                            <div
                                className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'}`}
                            />
                        </button>
                        <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
                            Annually <span className="ml-1 text-emerald-400 text-xs px-2 py-0.5 bg-emerald-400/10 rounded-full border border-emerald-400/20">Save 20%</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-12 -mt-24 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`bg-white rounded-2xl p-8 relative ${tier.highlighted
                                        ? 'ring-2 ring-indigo-600 shadow-2xl scale-100 md:scale-105 z-10'
                                        : 'border border-slate-200 shadow-lg shadow-slate-100/50'
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 min-h-[40px]">{tier.description}</p>

                                <div className="mb-6 flex items-baseline">
                                    {typeof tier.price === 'number' ? (
                                        <>
                                            <span className="text-5xl font-extrabold text-slate-900 tracking-tight">${tier.price}</span>
                                            <span className="text-slate-500 ml-2 font-medium">/ user / mo</span>
                                        </>
                                    ) : (
                                        <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{tier.price}</span>
                                    )}
                                </div>

                                <p className="text-emerald-600 text-sm font-semibold mb-8 h-5">
                                    {typeof tier.price === 'number' && billingCycle === 'annual' ? 'Billed annually' : ''}
                                </p>

                                <button
                                    onClick={tier.action}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mb-8 ${tier.buttonClass}`}
                                >
                                    {tier.cta}
                                </button>

                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Included Features:</p>
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start">
                                            <Check className="w-5 h-5 text-indigo-500 mr-3 shrink-0" />
                                            <span className="text-slate-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Compare all features
                        </h2>
                        <p className="text-lg text-slate-600">See exactly what you get when you sign up.</p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="py-6 px-8 text-slate-900 font-semibold w-1/3">Core Features</th>
                                    <th className="py-6 px-8 text-center text-slate-900 font-semibold">Starter</th>
                                    <th className="py-6 px-8 text-center text-indigo-600 font-bold bg-indigo-50/50">Professional</th>
                                    <th className="py-6 px-8 text-center text-slate-900 font-semibold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600">
                                {[
                                    { name: "Users", starter: "Up to 5", pro: "Up to 25", ent: "Unlimited" },
                                    { name: "Call Recording", starter: "30 days", pro: "Unlimited", ent: "Unlimited" },
                                    { name: "Analytics Dashboard", starter: "Standard", pro: "Advanced", ent: "Custom AI" },
                                    { name: "WhatsApp & SMS", starter: "-", pro: "Included", ent: "Included" },
                                    { name: "Custom Workflows", starter: "-", pro: "10 Active", ent: "Unlimited" },
                                    { name: "Single Sign-On (SSO)", starter: "-", pro: "-", ent: "Included" },
                                    { name: "Support", starter: "Email", pro: "24/7 Priority", ent: "Dedicated Manager" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                        <td className="py-5 px-8 font-medium text-slate-700 flex items-center">
                                            {row.name}
                                            <Info className="w-4 h-4 ml-2 text-slate-300" />
                                        </td>
                                        <td className="py-5 px-8 text-center">{row.starter}</td>
                                        <td className="py-5 px-8 text-center font-medium text-indigo-700 bg-indigo-50/30">{row.pro}</td>
                                        <td className="py-5 px-8 text-center">{row.ent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-colors">
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A0B1A] relative overflow-hidden text-center text-white border-t border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 hidden md:block"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Start closing more deals today.
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Join the ranks of high-growth sales teams powering their revenue with CallFlow.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold text-lg transition-all shadow-lg shadow-white/10">
                            Start Free Trial
                        </button>
                        <button
                            onClick={onOpenDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20"
                        >
                            Book a Demo <ArrowRight className="inline-block w-5 h-5 ml-2 -mt-1" />
                        </button>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
