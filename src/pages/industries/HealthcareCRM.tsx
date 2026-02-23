import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Stethoscope,
    HeartPulse,
    ActivitySquare,
    Microscope,
    UserCheck,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    CheckCircle,
    CalendarClock,
    ClipboardList
} from 'lucide-react';

export default function HealthcareCRM() {
    return (
        <FeaturePageLayout
            title="Healthcare CRM Software for Clinics & Hospitals | CallFlow"
            description="Automate patient follow-ups, streamline communications, manage appointments, and track team performance with our Healthcare CRM software."
        >
            <FeatureHero
                headline="Automate Patient Engagements, Follow-Ups & Team Coordination."
                subheadline="A complete Healthcare CRM tailored for clinics, hospitals, and wellness centers. End missed appointments, simplify your patient records, and scale your health services."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-teal-50 border border-teal-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <ActivitySquare className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Patient Care Dashboard</span>
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
                                        New Inquiries <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">14</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">Practo</div>
                                        <div className="font-bold text-sm text-slate-800">Radhika Nair</div>
                                        <div className="text-xs text-slate-500 mb-2">Dermatology Consult</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 5m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Appointments <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Dr. Vivek Sharma</div>
                                        <div className="text-xs text-slate-500 mb-2">Today, 4:30 PM</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> WhatsApp Sent</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Post-Care Check <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">12</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Meera Das</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Due 2 Days Post-Op</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Missed patient follow-ups resulting in broken care plans and lost revenue.",
                    "Disorganized patient records spread across notebooks, Excel, and various WhatsApp chats.",
                    "Wasting receptionist time on manual appointment reminders leading to high no-show rates.",
                    "No centralized communication, making it impossible for doctors to review interaction history.",
                    "Zero way to track if patients are actually engaging with care guidelines or returning.",
                    "Hard to monitor care team or clinic staff performance regarding lead conversion."
                ]}
                solutions={[
                    "Automate post-appointment care plans with scheduled check-in reminders.",
                    "Centralized patient histories so every interaction, call, and message is in one unified timeline.",
                    "Trigger automated SMS and WhatsApp appointment reminders 24hrs and 1hr prior.",
                    "Enable 1-click calling directly from the CRM, auto-logging every patient conversation.",
                    "Detailed engagement analytics show exact drop-off points in your patient funnel.",
                    "Leaderboard dashboards provide full transparency into your care team's activity."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Feature Spotlight</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Healthcare Operations, Automated
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Patient Lead Capture</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Instantly capture inquiries from web forms, Facebook Ads, Practo, and direct calls.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Auto-assign incoming leads to specific care coordinators based on medical specialty.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Filter out spam or duplicate patient histories automatically.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <CalendarClock className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Appointment Automation</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send automated SMS and WhatsApp confirmations immediately upon scheduling.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger sequence reminders (e.g., 24 hours before, and 2 hours before) to kill no-show rates.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Alert care coordinators if a patient hasn't confirmed their critical procedure.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <ClipboardList className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Communication History</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Every consultation call, WhatsApp PDF share, and SMS resides in a single timeline.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Integrated 1-click calling logs durations so you know doctors are actually engaging.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Record calls securely to maintain service quality and protect against miscommunications.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Staff & Care Performance</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>View clinic-wide leaderboards mapping exactly how many inquiries convert to booked visits.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track hour-by-hour operational momentum. See when reception is overloaded.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Generate instant Excel exports for management review with a simple click.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Patient Inquiry", description: "Inquiry or call generated from digital marketing." },
                    { title: "CRM Sync", description: "Lead instantly centralized inside CallFlow." },
                    { title: "Staff Connects", description: "Coordinator assigns to doctor and confirms slot." },
                    { title: "Auto Reminders", description: "WhatsApp reminders sent to ensure attendance." },
                    { title: "Post-Care Analytics", description: "Records updated, follow-ups logged automatically." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Elevating Patient Care Universally
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <HeartPulse className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Clinics</h3>
                            <p className="text-slate-600 text-sm">Organize walk-ins, digital leads, and phone reservations seamlessly. Cut administrative time by half running small, efficient fronts.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Stethoscope className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Hospitals</h3>
                            <p className="text-slate-600 text-sm">Distribute leads between specialized departments. Handle extreme patient volume efficiently with role-based dashboard access.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Microscope className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic Centers</h3>
                            <p className="text-slate-600 text-sm">Coordinate home-collection schedules. Auto-send WhatsApp reports eliminating the need for patients to travel or call back.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <UserCheck className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Wellness & Rehab</h3>
                            <p className="text-slate-600 text-sm">Run multi-stage care follow-ups. Build customized funnels to track long-term health improvements and recurring sessions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <ActivitySquare className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Healthcare Consultants</h3>
                            <p className="text-slate-600 text-sm">Provide premium, high-touch support to VIP clientele with perfectly curated, detailed historical communication records.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "Instant", label: "Patient Engagement", description: "Zero wait times for simple inquiries" },
                    { value: "-45%", label: "Missed Visits", description: "Automated reminders ensure attendance" },
                    { value: "Unified", label: "History", description: "Every interaction stored in one profile" },
                    { value: "100%", label: "Satisfaction", description: "Better care coordination increases retention" }
                ]}
            />

            {/* Custom FAQ for Healthcare */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Healthcare CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this CRM suitable for small clinics?</h4>
                            <p className="text-slate-600">Yes! It removes the need for chaotic Excel sheets and messy reception desks, making a 2-person front desk operate like a highly efficient corporate machine.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it send automated reminders?</h4>
                            <p className="text-slate-600">Absolutely. You can implement triggers so that a reminder fires via SMS automatically 2 hours before the scheduled timeslot to drastically lower no-show rates.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it support WhatsApp communication?</h4>
                            <p className="text-slate-600">Yes, you can use our built-in WhatsApp automation to answer basic health inquiries, send out care-plans, and share diagnostic reports right from the CRM.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I track staff performance?</h4>
                            <p className="text-slate-600">Yes. The system automatically tracks how many patient calls your coordinators make, how long they speak, and their conversion rate to booked appointments.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I customize workflows?</h4>
                            <p className="text-slate-600">Completely. You can rename pipeline stages (e.g. "Initial Consult", "Lab Test Pending", "Prescribed") to perfectly match your specific medical specialty.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Improve Patient Engagement & Care?"
                subheadline="Join top clinics and health service teams who use CallFlow to streamline operations and enhance the patient journey."
            />
        </FeaturePageLayout>
    );
}
