import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Smartphone, Bell, Navigation, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function MobileApp({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <FeaturePageLayout
            title="Mobile CRM App | CallFlow"
            description="Take your sales pipeline anywhere with the CallFlow Mobile App for iOS and Android."
        >
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#0A0B1A] relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl mix-blend-screen pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/10 rounded-full px-3 py-1 mb-8 border border-indigo-500/30">
                        <Smartphone className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-indigo-200 font-medium">iOS & Android App</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight font-display">
                        Your CRM in your pocket.
                    </h1>
                    <p className="text-xl text-indigo-100/80 max-w-2xl mx-auto mb-12">
                        Never miss a deal just because you're away from your desk. Call leads, log updates, and get reminders right from your phone.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl shadow-white/10">
                            Download for iOS
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                            Download for Android
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Highlights Grid */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
                            Uncompromising mobile performance
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We brought the full power of our desktop CRM into a native, lightning-fast mobile experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Bell,
                                title: "Real-time Push Alerts",
                                desc: "Get instantly notified when high-value leads come in or when a scheduled follow-up is due."
                            },
                            {
                                icon: Navigation,
                                title: "One-Tap Navigation",
                                desc: "Instantly open Google Maps for your upcoming in-person meetings with a single tap."
                            },
                            {
                                icon: Users,
                                title: "Call Logging & Sync",
                                desc: "Every call made from your phone is automatically synced to the web dashboard in real-time."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots / App Overview Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="order-2 lg:order-1 relative">
                            {/* Abstract decorative elements behind phones */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

                            <div className="relative z-10 flex justify-center items-center gap-6">
                                {/* Mock Phone 1 */}
                                <div className="w-64 h-[550px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-indigo-100/50 transform -rotate-6">
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 relative flex flex-col pt-12">
                                        {/* Simulated Notch */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                                        {/* Fake App Content */}
                                        <div className="px-4 pb-4 border-b border-slate-100">
                                            <div className="font-bold text-lg">My Leads</div>
                                            <div className="text-xs text-slate-500">23 Active today</div>
                                        </div>
                                        <div className="flex-1 p-4 space-y-4 bg-slate-50">
                                            {[1, 2, 3, 4].map(idx => (
                                                <div key={idx} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-indigo-100 rounded-full"></div>
                                                        <div>
                                                            <div className="w-24 h-3 bg-slate-200 rounded mb-2"></div>
                                                            <div className="w-16 h-2 bg-slate-100 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mock Phone 2 */}
                                <div className="w-64 h-[550px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-indigo-100/50 transform translate-y-12 rotate-3 hidden md:block">
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 relative flex flex-col pt-12 bg-indigo-50">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                                        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                                <CheckCircle className="w-10 h-10" />
                                            </div>
                                            <div className="text-xl font-bold mb-2">Deal Closed!</div>
                                            <div className="text-sm text-slate-600 mb-8">$12,500 added to pipeline</div>
                                            <div className="w-full h-12 bg-indigo-600 rounded-xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
                                Designed for field sales and remotes.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Whether you're waiting at an airport, sitting in a client's lobby, or working from home, the CallFlow app ensures your pipeline never stalls.
                            </p>

                            <ul className="space-y-5 mb-10">
                                {[
                                    "Offline mode with auto-sync when connection restores.",
                                    "WhatsApp integration opens directly to intended lead.",
                                    "Caller ID integration identifies leads on inbound calls.",
                                    "Voice-to-text dictation for quick meeting notes."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="mt-1 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                                            <CheckCircle className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="text-slate-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onOpenDemo}
                                className="group flex items-center text-indigo-600 font-bold text-lg hover:text-indigo-700 transition-colors"
                            >
                                See a Live Demo
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-[#0A0B1A] relative text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Mobilize your workforce today.
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Get the leading mobile CRM app that your agents will actually love using.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold text-lg transition-all shadow-lg shadow-white/10">
                            Start Free Trial
                        </button>
                        <button
                            onClick={onOpenDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
