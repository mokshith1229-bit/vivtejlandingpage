import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Route, CheckCircle, SplitSquareHorizontal, Users, MapPin, Zap, Brain, ArrowRightLeft, Building, Users2, Clock } from 'lucide-react';

export default function LeadRouting() {
    return (
        <FeaturePageLayout
            title="Smart Lead Routing & Assignment | TeleCRM"
            description="Automatically route fresh leads to the right sales agent based on rules, location, or round-robin logic."
        >
            <FeatureHero
                headline="The Right Lead to the Right Agent. Instantly."
                subheadline="Stop manually assigning leads. Set up smart routing rules that distribute prospects to your team based on performance, availability, or territory."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 border border-indigo-100 rounded-xl p-6 relative flex flex-col justify-center overflow-hidden">

                        {/* Incoming Lead */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 border border-slate-200 rounded-full shadow-lg z-20 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                            <span className="text-sm font-bold text-slate-800">New Facebook Lead</span>
                        </div>

                        {/* Router Engine */}
                        <div className="bg-indigo-600 text-white p-4 rounded-xl w-48 mx-auto text-center relative z-10 shadow-xl shadow-indigo-600/30 font-bold flex flex-col items-center mt-12 mb-12">
                            <Brain className="w-8 h-8 mb-2" />
                            Routing Engine
                        </div>

                        {/* Distribution Lines */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-32 border-l-2 border-r-2 border-t-2 border-indigo-300 rounded-t-xl -z-0"></div>

                        {/* Agents */}
                        <div className="flex justify-between max-w-sm mx-auto w-full relative z-10">
                            <div className="bg-white p-3 rounded-xl shadow border border-slate-100 text-center w-24">
                                <div className="w-10 h-10 rounded-full bg-slate-100 mx-auto mb-2 flex items-center justify-center text-xs font-bold text-slate-500">A1</div>
                                <div className="text-[10px] text-slate-500">Busy</div>
                            </div>
                            <div className="bg-white p-3 rounded-xl shadow-lg border-2 border-emerald-400 text-center w-24 transform scale-110">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 mx-auto mb-2 flex items-center justify-center text-xs font-bold text-emerald-600">A2</div>
                                <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 rounded">Assigned!</div>
                            </div>
                            <div className="bg-white p-3 rounded-xl shadow border border-slate-100 text-center w-24">
                                <div className="w-10 h-10 rounded-full bg-slate-100 mx-auto mb-2 flex items-center justify-center text-xs font-bold text-slate-500">A3</div>
                                <div className="text-[10px] text-slate-500">Available</div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Managers wasting hours manually assigning leads every morning",
                    "Leads going cold because they were assigned to an absent agent",
                    "Unequal distribution causing friction among the sales team",
                    "High-value deals being assigned to junior or inexperienced reps"
                ]}
                solutions={[
                    "100% automated distribution runs 24/7 without intervention",
                    "Skip offline agents and route only to those currently logged in",
                    "Round-robin ensures mathematically fair lead distribution",
                    "Skill-based routing sends enterprise leads to senior closers only"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: SplitSquareHorizontal, title: "Round-Robin", description: "Distribute leads equally via rotation to ensure maximum fairness across the floor." },
                    { icon: MapPin, title: "Territory Routing", description: "Automatically assign leads from Mumbai to the West India sales team." },
                    { icon: Brain, title: "Performance Routing", description: "Send more leads to your top closers and throttle leads for underperformers." },
                    { icon: Clock, title: "Availability Checks", description: "System checks who is clocked-in before assigning a live inbound lead." },
                    { icon: Users, title: "Team Distribution", description: "Assign a block of leads to 'Team Alpha', letting the manager distribute further." },
                    { icon: Zap, title: "Instant Notification", description: "Agent receives a push notification on their phone instantly upon assignment." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Lead Enters", description: "Prospect submits website form at 2:00 PM." },
                    { title: "Rules Checked", description: "Engine sees lead is from Delhi, needs Hindi speaker." },
                    { title: "Agent Selected", description: "Engine finds available Hindi-speaking agent via Round-Robin." },
                    { title: "Connection", description: "Agent notified. Calls lead at 2:01 PM." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "Manual Assigns", description: "Managers get their mornings back" },
                    { value: "100%", label: "Fairness", description: "No bias in lead distribution" },
                    { value: "Instant", label: "Speed to Lead", description: "Zero delay jumping on warm prospects" },
                    { value: "+30%", label: "Close Rate", description: "By matching lead intent to agent skill" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: MapPin, industry: "Real Estate Brokers", description: "Routing property inquiries to specialized agents based on the specific project location." },
                    { icon: Users2, industry: "Insurance Call Centers", description: "Using complex round-robins across a 500+ agent floor based on language requirements." },
                    { icon: Building, industry: "B2B Software", description: "Sending SMB leads to junior reps and Enterprise leads to senior Account Executives." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}


