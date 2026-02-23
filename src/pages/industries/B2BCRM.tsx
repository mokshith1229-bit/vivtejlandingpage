import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Briefcase,
    Building2,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    LineChart,
    PieChart,
    Network
} from 'lucide-react';

export default function B2BCRM() {
    return (
        <FeaturePageLayout
            title="Best B2B CRM Software | CallFlow"
            description="Automate follow-ups, manage leads, track performance and scale your B2B business with our CRM software."
        >
            <FeatureHero
                headline="Accelerate Long Sales Cycles & Close Enterprise Deals."
                subheadline="Built explicitly to handle multi-stakeholder B2B sales. Automate your outreach, track massive pipelines, and stop losing high-value deals to poor follow-up."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 border border-indigo-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <LineChart className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">B2B Sales Pipeline</span>
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
                                        Demo book <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">LinkedIn</div>
                                        <div className="font-bold text-sm text-slate-800">TechCorp Inc.</div>
                                        <div className="text-xs text-slate-500 mb-2">Enterprise Plan - $12k</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Satish, CTO</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Zoom</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Negotiation <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">3</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Apex Solutions</div>
                                        <div className="text-xs text-slate-500 mb-2">Vendor Contract</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Follow-up</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Closed Won <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">5</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Global Logistics</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">$45k ARR Added</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Long sales cycles cause prospects to go cold and slip through the cracks.",
                    "Navigating multiple stakeholders makes email tracking confusing and chaotic.",
                    "Wasting hours on manual follow-ups instead of strategizing deal closures.",
                    "Zero visibility into the actual value of pending deals in the pipeline.",
                    "Lead data is trapped inside individual sales rep's inboxes or notebooks.",
                    "Impossible to track outbound calling vs. email conversion metrics accurately."
                ]}
                solutions={[
                    "Automate gentle WhatsApp and SMS nurturing sequences to keep cold deals warm.",
                    "Maintain a centralized communication history mapping all stakeholder touchpoints.",
                    "Enable robust task management with automated calling reminders for account managers.",
                    "Visual multi-stage pipeline boards showing exact deal value and estimated closing dates.",
                    "Centralize data securely so company momentum continues even if an executive leaves.",
                    "Deep analytics dashboards tracking call times, connection rates, and deal velocities."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            B2B Selling Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Multi-Stage Pipeline</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Customizable pipelines (e.g. Discovery, Demo, Contract Sent, Closed Won).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Drag and drop interface for friction-less pipeline management by reps.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Forecast total expected revenue based on existing pipeline status.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Network className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Stakeholder Management</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Map and record multiple contact profiles correctly under one unified company account.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Chronological histories of all previous calls and WhatsApps with procurement vs. decision makers.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Auto-assign high value strategic accounts to specialized closers.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">1-Click Calling & Logging</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Execute massive outbound SDR campaigns rapidly with the browser dialer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Auto-record discovery calls to help draft hyper-accurate custom proposals.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Save reps hours compared to manual dial punching and call disposition logging.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Deal Value Tracking</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Assign monetary values and probability percentages to every prospect.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Monitor and export B2B sales metrics for board and management reporting.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Identify immediate bottlenecks impacting quarterly revenue goals.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Captured", description: "B2B lead generated from LinkedIn or website form." },
                    { title: "Auto Assigned", description: "Routed to AE/SDR based on territory rules." },
                    { title: "Discovery Call", description: "Initiated via 1-click dialer and auto-logged." },
                    { title: "Follow-Ups Automated", description: "WhatsApp/Email sequences deployed to stay top-of-mind." },
                    { title: "Pipeline Tracked", description: "Deal moves through Kanban until Closed Won." },
                    { title: "Reports Analyzed", description: "Revenue forecasted and performance measured." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale B2B Organizations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Building2 className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Manufacturers</h3>
                            <p className="text-slate-600 text-sm">Organize distributors, track massive wholesale orders, and monitor long procurement negotiations systematically.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">B2B Service Agencies</h3>
                            <p className="text-slate-600 text-sm">Convert marketing and consulting proposals efficiently. Keep historical records of requirements and revisions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <PieChart className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Wholesale Distributors</h3>
                            <p className="text-slate-600 text-sm">Run high volume outbound campaigns calling retailers to introduce new stock and coordinate bulk fulfillment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "Faster", label: "Response Time", description: "Systematic queues ensure leads aren't ignored" },
                    { value: "Higher", label: "Conversion Rates", description: "Stay top-of-mind over long sales cycles" },
                    { value: "Improved", label: "Accountability", description: "Full visibility into daily SDR activity" },
                    { value: "Unified", label: "Communications", description: "Say goodbye to scattered Excel sheets" }
                ]}
            />

            {/* Custom FAQ for B2B */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common B2B CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle long multi-month sales cycles?</h4>
                            <p className="text-slate-600">Yes, it's designed to nurture leads via automated follow-ups and maintain strict organizational memory across many months.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it track different stakeholders?</h4>
                            <p className="text-slate-600">Yes, you can log interactions distinctively, ensuring you know exactly what was pitched to procurement versus technical buyers.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is there reporting on revenue and deal value?</h4>
                            <p className="text-slate-600">Absolutely. You can project cashflow effectively by analyzing the total financial value of deals in the pipeline.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we manage SDRs outbound calling?</h4>
                            <p className="text-slate-600">Yes, the 1-click dialer drastically accelerates daily call volume and creates instant tracking graphs on tele-performance.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we route leads effectively?</h4>
                            <p className="text-slate-600">Yes, incoming web leads can be routed via complex round-robin scheduling algorithms automatically.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Close More Enterprise Deals?"
                subheadline="Join top B2B companies who use CallFlow to scale their sales operations and dominate their pipeline."
            />
        </FeaturePageLayout>
    );
}
