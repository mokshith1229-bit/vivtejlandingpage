import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    MonitorSmartphone,
    MousePointerClick,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    Megaphone,
    MailOpen,
    Target
} from 'lucide-react';

export default function DigitalMarketingCRM() {
    return (
        <FeaturePageLayout
            title="Best Digital Marketing CRM Software | CallFlow"
            description="Automate follow-ups, align your sales and marketing data, and scale your Digital Marketing agency with our CRM software."
        >
            <FeatureHero
                headline="Align Your Client Leads, Campaigns, and Closures."
                subheadline="Built exactly for Digital Marketing Agencies, SEO Firms, and Ad Consultancies. Prove ROI to your clients instantly by automatically tracking every lead generated to its final sale."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-rose-50 border border-rose-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Megaphone className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Campaign Lead Flow</span>
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
                                        Captured Leads <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">24</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">FB Lead Gen</div>
                                        <div className="font-bold text-sm text-slate-800">Neha Sharma</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Source: Summer Sale Ad</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Auto-assigned</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Nurture Sequence <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">18</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Google Search</div>
                                        <div className="font-bold text-sm text-slate-800">Rajiv Mehta</div>
                                        <div className="text-xs text-slate-500 mb-2">Marketing PDF Downloaded</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Drip Active</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Converted <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">9</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Aisha Khan</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Converted value: ₹25,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Generating thousands of leads but struggling to track which source actually generated revenue.",
                    "Client sales teams complaining about 'junk' leads because they don't call fast enough.",
                    "Scattered data forcing agencies to spend hours manually downloading CSVs from ad platforms.",
                    "Poor client communication history making retention tricky for marketing retainers.",
                    "Inability to prove definitive final ROI (Return on Ad Spend) past the initial click/form-fill.",
                    "No automated nurturing sequences for top-of-funnel ebook/webinar downloads."
                ]}
                solutions={[
                    "Centralize leads from Meta, Google, TikTok, and Web hooks directly into a unified platform.",
                    "Implement instant auto-dialer queues that ring the client's sales rep the second a lead arrives.",
                    "Zero manual data entry; full Facebook and Google Lead Ads API integration built-in.",
                    "Track 100% of communication (Calls, Texts, Emails) inside the CRM to protect retainer value.",
                    "End-to-end pipeline visibility proves exactly how many marketing leads successfully became paying customers.",
                    "Easily construct automated WhatsApp and SMS drip sequences to warm up cold inquiries."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Agency & Marketing Automation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Multi-Source Lead Capture</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>1-Click synchronization for Facebook Lead Ads and Google Ads.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Automatically route incoming traffic to specific campaign pipelines.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Maintain exact UTM parameter tagging for precise campaign attribution.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <MonitorSmartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Nurture Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Build 'If/Then' logic for WhatsApp messaging sequences based on prospect behavior.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send automated "Thank you for downloading" assets immediately upon capture.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Resurrect old, idle leads automatically with targeted re-engagement text blasts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Client Transparency</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Provide clients with restricted dashboard views to monitor lead quality in real-time.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Stop clients from blaming marketing by tracking exactly how fast their telesales call the leads.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Enable 1-click calling so client sales teams actually process ad leads rapidly.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">End-to-End ROI Tracking</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Map closed deals back to the exact originating ad creative.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Export granular pipeline analytics to construct monthly retainer reports easily.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Prove definitively your marketing spend generated highly profitable sales closures.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Ad Click", description: "Prospect clicks highly targeted campaign." },
                    { title: "Lead Submission", description: "Form info lands securely in the CRM instantly." },
                    { title: "Nurture Triggered", description: "Automated WhatsApp sends promo info immediately." },
                    { title: "Sales Calls", description: "Client sales rep calls lead using 1-click dialer." },
                    { title: "Deal Closed", description: "Lead marks as 'Won'; exact campaign attribution recorded." },
                    { title: "ROI Proved", description: "Marketing agency takes credit for final revenue." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale Marketing Agencies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MonitorSmartphone className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Agencies</h3>
                            <p className="text-slate-600 text-sm">Distribute leads instantly. Prevent clients from complaining about ad quality by tracking their actual follow-up efforts.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Target className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">B2B Lead Gen Firms</h3>
                            <p className="text-slate-600 text-sm">Systematically run cold outreach. Empower SDRs with browser dialers and precise call disposition logging capabilities.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MailOpen className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">SEO & Content Shops</h3>
                            <p className="text-slate-600 text-sm">Capture organic inbound traffic efficiently. Funnel ebook and webinar signups into robust, multi-stage nurturing sequences.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "Instant", label: "Lead Routing", description: "Drop Facebook leads directly to sales queues" },
                    { value: "Tracked", label: "End-to-End ROI", description: "Know exactly which creative drove revenue" },
                    { value: "Zero", label: "Lost Leads", description: "Automated drips catch what falls through the cracks" },
                    { value: "100%", label: "Client Transparency", description: "Prove your marketing works with hard data" }
                ]}
            />

            {/* Custom FAQ for Digital Marketing */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Marketing CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it integrate directly with Facebook Lead Ads?</h4>
                            <p className="text-slate-600">Yes, leads flow instantly from Facebook/Instagram forms into the CRM without needing complex Zapier setups.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I manage pipelines for multiple clients?</h4>
                            <p className="text-slate-600">Absolutely, you can cleanly partition databases and give your clients restricted logins to see only their specific leads.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it identify which campaign drove a sale?</h4>
                            <p className="text-slate-600">Yes, exact campaign tags and UTM parameters are attached to the lead profile and carry through the pipeline to closure.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we send WhatsApp sequences?</h4>
                            <p className="text-slate-600">Yes, construct complex Drip campaigns over WhatsApp to passively warm up inbound inquiries automatically.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Will this prove ROI to my clients?</h4>
                            <p className="text-slate-600">Yes, tracking full-cycle from click-to-close is the definitive way to prove agency ROI and retain clients long-term.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Track True Campaign ROI?"
                subheadline="Join top digital agencies who use CallFlow to align marketing efforts with hard sales closures."
            />
        </FeaturePageLayout>
    );
}
