import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { BellRing, CheckCircle, Smartphone, Clock, Target, Shield, HeartPulse, ShieldAlert, Navigation, Briefcase, Zap } from 'lucide-react';

export default function PushNotification() {
    return (
        <FeaturePageLayout
            title="Mobile Push Notifications for Agents | TeleCRM"
            description="Keep your sales team updated in real-time with mobile push alerts for new leads, scheduled calls, and targets."
        >
            <FeatureHero
                headline="Actionable Alerts for On-The-Go Agents"
                subheadline="Ensure your sales reps never miss a beat. Send instant push notifications to their mobile app for hot inbound leads and urgent scheduled follow-ups."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-rose-50 border border-rose-100 rounded-xl p-6 relative flex justify-center overflow-hidden">

                        {/* Phone Notification Simulation */}
                        <div className="bg-slate-900 w-64 h-96 rounded-t-[3rem] border-x-8 border-t-8 border-slate-800 shadow-2xl relative z-10 p-2 overflow-hidden flex flex-col justify-end pb-8">

                            {/* Lock screen top */}
                            <div className="absolute top-4 w-full flex justify-between px-6 text-[10px] text-white/50 font-bold z-20">
                                <span>9:41 AM</span>
                                <span className="flex gap-1">100%</span>
                            </div>

                            <div className="absolute top-12 w-full text-center text-4xl font-extralight text-white/80 z-20 font-sans">
                                09:41
                            </div>

                            {/* Notifications */}
                            <div className="space-y-2 relative z-20 px-2">

                                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20 animate-[slide-up_0.5s_ease-out]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-4 h-4 bg-rose-500 rounded flex items-center justify-center"><BellRing className="w-2.5 h-2.5 text-white" /></div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">TeleCRM</div>
                                        <div className="text-[10px] text-slate-400 ml-auto">Now</div>
                                    </div>
                                    <div className="font-bold text-slate-800 text-sm leading-tight mb-1">🔥 Hot Facebook Lead!</div>
                                    <div className="text-xs text-slate-600 leading-tight">Amit Sharma from Mumbai just inquired. Tap to call instantly.</div>
                                </div>

                                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center"><Clock className="w-2.5 h-2.5 text-white" /></div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">TeleCRM</div>
                                        <div className="text-[10px] text-slate-400 ml-auto">12m</div>
                                    </div>
                                    <div className="font-bold text-slate-800 text-sm leading-tight mb-1">Meeting Due in 10 mins</div>
                                    <div className="text-xs text-slate-600 leading-tight">Follow up scheduled with Rakesh Desai. Tap to view notes.</div>
                                </div>

                            </div>

                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Web leads sitting uncalled for hours because an agent was away from their laptop",
                    "Missed follow-up calls because an agent forgot to check their CRM calendar",
                    "Agents constantly refreshing the app to see if new leads arrived",
                    "Crucial announcements from managers being lost in Slack or WhatsApp"
                ]}
                solutions={[
                    "Instant mobile push notifications buzz the agent's pocket the exact second a lead arrives",
                    "Automated pop-ups for every scheduled follow-up call, ensuring they act on time",
                    "Passive alerts mean agents only open the app when there is an action to take",
                    "Managers can blast priority push alerts to the entire team's phones directly"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Smartphone, title: "Native Mobile App", description: "iOS and Android apps deliver native OS-level push notifications flawlessly." },
                    { icon: Zap, title: "Inbound Alerts", description: "Get a buzz the exact moment a Facebook or Web lead is assigned to you." },
                    { icon: Clock, title: "Schedule Reminders", description: "Get notified 10 minutes before a scheduled callback is due." },
                    { icon: Shield, title: "Quiet Hours", description: "Respect agent work-life balance by silencing non-critical alerts outside shift times." },
                    { icon: Target, title: "Target Achieved", description: "Send congratulatory push notifications when an agent hits their monthly quota." },
                    { icon: HeartPulse, title: "Manager Broadcasts", description: "Send an overriding push notification to all staff for emergency updates." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Lead Inbound", description: "Lead fills a form. System assigns to Agent A." },
                    { title: "Push Fired", description: "Pocket vibrates. Agent sees 'New Lead Assigned'." },
                    { title: "1-Tap Open", description: "Agent taps notification. App opens to the exact lead." },
                    { title: "Call Placed", description: "Agent hits the green dial button immediately." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "<1min", label: "Speed to Lead", description: "Beat competitors to the punch" },
                    { value: "-75%", label: "Missed Calls", description: "Agent follow-ups happen exactly on time" },
                    { value: "0", label: "Lost Updates", description: "Managers know agents saw the alert" },
                    { value: "High", label: "Agent Engagement", description: "Gamified notifications keep teams addicted to selling" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Navigation, industry: "Field Sales", description: "Alerting agents out in the field about a new meeting scheduled nearby." },
                    { icon: Briefcase, industry: "Remote Teams", description: "Keeping work-from-home agents engaged without micromanaging their screen time." },
                    { icon: ShieldAlert, industry: "Insurance Call Centers", description: "Notifying agents of high-intent website actions while they are walking the floor." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
