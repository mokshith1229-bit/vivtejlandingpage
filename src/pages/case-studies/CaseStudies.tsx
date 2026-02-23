import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { ArrowRight, TrendingUp, Users, Clock, Building } from 'lucide-react';

export default function CaseStudies({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const cases = [
        {
            company: "TechNova Solutions",
            industry: "SaaS",
            logo: "TN",
            bg: "bg-blue-600",
            headline: "How TechNova increased outbound meetings by 315% in 3 months",
            metrics: [
                { label: "Increase in Meetings", value: "315%", icon: TrendingUp, color: "text-green-500" },
                { label: "Time Saved per Rep", value: "2.5 hrs/day", icon: Clock, color: "text-indigo-500" },
            ],
            description: "TechNova was struggling with low connection rates and manual dialing. By implementing CallFlow's One-Click Dialer and Smart Workflows, their 50-person SDR team transformed their productivity pipeline.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
            company: "Apex Real Estate",
            industry: "Real Estate",
            logo: "AR",
            bg: "bg-amber-600",
            headline: "Closing 40% more properties with automated WhatsApp follow-ups",
            metrics: [
                { label: "Close Rate Increase", value: "40%", icon: TrendingUp, color: "text-green-500" },
                { label: "Lead Response Time", value: "< 5 mins", icon: Clock, color: "text-amber-500" },
            ],
            description: "Apex agents were losing track of hot leads across different platforms. CallFlow unified their communication, using automated WhatsApp alerts to ensure no inquiry went cold.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
        },
        {
            company: "Global EdTech Institute",
            industry: "Education",
            logo: "GE",
            bg: "bg-purple-600",
            headline: "Scaling admissions from 500 to 5,000 enrolled students annually",
            metrics: [
                { label: "Enrollment Growth", value: "10x", icon: Users, color: "text-purple-500" },
                { label: "Counselor Efficiency", value: "+150%", icon: TrendingUp, color: "text-indigo-500" },
            ],
            description: "Managing thousands of prospective student inquiries required a massive counselor team. CallFlow's Lead Routing automatically assigned students to specialized counselors based on their major interest.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
        },
        {
            company: "Drive Motors Alliance",
            industry: "Automotive",
            logo: "DM",
            bg: "bg-rose-600",
            headline: "Reducing test-drive no-shows by 85% with automated reminders",
            metrics: [
                { label: "No-Show Reduction", value: "85%", icon: TrendingUp, color: "text-green-500" },
                { label: "Dealerships Onboarded", value: "45+", icon: Building, color: "text-rose-500" },
            ],
            description: "Before CallFlow, dealers manually called to confirm test drives. Now, customized SMS and WhatsApp reminders trigger 24 hours and 2 hours before the appointment.",
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <FeaturePageLayout
            title="Customer Case Studies | CallFlow CRM"
            description="See how high-growth sales teams use CallFlow to automate calling, manage leads, and close more deals."
        >
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                        Customer Success Stories
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Learn how the world's most proactive sales teams are scaling revenue and efficiency with CallFlow.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {cases.map((cs, idx) => (
                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>

                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-indigo-600 rounded-3xl translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                                        <img src={cs.image} alt={cs.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-6 left-6 flex items-center bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3 ${cs.bg}`}>
                                                {cs.logo}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900 leading-tight">{cs.company}</div>
                                                <div className="text-xs text-slate-500">{cs.industry}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display leading-tight">
                                        {cs.headline}
                                    </h2>
                                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                        {cs.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-slate-100">
                                        {cs.metrics.map((metric, i) => (
                                            <div key={i}>
                                                <div className="flex items-center mb-2">
                                                    <metric.icon className={`w-5 h-5 mr-2 ${metric.color}`} />
                                                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{metric.value}</span>
                                                </div>
                                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center text-lg group">
                                        Read the full case study <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A0B1A] relative text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Ready to be our next success story?
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Book a demo today to see exactly how CallFlow processes map to your specific business model.
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
