import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Cloud,
    MousePointerClick,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    Repeat,
    MailOpen,
    TerminalSquare,
    CalendarCheck,
    MonitorSmartphone
} from 'lucide-react';

export default function SaaSCRM() {
    return (
        <FeaturePageLayout
            title="Best CRM Software for SaaS Companies | CallFlow"
            description="Automate trial conversions, track SaaS sales pipelines, monitor customer success, and scale your software business."
        >
            <FeatureHero
                headline="Convert More Trials & Drive Recurring Revenue."
                subheadline="Built exactly for B2B Software and SaaS Companies. Track product signups, automate onboarding sequences, and ensure your Account Executives never drop the ball on high-value demos."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Cloud className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">SaaS Growth Pipeline</span>
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
                                        New Trial (Free) <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">142</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Web App</div>
                                        <div className="font-bold text-sm text-slate-800">Acme Corp</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Signed up: Today</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Auto-Nurture</div>
                                            <button className="bg-indigo-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Drip Series</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Demo Scheduled <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">18</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Zephyr Logistics</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Enterprise Tier Demo</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><CalendarCheck className="w-3 h-3" /> Tomorrow, 2PM</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Converted (Paid) <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">48</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Crescent Tech</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">$400 MRR Locked</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Massive free-trial signup volume but shockingly low conversion rates to paid plans.",
                    "No SaaS lifecycle automation, leaving users to onboard themselves poorly via wikis.",
                    "Account Executives missing outbound calls to high-value enterprise web leads.",
                    "Customer churn visibility gaps; no system triggers when an account drops usage.",
                    "Disjointed tech stacks causing SDRs to copy-paste data between billing and marketing.",
                    "Invisible sales pipelines making predictable MRR forecasting entirely impossible."
                ]}
                solutions={[
                    "Automatically segment trials and deploy conditional drip sequences to drive activation.",
                    "Construct robust automated onboarding sequences via WhatsApp and SMS immediately post-signup.",
                    "Route enterprise 'Book a Demo' leads instantly to Account Executives with forced SLAs.",
                    "Integrate directly with product analytics to flag at-risk accounts for human intervention.",
                    "Consolidate outbound dialers, prospect tracking, and messaging into one unified console.",
                    "Visual pipeline stages tracking exact ARR/MRR deal values through every stage of procurement."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            SaaS Revenue Infrastructure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <TerminalSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Trial Tracking Pipeline</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Ingest real-time signups from your SaaS product backend via direct webhook integration.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Automatically calculate trial expiration countdowns and visualize them on the Kanban board.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Route specific use-case signups to specialized Account Executives automatically.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Repeat className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Lifecycle Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger onboarding sequences ensuring new users integrate your software successfully.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Deploy automated 'Trial Expiring Soon' reminders via multi-channel outreach (SMS/WA).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Run passive re-engagement campaigns targeting 'churned' databases.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Outbound Velocity</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>1-Click browser dialer allows SDRs to crush through lists of 'High Intent' trial users rapidly.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Record all discovery calls securely so Product Managers can review actual user feedback.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Enforce disposition codes so you know exactly why deals stall (e.g., 'Competitor Pricing').</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">MRR Dashboard Visibility</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Pinpoint pipeline bottlenecks: where are free-users dropping off before paying?</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Maintain clear visibility on top-performing Account Executives who close complex enterprise tickets.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Generate accurate sales velocity and cycle-duration metrics for investor reporting.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Trial Initiated", description: "Webhook pushes new user securely into CRM." },
                    { title: "Onboarding Triggered", description: "Automated sequence delivers product-setup guide." },
                    { title: "High Intent Flagged", description: "Platform flags heavy usage; assigns to AE." },
                    { title: "AE Outreach", description: "Account Executive initiates call via dialer." },
                    { title: "Demo Delivered", description: "Procurement pipeline managed meticulously." },
                    { title: "Subscription Won", description: "Deal marked closed; MRR updated automatically." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for Hyper-Growth Software
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <TerminalSquare className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">B2B SaaS Companies</h3>
                            <p className="text-slate-600 text-sm">Organize massive funnels. Manage the complex transition from simple product-led signups into enterprise sales engagements.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MonitorSmartphone className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">EdTech Platforms</h3>
                            <p className="text-slate-600 text-sm">Track extensive enrollment cycles. Use automated WhatsApp triggers to nurture students and parents toward final course purchases.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MousePointerClick className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Web/App Agencies</h3>
                            <p className="text-slate-600 text-sm">Systematize incoming digital project requests. Create customized development pipelines to manage scoping and client follow-ups.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "+45%", label: "Trial Conversions", description: "Proactive dialing prevents passive churning" },
                    { value: "Zero", label: "Lost Demos", description: "Account Executives follow forced CRM SLA routing" },
                    { value: "100%", label: "SDR Visibility", description: "Know exactly how many calls drive demo bookings" },
                    { value: "Automated", label: "Onboarding Drops", description: "Software education handled systematically" }
                ]}
            />

            {/* Custom FAQ for SaaS */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common SaaS CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle thousands of free-tier signups?</h4>
                            <p className="text-slate-600">Yes, the CRM effortlessly scales to centralize massive Top-of-Funnel signup volume flowing via API/Webhooks.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it automate onboarding campaigns?</h4>
                            <p className="text-slate-600">Absolutely, you can build sophisticated WhatsApp and SMS drip sequences triggering automatically when a new account is registered.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we route high-intent users to distinct AEs?</h4>
                            <p className="text-slate-600">Yes, robust routing logic ensures that users who signal enterprise intent (e.g. requesting a demo) instantly land on a closer's desk.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is there reporting on MRR/pipeline value?</h4>
                            <p className="text-slate-600">Yes, visualize Exact ARR, MRR, and one-time setup fee values dynamically within standard Kanban pipelines.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does the system provide dialers for our SDRs?</h4>
                            <p className="text-slate-600">Yes, the integrated 1-click dialer transforms your SDR team into a high-velocity outbound machine while securely logging all calls.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Accelerate Your MRR Growth?"
                subheadline="Join top software companies who use CallFlow to convert free users into enterprise subscriptions."
            />
        </FeaturePageLayout>
    );
}
