import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { MessageCircle, CheckCircle, Send, Users, ChartBar, Image, Zap, Target, BookOpen, ShoppingBag } from 'lucide-react';

export default function WhatsappBroadcast() {
    return (
        <FeaturePageLayout
            title="WhatsApp Broadcast Marketing | TeleCRM"
            description="Send personalized WhatsApp bulk messages to thousands of leads instantly without getting blocked."
        >
            <FeatureHero
                headline="Reach Thousands on WhatsApp in Seconds"
                subheadline="Launch targeted marketing campaigns directly on the world's most popular messaging app. High open rates, instant engagement, and automated follow-ups."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 p-6 flex flex-col justify-end relative overflow-hidden">

                        {/* Chat bubble 1 */}
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm inline-block self-start mb-4 max-w-[80%] border border-slate-100">
                            <div className="text-sm font-semibold text-slate-800 mb-1">TeleCRM Special Offer</div>
                            <div className="text-slate-600 text-sm">Hi Rahul, exclusive 20% off on your subscription upgrade this week! Reply YES to activate.</div>
                            <div className="text-right text-[10px] text-slate-400 mt-1">10:42 AM</div>
                        </div>

                        {/* Chat bubble 2 */}
                        <div className="bg-emerald-100 p-3 rounded-2xl rounded-tr-sm shadow-sm inline-block self-end mb-4 border border-emerald-200">
                            <div className="text-emerald-900 text-sm">YES</div>
                            <div className="text-right text-[10px] text-emerald-600 flex justify-end items-center mt-1">10:45 AM <CheckCircle className="w-3 h-3 ml-1" /></div>
                        </div>

                        {/* Analytics Floating Card */}
                        <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-[bounce_3s_ease-in-out_infinite]">
                            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Campaign Stats</div>
                            <div className="flex gap-4">
                                <div>
                                    <div className="text-xl font-bold text-slate-900">4,521</div>
                                    <div className="text-[10px] text-slate-500">Delivered</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-emerald-600">84%</div>
                                    <div className="text-[10px] text-slate-500">Open Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Number blocking when sending manual bulk messages",
                    "Low email open rates (usually 15-20%)",
                    "Can't track who read the message or clicked links",
                    "No integration with CRM data for personalization"
                ]}
                solutions={[
                    "Official API ensures 100% safe, block-free sending",
                    "Unbeatable WhatsApp open rates (98% average)",
                    "Detailed campaign reports on delivery and reads",
                    "Dynamic variables automatically insert lead names"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Send, title: "1-Click Bullk Sending", description: "Select thousands of leads with filters and blast a message in a single click." },
                    { icon: Target, title: "Smart Scheduling", description: "Schedule campaigns to go out at the exact right time for your audience." },
                    { icon: Image, title: "Rich Media Support", description: "Send brochures, PDFs, images, and videos along with your text messages." },
                    { icon: Zap, title: "Official Cloud API", description: "Meta-approved integration means zero risk of your business number getting banned." },
                    { icon: ChartBar, title: "Real-time Analytics", description: "Track Sent, Delivered, Read, and Replied metrics live on your dashboard." },
                    { icon: Users, title: "Audience Segmentation", description: "Create precise lists based on lead tags, status, or geography." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Select Audience", description: "Filter leads in CRM (e.g., 'Warm Leads in Mumbai')." },
                    { title: "Draft Message", description: "Create template and add media/buttons." },
                    { title: "Send/Schedule", description: "Approve the campaign and hit send." },
                    { title: "Watch Replies", description: "Agents handle instant incoming responses." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "98%", label: "Open Rate", description: "Compared to 20% in email" },
                    { value: "5x", label: "Response Rate", description: "Faster replies from prospects" },
                    { value: "10k+", label: "Messages/sec", description: "Instant delivery speed" },
                    { value: "100%", label: "Ban-Free", description: "Using Official WhatsApp API" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: ShoppingBag, industry: "Retail & E-commerce", description: "Send festival offers, abandoned cart reminders, and new product catalogs." },
                    { icon: BookOpen, industry: "Educational Institutes", description: "Broadcast admission dates, fee reminders, and webinar links to students." },
                    { icon: Target, industry: "Real Estate", description: "Mass-distribute new property brochures and site visit invitations." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
