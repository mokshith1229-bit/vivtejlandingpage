import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Coins,
    Landmark,
    Wallet,
    Briefcase,
    FileSpreadsheet,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    CheckCircle,
    Building2,
    PieChart
} from 'lucide-react';

export default function LoanDSACRM() {
    return (
        <FeaturePageLayout
            title="Best Loan & DSA CRM Software | CallFlow"
            description="Capture loan leads, automate follow-ups, track deals, and boost conversions with our Loan & DSA CRM built for finance teams and brokers."
        >
            <FeatureHero
                headline="Manage Loan Leads, Automate Follow-Ups & Boost Conversions."
                subheadline="Built specifically for Loan Providers, DSA Partners, and NBFCs. Eliminate dropped leads and manage your entire loan cycle from a single powerful dashboard."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Coins className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Loan Pipeline Dashboard</span>
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
                                        New Lead <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">42</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Facebook</div>
                                        <div className="font-bold text-sm text-slate-800">Ravi Kumar</div>
                                        <div className="text-xs text-slate-500 mb-2">Personal Loan - ₹5L</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 15m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Doc Collection <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">18</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Amit Sharma</div>
                                        <div className="text-xs text-slate-500 mb-2">Home Loan</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> WhatsApp Docs</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Disbursed <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">5</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Sunita Patel</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">₹12L Disbursed</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "High lead drop-off rates because agents don't respond to portal inquiries fast enough.",
                    "Wasting hours on manual follow-ups for basic KYC and document collection.",
                    "No centralized lead tracking, meaning deals get lost in personal WhatsApp chats.",
                    "Missed conversion opportunities when agents forget to call back interested prospects.",
                    "Hard to assign specific leads (e.g. Home vs Personal Loan) to the right specialized agents.",
                    "Extreme difficulty tracking the full loan cycle from application to final disbursement."
                ]}
                solutions={[
                    "Instantly capture and centralize leads from your website, Facebook, and loan portals.",
                    "Auto-assign leads dynamically to your DSA partners or internal sales agents.",
                    "Trigger automated WhatsApp and SMS messages to chase down pending documents.",
                    "Enforce follow-up schedules and reminders directly inside the agent's dashboard.",
                    "Provide 1-click browser calling with auto-logged call recordings for full QA.",
                    "Visual pipeline tracking and detailed reporting to monitor your entire loan closing rate."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Finance Workflows, Simplified
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Lead Capture & Distribution</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Auto loan lead intake from web forms, Facebook Ads, and Google Ads.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Instantly and fairly assign leads to internal agents or external DSAs via round-robin.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Filter out duplicate entries automatically to save agent time.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Follow-Up Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send auto SMS & official WhatsApp reminders to prospects for document (KYC, PAN) submission.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger status-based sequences (e.g. daily nudges if a prospect is 'Interested').</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Bulk broadcast loan offers and interest rate drops to warm leads.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">1-Click Calling + Logging</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Make calls directly from the CRM using an integrated web dialer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Automatically store call logs, durations, and recordings in the client's profile.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Easy review of calls to ensure fair selling practices and compliance.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Pipeline Tracking & Analytics</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Build custom loan funnel stages (New → Verification → Sanctioned → Disbursed).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track exact loan closing rates across your entire team.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Access real-time leaderboards showing top performing agents and DSAs.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Inflow", description: "Loan inquiry from digital portal or landing page form." },
                    { title: "Auto Capture", description: "CRM centralizes lead in under 1 second." },
                    { title: "Smart Routing", description: "Lead instantly assigned to free agent or DSA." },
                    { title: "Agent Outreach", description: "Agent calls from browser and requests KYC via WhatsApp." },
                    { title: "Deal Closed", description: "Loan sanctioned, status updated, reporting finalized." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale Financial Operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Building2 className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Loan Brokers</h3>
                            <p className="text-slate-600 text-sm">Aggregate leads for home, personal, and business loans and systematically work through them without missing a single follow-up call.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Users className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">DSA Partners</h3>
                            <p className="text-slate-600 text-sm">Manage multi-bank submissions efficiently. Keep track of which client's application is pending at which specific bank branch.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Landmark className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">NBFCs</h3>
                            <p className="text-slate-600 text-sm">Handle extreme lead volume generated from digital marketing with zero downtime and total accountability for your telecallers.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Finance Consultants</h3>
                            <p className="text-slate-600 text-sm">Organize wealth management prospecting. Maintain rich, detailed histories of client financial requirements and previous conversations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Wallet className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Collections Teams</h3>
                            <p className="text-slate-600 text-sm">Run high-efficiency outbound dialing campaigns with automatic call pacing, disposition tagging, and recorded proof of contact.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "4x Faster", label: "Lead Response", description: "Automated distribution prevents idle leads" },
                    { value: "+40%", label: "Conversions", description: "Structured follow-ups seal more deals" },
                    { value: "Zero", label: "Manual Work", description: "KYC collection handled via WhatsApp bots" },
                    { value: "100%", label: "Visibility", description: "Real-time tracking of agent call times" }
                ]}
            />

            {/* Custom FAQ for Finance */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common CRM Finance Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this suitable for DSAs & finance brokers?</h4>
                            <p className="text-slate-600">Yes. It's built exactly for the high-velocity, multi-touch nature of loan processing. You can manage distinct pipelines for different banks or loan types.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I automate SMS/WhatsApp follow-ups?</h4>
                            <p className="text-slate-600">Absolutely. You can set up official WhatsApp triggers to instantly message a lead asking for their PAN and Aadhaar as soon as they enter the system.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is performance reporting included?</h4>
                            <p className="text-slate-600">Yes, you get robust real-time dashboards mapping call durations, connection rates, and end-of-funnel conversion metrics per telecaller or external partner.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I track loan stages & statuses?</h4>
                            <p className="text-slate-600">Yes, visualize prospects through customizable Kanban pipelines (e.g., Eligibility Check &gt; Field Investigation &gt; Credit Review &gt; Sanctioned).</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is multi-user access supported?</h4>
                            <p className="text-slate-600">Yes, the system supports role-based access. Telecallers, floor managers, DSAs, and admins can all be given restricted views suited to their rank.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Automate Your Loan & DSA Sales?"
                subheadline="Join the top NBFCs and DSA agencies who use CallFlow CRM to scale operations and close more loans."
            />
        </FeaturePageLayout>
    );
}
