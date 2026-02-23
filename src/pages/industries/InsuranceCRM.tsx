import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    ShieldAlert,
    FileText,
    Users,
    MessageCircle,
    PhoneCall,
    Clock,
    ActivitySquare,
    Zap,
    Briefcase
} from 'lucide-react';

export default function InsuranceCRM() {
    return (
        <FeaturePageLayout
            title="Best CRM Software for Insurance Agents & Brokers | CallFlow"
            description="Automate policy renewals, distribute internet leads instantly, manage claims effectively, and boost your insurance agency's growth."
        >
            <FeatureHero
                headline="More Policies Written. Zero Missed Renewals."
                subheadline="Built explicitly for Insurance Agencies, Independent Brokers, and Carriers. Distribute high-intent leads instantly, automate your renewal pipeline, and consolidate your policyholder communications into one secure platform."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-rose-50 border border-rose-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                                    <span className="font-bold text-slate-800 text-sm">Policy Pipeline Tracker</span>
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
                                        New Lead (Aggregator) <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">14</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Auto/Motor</div>
                                        <div className="font-bold text-sm text-slate-800">Amit Patel</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Intent: Comprehensive</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Assigned: Rahul</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Dial Now</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Quote Sent <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">28</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="font-bold text-sm text-slate-800">Meera Singh</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Term Life Cover</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Follow-Up Drip</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Renewal Due (30 Days) <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">85</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-rose-500">
                                        <div className="font-bold text-sm text-slate-800">Suresh Verma</div>
                                        <div className="text-[10px] text-rose-600 font-bold mt-1">Health Expiring 14/10</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Expensive internet leads turn cold because your agents aren't dialing them fast enough.",
                    "Scattered spreadsheets mean you constantly miss lucrative policy renewal dates.",
                    "Agents waste hours manually dialing numbers and sending repetitive quote follow-up texts.",
                    "No visibility into which lead sources (e.g., Aggregators vs. Organics) are actually converting.",
                    "Cross-selling is impossible because client auto and health policies are tracked in different systems.",
                    "Junior agents lose track of complex term-life negotiations that require multiple follow-ups."
                ]}
                solutions={[
                    "Auto-distribute leads instantly and use the 1-click dialer to contact them within seconds of inquiry.",
                    "Automate WhatsApp and SMS renewal reminders 30, 15, and 3 days before a policy expires.",
                    "Provide agents with a unified dashboard where calling, texting, and logging happen on one screen.",
                    "Track exact conversion metrics and premium amounts generated per specific marketing channel.",
                    "Centralize client profiles so your agents can easily pitch life products to existing auto clients.",
                    "Use structured Kanban boards to enforce diligent follow-up sequences for complex high-premium deals."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-rose-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Agency Growth Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Lead Speed-to-Lead</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0"></div>
                                    <span>Ingest leads instantly via API from Facebook Ads, PolicyBazaar, or JustDial.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0"></div>
                                    <span>Round-robin distribution ensures leads hit available agents immediately.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-600 flex-shrink-0"></div>
                                    <span>1-click dialer enables agents to connect while the prospect is still looking at their phone.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Automated Renewals Engine</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Set customized WhatsApp drip campaigns triggered purely by expiry dates.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Automatically create urgent "Call Tasks" for agents when a VIP client is 3 days from expiry.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send automated payment links directly via SMS to capture immediate renewal premiums.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Cross-Selling Visibility</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>View a client’s entire portfolio (Auto, Health, Life) in a single consolidated profile window.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Run targeted filtering (e.g., "Show all Auto clients without Health cover") for rapid outbound lists.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Deploy broadcast WhatsApp campaigns to specific segments during open enrollment periods.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Seamless Quote Management</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track deals via Kanban: 'Quote Sent' -&gt; 'Negotiation' -&gt; 'Docs Pending' -&gt; 'Policy Issued'.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Send automated follow-up texts if a prospect hasn't replied to a quote within 24 hours.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Log exact premium values in the pipeline to forecast your upcoming month's commission securely.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Ingested", description: "Aggregator API pushes new Health intent to CRM." },
                    { title: "Instant Routing", description: "Assigned to best available health-licensed agent." },
                    { title: "Rapid Contact", description: "Agent hits 1-click dial; talks within 60 seconds." },
                    { title: "Quote & Nurture", description: "Quote sent; automated WhatsApp follow-ups begin." },
                    { title: "Policy Issued", description: "Premium collected; deal moved to 'Closed Won'." },
                    { title: "Renewal Auto", description: "System waits 11 months, then triggers renewal drip." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-rose-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for the Insurance Industry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Independent Brokers</h3>
                            <p className="text-slate-600 text-sm">Grow your book of business drastically. Manage complex cross-selling strategies and ensure you never miss a lucrative renewal commission again.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Users className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Captive Agencies</h3>
                            <p className="text-slate-600 text-sm">Hold your massive tele-calling floors accountable. Distribute carrier leads efficiently and track exact connection and bind rates per agent.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <ShieldAlert className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Carriers</h3>
                            <p className="text-slate-600 text-sm">Secure your proprietary data while giving your direct-to-consumer sales teams the fastest dialing and lead-response technology available.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "98%", label: "Renewal Retention", description: "Never miss an expiry date with WhatsApp automation" },
                    { value: "< 1 Min", label: "Lead Response", description: "Crush competitors by calling internet leads instantly" },
                    { value: "3x", label: "Cross-Sell Ratio", description: "Consolidated profiles reveal hidden revenue opportunities" },
                    { value: "Tracked", label: "Agent Output", description: "Exactly how many calls it takes to bind a policy" }
                ]}
            />

            {/* Custom FAQ for Insurance */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Insurance CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle API leads from aggregators (e.g. PolicyBazaar)?</h4>
                            <p className="text-slate-600">Yes, our robust webhooks can ingest leads from any major digital aggregator instantly and route them to your agents.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">How exactly does the renewal automation work?</h4>
                            <p className="text-slate-600">You log the policy expiry date. The CRM automatically triggers a predefined WhatsApp/SMS sequence 30 days prior, repeatedly nudging the client to renew.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is the data safe from agents wanting to steal my book?</h4>
                            <p className="text-slate-600">Absolutely. You can implement strict data export blocks and mask client phone numbers so agents can only dial via the platform, not save the numbers.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we use it for multiple product lines (Auto, Health, Life)?</h4>
                            <p className="text-slate-600">Yes, you can create distinct customizable pipelines for different lines of business, keeping fast auto renewals separate from complex term-life negotiations.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it help with claims management?</h4>
                            <p className="text-slate-600">Yes, you can configure a separate "Claims Board" to log incidents, collect necessary document images via WhatsApp, and track the settlement progress.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Write More Policies?"
                subheadline="Join top agencies who use CallFlow to respond to leads instantly and automate their renewals."
            />
        </FeaturePageLayout>
    );
}
