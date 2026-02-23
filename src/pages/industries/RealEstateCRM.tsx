import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import FAQ from '../../components/FAQ';
import {
    Building2,
    Home,
    PhoneCall,
    MessageSquare,
    Users,
    TrendingUp,
    CheckCircle,
    Clock,
    MapPin,
    UserPlus,
    CalendarCheck,
    BarChart3,
    BellRing,
    Building
} from 'lucide-react';

export default function RealEstateCRM() {
    return (
        <FeaturePageLayout
            title="Real Estate CRM Software for Property Sales | CallFlow"
            description="Manage property leads, automate follow-ups, track agents and close more deals with our Real Estate CRM software."
        >
            <FeatureHero
                headline="Close More Property Deals, Faster."
                subheadline="Built specifically for real estate developers and brokers. Capture site visit leads instantly, respond in seconds, and track every agent's follow-up."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Skyline Residency Project</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                            </div>

                            {/* Kanban Board */}
                            <div className="flex-1 flex gap-4 p-4 overflow-hidden bg-slate-50/50">

                                {/* Column 1 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        New Leads <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">12</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Hot</div>
                                        <div className="font-bold text-sm text-slate-800">Rahul Verma</div>
                                        <div className="text-xs text-slate-500 mb-2">3BHK Inquiry - Facebook</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 2m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Site Visit Scheduled <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">4</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Pooja Singh</div>
                                        <div className="text-xs text-slate-500 mb-2">2BHK - PropTiger</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><CalendarCheck className="w-3 h-3" /> Today, 4 PM</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Negotiation <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">2</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Vikram Desai</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">₹1.2 Cr Offer</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Missed property leads because your team didn't call within 5 minutes.",
                    "Slow response times causing buyers to look at a competitor's project.",
                    "No follow-up tracking: \"Did the agent call the site visit lead back?\"",
                    "Manual lead distribution from MagicBricks and Facebook taking hours.",
                    "No visibility into which broker or agent is actually performing.",
                    "Poor coordination between site visits and follow-up calls."
                ]}
                solutions={[
                    "Auto lead capture from portals (99Acres, FB) pushing to CRM instantly.",
                    "Round-robin lead assignment routes buyers to available agents immediately.",
                    "1-click dialer with automatic call logging ensures 100% follow-up tracking.",
                    "Automated reminders mean agents never miss a scheduled callback.",
                    "WhatsApp & SMS automation sends brochures right after the call.",
                    "Real-time dashboards show exactly how many calls and site visits each agent did."
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Building2, title: "Property Lead Pipelines", description: "Visual drag-and-drop boards (New, Site Visit, Negotiation) tailored for real estate." },
                    { icon: PhoneCall, title: "1-Click Telephony", description: "Agents can dial 100+ leads daily from their browser or app. Every call is recorded." },
                    { icon: CalendarCheck, title: "Site Visit Management", description: "Schedule, track, and send localized WhatsApp reminders to clients 2 hours before visits." },
                    { icon: Users, title: "Smart Lead Routing", description: "Distribute bulk leads by project, city, or round-robin to ensure fair broker distribution." },
                    { icon: MessageSquare, title: "Automated Nurturing", description: "Set up drip WhatsApp sequences to nurture cold inquiries over 6 months." },
                    { icon: BarChart3, title: "Agent Analytics", description: "Track connect rates, average talk time, and site visit conversion ratios per agent." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Lead Generation", description: "Buyer submits form on MagicBricks or Facebook Ad." },
                    { title: "Instant Sync", description: "CallFlow captures lead & assigns to Agent instantly." },
                    { title: "Immediate Call", description: "Agent notified. Calls lead via 1-click dialer." },
                    { title: "Site Visit Booked", description: "Agent schedules visit. CRM auto-sends WhatsApp confirmation." },
                    { title: "Manager Tracking", description: "Director views live dashboard of daily site visits booked." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "<5 min", label: "Response Time", description: "To incoming portal leads" },
                    { value: "+40%", label: "Site Visits", description: "Through automated WhatsApp reminders" },
                    { value: "100%", label: "Call Tracking", description: "Zero 'unofficial' or unlogged calls" },
                    { value: "0", label: "Lost Leads", description: "Every inquiry accounted for" }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who Is This For?</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for every layer of Real Estate
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Building className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Builders & Developers</h3>
                            <p className="text-slate-600 text-sm">Manage hundreds of daily inbound leads across multiple new projects. Track massive call center floors effortlessly.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Home className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Property Consultants</h3>
                            <p className="text-slate-600 text-sm">Keep your personal pipeline organized. Never forget a client follow-up and look professional with automated WhatsApps.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Channel Partners</h3>
                            <p className="text-slate-600 text-sm">Distribute builder leads fairly among your broker team. See exactly who is closing deals and who is wasting leads.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Building2 className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Real Estate</h3>
                            <p className="text-slate-600 text-sm">Manage long-cycle enterprise leasing deals with detailed history tracking and multi-stakeholder management.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <MapPin className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Rental Agencies</h3>
                            <p className="text-slate-600 text-sm">Churn through high-volume rental inquiries fast. Quickly match tenant requirements to available inventory.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom FAQ for Real Estate */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Real Estate Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {/* Stand-in for an accordion/FAQ list */}
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I integrate property portals like 99Acres or MagicBricks?</h4>
                            <p className="text-slate-600">Yes! CallFlow integrates directly with all major Indian real estate portals, pulling leads instantly into your pipeline via API.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this CRM suitable for small brokers?</h4>
                            <p className="text-slate-600">Absolutely. We offer flexible pricing tiers. A 2-person broker team can use CallFlow just as effectively as a 500-seat developer call center.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I track field agents doing site visits?</h4>
                            <p className="text-slate-600">Yes, our mobile app allows field agents to log physical site visits, take notes, and update the CRM from their smartphones.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it support WhatsApp brochures?</h4>
                            <p className="text-slate-600">Yes, you can pre-load project PDFs and floor plans and send them via WhatsApp to clients with a single click during or after a call.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Close More Property Deals?"
                subheadline="Join hundreds of top developers and brokers using CallFlow to dominate their local markets."
            />
        </FeaturePageLayout>
    );
}
