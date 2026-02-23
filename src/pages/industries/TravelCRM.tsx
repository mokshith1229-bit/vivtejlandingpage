import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Plane,
    MapPin,
    Hotel,
    Briefcase,
    Globe,
    PhoneCall,
    MessageCircle,
    CalendarCheck,
    Users,
    MessageSquare,
    BarChart3,
    PlaneTakeoff,
    CheckCircle
} from 'lucide-react';

export default function TravelCRM() {
    return (
        <FeaturePageLayout
            title="Best Travel CRM Software for Travel Agencies & Tour Operators | CallFlow"
            description="Manage travel enquiries, automate follow-ups, book bookings, track agent performance & scale your travel business with our Travel CRM software."
        >
            <FeatureHero
                headline="Organize Bookings, Track Enquiries & Automate Follow‑Ups."
                subheadline="Built exactly for travel agencies and tour operators. Never miss a holiday enquiry, automate your itinerary sharing, and scale your travel sales."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-teal-50 border border-teal-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Plane className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Travel Bookings Pipeline</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                            </div>

                            {/* Kanban Board */}
                            <div className="flex-1 flex gap-4 p-4 overflow-hidden bg-slate-50/50">

                                {/* Column 1 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        New Enquiries <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">15</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">MakeMyTrip</div>
                                        <div className="font-bold text-sm text-slate-800">Priya Desai</div>
                                        <div className="text-xs text-slate-500 mb-2">Maldives 4N/5D</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 2m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Itinerary Sent <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">8</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Arjun Singh</div>
                                        <div className="text-xs text-slate-500 mb-2">Dubai Expo Tour</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><MessageCircle className="w-3 h-3" /> WhatsApp Chat</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Payment Pending <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">4</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Sanjay Kapoor</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">₹85,000 Expected</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Enquiries from JustDial, Facebook, and website getting scattered and lost.",
                    "Agents disorganized, missing crucial follow-ups with interested travelers.",
                    "Wasting hours manually sending itinerary PDFs and payment details on WhatsApp.",
                    "No transparency into travel agent conversion rates or calling performance.",
                    "Dropping the ball on pre-departure and welcome back communications.",
                    "Client histories spread across different agents' personal WhatsApp numbers."
                ]}
                solutions={[
                    "Centralize travel enquiries from 15+ portals into one single auto-updating dashboard.",
                    "Auto-reminders ensure your travel agents always follow up exactly when promised.",
                    "Automated WhatsApp & SMS messages to share itineraries instantly via CRM.",
                    "Comprehensive dashboards to track exactly how many leads convert to bookings.",
                    "Scheduled trip reminders keep travelers excited and reduce constant manual checks.",
                    "Store all client communication safely inside the CRM—never lose context if an agent leaves."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Travel Workflows, Automated
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Automated Lead Capture</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Capture enquiries seamlessly from forms, custom landing pages, and travel portals.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Instantly auto-assign leads based on destination expertise or round-robin rules.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Zero manual data entry from holiday platforms.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">One-Click Communication</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger calls, WhatsApp messages, or SMS templates directly from the CRM panel.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Agent calls are fully logged and recorded for quality mapping.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Keep your business communication professional and unified.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <CalendarCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Follow-Up & Reminders</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Automated, foolproof scheduling of follow-up calls means 0 missed callbacks.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Auto-trigger SMS or WhatsApp itineraries when moving leads to 'Itinerary Sent'.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Set automated document collection alerts prior to Visa processing.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <PlaneTakeoff className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Booking Pipeline Management</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Visually track every prospect visually across fully customizable pipeline stages.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Identify bottlenecks instantly (e.g. leads stuck in 'Negotiation').</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Detailed communication history mapping every touchpoint from intro to booking confirmed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Enquiry Captured", description: "Lead flows in from travel portal or website." },
                    { title: "Auto CRM Sync", description: "Customer info instantly loaded into CallFlow." },
                    { title: "Agent Assignment", description: "Lead automatically given to the correct specialist." },
                    { title: "Outbound Call", description: "Agent calls & WhatsApps prospect within minutes." },
                    { title: "Booking Tracking", description: "Status moves to 'Booked', follow-ups continue." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Power the Hospitality Industry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Plane className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Travel Agencies</h3>
                            <p className="text-slate-600 text-sm">Distribute leads between outbound and inbound teams effectively and streamline your entire booking process from a single dashboard.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Globe className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Tour Operators</h3>
                            <p className="text-slate-600 text-sm">Keep large group batches organized. Automatically send itinerary updates, packing lists, and departure details via WhatsApp broadcasts.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Hotel className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Resorts & Hotels</h3>
                            <p className="text-slate-600 text-sm">Capture direct room inquiries from your website and Facebook ads, allowing your sales team to convert guests directly over the phone.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Briefcase className="w-10 h-10 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Travel Consultants</h3>
                            <p className="text-slate-600 text-sm">Personalize every client interaction. Keep meticulous records of visa status, passport details, and travel preferences on file.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <MapPin className="w-10 h-10 text-rose-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Holiday Package Sellers</h3>
                            <p className="text-slate-600 text-sm">Upsell and cross-sell experiences easily when you have a 360-degree view of your client's engagement history in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "5x Faster", label: "Lead Response", description: "Capture and dial inquiries instantly" },
                    { value: "+35%", label: "Bookings", description: "Increase closes via strict follow-up systems" },
                    { value: "100%", label: "Zero Missed", description: "Automated callbacks guarantee follow-ups" },
                    { value: "Unified", label: "Client DB", description: "Every interaction stored in one profile" }
                ]}
            />

            {/* Custom FAQ for Travel */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Travel CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is this CRM good for small travel agencies?</h4>
                            <p className="text-slate-600">Yes, it's highly scalable. Even a one-to-three-person agency can eliminate Excel sheets forever, keeping bookings and payments seamlessly tracked, while larger groups can manage whole call-center floors.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it capture leads from travel portals?</h4>
                            <p className="text-slate-600">Absolutely. With webhooks and open API endpoints, CallFlow can pull leads directly from your favorite travel lead generation portals and custom web forms in under a second.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it support WhatsApp and SMS automation?</h4>
                            <p className="text-slate-600">Yes! One of the biggest drivers of travel sales is rapid communication. You can set rules to automatically send beautiful WhatsApp brochures the second a client enters the 'Itinerary Sent' stage.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can I track agents’ booking performance?</h4>
                            <p className="text-slate-600">Yes, you'll have access to comprehensive leaderboard dashboards. See in real-time who is dialing the most, and more critically, whose leads transition to fully paid bookings.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Simplify & Grow Your Travel Business?"
                subheadline="Join the top tour operators and agencies who use CallFlow CRM to scale operations and leave the competition behind."
            />
        </FeaturePageLayout>
    );
}
