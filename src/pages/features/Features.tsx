import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import { Layers, Zap, Shield, BarChart3, Smartphone, Globe, ArrowRight } from 'lucide-react';

export default function Features({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <FeaturePageLayout
            title="All Features | CallFlow CRM"
            description="Explore the complete suite of CallFlow features built for high-growth sales teams."
        >
            <FeatureHero
                headline="Everything you need to scale sales"
                subheadline="A complete suite of tools to automate calling, manage leads, and close deals faster."
                mockupPlaceholder={
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                        alt="Features overview dashboard mockup"
                        className="w-full h-auto"
                    />
                }
            />

            {/* Feature Grid */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Built for modern sales teams
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop toggling between tools. CallFlow gives your team everything they need in one powerful platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "One-Click Dialer",
                                desc: "Call leads instantly with our built-in cloud telephony. No manual dialing required.",
                                color: "text-amber-500",
                                bg: "bg-amber-100"
                            },
                            {
                                icon: BarChart3,
                                title: "Advanced Analytics",
                                desc: "Track agent performance, call durations, and conversion rates in real-time.",
                                color: "text-indigo-500",
                                bg: "bg-indigo-100"
                            },
                            {
                                icon: Layers,
                                title: "Smart Workflows",
                                desc: "Automate follow-ups, lead assignments, and status updates instantly.",
                                color: "text-emerald-500",
                                bg: "bg-emerald-100"
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile App",
                                desc: "Full CRM capabilities on the go. Available for iOS and Android.",
                                color: "text-blue-500",
                                bg: "bg-blue-100"
                            },
                            {
                                icon: Globe,
                                title: "Multi-Channel",
                                desc: "Reach leads via WhatsApp, SMS, Email, and calls from a single interface.",
                                color: "text-purple-500",
                                bg: "bg-purple-100"
                            },
                            {
                                icon: Shield,
                                title: "Enterprise Security",
                                desc: "Bank-grade encryption, role-based access control, and GDPR compliance.",
                                color: "text-slate-700",
                                bg: "bg-slate-200"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 group">
                                <div className={`w-12 h-12 ${feature.bg} text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>
                                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 cursor-pointer">
                                    Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-indigo-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900">
                    <h2 className="text-4xl font-bold mb-6 font-display">Ready to see it in action?</h2>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Join thousands of sales teams who have already switched to CallFlow. Setup takes less than 5 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onOpenDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-indigo-200"
                        >
                            Book a Demo
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 rounded-xl font-semibold text-lg text-slate-700 transition-all">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
