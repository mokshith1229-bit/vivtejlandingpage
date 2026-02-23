import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Users, CheckCircle, Clock, Target, BarChart3, Fingerprint, CalendarDays, ShieldCheck, MapPin, Building } from 'lucide-react';

export default function AgentsReport() {
    return (
        <FeaturePageLayout
            title="Agent Performance Reports | TeleCRM"
            description="Track agent activity, call durations, login hours, and conversion metrics in real-time."
        >
            <FeatureHero
                headline="Complete Team Transparency"
                subheadline="Know exactly how your sales team is performing. Track talk time, identify top closers, and spot areas where agents need coaching."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-50 flex flex-col p-6 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center"><Users className="w-5 h-5 mr-2 text-indigo-600" /> Agent Overview</h3>
                        </div>

                        {/* Agent Row 1 */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-3 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-200">RS</div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">Rahul Singh</div>
                                    <div className="text-indigo-600 text-xs font-semibold">Online</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-slate-900 font-bold text-sm">4h 12m</div>
                                <div className="text-slate-500 text-xs text-right w-full">Talk Time</div>
                            </div>
                            <div className="text-right">
                                <div className="text-slate-900 font-bold text-sm">114</div>
                                <div className="text-slate-500 text-xs text-right w-full">Total Calls</div>
                            </div>
                            <div className="text-right">
                                <div className="text-emerald-600 font-bold text-sm">6</div>
                                <div className="text-slate-500 text-xs text-right w-full">Deals Closed</div>
                            </div>
                        </div>

                        {/* Agent Row 2 */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs border border-slate-200">AM</div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">Amit Mishra</div>
                                    <div className="text-slate-400 text-xs">Offline - 12m ago</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-slate-900 font-bold text-sm">2h 45m</div>
                                <div className="text-slate-500 text-xs text-right w-full">Talk Time</div>
                            </div>
                            <div className="text-right">
                                <div className="text-slate-900 font-bold text-sm">89</div>
                                <div className="text-slate-500 text-xs text-right w-full">Total Calls</div>
                            </div>
                            <div className="text-right">
                                <div className="text-emerald-600 font-bold text-sm">2</div>
                                <div className="text-slate-500 text-xs text-right w-full">Deals Closed</div>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Micro-managing to see if agents are actually making calls",
                    "Not knowing why one agent is closing more than another",
                    "Disputes over how many hours an agent actually worked remote",
                    "Inability to spot when an agent is burning out"
                ]}
                solutions={[
                    "Live dashboard shows exact call volumes and current statuses",
                    "Compare conversion rates side-by-side to find best practices",
                    "Precise login/logout timestamps and active work hours",
                    "Track drop-offs in call volume mid-day and intervene early"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Clock, title: "Talk-Time Tracking", description: "See the total duration agents spent actively talking to leads." },
                    { icon: Target, title: "Outcome Analysis", description: "Analyze the ratio of connection rates vs unanswered calls per agent." },
                    { icon: Fingerprint, title: "Attendance & Logins", description: "Track exact first-login and last-logout times." },
                    { icon: BarChart3, title: "Conversion Ratios", description: "Understand how many calls it takes a specific agent to close a deal." },
                    { icon: CalendarDays, title: "Historical Comparisons", description: "Compare an agent's performance this month versus last month." },
                    { icon: ShieldCheck, title: "Role Management", description: "Team leads only see their squad's data while admins see everything." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Agent Logs In", description: "System starts tracking active working hours." },
                    { title: "Calls Logged", description: "Every dialing attempt, duration, and outcome is saved." },
                    { title: "Dashboard Update", description: "Manager dashboard refreshes immediately with new stats." },
                    { title: "Weekly Review", description: "Data exported to highlight top performers and training needs." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "Micromanagement", description: "Trust built through transparent data" },
                    { value: "+28%", label: "Agent Output", description: "When performance metrics are tracked" },
                    { value: "100%", label: "Visibility", description: "Complete picture of your sales floor" },
                    { value: "Instant", label: "Coaching Ops", description: "Locate struggling agents immediately" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Outsourced Call Centers", description: "Providing client reports on exact billable hours and call KPIs." },
                    { icon: Users, industry: "Remote Sales Teams", description: "Managing distributed workforces without needing to constantly check-in via slack." },
                    { icon: MapPin, industry: "Field Sales", description: "Tracking how many site-visits or physical meetings field agents complete." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
