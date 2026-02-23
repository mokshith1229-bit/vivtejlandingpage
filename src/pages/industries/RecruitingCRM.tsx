import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    FileSearch,
    UserPlus,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    CalendarCheck,
    ClipboardCheck,
    Briefcase,
    Target,
    Building2
} from 'lucide-react';

export default function RecruitingCRM() {
    return (
        <FeaturePageLayout
            title="Best Recruiting CRM Software | CallFlow"
            description="Automate candidate sourcing, manage hiring pipelines, track recruiter performance, and place talent faster with our CRM software."
        >
            <FeatureHero
                headline="Streamline Candidate Placements & Close Roles Faster."
                subheadline="Built explicitly for Recruitment Agencies and internal HR teams. Stop losing top-tier talent to poor follow-up and chaotic Excel spreadsheets."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 border border-emerald-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <UserPlus className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Hiring Pipeline Tracker</span>
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
                                        Sourced <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">15</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">LinkedIn</div>
                                        <div className="font-bold text-sm text-slate-800">Amit Verma</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Role: Sr. Frontend Dev</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Recruiter: Sneha</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        1st Round <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">6</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Naukri</div>
                                        <div className="font-bold text-sm text-slate-800">Priya Singh</div>
                                        <div className="text-[10px] text-slate-500 mb-2">Status: Feedback Pending</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> Sent WhatsApp</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Offer Made <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">2</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">David Rogers</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Acceptance Expected</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Candidate tracking issues resulting in massive talent pools but zero actual placements.",
                    "Missed follow-ups causing highly qualified candidates to accept offers from competitors.",
                    "No hiring pipeline visibility, making it impossible to forecast recruitment revenues.",
                    "Recruiter performance gaps hidden because manual calling activity is rarely logged.",
                    "Chaotic interview scheduling requiring endless back-and-forth emails and WhatsApp chats.",
                    "Candidate data scattered across hundreds of disorganized folders and local hard drives."
                ]}
                solutions={[
                    "Centralize the entire candidate lifecycle securely within drag-and-drop Kanban pipelines.",
                    "Trigger automated SMS/WhatsApp interview reminders to severely reduce candidate ghosting.",
                    "Visualize the exact status of every open role and candidate in real-time dashboards.",
                    "Enable 1-click calling to enforce auto-logging of all recruiter telephonic activity.",
                    "Centralize candidate touchpoints automatically—reducing admin work dramatically.",
                    "Filter, sort, and re-engage older candidate databases seamlessly for new requirements."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            High-Volume Recruitment Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Candidate Status Pipeline</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Custom pipelines mapping exactly to your specific interview rounds.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Move candidates from 'Sourced' to 'Offer Accepted' via visual drag-and-drop.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Ensure multiple recruiters don't pitch the same candidate twice.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <ClipboardCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Interview Scheduling Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger automated WhatsApp reminders 1-hour before the scheduled Google Meet.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send instant SMS notifications if an interview must be urgently rescheduled.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Log technical feedback seamlessly against the candidate profile directly after the call.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Recruiter Calling Workflow</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>1-Click browser dialer speeds up bulk outreach for massive hiring drives.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>All pre-screening questions and negotiations are securely recorded.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Recruiters spend 0 time manually logging outbound call efforts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Recruiter Performance Metrics</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track clear metrics: Sourced vs. Interviewed vs. Successfully Placed.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Identify team bottlenecks instantly inside the recruitment dashboard.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Export granular placement reports for organizational billing and accountability.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Candidate Sourced", description: "Profile gathered from Naukri, LinkedIn or Portal." },
                    { title: "Pre-Screen Call", description: "Recruiter calls using 1-Click dialer; logs feedback." },
                    { title: "Interview Scheduled", description: "Kanban updated; auto WhatsApp reminder sent." },
                    { title: "Manager Feedback", description: "Technical feedback centralized in CRM." },
                    { title: "Offer Stage", description: "Negotiations recorded; contract dispatched." },
                    { title: "Candidate Placed", description: "Successful hire closed; recruiter stats updated." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built for Talent Powerhouses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Recruitment Agencies</h3>
                            <p className="text-slate-600 text-sm">Organize massive databases of specialized talent. Scale outbound pre-screening securely while ensuring clients receive only top-tier profiles.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Building2 className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Internal HR Departments</h3>
                            <p className="text-slate-600 text-sm">Centralize the company's entire hiring effort. Create seamless alignment between sourcers, hiring managers, and candidates.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <FileSearch className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Executive Search Firms</h3>
                            <p className="text-slate-600 text-sm">Keep sophisticated logs of high-value networking calls. Track delicate, long-term talent acquisition negotiations reliably.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "50%", label: "Faster Placements", description: "Pre-screen calls initiated instantly" },
                    { value: "Zero", label: "Candidate Ghosting", description: "Automated reminders ensure attendance" },
                    { value: "100%", label: "Pipeline Visibility", description: "Know exactly which roles are stalling" },
                    { value: "Full", label: "Accountability", description: "Track exact calls per recruiter daily" }
                ]}
            />

            {/* Custom FAQ for Recruiting */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Recruitment CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we manage different hiring pipelines per role?</h4>
                            <p className="text-slate-600">Yes, you can create distinct tracking boards (e.g. Sales Hiring Pipeline vs. Software Developer Hiring Pipeline).</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it automate interview reminders?</h4>
                            <p className="text-slate-600">Absolutely, automated WhatsApp/SMS notifications severely reduce candidate no-show rates for scheduled interviews.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we track recruiter call volume?</h4>
                            <p className="text-slate-600">Yes, the 1-click dialer automatically logs outbound productivity, showing you exactly how hard your sourcers are working.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is the pre-screening call recorded?</h4>
                            <p className="text-slate-600">If enabled, calls are recorded securely and logged alongside candidate profiles for hiring managers to review independently.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we import candidates from Excel?</h4>
                            <p className="text-slate-600">Yes, bulk import your historical talent databases in seconds to launch immediate re-engagement campaigns via text/calls.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Close Roles Faster?"
                subheadline="Join top recruitment agencies who use CallFlow to dominate talent sourcing and streamline hiring pipelines."
            />
        </FeaturePageLayout>
    );
}
