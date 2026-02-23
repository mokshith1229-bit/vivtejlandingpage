import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Tag, Calendar, Rocket, Bug, Star } from 'lucide-react';

export default function Updates({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const updates = [
        {
            version: "v4.1.0",
            date: "October 18, 2026",
            title: "Introducing CallFlow AI Sentiment Analysis",
            type: "Feature",
            Icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-100",
            content: (
                <>
                    <p className="mb-4">We're thrilled to announce the beta release of our AI-powered sentiment analysis engine. All calls longer than 60 seconds are now automatically analyzed for customer sentiment patterns (Positive, Neutral, Negative, Frustrated).</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Sentiment Trends:</strong> View aggregate sentiment across individual agents or entire teams.</li>
                        <li><strong>Alerts:</strong> Set up webhooks to trigger when a high-value account registers "Negative" sentiment.</li>
                        <li><strong>Coach:</strong> AI highlights the exact timestamp where sentiment shifted to help managers coach reps effectively.</li>
                    </ul>
                </>
            )
        },
        {
            version: "v4.0.5",
            date: "October 02, 2026",
            title: "Twilio Routing Improvements & Bug Fixes",
            type: "Fixes",
            Icon: Bug,
            color: "text-red-500",
            bg: "bg-red-100",
            content: (
                <>
                    <p className="mb-4">This patch addresses several stability improvements related to our Twilio routing integration, particularly handling dropped packets on poor cellular connections.</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Fixed an issue where "Call Connected" status was delayed by 2 seconds.</li>
                        <li>Resolved a UI glitch where the dialer would overlay the Navbar on mobile Chrome.</li>
                        <li>Optimized database queries for the "Leads by Source" widget, reducing load times by 40%.</li>
                    </ul>
                </>
            )
        },
        {
            version: "v4.0.0",
            date: "September 15, 2026",
            title: "The All-New CallFlow React Mobile App",
            type: "Major Release",
            Icon: Rocket,
            color: "text-indigo-600",
            bg: "bg-indigo-100",
            content: (
                <>
                    <p className="mb-4">After 6 months in beta, the completely rewritten CallFlow mobile app is now live on the iOS App Store and Google Play Store.</p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Offline Mode:</strong> Log calls, add notes, and create leads without internet connection. Automatically syncs when back online.</li>
                        <li><strong>One-Tap WhatsApp:</strong> Jump straight from a lead record into a pre-filled WhatsApp conversation.</li>
                        <li><strong>Lightning Fast:</strong> 3x faster load times and 60fps animations across all screens.</li>
                    </ul>
                    <p className="mt-4"><a href="/features/mobile-app" className="text-indigo-600 font-bold hover:underline">Read the full announcement &rarr;</a></p>
                </>
            )
        }
    ];

    return (
        <FeaturePageLayout
            title="Product Updates & Release Notes | CallFlow CRM"
            description="Stay up to date with the latest features, improvements, and bug fixes in CallFlow."
        >
            <div className="bg-slate-50 min-h-screen pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                            Changelog
                        </h1>
                        <p className="text-xl text-slate-600">
                            New updates and improvements to CallFlow. We ship fast.
                        </p>
                    </div>

                    <div className="space-y-16 lg:space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                        {updates.map((update, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                {/* Timeline Node */}
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-slate-200`}>
                                    <update.Icon className={`w-4 h-4 ${update.color}`} />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center">
                                            <Tag className="w-3 h-3 mr-1.5" /> {update.version}
                                        </span>
                                        <span className="text-sm text-slate-400 flex items-center font-medium">
                                            <Calendar className="w-3 h-3 mr-1.5" /> {update.date}
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${update.color} ${update.bg} px-2 py-0.5 rounded`}>
                                            {update.type}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{update.title}</h3>
                                    <div className="text-slate-600 leading-relaxed text-[15px]">
                                        {update.content}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-6 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                            Load Older Updates
                        </button>
                    </div>

                </div>
            </div>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A0B1A] relative text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Experience the latest.
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Sign up today and get access to all the features we've shipped, plus everything coming next.
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
