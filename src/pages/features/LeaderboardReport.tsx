import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Trophy, CheckCircle, BarChart3, Target, Crosshair, Crown, HeartHandshake, ShieldCheck, Download, Users } from 'lucide-react';

export default function LeaderboardReport() {
    return (
        <FeaturePageLayout
            title="Sales Leaderboard & Gamification | TeleCRM"
            description="Motivate your team with real-time performance tracking and gamified leaderboards that drive sales."
        >
            <FeatureHero
                headline="Ignite Friendly Competition"
                subheadline="Turn your sales floor into high-performance environment. Track rankings, reward top performers, and watch your revenue grow."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-50 p-6 flex flex-col rounded-xl overflow-hidden relative">
                        <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center"><Trophy className="w-6 h-6 text-yellow-500 mr-2" /> Monthly Champions</h3>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-yellow-200">
                                <div className="w-8 font-bold text-yellow-500">#1</div>
                                <div className="w-10 h-10 rounded-full bg-slate-200 mr-4"></div>
                                <div className="flex-1 font-semibold text-slate-900">Sarah Jenkins</div>
                                <div className="text-green-600 font-bold">142 Deals</div>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                                <div className="w-8 font-bold text-slate-400">#2</div>
                                <div className="w-10 h-10 rounded-full bg-slate-200 mr-4"></div>
                                <div className="flex-1 font-semibold text-slate-900">David Chen</div>
                                <div className="text-slate-600 font-bold">118 Deals</div>
                            </div>
                            <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-orange-200">
                                <div className="w-8 font-bold text-orange-400">#3</div>
                                <div className="w-10 h-10 rounded-full bg-slate-200 mr-4"></div>
                                <div className="flex-1 font-semibold text-slate-900">Michael Ross</div>
                                <div className="text-slate-600 font-bold">94 Deals</div>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Agents lacking motivation to make one more call",
                    "No transparency on who is actually performing best",
                    "Waiting until month-end to see sales results",
                    "Difficulty identifying underperforming team members"
                ]}
                solutions={[
                    "Public live rankings push agents to excel",
                    "Clear metrics show exactly who the top closers are",
                    "Real-time updates keep the momentum going daily",
                    "Easily spot who needs coaching or support"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Crown, title: "Live Leaderboards", description: "Rank agents in real-time based on calls, conversions, or revenue." },
                    { icon: Target, title: "Custom KPIs", description: "Choose which metrics matter most for your specific leaderboard." },
                    { icon: BarChart3, title: "Historical Trends", description: "Look back at previous weeks or months to spot consistent top performers." },
                    { icon: Crosshair, title: "Goal Tracking", description: "Visual progress bars showing agents how close they are to their targets." },
                    { icon: ShieldCheck, title: "Manager Insights", description: "Private dashboard for managers to analyze team velocity and health." },
                    { icon: HeartHandshake, title: "Automated Recognition", description: "Send automated shoutouts when agents hit major milestones." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Set Targets", description: "Manager sets weekly closed-won goals." },
                    { title: "Agents Perform", description: "Team makes calls and moves leads to 'Closed'." },
                    { title: "Board Updates", description: "Leaderboard instantly updates points." },
                    { title: "Review & Reward", description: "End of week top performers celebrated." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "+34%", label: "Productivity", description: "Increase in daily operations" },
                    { value: "100%", label: "Transparency", description: "Clear metrics everyone sees" },
                    { value: "2x", label: "Target Achievement", description: "More agents hitting quotas" },
                    { value: "0", label: "Manual Reports", description: "No more excel sheet tracking" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Users, industry: "B2B Sales Teams", description: "Motivate Account Executives tracking monthly recurring revenue closed." },
                    { icon: Crown, industry: "Insurance Brokers", description: "Track daily policy sales among hundreds of agents." },
                    { icon: Trophy, industry: "Call Centers", description: "Incentivize maximum talk-time and lowest drop-off rates." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
