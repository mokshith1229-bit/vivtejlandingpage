import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    SmartphoneNfc,
    CreditCard,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    ActivitySquare,
    Zap,
    Scale
} from 'lucide-react';

export default function FintechCRM() {
    return (
        <FeaturePageLayout
            title="Best CRM Software for Fintech Companies | CallFlow"
            description="Automate user onboarding, manage drop-offs, scale outbound sales teams, and track your Fintech's massive user pipelines."
        >
            <FeatureHero
                headline="Fix Onboarding Drop-Offs. Accelerate Fintech Growth."
                subheadline="Built explicitly for fast-scaling Fintech apps, Neo-banks, and Payment Gateways. Re-engage abandoned signups, automate KYC reminders, and empower your massive sales floors with rapid dialing."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 border border-indigo-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <SmartphoneNfc className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">User Acquisition Pipeline</span>
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
                                        App Installed <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">1.2k</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Stalled</div>
                                        <div className="font-bold text-sm text-slate-800">User_9924</div>
                                        <div className="text-xs text-slate-500 mb-2">No action: 24hrs</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Auto-ping</div>
                                            <button className="bg-indigo-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Drip Executing</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        KYC Drop-off <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">450</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Vikash Sharma</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Aadhar Verification Failed</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><PhoneCall className="w-3 h-3" /> SDR Calling</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Active Transacting <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8k</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Merchant_Alpha</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">First txn processed</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Massive user acquisition numbers hiding terrible KYC and onboarding drop-off rates.",
                    "Inability to manually call stalled signups fast enough before they switch to competitors.",
                    "B2B Fintech sales teams struggling with scattered tools when pitching payment gateways to merchants.",
                    "Zero systemic tracking tracking of why users stall out inside the app funnel.",
                    "Data security concerns when expanding tele-sales operations with external BPO vendors.",
                    "Lack of automated WhatsApp reminders for critical financial compliance document requests."
                ]}
                solutions={[
                    "Integrate directly with your app backend via API to instantly flag stalled mid-funnel users.",
                    "Push stalled users into automated 1-click dialer queues so agents can assist them rapidly.",
                    "Provide B2B sales teams with robust Kanban pipelines to track multi-stage merchant negotiations securely.",
                    "Automate WhatsApp/SMS drips specifically targeting users stuck on the KYC/documentation phase.",
                    "Employ strict role-based access and phone-number masking to securely scale BPO vendor teams.",
                    "Consolidate dialing, messaging, and pipeline tracking into one affordable platform."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            High-Volume Fintech Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <ActivitySquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Funnel Drop-Off Recovery</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Ingest real-time webhook flags from your app when a user halts during onboarding.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Route critical "KYC Failed" users instantly to your specialized retention calling floor.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Deploy automated WhatsApp nudges asking users to complete their profile setup seamlessly.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Massive Scale Operations</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Distribute thousands of B2C leads effortlessly across massive internal or outsourced calling floors.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>1-Click dialing forces extreme tele-productivity, entirely removing manual number typing.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Rigorous call-logging and dashboard analytics ensure 100% floor accountability.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Secure B2B Pipelines</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Provide B2B Account Executives with structured Kanban boards for merchant acquisition.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Track multiple stakeholder negotiations during complex gateway implementation sales cycles.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Restrict exports and enforce number masking to ensure proprietary merchant lists are never stolen.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Automated Financial Nurture</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Use WhatsApp triggers to passively reactivate dormant user accounts at scale.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Broadcast new financial product features globally while bypassing spam filters.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Pre-qualify inbound merchant inquiries automatically before routing to expensive sales talent.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "App Installed", description: "User downloads and begins flow; halts at KYC." },
                    { title: "Webhook Triggered", description: "App pings CRM: 'User Stalled at Step 3'." },
                    { title: "Auto Intervention", description: "WhatsApp nudge & SDR task created instantly." },
                    { title: "SDR Connects", description: "Agent calls via 1-click dialer to assist." },
                    { title: "KYC Cleared", description: "User finishes onboarding successfully." },
                    { title: "Revenue Unlocked", description: "User makes first transaction on platform." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for Financial Disruptors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <CreditCard className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Payment Gateways & POS</h3>
                            <p className="text-slate-600 text-sm">Scale your B2B merchant acquisition pipelines radically. Track enterprise integrations securely from first pitch to live transaction processing.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <SmartphoneNfc className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Neo-Banks & B2C Apps</h3>
                            <p className="text-slate-600 text-sm">Solve the app-download paradox. Systematically recover the thousands of users who install but abandon your complex onboarding procedure.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Alternative Lending</h3>
                            <p className="text-slate-600 text-sm">Deploy massive outbound calling campaigns to pre-qualified applicant lists rapidly. Enforce rigid document verification workflows securely.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "50%", label: "Faster KYC", description: "Proactive multi-channel chasing resolves blocks quickly" },
                    { value: "Scale", label: "Agent Output", description: "BPO integration works securely out of the box" },
                    { value: "Tracked", label: "Sales Pipeline", description: "Stop losing B2B enterprise deals to chaos" },
                    { value: "Automated", label: "Dormant Nudge", description: "Reactivate quiet accounts programmatically" }
                ]}
            />

            {/* Custom FAQ for Fintech */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Fintech CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it connect to our proprietary backend?</h4>
                            <p className="text-slate-600">Yes, robust API webhooks allow your app to push user statuses instantly into the CRM (e.g. flagging a user as "KYC Stalled").</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">How secure is it for outsourced calling teams?</h4>
                            <p className="text-slate-600">Highly secure. You can mask actual phone numbers entirely from front-line dialers and completely disable data export functionality.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle both our B2C and B2B motions?</h4>
                            <p className="text-slate-600">Absolutely. You can run massive consumer calling queues simultaneously alongside sophisticated Kanban pipelines for your B2B enterprise sales team.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we send WhatsApp reminders automatically?</h4>
                            <p className="text-slate-600">Yes, construct IF/THEN logic flows to ping users automatically if they hesitate during critical onboarding steps.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it track the performance of huge sales floors?</h4>
                            <p className="text-slate-600">Yes, the dashboard visualizes exact talk-times, connection rates, and closing conversion metrics across hundreds of simultaneous agents.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Accelerate User Acquisition?"
                subheadline="Join top Fintech disruptors who use CallFlow to fix leaky funnels and scale their sales operations securely."
            />
        </FeaturePageLayout>
    );
}
