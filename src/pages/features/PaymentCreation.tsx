import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { CreditCard, CheckCircle, Link2, DollarSign, SplitSquareHorizontal, FileText, Send, Building, Laptop, PieChart } from 'lucide-react';

export default function PaymentCreation() {
    return (
        <FeaturePageLayout
            title="Create Invoices & Payment Links | TeleCRM"
            description="Generate payment links and invoices instantly. Send them to leads via WhatsApp and get notified when paid."
        >
            <FeatureHero
                headline="Close Deals with Instant Payments"
                subheadline="Don't let hot leads cool down waiting for an invoice. Generate payment links instantly while on the call and secure the deal before you hang up."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 border border-emerald-100 rounded-xl p-6 relative flex flex-col justify-center overflow-hidden">

                        {/* Payment Card Container */}
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-auto border border-emerald-200 overflow-hidden z-10">
                            <div className="bg-emerald-600 p-4 text-center">
                                <div className="text-white font-bold text-lg mb-1 flex items-center justify-center gap-2"><DollarSign className="w-5 h-5" /> Payment Request</div>
                                <div className="text-emerald-100 text-xs">For: TeleCRM Enterprise Plan</div>
                            </div>

                            <div className="p-6 text-center">
                                <div className="text-3xl font-bold text-slate-800 mb-1">₹45,000</div>
                                <div className="text-xs text-slate-500 mb-6">Due by: 24h</div>

                                <button className="w-full bg-slate-900 border border-slate-900 text-white font-bold py-3 text-sm rounded-lg flex items-center justify-center gap-2 mb-3">
                                    <CreditCard className="w-4 h-4" /> Pay with Card
                                </button>

                                <button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-3 text-sm rounded-lg flex items-center justify-center gap-2 transition-all">
                                    <Send className="w-4 h-4" /> Send via WhatsApp
                                </button>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Agents telling clients 'our finance team will email you the invoice shortly'",
                    "Losing impulse sales because the payment process takes too long",
                    "Manually cross-checking bank accounts to see who paid",
                    "Typing errors causing invoices to bounce or fail"
                ]}
                solutions={[
                    "Agents generate a secure payment link in 5 seconds while on the phone",
                    "Customer pays immediately using UPI, Card, or Netbanking",
                    "CRM instantly updates lead status to 'Won' the second a payment clears",
                    "Payment links auto-fill with the exactly negotiated amount and CRM data"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Link2, title: "1-Click Links", description: "Generate dynamic Razorypay/Stripe links directly from the lead profile." },
                    { icon: Send, title: "WhatsApp Delivery", description: "Instantly fire the payment link directly to the customer's WhatsApp." },
                    { icon: CheckCircle, title: "Auto Status Update", description: "When the payment succeeds, TeleCRM marks the deal as 'Won' automatically." },
                    { icon: FileText, title: "Invoice Generation", description: "Generate a branded PDF invoice complete with your GST details and attach it." },
                    { icon: SplitSquareHorizontal, title: "Split Payments", description: "Create partial milestone payments for services retaining the same lead file." },
                    { icon: PieChart, title: "Revenue Tracking", description: "Dashboard automatically tracks collected revenue versus expected pipeline." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Deal Agreed", description: "Customer agrees to buy during the sales call." },
                    { title: "Generate Link", description: "Agent creates a ₹25,000 payment link in 1 click." },
                    { title: "Link Sent", description: "TeleCRM sends it via WhatsApp automatically." },
                    { title: "Paid & Closed", description: "Customer pays via UPI, CRM updates status to 'Won'." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "Seconds", label: "To Invoice", description: "Faster than any finance team" },
                    { value: "+18%", label: "Conversion Lift", description: "By capturing leads while hot" },
                    { value: "0", label: "Reconciliation Delay", description: "Instant automated status updates" },
                    { value: "100%", label: "Secure", description: "Integrated with top payment gateways" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Laptop, industry: "B2B SaaS Sales", description: "Closing annual subscription upgrades while walking the customer through the demo." },
                    { icon: Building, industry: "Educational Counselors", description: "Collecting quick booking token amounts to secure a student's seat instantly." },
                    { icon: CreditCard, industry: "Freelance Agencies", description: "Sending milestone payment invoices the moment a project phase is approved." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
