import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Mail, MessageSquare, CheckCircle, Zap, Send, FileText, Layers, MailOpen, AlertCircle, Building } from 'lucide-react';

export default function OneClickSmsEmail() {
    return (
        <FeaturePageLayout
            title="One Click SMS & Email Integration | TeleCRM"
            description="Send pre-approved SMS and Email templates to leads instantly from the TeleCRM dashboard."
        >
            <FeatureHero
                headline="Omnichannel Communication in 1-Click"
                subheadline="Reach prospects where they are. Fire perfectly formatted emails and personalized SMS messages to your leads instantly, directly from your CRM workspace."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-indigo-50 border border-indigo-100 rounded-xl p-6 relative flex flex-col justify-center overflow-hidden">

                        {/* Messaging Panel */}
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-auto border border-slate-200 overflow-hidden relative z-10">

                            {/* Tabs */}
                            <div className="flex border-b border-slate-100">
                                <div className="w-1/2 py-3 text-center text-sm font-bold text-slate-800 border-b-2 border-slate-800 flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4" /> Email
                                </div>
                                <div className="w-1/2 py-3 text-center text-sm font-bold text-slate-400 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50">
                                    <MessageSquare className="w-4 h-4" /> SMS
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="text-xs text-slate-500 mb-1">Select Template</div>
                                <div className="bg-slate-50 border border-slate-200 p-2 rounded text-sm text-slate-800 font-semibold mb-4 flex justify-between items-center">
                                    Welcome + Discount Link <div className="text-[10px] text-slate-400 font-normal">▼</div>
                                </div>

                                <div className="bg-slate-100 rounded p-3 text-sm text-slate-600 font-mono text-[10px] leading-relaxed mb-4">
                                    Subject: Special 20% Off for {"{{lead.name}}"}!<br /><br />
                                    Hi {"{{lead.name}}"},<br /><br />
                                    Thanks for inquiring about {"{{lead.project}}"}. Here is your exclusive booking link: {"{{links.checkout}}"}.
                                </div>

                                <div className="bg-indigo-600 text-white font-bold py-2 rounded text-sm text-center shadow flex justify-center items-center gap-2">
                                    <Send className="w-4 h-4" /> Send Email Instantly
                                </div>
                            </div>

                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Agents rewriting the same introductory email 20 times a day",
                    "Logging into a separate email client just to follow up with a lead",
                    "No record in CRM whether an email or SMS was actually sent",
                    "Typing errors causing broken links or misspelled customer names"
                ]}
                solutions={[
                    "Library of pre-approved email and SMS templates ready to use",
                    "Omnichannel sending directly from the lead profile timeline",
                    "Every message sent is 100% transparently logged in the system",
                    "Dynamic variables populate exact lead names and tracking links"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Mail, title: "Template Library", description: "Standardize your company's communication with categorized SMS and Email templates." },
                    { icon: Zap, title: "Dynamic Insertion", description: "Insert {{lead.name}}, {{lead.source}}, and custom variables automatically." },
                    { icon: FileText, title: "Rich HTML Emails", description: "Send beautifully formatted HTML emails that look professional and render on all devices." },
                    { icon: Layers, title: "Attachment Support", description: "Include PDFs, brochures, and dynamic links inside your 1-click emails." },
                    { icon: MailOpen, title: "Open Tracking", description: "Know when your lead opens the email or clicks the link inside." },
                    { icon: AlertCircle, title: "Bounce Handling", description: "Automatically flag invalid emails and numbers so you don't waste time calling them." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Conversation", description: "Lead asks for the pricing PDF." },
                    { title: "Select Method", description: "Agent clicks the Email icon on the lead's profile." },
                    { title: "Choose Template", description: "Selects 'Pricing Intro'—it auto-fills everything." },
                    { title: "Sent & Logged", description: "Email fires instantly. Lead timeline updates." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "App Switching", description: "Everything executed inside the CRM" },
                    { value: "100%", label: "Professionalism", description: "Brand-approved HTML emails every time" },
                    { value: "2x", label: "Follow-up Cap", description: "Agents can handle more leads faster" },
                    { value: "Instant", label: "Email Tracking", description: "Know exactly when they read it" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Real Estate", description: "Sending standardized project brochures and DLT-approved project launch SMS blasts." },
                    { icon: MessageSquare, industry: "Educational Institutes", description: "Sending PDF course curriculums and fee structure emails after counseling sessions." },
                    { icon: MailOpen, industry: "B2B Sales", description: "Delivering massive proposals and tracking exactly when the prospect opened them." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
