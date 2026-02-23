import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Webhook, CheckCircle, Code2, Network, Shield, Zap, Puzzle, FileJson, Building, Activity } from 'lucide-react';

export default function CustomApiIntegration() {
    return (
        <FeaturePageLayout
            title="Custom API CRM Integration | TeleCRM"
            description="Connect TeleCRM to any third-party app, website, or custom software using our robust REST API and Webhooks."
        >
            <FeatureHero
                headline="Connect CRM to Your Entire Stack"
                subheadline="Your business doesn't run on just one app. Use our developer-friendly REST API to push, pull, and sync data between TeleCRM and any other tool you use."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-900 border border-slate-700 rounded-xl p-6 relative flex flex-col justify-center overflow-hidden font-mono">

                        {/* API Code Simulation */}
                        <div className="text-xs text-blue-400 mb-2">POST /api/v1/leads</div>
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full mb-4">
                            <div className="text-pink-400">{"{"}</div>
                            <div className="pl-4">
                                <span className="text-sky-300">"name"</span>: <span className="text-amber-300">"Priya Sharma"</span>,<br />
                                <span className="text-sky-300">"phone"</span>: <span className="text-amber-300">"+919876543210"</span>,<br />
                                <span className="text-sky-300">"source"</span>: <span className="text-amber-300">"Website Lead Form"</span>,<br />
                                <span className="text-sky-300">"custom_fields"</span>: {"{"}<br />
                                <div className="pl-4">
                                    <span className="text-sky-300">"budget"</span>: <span className="text-amber-300">"50,000"</span>
                                </div>
                                {"}"}
                            </div>
                            <div className="text-pink-400">{"}"}</div>
                        </div>

                        {/* Response */}
                        <div className="text-xs text-emerald-400 mb-2 mt-4 flex justify-between">
                            <span>Response: 201 Created</span>
                            <span>124ms</span>
                        </div>
                        <div className="bg-emerald-900/30 p-3 rounded-lg border border-emerald-800/50 w-full text-emerald-300 text-xs">
                            {"{"}<br />
                            <span className="pl-4">"success": true,</span><br />
                            <span className="pl-4">"lead_id": "LD-847291",</span><br />
                            <span className="pl-4">"assigned_to": "Agent_4"</span><br />
                            {"}"}
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Data silos where marketing, sales, and support use different apps",
                    "Paying expensive monthly Zapier or Make.com fees for high volume data",
                    "Website leads needing to be manually typed into the CRM",
                    "Internal custom dashboards unable to display live sales data"
                ]}
                solutions={[
                    "Bi-directional API syncs lead statuses across all your platforms",
                    "Direct API access is included, eliminating third-party middleware costs",
                    "Capture forms push data instantly to TeleCRM via Webhooks",
                    "Pull real-time CRM reporting data straight into your BI tools"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Code2, title: "RESTful Architecture", description: "Standard, predictable, and easy for any developer to integrate with quickly." },
                    { icon: Webhook, title: "Real-time Webhooks", description: "Get pushed instant notifications to your servers when a lead status changes." },
                    { icon: Shield, title: "Secure Tokens", description: "Enterprise-grade bearer token authentication keeps your data locked down." },
                    { icon: FileJson, title: "Detailed Documentation", description: "Clean documentation with copy-paste examples in cURL, Python, and Node.js." },
                    { icon: Zap, title: "High Rate Limits", description: "Built for scale. Process massive volumes of leads during peak campaign hours." },
                    { icon: Puzzle, title: "Custom App Support", description: "Connect to legacy internal ERPs that don't have native Zapier apps." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "User Action", description: "Customer submits form on your custom website." },
                    { title: "API Post", description: "Your server securely POSTs data to TeleCRM API." },
                    { title: "CRM Ingestion", description: "TeleCRM creates lead and fires auto-assignment." },
                    { title: "Webhook Fires", description: "TeleCRM pings your internal slack app that a lead arrived." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "Seconds", label: "Integration", description: "Data moves instantly across apps" },
                    { value: "0", label: "Data Entry", description: "Fully automated pipeline creation" },
                    { value: "100%", label: "Customizable", description: "Build the exact workflow you need" },
                    { value: "Unlimited", label: "Flexibility", description: "Connect to literally any software" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Fintech & Lenders", description: "Pushing approved loan application data from proprietary portals into the CRM." },
                    { icon: Activity, industry: "Healthcare", description: "Securely flowing appointment bookings from a custom app into sales queues." },
                    { icon: Code2, industry: "SaaS Companies", description: "Updating CRM lead statuses automatically when a user upgrades via Stripe." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
