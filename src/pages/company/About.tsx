import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Target, Lightbulb, Users, Globe, ArrowRight } from 'lucide-react';

export default function About({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const values = [
        {
            icon: Target,
            title: "Obsess over the customer",
            desc: "We build CRM software that sales teams actually want to use. User experience dictates every engineering decision."
        },
        {
            icon: Lightbulb,
            title: "Innovate simply",
            desc: "Enterprise software doesn't have to be bloated. We remove friction to make complex workflows feel effortless."
        },
        {
            icon: Users,
            title: "Win as a team",
            desc: "Empathy, low ego, and radical candor. We support each other so we can better support our customers."
        },
        {
            icon: Globe,
            title: "Think globally",
            desc: "Sales is universal. We build tools that scale across timezones, languages, and compliance requirements."
        }
    ];

    const leadership = [
        {
            name: "Alex Rivera",
            role: "CEO & Co-founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Samantha Lee",
            role: "Chief Technology Officer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Marcus Johnson",
            role: "Head of Product",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Elena Rostova",
            role: "VP of Global Sales",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <FeaturePageLayout
            title="About Us | CallFlow CRM"
            description="The story behind CallFlow and the mission driving our team to rethink the modern sales CRM."
        >
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative border-b border-slate-200">
                <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight font-display">
                        We are redefining how sales teams connect.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mx-auto max-w-3xl">
                        Born out of frustration with clunky legacy CRMs, CallFlow is on a mission to build the fastest, most intuitive sales engine on the planet.
                    </p>
                </div>
            </section>

            {/* The Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
                                From a spreadsheet to a global platform.
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    In 2021, our founders were running an outbound call center. They realized their SDRs were spending 40% of their day manually dialing numbers, logging notes, and toggling between tabs.
                                </p>
                                <p>
                                    Legacy CRMs required expensive consultants just to add a custom field. Modern "lightweight" CRMs lacked the power for high-velocity teams. There was no middle ground.
                                </p>
                                <p>
                                    So, they built CallFlow. What started as an internal tool quickly spread through word of mouth. Today, thousands of revenue teams across the globe use CallFlow to process millions of calls and text messages every month.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                                alt="Team working"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Our Core Values</h2>
                        <p className="text-xl text-slate-400">The principles that guide everything we ship.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, idx) => (
                            <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-colors group">
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-300">
                                    <v.icon className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Leadership</h2>
                        <p className="text-xl text-slate-600">The team guiding the CallFlow vision.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {leadership.map((leader, i) => (
                            <div key={i} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:border-indigo-100 transition-colors">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                                <p className="text-indigo-600 font-semibold text-sm tracking-wide">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-indigo-50 text-center border-t border-indigo-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-6 font-display">Join our journey.</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        We are always looking for ambitious engineers, designers, and marketers to help us shape the future of sales tech.
                    </p>
                    <a href="/careers" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group">
                        View Open Positions <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
