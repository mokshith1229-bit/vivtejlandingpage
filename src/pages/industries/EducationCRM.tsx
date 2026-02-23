import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    GraduationCap,
    BookOpen,
    Users,
    MessageCircle,
    PhoneCall,
    BellRing,
    BarChart3,
    FolderClock,
    UserCheck,
    Laptop,
    School
} from 'lucide-react';

export default function EducationCRM() {
    return (
        <FeaturePageLayout
            title="Best Education CRM Software for Schools & Colleges | CallFlow"
            description="Manage student leads, counselor follow-ups, admissions, WhatsApp automation and performance tracking with our Education CRM."
        >
            <FeatureHero
                headline="Manage Admissions, Follow-Ups & Counseling with Automation."
                subheadline="Built specifically for educational institutions. Centralize student inquiries, track counselor productivity, and convert more applications."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 border border-indigo-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Admissions Dashboard</span>
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
                                        New Enquiries <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">24</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Website</div>
                                        <div className="font-bold text-sm text-slate-800">Arjun Mehta</div>
                                        <div className="text-xs text-slate-500 mb-2">B.Tech CS - 2024</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 5m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Counseling Done <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">12</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Neha Sharma</div>
                                        <div className="text-xs text-slate-500 mb-2">MBA Marketing</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><BellRing className="w-3 h-3" /> Follow-up Today</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Application Sent <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Rohan Das</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Fee Pending</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Missed admission enquiries from website forms and social media ads.",
                    "Counselors disorganized: No structured follow-up tracking for prospects.",
                    "Manual counselor planning via Excel leads to dropped leads.",
                    "Lost communication history when multiple counselors talk to one student.",
                    "Slow response times causing students to enroll in competitor institutes.",
                    "Hard to measure individual counselor performance & telecalling ROI."
                ]}
                solutions={[
                    "Auto capture & centralize leads from forms & enquiries to one dashboard.",
                    "Automated reminders for calls & meetings ensure no student slips through.",
                    "Counselor assignment & smart routing gets leads to available agents instantly.",
                    "All interactions, call recordings, and WhatsApps mapped to the student profile.",
                    "WhatsApp & SMS follow-ups triggered immediately upon inquiry.",
                    "Live reports & dashboards for tracking counselor talk-time and conversions."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale Your Enrollments
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
                                    <span>Auto capture from website, landing pages, Shiksha, and Facebook.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Instantly assign to counselors via round-robin or course preference.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Prevent duplicate lead assignments.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Follow-Ups & Reminders</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Auto SMS/WhatsApp reminders for fee payments and document submissions.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Portal notifications to ensure counselors call back on time.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Automated nurturing for cold internet prospects.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <FolderClock className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Communication History</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>All interactions (calls, emails, texts) tied to the student profile.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>1-Click calling from the browser with auto call logs.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Listen to previous call recordings to ensure quality counseling.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Reporting & Insights</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Counselor leaderboard to motivate the admissions team.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Visual admissions progress tracking (New &gt; Enrolled).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Hour-by-hour performance checking for optimal activity.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Inquiry Arrives", description: "Student inquiry arrives via college website." },
                    { title: "Auto Capture", description: "Auto captured into CRM instantly." },
                    { title: "Counselor Connects", description: "Counselor connects via 1-click call/WhatsApp." },
                    { title: "Follow-ups Triggered", description: "Automated reminders ensure consistent follow-ups." },
                    { title: "Pipeline Updated", description: "Status updated on management pipeline dashboard." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Empowering the Education Sector
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <School className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Schools</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Manage fresh admissions efficiently.</li>
                                <li>• Communicate fees and schedules with parents easily.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <BookOpen className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Coaching Institutes</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Run batch-wise follow-up sequences.</li>
                                <li>• Track demo class attendances and conversions.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Colleges & Universities</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Handle massive applicant pipelines.</li>
                                <li>• Route inquiries by department or course.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <UserCheck className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Training Centers</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Easily sell to working professionals.</li>
                                <li>• Send automated course syllabus PDFs via WhatsApp.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <Laptop className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Online EdTech Platforms</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Scale internet leads fast.</li>
                                <li>• Detailed ROI dashboards for Facebook & Google Ads.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "3x Faster", label: "Response Times", description: "Via instant automated WhatsApp replies" },
                    { value: "+60%", label: "Productivity", description: "More calls made by counselors daily" },
                    { value: "+30%", label: "Admissions", description: "Higher application conversions" },
                    { value: "1 Place", label: "Communication", description: "Centralized logs for every student" }
                ]}
            />

            {/* Custom FAQ for Education */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Education Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this CRM good for small coaching institutes?</h4>
                            <p className="text-slate-600">Yes, it's perfect for coaching institutes. Whether you have 2 counselors or 20, you can organize your batches, demos, and follow-ups efficiently.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it handle multiple counselors?</h4>
                            <p className="text-slate-600">Absolutely. You can create role-based access for multiple counselors, managers, and admins, with leads assigned automatically among them.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it support WhatsApp automation?</h4>
                            <p className="text-slate-600">Yes! You can set up official WhatsApp API templates to send automated messages when a student inquires, or when their application status changes.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I track application pipeline?</h4>
                            <p className="text-slate-600">Yes, our drag-and-drop Kanban boards allow you to move students through stages like 'New', 'Counseled', 'Fee Pending', to 'Admitted'.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is there performance reporting?</h4>
                            <p className="text-slate-600">Yes, you get detailed dashboards showing exactly how many calls your counselors made, how long they spoke, and how many enrollments they secured.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Automate Your Education Outreach?"
                subheadline="Join the fastest-growing schools, colleges, and EdTech platforms taking control of their admissions."
            />
        </FeaturePageLayout>
    );
}
