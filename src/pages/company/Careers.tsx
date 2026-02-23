import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Briefcase, ArrowRight, Heart, Zap, Globe, Coffee } from 'lucide-react';

export default function Careers({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const perks = [
        { icon: Globe, title: "Work Anywhere", desc: "We are a remote-first company. Work from wherever you're happiest and most productive." },
        { icon: Heart, title: "Premium Healthcare", desc: "100% coverage for medical, dental, and vision for you and your dependents." },
        { icon: Zap, title: "Home Office Stipend", desc: "$1,000 to set up your ideal workspace, plus $100/mo for internet and coffee." },
        { icon: Coffee, title: "Unlimited PTO", desc: "Minimum 4 weeks required. We trust you to manage your time and avoid burnout." }
    ];

    const jobs = [
        {
            team: "Engineering",
            positions: [
                { title: "Senior Frontend Engineer (React)", location: "Remote - US/Canada", type: "Full-time" },
                { title: "Backend Engineer (Node.js/PostgreSQL)", location: "Remote - EMEA", type: "Full-time" },
                { title: "Staff Infrastructure Engineer", location: "Remote - Global", type: "Full-time" }
            ]
        },
        {
            team: "Product & Design",
            positions: [
                { title: "Senior Product Designer", location: "Remote - US/Canada", type: "Full-time" },
                { title: "Product Manager, Integrations", location: "Remote - Global", type: "Full-time" }
            ]
        },
        {
            team: "Sales & Marketing",
            positions: [
                { title: "Account Executive (Mid-Market)", location: "Austin, TX / Remote", type: "Full-time" },
                { title: "Product Marketing Manager", location: "Remote - US", type: "Full-time" },
                { title: "Sales Development Rep", location: "Remote - Global", type: "Full-time" }
            ]
        }
    ];

    return (
        <FeaturePageLayout
            title="Careers at CallFlow | Join the Team"
            description="Help us build the next generation of sales software. We are looking for builders, thinkers, and makers to join our remote-first team."
        >
            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-[#0A0B1A] relative text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-8 border border-indigo-500/30">
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-indigo-200 font-bold uppercase tracking-wider">Hiring</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-display">
                        Do the best work of your life.
                    </h1>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We're a fast-growing, profitable startup building software that powers the revenue engines of thousands of companies. We need your help to scale.
                    </p>
                    <button onClick={() => {
                        const el = document.getElementById('open-positions');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/30">
                        View Open Positions
                    </button>
                </div>
            </section>

            {/* Perks / Culture Section */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                            Why work at CallFlow?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            We treat our team like adults. We give you the resources, autonomy, and flexibility to do your best work without micro-management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                    <perk.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {perk.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media/Images Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
                                We're remote, but we still like each other.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                While our day-to-day happens in Slack, Notion, and Zoom, we believe that in-person connection is vital for building trust and alignment.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Twice a year, the entire company flies to a new city for a week of collaborating, brainstorming, and celebrating our wins together. Past retreats include <b>Lisbon, Costa Rica, and Lake Tahoe</b>.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden mt-8 shadow-xl">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions List */}
            <section id="open-positions" className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display">
                            Open Positions
                        </h2>
                        <p className="text-xl text-slate-600 mt-4">Don't see a fit? <a href="mailto:careers@yoursite.com" className="text-indigo-600 font-bold hover:underline">Email us anyway.</a></p>
                    </div>

                    <div className="space-y-16">
                        {jobs.map((dept, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200 flex items-center">
                                    {dept.team}
                                    <span className="ml-3 text-sm bg-indigo-100 text-indigo-700 py-0.5 px-3 rounded-full font-semibold">
                                        {dept.positions.length}
                                    </span>
                                </h3>

                                <div className="space-y-4">
                                    {dept.positions.map((pos, pIdx) => (
                                        <div key={pIdx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{pos.title}</h4>
                                                <div className="flex items-center text-slate-500 text-sm mt-2 space-x-4 font-medium">
                                                    <span>{pos.location}</span>
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                                                    <span>{pos.type}</span>
                                                </div>
                                            </div>
                                            <button className="text-indigo-600 font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                Apply <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
