import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Handshake, Zap, DollarSign, BookOpen, ArrowRight } from 'lucide-react';

export default function Partners({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const benefits = [
        { icon: DollarSign, title: "Industry-leading Revenue Share", desc: "Earn up to 30% lifetime recurring commissions on every client you refer to CallFlow." },
        { icon: Zap, title: "Priority Partner Support", desc: "Skip the queue. Partners get access to a dedicated discord channel and priority technical support." },
        { icon: BookOpen, title: "Co-Marketing Opportunities", desc: "We actively promote our certified partners. Get featured on our blog, webinars, and partner directory." },
        { icon: Handshake, title: "Dedicated Partner Manager", desc: "Get a dedicated CSM to help you close deals, perform demos, and onboard your mutual clients." }
    ];

    return (
        <FeaturePageLayout
            title="Partner Program | CallFlow CRM"
            description="Become a CallFlow Partner. Grow your agency revenue by bringing the best sales CRM to your clients."
        >
            {/* Hero */}
            <section className="pt-32 pb-24 bg-[#0A0B1A] relative text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl mix-blend-screen pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-emerald-500/10 rounded-full px-4 py-1.5 mb-8 border border-emerald-500/30">
                        <Handshake className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm text-emerald-200 font-bold uppercase tracking-wider">Partner Network</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-display">
                        Grow your agency. Elevate your clients.
                    </h1>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a marketing agency, a sales consultant, or a systems integrator—partnering with CallFlow creates a powerful new revenue stream.
                    </p>
                    <button onClick={() => {
                        const el = document.getElementById('apply-form');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-600/30">
                        Apply to Partner Program
                    </button>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                            Partner Benefits
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We believe in true partnerships where both parties succeed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((b, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-emerald-100 transition-all group">
                                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                    <b.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{b.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply Form */}
            <section id="apply-form" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-indigo-500"></div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Become a Partner</h2>
                            <p className="text-slate-600">Tell us a bit about your business and we'll be in touch within 24 hours.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Website</label>
                                    <input type="url" placeholder="https://" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Partner Type</label>
                                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors">
                                    <option value="">Select your business type...</option>
                                    <option>Marketing Agency</option>
                                    <option>Sales Consultant / Coach</option>
                                    <option>Systems Integrator (SI)</option>
                                    <option>Affiliate Marketer</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">How many clients do you currently manage?</label>
                                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-colors">
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-200</option>
                                    <option>200+</option>
                                </select>
                            </div>

                            <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-600/20 text-lg mt-4 flex items-center justify-center">
                                Submit Application <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
