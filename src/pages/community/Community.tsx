import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { MessageSquare, Users, Award, Shield, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';

export default function Community({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const stats = [
        { label: "Active Members", value: "14,500+", icon: Users },
        { label: "Daily Discussions", value: "250+", icon: MessageSquare },
        { label: "Product Ideas Implemented", value: "85", icon: Award }
    ];

    return (
        <FeaturePageLayout
            title="CallFlow Community | Sales Professionals Network"
            description="Join thousands of sales leaders, SDRs, and RevOps professionals sharing strategies, scripts, and product feedback."
        >
            <section className="pt-32 pb-20 bg-[#0A0B1A] relative text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-display">
                        Join the movement.
                    </h1>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Connect with 14,000+ sales professionals looking to scale revenue, share cold-calling scripts, and shape the future of CallFlow.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 max-w-lg mx-auto mb-16">
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/30 flex items-center group">
                            Join our Slack Community
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                                    <stat.icon className="w-6 h-6 text-indigo-300" />
                                </div>
                                <div className="text-4xl font-black text-white tracking-tight mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold text-indigo-200 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Why join the CallFlow Community?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We believe the best CRM is built by the people who use it every day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Peer Support</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Stuck on a workflow? Need advice on local caller ID? Ask the community and get answers from experts who have been there.
                            </p>
                            <button className="text-blue-600 font-bold hover:underline">Explore Forums &rarr;</button>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Early Access</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Community members get exclusive beta invites to test new features like AI Call Coaching before they hit production.
                            </p>
                            <button className="text-purple-600 font-bold hover:underline">Apply for Beta &rarr;</button>
                        </div>

                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                                <Award className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Shape the Roadmap</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Submit feature requests, upvote ideas from others, and interact directly with our product and engineering teams.
                            </p>
                            <button className="text-amber-600 font-bold hover:underline">View Roadmap &rarr;</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Socials Grid */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 font-display">
                        Connect with us everywhere
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#1DA1F2] hover:shadow-md transition-all group flex flex-col items-center">
                            <Twitter className="w-10 h-10 text-slate-400 group-hover:text-[#1DA1F2] transition-colors mb-4" />
                            <span className="font-bold text-slate-900">Twitter</span>
                            <span className="text-sm text-slate-500">@CallFlowCRM</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#0A66C2] hover:shadow-md transition-all group flex flex-col items-center">
                            <Linkedin className="w-10 h-10 text-slate-400 group-hover:text-[#0A66C2] transition-colors mb-4" />
                            <span className="font-bold text-slate-900">LinkedIn</span>
                            <span className="text-sm text-slate-500">CallFlow Inc.</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-900 hover:shadow-md transition-all group flex flex-col items-center">
                            <Github className="w-10 h-10 text-slate-400 group-hover:text-slate-900 transition-colors mb-4" />
                            <span className="font-bold text-slate-900">GitHub</span>
                            <span className="text-sm text-slate-500">Open Source API Docs</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0A0B1A] relative overflow-hidden text-center text-white border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl font-extrabold mb-6 tracking-tight font-display">
                        Experience CallFlow firsthand.
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                        Stop waiting. Start scaling your sales processes today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-indigo-900 rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-900/20">
                            Start Free Trial
                        </button>
                        <button
                            onClick={onOpenDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
