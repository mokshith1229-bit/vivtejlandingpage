import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Landmark,
    ShieldCheck,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    Briefcase,
    PieChart,
    Lock
} from 'lucide-react';

export default function FinancialServicesCRM() {
    return (
        <FeaturePageLayout
            title="Best CRM Software for Financial Services | CallFlow"
            description="Automate client follow-ups, securely manage portfolios, track advisor performance and scale your Financial Services firm."
        >
            <FeatureHero
                headline="Secure Client Trust. Accelerate AUM Growth."
                subheadline="Built explicitly for Wealth Managers, Advisory Firms, and Tax Consultants. Securely centralize client communications, automate compliance checks, and systematically nurture your high-net-worth portfolio."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 border border-emerald-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Landmark className="w-5 h-5 text-emerald-600" />
                                    <span className="font-bold text-slate-800 text-sm">Advisory Client Pipeline</span>
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
                                        New Inquiry <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Referral</div>
                                        <div className="font-bold text-sm text-slate-800">Sanjay Gupta</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Intent: Mutual Funds SIP</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Auto-assigned</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        KYC / Doc Pending <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">14</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Anita Desai</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Portfolio Review</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-rose-600 bg-rose-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> PAN Awaited</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Active Client <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">142</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Dr. Rajesh Kumar</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">AUM: ₹4.5 Cr</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Losing high-net-worth referrals because advisors forget to follow up promptly.",
                    "Client data scattered across unsecure Excel sheets, violating financial compliance norms.",
                    "Extremely sluggish KYC and documentation collection processes causing deal drop-offs.",
                    "No systemic way to trigger annual portfolio reviews or tax-season reminders efficiently.",
                    "Inability to track the daily calling/pitching performance of junior financial advisors.",
                    "Client trust degrades when interaction histories are lost due to advisor turnover."
                ]}
                solutions={[
                    "Auto-assign referrals instantly and enforce strict SLA times for the initial advisory call.",
                    "Centralize all financial data in a secure, role-based CRM with masked contact details.",
                    "Automate WhatsApp document-collection sequences to gently nudge clients for KYC.",
                    "Build massive drip campaigns for tax season, SIP renewals, and quarterly reviews.",
                    "Utilize 1-Click Dialing to force systemic logging of outbound pitching efforts.",
                    "Maintain permanent chronological records of every client call, message, and form securely."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Wealth & Advisory Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Secure Client Centralization</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Store sensitive client details behind strict role-based access controls (RBAC).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Mask phone numbers so junior telecallers cannot export HNI lead data securely.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Chronological interaction histories ensure institutional memory remains if an advisor leaves.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Automated KYC & Nurture</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Trigger automated WhatsApp sequences gently reminding clients to submit pending PAN/Aadhar documents.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Deploy firm-wide bulk text campaigns regarding market updates or new bond issues seamlessly.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Schedule automated birthday or anniversary greetings to bolster HNI relationships.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">High-Velocity Prospecting</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Upload massive cold databases for new financial product launches (NFOs).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Equip junior analysts with the 1-click dialer to burn through outreach lists systematically.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Enforce mandatory disposition tags perfectly mapping client interest levels (e.g., "Interested in Equity").</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Advisory Pipeline Visibility</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Drag-and-drop Kanban pipelines tracking deals from 'Lead' to 'Funds Deployed'.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Assign monetary values representing potential AUM or commission strictly to specific pipeline stages.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Generate detailed conversion metrics tracking top-closing advisors on your team.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Ingested", description: "Referral or Web lead enters securely." },
                    { title: "Auto Assigned", description: "Routed to appropriate Wealth Advisor." },
                    { title: "Initial Consult", description: "Advisor uses 1-click dialer; logs exact requirements." },
                    { title: "KYC Automation", description: "WhatsApp reminders chase missing documents." },
                    { title: "Funds Deployed", description: "Pipeline updated to 'Active Client' status." },
                    { title: "Review Scheduled", description: "System triggers next quarter's check-in call." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for Financial Professionals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Wealth Managers & IFAs</h3>
                            <p className="text-slate-600 text-sm">Systematize massive client portfolios securely. Guarantee proactive annual reviews and manage document collection without the headache.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Landmark className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Brokers & Distributors</h3>
                            <p className="text-slate-600 text-sm">Accelerate outbound sales for mutual funds, bonds, and insurance. Equip junior callers with dialing technology that guarantees high output.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tax Advisors & CAs</h3>
                            <p className="text-slate-600 text-sm">Organize chaos during tax season effectively. Deploy mass broadcast sequences requesting paperwork weeks before urgent filing deadlines.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "Faster", label: "Documentation", description: "WhatsApp nudges accelerate KYC completion" },
                    { value: "Zero", label: "Data Leakage", description: "Masked numbers protect proprietary client lists" },
                    { value: "100%", label: "Relationship Memory", description: "All historic calls logged centrally" },
                    { value: "Proactive", label: "Client Nurture", description: "Systematic reminders for portfolio reviews" }
                ]}
            />

            {/* Custom FAQ for Financial Services */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Financial CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is the platform secure for banking/financial data?</h4>
                            <p className="text-slate-600">Yes, the platform employs strict access controls. You can limit data exporting completely and mask phone numbers to prevent theft.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it help chase clients for KYC docs?</h4>
                            <p className="text-slate-600">Absolutely. Configure automated WhatsApp sequences that regularly remind clients to submit pending PAN/Aadhar documents.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we send market update broadcasts?</h4>
                            <p className="text-slate-600">Yes, you can easily filter your database by client-type and dispatch highly targeted mass SMS or WhatsApp announcements regarding NFOs.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we track the calling output of junior staff?</h4>
                            <p className="text-slate-600">Yes, the dashboard visualizes exact talk-times, dial counts, and final disposition logs per telecaller in real-time.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Will this solve the "lost context" when advisors quit?</h4>
                            <p className="text-slate-600">Yes, because every call recording, note, and message is tied centrally to the CRM profile, the next assigned advisor can read the entire client history instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Secure & Scale Your AUM?"
                subheadline="Join top wealth managers and advisory firms who trust CallFlow to protect client data while driving revenue growth."
            />
        </FeaturePageLayout>
    );
}
