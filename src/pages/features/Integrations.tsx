import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { ArrowRight, Code, Database, Globe, MessageSquare, Phone, Webhook, BarChart2, Headphones, Cloud, Hexagon, Mail, Hash } from 'lucide-react';

export default function Integrations({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const categories = [
        { name: "All", active: true },
        { name: "Communication", active: false },
        { name: "Marketing", active: false },
        { name: "Analytics", active: false },
        { name: "Support", active: false },
        { name: "Other CRMs", active: false }
    ];

    const integrationLogos = [
        { name: "WhatsApp", icon: MessageSquare, category: "Communication", color: "text-green-500", bg: "bg-green-50" },
        { name: "Twilio", icon: Phone, category: "Communication", color: "text-red-500", bg: "bg-red-50" },
        { name: "Facebook Ads", icon: Globe, category: "Marketing", color: "text-blue-600", bg: "bg-blue-50" },
        { name: "Google Analytics", icon: BarChart2, category: "Analytics", color: "text-amber-500", bg: "bg-amber-50" },
        { name: "Zendesk", icon: Headphones, category: "Support", color: "text-teal-600", bg: "bg-teal-50" },
        { name: "Salesforce", icon: Cloud, category: "Other CRMs", color: "text-sky-500", bg: "bg-sky-50" },
        { name: "HubSpot", icon: Hexagon, category: "Other CRMs", color: "text-orange-500", bg: "bg-orange-50" },
        { name: "Mailchimp", icon: Mail, category: "Marketing", color: "text-yellow-500", bg: "bg-yellow-50" },
        { name: "Slack", icon: Hash, category: "Communication", color: "text-purple-500", bg: "bg-purple-50" },
    ];

    return (
        <FeaturePageLayout
            title="Software Integrations | CallFlow CRM"
            description="Connect CallFlow with the tools you already use. WhatsApp, Facebook, Analytics, and a Custom API."
        >
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                        Plays nicely with others.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Sync leads, automate workflows, and connect CallFlow to over 1,000+ apps. No coding required for out-of-the-box integrations.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 max-w-lg mx-auto mb-12">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center -mr-4 z-30">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
                        </div>
                        <div className="w-20 h-20 bg-indigo-600 rounded-3xl shadow-xl border-4 border-white flex items-center justify-center z-40 transform scale-110">
                            <span className="text-white font-bold text-2xl">CF</span>
                        </div>
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center -ml-4 z-30">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${cat.active
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrationLogos.map((integration, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:border-indigo-100 transition-all group flex items-start gap-4 cursor-pointer">
                                <div className={`w-14 h-14 ${integration.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                                    <integration.icon className={`w-7 h-7 ${integration.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{integration.name}</h3>
                                    <p className="text-sm text-slate-500 mb-2">{integration.category}</p>
                                    <div className="text-indigo-600 text-sm font-semibold flex items-center opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">
                                        Connect <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Custom API Section */}
            <section className="py-24 bg-[#0A0B1A] text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 rounded-full px-3 py-1 mb-6 border border-indigo-500/30">
                                <Code className="w-4 h-4 text-indigo-400" />
                                <span className="text-sm text-indigo-200 font-medium">Developer API</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display leading-tight">
                                Build whatever you need.
                            </h2>
                            <p className="text-lg text-indigo-100/80 mb-8 leading-relaxed">
                                Need something custom? Use our robust REST API and Webhooks to push leads, pull reports, or trigger external actions programmatically.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center shrink-0 mr-4 border border-indigo-500/20">
                                        <Webhook className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Webhooks</h4>
                                        <p className="text-slate-400 text-sm">Listen for events like 'call.completed' or 'lead.updated' in real-time.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-indigo-900/50 rounded-lg flex items-center justify-center shrink-0 mr-4 border border-indigo-500/20">
                                        <Database className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Data Portability</h4>
                                        <p className="text-slate-400 text-sm">Easily fetch your entire database or push bulk lists programmatically via JSON.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="text-indigo-400 font-bold hover:text-white transition-colors flex items-center">
                                    Read API Documentation <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </div>

                        {/* Code Snippet UI */}
                        <div className="block bg-[#111222] rounded-2xl border border-white/10 p-6 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-4">
                                <div className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">POST /v1/leads</div>
                            </div>
                            <div className="flex space-x-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <pre className="font-mono text-sm text-slate-300 overflow-x-auto">
                                <code>
                                    <span className="text-pink-400">curl</span> -X POST https://api.callflow.com/v1/leads \<br />
                                    -H <span className="text-green-400">"Authorization: Bearer YOUR_API_KEY"</span> \<br />
                                    -H <span className="text-green-400">"Content-Type: application/json"</span> \<br />
                                    -d <span className="text-yellow-300">'{`{"name": "Jane Doe", "phone": "+1234567890", "source": "API"}`}'</span>
                                </code>
                            </pre>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-indigo-600 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Centralize your sales stack.
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                        Stop losing data between systems. Connect everything directly to CallFlow.
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
