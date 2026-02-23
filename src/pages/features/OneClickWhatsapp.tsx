import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { MessageCircle, CheckCircle, Navigation2, Zap, LayoutTemplate, Clock, MessageSquare, History, PhoneCall, Building } from 'lucide-react';

export default function OneClickWhatsapp() {
    return (
        <FeaturePageLayout
            title="One Click WhatsApp Messaging CRM | TeleCRM"
            description="Send WhatsApp messages to leads effortlessly with pre-approved templates directly from the CRM."
        >
            <FeatureHero
                headline="Start Conversations in One Click"
                subheadline="Say goodbye to saving numbers in your phonebook just to send a message. Engage leads instantly using pre-built templates without leaving your CRM dashboard."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 border border-emerald-100 rounded-xl p-6 relative flex flex-col items-center justify-center overflow-hidden">

                        {/* CRM List View Simulation */}
                        <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="p-3 border-b border-slate-100 bg-slate-50 flex justify-between items-center text-xs font-bold text-slate-500">
                                <div className="w-1/3">Lead Name</div>
                                <div className="w-1/3">Status</div>
                                <div className="w-1/3 text-right">Action</div>
                            </div>

                            {/* Row 1 */}
                            <div className="p-4 border-b border-slate-50 flex items-center justify-between hover:bg-slate-50 relative group">
                                <div className="w-1/3 font-semibold text-slate-800 text-sm">Nikhil Sharma</div>
                                <div className="w-1/3"><span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded">Follow Up</span></div>
                                <div className="w-1/3 flex justify-end gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-slate-200"><PhoneCall className="w-4 h-4 text-blue-600" /></div>
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center cursor-pointer transform scale-110 shadow-md shadow-emerald-200"><MessageCircle className="w-4 h-4 text-emerald-600" /></div>
                                </div>

                                {/* Template Popup */}
                                <div className="absolute top-1/2 right-20 -translate-y-1/2 w-48 bg-white shadow-2xl rounded-lg border border-slate-200 p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2 px-1">Select Template</div>
                                    <div className="text-xs bg-emerald-50 text-emerald-800 p-2 rounded cursor-pointer mb-1 hover:bg-emerald-100">Company Brochure PDF</div>
                                    <div className="text-xs text-slate-700 p-2 rounded cursor-pointer hover:bg-slate-50">Meeting Reminder</div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="p-4 border-b border-slate-50 flex items-center justify-between">
                                <div className="w-1/3 font-semibold text-slate-800 text-sm">Priya Desai</div>
                                <div className="w-1/3"><span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded">Interested</span></div>
                                <div className="w-1/3 flex justify-end gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><PhoneCall className="w-4 h-4 text-blue-600" /></div>
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-emerald-600" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Agents wasting time saving contact numbers just to send a WhatsApp",
                    "Inconsistent messaging because agents type their own custom text",
                    "Hard to track if an agent actually sent the requested brochure",
                    "Personal agent numbers being used for business communication"
                ]}
                solutions={[
                    "Click the WhatsApp icon next to any lead to send a message instantly",
                    "Enforce brand guidelines by providing standardized, approved templates",
                    "Every message sent is logged to the lead's history automatically",
                    "Use a centralized business WhatsApp number for all outbound messaging"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Navigation2, title: "No Number Saving", description: "Bypass the phonebook. Messages route directly to the prospect's number." },
                    { icon: LayoutTemplate, title: "Approved Templates", description: "Create a library of pitches, brochures, and links for sales reps to use in 1-click." },
                    { icon: MessageSquare, title: "Inbox Integration", description: "When the customer replies, agents can chat with them directly inside the CRM." },
                    { icon: History, title: "Message History", description: "A chronological timeline of every WhatsApp message sent and received by any agent." },
                    { icon: Zap, title: "Dynamic Insertion", description: "Templates automatically fill in the lead's name to ensure a personal touch." },
                    { icon: CheckCircle, title: "Delivery Receipts", description: "See the double-blue ticks inside your CRM to confirm they read your pitch." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Agent Action", description: "Agent finishes a call and clicks the WhatsApp icon on the lead." },
                    { title: "Select Template", description: "Chooses 'Product Brochure' from the dropdown list." },
                    { title: "Review & Send", description: "Variables auto-fill. Agent clicks send." },
                    { title: "Track History", description: "Message is permanently logged to the client record." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "Seconds", label: "To Send", description: "Compared to minutes manually" },
                    { value: "0", label: "Saved Contacts", description: "Keep your phonebook clean" },
                    { value: "100%", label: "Consistent Pitch", description: "Agents use approved copy" },
                    { value: "Central", label: "Data Ownership", description: "Chats stay in company CRM" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Real Estate", description: "Sending floor plans and project location pins immediately after a discovery call." },
                    { icon: PhoneCall, industry: "BPO / Call Centers", description: "Call center agents sending WhatsApp callbacks if a lead didn't pick up the phone." },
                    { icon: MessageCircle, industry: "Service Providers", description: "Sending standardized quotation PDFs rapidly while negotiating on a call." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
