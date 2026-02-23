import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Calendar, Clock, Video, PlayCircle, Users, ArrowRight } from 'lucide-react';

export default function Webinars({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const upcomingWebinars = [
        {
            title: "Mastering Outbound Calling in 2026",
            date: "Thursday, Nov 12",
            time: "1:00 PM EST",
            speaker: "Sarah Jenkins, VP of Sales",
            spots: 142,
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "How to Build Automated Lead Routing Workflows",
            date: "Tuesday, Nov 17",
            time: "10:00 AM EST",
            speaker: "David Chen, Lead Solutions Engineer",
            spots: 58,
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const pastRecordings = [
        {
            title: "Scaling Your Sales Team From 5 to 50 Reps",
            duration: "45 mins",
            views: "1.2k",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Ultimate Guide to Call Coaching with AI",
            duration: "60 mins",
            views: "3.4k",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Migrating from Salesforce to CallFlow",
            duration: "30 mins",
            views: "850",
            image: "https://images.unsplash.com/photo-1552581232-26cb6d568c8c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Optimizing WhatsApp Broadcasts for B2B",
            duration: "50 mins",
            views: "2.1k",
            image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <FeaturePageLayout
            title="Webinars & Events | CallFlow CRM"
            description="Join live webinars and watch past recordings to master CallFlow and elevate your sales strategies."
        >
            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-[#0A0B1A] relative text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl mix-blend-screen pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/20 rounded-full px-4 py-1.5 mb-8 border border-indigo-500/30">
                        <Video className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-indigo-200 font-bold tracking-wide uppercase">Live Events</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-display">
                        Learn from the experts.
                    </h1>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Join our live webinars to learn advanced sales strategies, product deep dives, and expert interviews.
                    </p>
                </div>
            </section>

            {/* Upcoming Webinars */}
            <section className="py-24 bg-slate-50 border-b border-slate-200 -mt-10 relative z-20 rounded-t-3xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 font-display">Upcoming Live Sessions</h2>
                            <p className="text-slate-500 mt-2">Reserve your spot before they fill up.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {upcomingWebinars.map((webinar, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-indigo-300 transition-colors group">
                                <div className="w-full md:w-48 h-48 shrink-0 rounded-2xl overflow-hidden relative">
                                    <img src={webinar.image} alt="Speaker" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-tight">
                                        {webinar.speaker}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center text-sm font-bold text-indigo-600 mb-3 bg-indigo-50 inline-flex px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4 mr-2" /> {webinar.date}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">
                                        {webinar.title}
                                    </h3>
                                    <div className="flex flex-col space-y-2 mb-8">
                                        <div className="flex items-center text-slate-600 text-sm">
                                            <Clock className="w-4 h-4 mr-2 text-slate-400" /> {webinar.time}
                                        </div>
                                        <div className="flex items-center text-amber-600 text-sm font-semibold">
                                            <Users className="w-4 h-4 mr-2" /> {webinar.spots} spots remaining
                                        </div>
                                    </div>
                                    <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-md">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* On-Demand Recordings */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 font-display">On-Demand Recordings</h2>
                        <p className="text-slate-500 mt-2">Watch past sessions at your own pace.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastRecordings.map((rec, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-4 border border-slate-100 shadow-sm">
                                    <img src={rec.image} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                                            <PlayCircle className="w-6 h-6 text-indigo-600 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md">
                                        {rec.duration}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                    {rec.title}
                                </h3>
                                <div className="text-sm text-slate-500">
                                    {rec.views} views
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all">
                            View Full Library <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-indigo-600 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 hidden md:block"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Ready to implement what you've learned?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                        Get hands-on with CallFlow and start closing deals faster today.
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
