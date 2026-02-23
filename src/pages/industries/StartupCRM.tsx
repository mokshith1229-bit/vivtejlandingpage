import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Rocket,
    TrendingUp,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    Zap,
    Target,
    ActivitySquare
} from 'lucide-react';

export default function StartupCRM() {
    return (
        <FeaturePageLayout
            title="Best CRM Software for Startups | CallFlow"
            description="Automate early-stage sales, scale outbound dialing, track investor MRR metrics, and accelerate your startup's growth."
        >
            <FeatureHero
                headline="Scale Fast. Track Everything. Close Early Deals."
                subheadline="Built exactly for early-stage and high-growth Startups. Consolidate your scattered tech stack, automate outbound hustling, and prove scalable revenue traction to your investors."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-purple-50 border border-purple-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Startup Growth Pipeline</span>
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
                                        Outbound (Cold) <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">240</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">LinkedIn</div>
                                        <div className="font-bold text-sm text-slate-800">Nova Technologies</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Ideal Customer Profile</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Founder: CEO</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Dial</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Demo/Discovery <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">12</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Pioneer Logistics</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Design Partner Prospect</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><Zap className="w-3 h-3" /> Follow-Up</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Closed Won <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">3</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Altitude Agency</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Paid Pilot Secured</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Initial founder-led sales are chaotic, living entirely inside the founder's head and inbox.",
                    "Hiring the first SDR is a nightmare because there is no standardized process or calling tool.",
                    "Valuable early leads from Product Hunt or HackerNews are squandered due to zero follow-up.",
                    "Paying for 5 different expensive tools (Dialer, WhatsApp API, Pipeline, Email) burns runway.",
                    "Inability to show prospective investors clear, predictable, and scalable sales metrics.",
                    "Constant context-switching prevents founders from actually building the product."
                ]}
                solutions={[
                    "Consolidate your entire GTM motion into one affordable, hyper-efficient platform.",
                    "Equip your founding team (and first hires) with a 1-click dialer to test outbound scripts fast.",
                    "Automate instant WhatsApp triggers so inbound website traffic is nurtured while you sleep.",
                    "Visualize the pipeline clearly so you know exactly which design partners are stalling.",
                    "Generate investor-ready traction reports demonstrating solid conversion funnel metrics.",
                    "Save hours of administrative data-entry with seamless auto-logging of all communications."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Founder & Growth Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Agile Sales Pipeline</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Adapt stages quickly as your sales motion evolves (e.g., Pilot -&gt; Paid -&gt; Scaled).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Centralize all B2B interactions securely off founder's personal phones.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Keep track of exact MRR/ARR values attached to early-stage negotiations.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Outbound Velocity</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Upload massive lists of scraped leads and blitz through them with the 1-click dialer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Test multiple cold-calling scripts rapidly; auto-record to review what converts.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Never miss a scheduled follow-up with a prospective design partner.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Inbound Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Capture Product Hunt or launch-day spikes perfectly via direct webhooks.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Trigger automated "Welcome from the Founder" WhatsApp messages on signup.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Nurture skeptical users with automated drip sequences detailing your unique features.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Traction Reporting</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Generate definitive proof of scalable sales motion for Seed/Series A fundraising.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track the exact time it takes to cycle a cold lead into a paying beta customer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Onboard your first sales reps easily by giving them an organized data playground.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Uploaded", description: "Founder scrapes prospect list and imports CSV." },
                    { title: "Rapid Outreach", description: "Dialer used to test cold-pitch scripts instantly." },
                    { title: "Demo Secured", description: "Interest logged; deal moves to 'Discovery' stage." },
                    { title: "Follow-Up Auto", description: "WhatsApp reminders sent pre/post meeting." },
                    { title: "Pilot Won", description: "Client converted; early MRR captured in dashboard." },
                    { title: "Model Scaled", description: "SDR hired to replicate proven calling process." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for High-Velocity Teams
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Rocket className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Early Stage (Pre-Seed/Seed)</h3>
                            <p className="text-slate-600 text-sm">Founders acting as the sole salesperson need extreme efficiency. Manage all pilot communications and design partner feedback securely.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Teams (Series A+)</h3>
                            <p className="text-slate-600 text-sm">Scale your SDR team immediately. Hand them a tool that forces accountability and tracks exact demographic conversion metrics.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Users className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Bootstrapped Builders</h3>
                            <p className="text-slate-600 text-sm">Stop paying for five different enterprise tools. Consolidate your dialer, whatsapp drips, and pipelines into one affordable ecosystem.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "5x", label: "Dialing Speed", description: "Crush outbound lists without manual keypad entry" },
                    { value: "Zero", label: "Lost Context", description: "Get deals out of the founder's chaotic inbox" },
                    { value: "Tracked", label: "Traction Metrics", description: "Report real velocity to your VC investors" },
                    { value: "Automated", label: "Lead Nurture", description: "Keep prospects warm entirely on autopilot" }
                ]}
            />

            {/* Custom FAQ for Startups */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Startup CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this better than just using Notion or Excel?</h4>
                            <p className="text-slate-600">Yes. Notion doesn't have a 1-click dialer, auto-call logging, or automated WhatsApp triggers. Spreadsheets don't scale when you hire SDRs.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we import leads from Apollo or LinkedIn?</h4>
                            <p className="text-slate-600">Absolutely. Just export your lists as CSVs and drop them directly into CallFlow to begin rapid 1-click outbound dialing.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it track MRR / Deal Value?</h4>
                            <p className="text-slate-600">Yes, assign monetary values to every prospect in the Kanban board to track your exact pipeline revenue accurately.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">How does it help with our first hires?</h4>
                            <p className="text-slate-600">It forces process. You can instantly see exactly how many dials your new SDR makes, listen to their call recordings, and review their dispositions.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we automate webhooks from our landing page?</h4>
                            <p className="text-slate-600">Yes, integrate via API so every new signup on your site immediately appears in the CRM and triggers a welcome text sequence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Accelerate Your Traction?"
                subheadline="Join top founders who use CallFlow to consolidate their stack and scale outbound revenue."
            />
        </FeaturePageLayout>
    );
}
