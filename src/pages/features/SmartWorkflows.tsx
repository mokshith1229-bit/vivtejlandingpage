import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Workflow, CheckCircle, Zap, GitFork, RefreshCw, Send, Settings, UserPlus, FileSpreadsheet, Handshake } from 'lucide-react';

export default function SmartWorkflows() {
    return (
        <FeaturePageLayout
            title="Smart Workflows & Automation | TeleCRM"
            description="Automate repetitive tasks, follow-ups, and data entry with trigger-based smart workflows."
        >
            <FeatureHero
                headline="Put Your Operations on Autopilot"
                subheadline="Build trigger-based automations that assign leads, send messages, and schedule tasks automatically. Work smarter, not harder."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="w-full max-w-sm">

                            {/* Trigger */}
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 mb-6 relative">
                                <div className="text-xs text-blue-600 font-bold uppercase mb-1 flex items-center"><Zap className="w-3 h-3 mr-1" /> Trigger</div>
                                <div className="font-semibold text-slate-800">Lead Status changes to "Interested"</div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-blue-300"></div>
                            </div>

                            {/* Actions Grid */}
                            <div className="grid grid-cols-2 gap-4 relative">
                                {/* Action 1 */}
                                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 relative">
                                    <div className="absolute -top-7 left-1/2 w-[110%] h-0.5 bg-blue-300 -translate-x-[95%]"></div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-blue-300"></div>
                                    <Send className="w-5 h-5 text-emerald-600 mb-2" />
                                    <div className="text-sm font-semibold text-emerald-900">Send WhatsApp brochure</div>
                                </div>

                                {/* Action 2 */}
                                <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 relative">
                                    <div className="absolute -top-7 right-1/2 w-[110%] h-0.5 bg-blue-300 translate-x-[95%]"></div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-blue-300"></div>
                                    <Settings className="w-5 h-5 text-amber-600 mb-2" />
                                    <div className="text-sm font-semibold text-amber-900">Set task for Sales Exec</div>
                                </div>
                            </div>

                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Agents wasting hours on manual data entry",
                    "Forgetting to send follow-up emails or messages",
                    "Leads sitting unassigned while get cold",
                    "Inconsistent communication across different team members"
                ]}
                solutions={[
                    "System updates fields automatically based on actions",
                    "Automated drip sequences nurture leads while you sleep",
                    "Instant lead distribution to the right available agent",
                    "Standardized, perfectly timed automated messages"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: GitFork, title: "If/Then Logic", description: "Create branching paths based on lead responses, location, or value." },
                    { icon: Send, title: "Multi-channel Outreach", description: "Trigger automatic Emails, SMS, and WhatsApp messages in sequence." },
                    { icon: UserPlus, title: "Auto-Assignment", description: "Route incoming leads to agents based on rules, territory, or round-robin." },
                    { icon: RefreshCw, title: "Status Automation", description: "Move leads through the pipeline stages automatically when criteria are met." },
                    { icon: Zap, title: "Real-time Execution", description: "Zero lag. Automations run the split-second a trigger event occurs." },
                    { icon: Settings, title: "No-Code Builder", description: "Visual drag-and-drop workflow builder anyone can use." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Define Trigger", description: "E.g., 'When new lead enters via Website'." },
                    { title: "Set Conditions", description: "E.g., 'If City equals Bangalore'." },
                    { title: "Map Actions", description: "'Assign to Agent A' and 'Send Welcome SMS'." },
                    { title: "Launch Magic", description: "Workflow runs 24/7 in the background." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "40hrs", label: "Saved Monthly", description: "Per agent on manual data entry" },
                    { value: "Instant", label: "Response Time", description: "Automated welcomes beat competitors" },
                    { value: "100%", label: "Consistency", description: "No steps are ever skipped" },
                    { value: "24/7", label: "Operation", description: "System works even when you sleep" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: FileSpreadsheet, industry: "Marketing Agencies", description: "Automating lead nurturing sequences from Facebook Ads before sales steps in." },
                    { icon: Handshake, industry: "B2B SaaS", description: "Triggering onboarding emails based on user actions inside the app." },
                    { icon: Zap, industry: "E-Commerce", description: "Automating cart abandonment WhatsApp reminders and discount offers." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
