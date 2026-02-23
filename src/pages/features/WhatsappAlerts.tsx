import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { MessageSquareDot, CheckCircle, BellRing, Smartphone, Briefcase, Zap, Shield, Repeat, Receipt, Globe } from 'lucide-react';

export default function WhatsappAlerts() {
    return (
        <FeaturePageLayout
            title="Automated WhatsApp Alerts & Notifications | TeleCRM"
            description="Send automated transactional WhatsApp alerts for payments, appointments, and status updates."
        >
            <FeatureHero
                headline="Keep Customers in the Loop via WhatsApp"
                subheadline="Automate critical notifications. Send instant payment receipts, appointment reminders, and order status updates straight to your customers' WhatsApp."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-teal-50 border border-teal-100 rounded-xl p-6 relative flex flex-col justify-end overflow-hidden">

                        {/* Trigger Notification */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg border border-slate-200 text-sm font-bold flex items-center gap-2 z-20">
                            <Zap className="w-4 h-4 text-emerald-500" /> CRM Status: Paid
                        </div>

                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-emerald-300 z-10"></div>

                        {/* Phone UI */}
                        <div className="bg-white w-full max-w-xs mx-auto rounded-t-3xl border-x-8 border-t-8 border-slate-900 h-64 shadow-2xl relative z-20 flex flex-col">
                            <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">🏢</div>
                                <div>
                                    <div className="font-bold text-sm leading-tight">Your Company</div>
                                    <div className="text-[10px] text-white/70">Official Business Account</div>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#EBE5DE] p-4 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://cdn.telecrm.in/assets/wa-bg.png')] bg-cover"></div>

                                <div className="bg-white p-3 rounded-xl rounded-tl-sm shadow-sm inline-block max-w-[90%] border border-slate-100 relative z-10">
                                    <div className="text-sm text-slate-800 break-words">
                                        🎉 Payment Successful!<br /><br />
                                        Hi Vikram, we have received your payment of ₹14,500.<br /><br />
                                        Your invoice is attached below.
                                    </div>

                                    <div className="mt-2 flex items-center gap-2 bg-slate-50 p-2 border border-slate-100 rounded">
                                        <div className="bg-red-500 text-white text-[8px] font-bold px-1 rounded">PDF</div>
                                        <div className="text-xs text-slate-700">Invoice_INV482.pdf</div>
                                    </div>
                                    <div className="text-right text-[9px] text-slate-400 mt-1">Just now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Customers complaining they didn't receive email confirmations",
                    "Staff manually copy-pasting standard reply templates",
                    "High no-show rates for scheduled meetings or appointments",
                    "Clients constantly asking for order status updates"
                ]}
                solutions={[
                    "WhatsApp has a 98% open rate—customers will see it instantly",
                    "Alerts fire automatically the moment a CRM status changes",
                    "Automated reminders 2 hours before meetings slash no-shows",
                    "Status triggers update the client without agent intervention"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Zap, title: "Trigger Based", description: "Tie messages to CRM events: Status Changed, Lead Created, Deal Won." },
                    { icon: MessageSquareDot, title: "Dynamic Templates", description: "Use variables to auto-insert Names, Dates, Amounts, and custom fields." },
                    { icon: Receipt, title: "PDF & Media Delivery", description: "Automatically attach dynamically generated invoices or brochures." },
                    { icon: Shield, title: "Approved Templates", description: "Utilize Official WhatsApp Cloud API to send reliable, ban-free notifications." },
                    { icon: Smartphone, title: "Interactive Buttons", description: "Send messages with 'Confirm', 'Reschedule', or URL click buttons." },
                    { icon: Repeat, title: "Drip Sequences", description: "Set up a sequence of alerts over X days from the trigger event." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Status Change", description: "Agent changes lead status to 'Payment Received'." },
                    { title: "API Trigger", description: "TeleCRM detects change and queues the mapped template." },
                    { title: "Variables Filled", description: "System inserts the customer name and exact payment amount." },
                    { title: "Instant Delivery", description: "Customer's phone buzzes with the WhatsApp receipt seconds later." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "98%", label: "Read Rate", description: "Ensures critical information is seen" },
                    { value: "-40%", label: "Support Calls", description: "Proactive alerts stop 'where is my order' queries" },
                    { value: "0", label: "Manual Effort", description: "Complete systemic automation" },
                    { value: "High", label: "Brand Trust", description: "Professional, instant transactional communication" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Briefcase, industry: "Clinics & Salons", description: "Sending automated appointment confirmations and 24-hour reminders with a 'Cancel' button." },
                    { icon: Receipt, industry: "E-Commerce", description: "Firing automated order shipment tracking links the moment the logistics provider updates." },
                    { icon: Globe, industry: "Travel Agencies", description: "Immediately delivering flight tickets and hotel vouchers as PDFs when a booking is confirmed." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
