import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Bell, CheckCircle, Calendar, Clock, Smartphone, Zap, Goal, Building, Briefcase } from 'lucide-react';

export default function CallReminders() {
    return (
        <FeaturePageLayout
            title="Automated Call Reminders & Follow-ups | TeleCRM"
            description="Never miss a follow-up call. Get automated push notifications and email reminders to close more deals."
        >
            <FeatureHero
                headline="Never Drop the Ball Again"
                subheadline="Automate your follow-up schedule. Get notified exactly when it's time to call a prospect back, so no lead ever slips through the cracks."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 flex items-center justify-center relative overflow-hidden p-6">
                        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                <div className="font-bold text-slate-800 flex items-center"><Bell className="w-5 h-5 mr-2 text-indigo-500 fill-indigo-100" /> Upcoming Reminders</div>
                                <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">2 Due</div>
                            </div>

                            <div className="space-y-3">
                                <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-semibold text-slate-900 text-sm">Follow up on pricing</div>
                                            <div className="text-xs text-slate-500 mt-1">Rajesh Kumar • Warm Lead</div>
                                        </div>
                                        <div className="text-xs font-bold text-red-600 bg-white px-2 py-1 rounded border border-red-100">10:00 AM</div>
                                    </div>
                                </div>

                                <div className="p-3 border-l-4 border-indigo-500 bg-white shadow-sm rounded-r-lg border border-slate-100">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-semibold text-slate-900 text-sm">Schedule Demo Call</div>
                                            <div className="text-xs text-slate-500 mt-1">Anita Desai • New Inquiry</div>
                                        </div>
                                        <div className="text-xs font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-200">2:30 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Forgetting to call back a hot lead",
                    "Relying on sticky notes or messy spreadsheets",
                    "Agents missing scheduled appointments",
                    "Losing deals to competitors because of late responses"
                ]}
                solutions={[
                    "System forces a pop-up reminder on screen",
                    "Everything organized in a unified daily calendar",
                    "Mobile push notifications reach agents anywhere",
                    "Timely follow-ups increase win probability by 40%"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Bell, title: "Smart Popups", description: "Get a notification directly inside the CRM when a call is due." },
                    { icon: Smartphone, title: "Mobile Push Alerts", description: "Agents receive reminders on their phone, even when away from desk." },
                    { icon: Calendar, title: "Calendar View", description: "Visualize your entire day, week, or month's scheduled activities at a glance." },
                    { icon: Clock, title: "Snooze & Reschedule", description: "Lead didn't answer? Snooze the reminder for 2 hours with one click." },
                    { icon: Goal, title: "Daily Task Lists", description: "Agents log in and see exactly who they need to call today." },
                    { icon: Zap, title: "Auto-Scheduling", description: "Set up workflows that automatically schedule the next reminder." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Call Outcome", description: "Agent finishes call, lead says 'call me Friday'." },
                    { title: "Set Reminder", description: "Agent sets date/time in one click." },
                    { title: "Alert Triggers", description: "On Friday, CRM sends push notification." },
                    { title: "Call Connects", description: "Agent calls perfectly on time." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "-80%", label: "Missed Follow-ups", description: "Drastic reduction in forgotten tasks" },
                    { value: "+45%", label: "Conversion Rate", description: "For leads called at specified times" },
                    { value: "0", label: "Sticky Notes", description: "Completely paperless tracking" },
                    { value: "100%", label: "Accountability", description: "Managers see missed vs achieved tasks" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "B2B Software Sales", description: "Navigating complex sales cycles requiring multiple precise follow-ups across months." },
                    { icon: Briefcase, industry: "Consultancies", description: "Scheduling and reminding agents for high-value consultation calls." },
                    { icon: Smartphone, industry: "Telecommunications", description: "Calling customers exactly before their renewal or upgrade deadlines." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
