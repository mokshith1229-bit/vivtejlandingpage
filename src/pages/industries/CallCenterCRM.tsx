import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Headset,
    Mic,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    ActivitySquare,
    ClipboardCheck,
    RadioTower
} from 'lucide-react';

export default function CallCenterCRM() {
    return (
        <FeaturePageLayout
            title="Best Call Center CRM Software | CallFlow"
            description="Automate follow-ups, manage massive call volumes, track agent performance and scale your Call Center with our CRM software."
        >
            <FeatureHero
                headline="Maximize Telecaller Productivity & Drive High Volume."
                subheadline="Built explicitly for BPOs, Telemarketing Floors, and Customer Support Hubs. Automate your dialing, eliminate manual logging, and track every single agent metric in real-time."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-purple-50 border border-purple-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Headset className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Manager Floor Dashboard</span>
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
                                        Active Callers <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">48</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-green-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Agent: Rahul D.</div>
                                        <div className="text-xs text-slate-500 mb-2">On Call: 04:23</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Inbound Queue</div>
                                            <button className="bg-blue-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><Mic className="w-3 h-3" /> Monitor</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Follow-Up Tasks <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">154</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Agent: Priya S.</div>
                                        <div className="text-xs text-slate-500 mb-2">Paused (Break)</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><ClipboardCheck className="w-3 h-3" /> 12 Pending</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Drop Rate <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">2.4%</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-rose-500">
                                        <div className="font-bold text-sm text-slate-800">Campaign Alpha</div>
                                        <div className="text-[10px] text-rose-600 font-bold mt-1">SLA Warning: Wait Times</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Extreme difficulty tracking high call volumes and identifying dropped calls realistically.",
                    "Zero accountability means telecallers can fake dials or log fake dispositions effortlessly.",
                    "Manual call logging forcing agents to waste 30% of their day switching between windows.",
                    "No performance reports to differentiate your top floor-closers from low-performers.",
                    "Data leakage when agents inevitably download lead sheets to personal devices.",
                    "Quality assurance is impossible without accessible, auto-saved full call recordings."
                ]}
                solutions={[
                    "Centralized tracking handles massive inbound and outbound campaign volumes securely.",
                    "1-Click dialing forces automatic systemic logging, leaving agents no room to manipulate numbers.",
                    "Seamless browser-based clicking saves thousands of man-hours per month on manual data entry.",
                    "Granular leaderboards expose talk-times, connection counts, and closing metrics in real-time.",
                    "Cloud-based DRM ensures your proprietary lead data never leaves the CRM ecosystem.",
                    "100% of calls are instantly recorded and attached to the lead timeline for instant QA playback."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            BPO & Call Center Infrastructure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">High Volume Tracking</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Upload massive Excel / CSV files and distribute thousands of daily leads instantly.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Round-robin logic ensures fair workload distribution across the call floor.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Manage distinct telemarketing campaigns in isolated, specialized partitions.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">1-Click Calling & Autologs</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Agents simply push 'Call' in their browser—no typing numbers into keypads.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Every answered, missed, and rejected call is logged systemically without fail.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Disposition screens force agents to update lead status before proceeding.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <ActivitySquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Agent Accountability</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Role-centric hierarchies allow Floor Managers to oversee designated teams effortlessly.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Full transparency into agent break times, login hours, and actual talk durations.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Catch systemic 'fake dialing' by auditing ultra-short disconnected call logs instantly.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Performance Reports</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Visual pie charts breaking down exact call outcomes per campaign.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Aggregated conversion rate reporting to demonstrate strict ROI to BPO clients.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Exportable Excel files summarizing millions of data points with a single click.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Uploaded", description: "Manager imports 10k leads via Excel." },
                    { title: "Auto Distributed", description: "Leads assigned smoothly to 50 active callers." },
                    { title: "Agent Dials", description: "1-click browser calling initiates contact." },
                    { title: "Auto Logging", description: "Call duration, disposition, & recording saved." },
                    { title: "Manager Live-View", description: "Floor manager tracks productivity in real-time." },
                    { title: "Reporting Export", description: "Final campaign statistics presented to client." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale Tele-Operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Headset className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">BPOs & Call Centers</h3>
                            <p className="text-slate-600 text-sm">Handle multiple client campaigns simultaneously. Ensure strict data security and comprehensive Service Level Agreement metrics.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <RadioTower className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Telemarketing Teams</h3>
                            <p className="text-slate-600 text-sm">Increase dials-per-hour dramatically. Equip your floor with automated WhatsApp triggers to nurture prospects who don't pick up.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MessageCircle className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Support Hubs</h3>
                            <p className="text-slate-600 text-sm">Provide rapid issue resolution with centralized ticketing pipelines and instant access to caller interaction histories.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "+60%", label: "Dial Pace", description: "Eliminate manual data entry entirely" },
                    { value: "100%", label: "QA Coverage", description: "Listen to and review any agent recording" },
                    { value: "Zero", label: "Data Leakage", description: "Numbers masked to prevent lead theft" },
                    { value: "Live", label: "Reporting", description: "Manage massive floors in real-time" }
                ]}
            />

            {/* Custom FAQ for Call Centers */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Call Center Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle huge file uploads for outbound campaigns?</h4>
                            <p className="text-slate-600">Yes! The system is built to digest massive CSV and Excel files reliably, immediately distributing batches to active queues.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can floor managers listen to recordings?</h4>
                            <p className="text-slate-600">Absolutely. Every single call is auto-recorded and archived securely within the CRM for Quality Assurance and training audits.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it stop agents from stealing data?</h4>
                            <p className="text-slate-600">Yes, robust permission controls ensure agents can only click-to-dial; you can completely disable Excel export functionality for base users.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we send WhatsApp broadcast texts?</h4>
                            <p className="text-slate-600">Yes, marketing teams can configure automated WhatsApp sequences simultaneously while the telecallers run distinct voice campaigns.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is there real-time reporting?</h4>
                            <p className="text-slate-600">Yes, you'll have hourly breakdown graphs illuminating exact talk-times and statuses (On call, Idle, Break) across the entire BPO.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Maximize Your Telecaller Output?"
                subheadline="Join top BPOs and tele-operations who rely on CallFlow to boost dialing efficiency and ensure total accountability."
            />
        </FeaturePageLayout>
    );
}
