import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Clock, CheckCircle, BarChart3, TrendingUp, AlertTriangle, Coffee, Target, MousePointer2, Building, Activity } from 'lucide-react';

export default function HourByHourReport() {
    return (
        <FeaturePageLayout
            title="Hour-by-Hour Productivity Reports | TeleCRM"
            description="Track exactly how your sales team performs throughout the day with detailed hour-by-hour analytics."
        >
            <FeatureHero
                headline="Micro-manage the Process, Not the People"
                subheadline="Discover when your sales team is most active—and when they're slacking. Predict end-of-day results by lunchtime using real-time, hour-by-hour productivity tracking."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-900 border-8 border-slate-800 rounded-xl p-6 relative flex flex-col justify-end overflow-hidden">

                        <div className="text-white font-bold text-lg mb-6 flex items-center"><Clock className="w-5 h-5 mr-2 text-rose-400" /> Today's Activity Pulse</div>

                        {/* Chart bars simulation */}
                        <div className="flex-1 flex items-end gap-2 pb-6 border-b border-slate-700 relative h-48">

                            {/* 10 AM */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[90%] group">
                                <div className="w-full bg-rose-500 rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all group-hover:bg-rose-400 h-full relative cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">142 Calls</div>
                                </div>
                            </div>

                            {/* 11 AM */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[100%] group">
                                <div className="w-full bg-rose-500 rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all group-hover:bg-rose-400 h-full relative cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">188 Calls</div>
                                </div>
                            </div>

                            {/* 12 PM */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[60%] group">
                                <div className="w-full bg-rose-600/80 rounded-t-sm transition-all group-hover:bg-rose-500 h-full relative cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">92 Calls</div>
                                </div>
                            </div>

                            {/* 1 PM - Lunch Dip */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[10%] group">
                                <div className="w-full bg-rose-800/40 rounded-t-sm transition-all group-hover:bg-rose-500 h-full relative cursor-pointer border border-rose-900">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">14 Calls</div>
                                </div>
                            </div>

                            {/* 2 PM */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[80%] group">
                                <div className="w-full bg-rose-500 rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all group-hover:bg-rose-400 h-full relative cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">135 Calls</div>
                                </div>
                            </div>

                            {/* 3 PM */}
                            <div className="flex-1 flex flex-col justify-end items-center h-[70%] group">
                                <div className="w-full bg-rose-600/80 rounded-t-sm transition-all group-hover:bg-rose-500 h-full relative cursor-pointer">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] py-1 px-2 rounded font-bold opacity-0 group-hover:opacity-100">110 Calls</div>
                                </div>
                            </div>

                        </div>

                        {/* X-axis labels */}
                        <div className="flex justify-between w-full mt-3 text-[10px] text-slate-500 font-medium px-2">
                            <span>10AM</span>
                            <span>11AM</span>
                            <span>12PM</span>
                            <span>1PM</span>
                            <span>2PM</span>
                            <span>3PM</span>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Only seeing total daily end-of-day numbers, which is too late to fix issues",
                    "Agents making 80% of their calls in the last 2 hours to avoid getting fired",
                    "Not knowing the best time of day your specific audience answers the phone",
                    "Difficulty maintaining steady sales momentum throughout a 9-hour shift"
                ]}
                solutions={[
                    "Spot dips in activity instantly and intervene before the day is wasted",
                    "Enforce consistent pacing so high-quality conversations happen all day long",
                    "Analyze the connection rate by hour to know when leads answer most",
                    "Set mini-targets for every hour to keep motivation high continuously"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Activity, title: "Live Activity Graph", description: "A heartbeat pulse line showing exactly how many calls the floor is making right now." },
                    { icon: BarChart3, title: "Velocity Tracking", description: "See the speed at which agents are burning through their assigned lead lists." },
                    { icon: Coffee, title: "Break Management", description: "Monitor the exact impact of lunch breaks and shift changes on your overall pipeline." },
                    { icon: Target, title: "Hourly Conversions", description: "Are agents closing more deals in the morning or evening? Find out instantly." },
                    { icon: AlertTriangle, title: "Drop-off Alerts", description: "Get a warning if overall call volume drops by 30% compared to yesterday's hour." },
                    { icon: MousePointer2, title: "Agent Deep Dive", description: "Click any hour bar to see exactly which agents contributed to that block." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Floor Starts", description: "Graphs kick off at 9 AM, building bars as calls happen." },
                    { title: "Midday Slump", description: "Manager notices 2 PM bar is 40% lower than yesterday." },
                    { title: "Intervention", description: "Manager rallies the team on the floor to pick up pace." },
                    { title: "Day Salvaged", description: "Pacing recovers. End-of-day targets are successfully met." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "+30%", label: "Consistent Output", description: "Flatten extreme performance peaks" },
                    { value: "0", label: "End-of-day Shocks", description: "Know your final numbers by noon" },
                    { value: "2x", label: "Connect Rates", description: "By calling when leads actually pick up" },
                    { value: "Intra-day", label: "Agility", description: "Make decisions before shifts end" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Mega Call Centers", description: "Managing 500+ seat floors by maintaining an exact pacing rhythm to hit massive daily targets." },
                    { icon: Activity, industry: "BPO Services", description: "Providing clients with exact time-of-day ROI metrics for outsourced sales campaigns." },
                    { icon: Clock, industry: "Real Estate Presales", description: "Finding the exact golden hour when property buyers are most receptive to calls." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
