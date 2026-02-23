import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Facebook, CheckCircle, Zap, Shield, Users, Clock, MapPin, Database, Bell, Briefcase } from 'lucide-react';

export default function FbLeadCapture() {
    return (
        <FeaturePageLayout
            title="Facebook Lead Ads Integration | TeleCRM"
            description="Instantly capture Facebook & Instagram leads into your CRM and distribute them to your sales team in seconds."
        >
            <FeatureHero
                headline="From Facebook to Follow-up in 3 Seconds"
                subheadline="Stop downloading CSVs from Facebook Ads Manager. Automatically push every new lead into your CRM the moment they submit a form."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-blue-50 border border-blue-100 rounded-xl p-6 relative flex flex-col items-center justify-center overflow-hidden">

                        {/* FB Logo Card */}
                        <div className="w-16 h-16 bg-[#1877F2] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 z-10 mb-8 border-4 border-white">
                            <Facebook className="w-10 h-10" />
                        </div>

                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-32 bg-blue-200">
                            <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 -left-1.5 animate-[ping_1.5s_ease-in-out_infinite]"></div>
                        </div>

                        {/* CRM Card */}
                        <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-sm border border-slate-100 z-10">
                            <div className="text-xs text-blue-600 font-bold uppercase mb-2">New Lead Received <span className="text-slate-400 font-normal">Just now</span></div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">AT</div>
                                <div>
                                    <div className="font-bold text-slate-800">Amit Tiwari</div>
                                    <div className="text-slate-500 text-xs text-blue-600">+91 98765 43210</div>
                                </div>
                            </div>
                            <div className="mt-3 bg-slate-50 p-2 rounded text-xs text-slate-600 border border-slate-100">
                                <strong>Source:</strong> FB Campaign - Summer Promo<br />
                                <strong>City:</strong> Mumbai
                            </div>
                            <div className="mt-3 flex gap-2">
                                <div className="bg-blue-600 text-white flex-1 text-center py-2 rounded text-xs font-bold shadow-sm shadow-blue-600/20 flex justify-center items-center gap-1"><Zap className="w-3 h-3" /> Assigning to Agent...</div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Manually downloading massive CSV files from Facebook daily",
                    "Leads go cold because nobody calls them on the weekend",
                    "Typing lead details from an email notification into the CRM",
                    "Hard to track which specific FB ad creative is driving the best sales"
                ]}
                solutions={[
                    "Direct API connection syncs leads instantly and securely",
                    "Agents get instant push notifications the moment a lead clicks submit",
                    "Zero data entry required. 100% accurate information capture",
                    "Campaign, AdSet, and Ad Name are mapped directly to the lead profile"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Zap, title: "Zero-Delay Sync", description: "Leads appear in your CRM pipeline literally seconds after submitting the form on FB." },
                    { icon: Database, title: "Custom Questions", description: "Map custom FB form questions directly to your CRM's custom fields." },
                    { icon: Shield, title: "Reliable Connection", description: "Direct API integration verified by Meta, completely bypassing risky third-party connectors." },
                    { icon: SplitSquareHorizontal, title: "Auto-Assignment", description: "Route the new FB lead instantly to an agent based on language, city, or round-robin." },
                    { icon: MapPin, title: "UTM Tracking", description: "Know exactly which Campaign and Ad Set generated the converted lead." },
                    { icon: Bell, title: "Instant Alerts", description: "Send a trigger WhatsApp message to the prospect and an app notification to your agent simultaneously." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "FB Ad Clicked", description: "User clicks your ad on Instagram/Facebook." },
                    { title: "Form Submitted", description: "User fills out the lead form with pre-filled details." },
                    { title: "Instant Sync", description: "TeleCRM pulls the data via API in 0.5 seconds." },
                    { title: "Agent Calls", description: "Agent calls the lead while they are still holding their phone." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "<3sec", label: "Sync Time", description: "The fastest integration possible" },
                    { value: "0", label: "Lost Leads", description: "No CSV downloading errors" },
                    { value: "3x", label: "Conversion Rate", description: "When calling leads within 5 minutes" },
                    { value: "$0", label: "Zapier Costs", description: "Direct native integration saves money" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Briefcase, industry: "Real Estate Developers", description: "Routing project site-visit inquiries to the closest available sales executive instantly." },
                    { icon: Users, industry: "Educational Institutes", description: "Capturing course enrollment inquiries across multiple subjects and assigning them to specialized counselors." },
                    { icon: Clock, industry: "B2B Services", description: "Booking consultations immediately while the prospect's pain points are top-of-mind." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}

// Just importing a missing icon locally to ensure it works without breaking imports block up top
function SplitSquareHorizontal(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" /><path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" /><line x1="12" x2="12" y1="4" y2="20" /></svg>
    );
}
