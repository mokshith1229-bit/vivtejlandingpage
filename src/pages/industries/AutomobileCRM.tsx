import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import FinalCTA from '../../components/features/FinalCTA';
import {
    Car,
    Wrench,
    Users,
    MessageCircle,
    PhoneCall,
    BarChart3,
    CalendarCheck,
    CarFront,
    Settings,
    Shield
} from 'lucide-react';

export default function AutomobileCRM() {
    return (
        <FeaturePageLayout
            title="Best Automobile CRM Software | CallFlow"
            description="Automate follow-ups, manage leads, track performance and scale your Automobile business with our CRM software."
        >
            <FeatureHero
                headline="Rev Up Your Showroom Sales & Service Pipeline."
                subheadline="Built exactly for Car Dealerships, Bike Showrooms, and Service Centers. Automate test drive follow-ups and ensure no showroom lead is ever dropped."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 relative flex items-center justify-center overflow-hidden">

                        {/* Main Dashboard Panel */}
                        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
                            {/* Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <Car className="w-5 h-5 text-indigo-600" />
                                    <span className="font-bold text-slate-800 text-sm">Dealership Sales Dashboard</span>
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
                                        Walk-In Leads <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">12</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 shadow-sm border-l-4 border-l-blue-500 relative">
                                        <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">CarWale</div>
                                        <div className="font-bold text-sm text-slate-800">Vikram Singh</div>
                                        <div className="text-xs text-slate-500 mb-2">Interested in SUV</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-slate-400 font-medium">Wait: 10m</div>
                                            <button className="bg-green-500 text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1"><PhoneCall className="w-3 h-3" /> Call</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="w-1/3 h-full flex flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Test Drives <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">5</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-amber-500">
                                        <div className="font-bold text-sm text-slate-800">Pooja Sharma</div>
                                        <div className="text-xs text-slate-500 mb-2">Today, 2:00 PM</div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-[10px] text-indigo-600 bg-indigo-50 font-medium px-1.5 py-0.5 rounded flex items-center gap-1"><CalendarCheck className="w-3 h-3" /> Confirmed</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="w-1/3 h-full flex flex-col gap-3 opacity-70">
                                    <div className="text-xs font-bold text-slate-500 uppercase flex justify-between">
                                        Finance Pending <span className="bg-slate-200 text-slate-600 px-1.5 rounded-full">3</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-emerald-500">
                                        <div className="font-bold text-sm text-slate-800">Ravi Desai</div>
                                        <div className="text-[10px] text-emerald-600 font-bold mt-1">Loan Approved</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Lost showroom leads due to untracked walk-ins and mismanaged portal inquiries.",
                    "Poor follow-up on test drives causing prospects to visit competitor dealerships.",
                    "No service reminder automation, severely damaging recurring service revenue.",
                    "Sales team performance gaps hidden behind messy Excel sheets and registers.",
                    "Inability to track the customer journey from test drive to financing and delivery.",
                    "Scattered customer data across multiple salespeople's personal phones."
                ]}
                solutions={[
                    "Auto lead capture from CarWale, BikeWale, Facebook, and your dealership website.",
                    "Automated follow-up scheduling ensures every test drive gets a dedicated callback.",
                    "Trigger automated WhatsApp service reminders based on purchase dates and mileage.",
                    "Comprehensive reporting dashboards provide transparency on total test drives vs. bookings.",
                    "Visual pipeline tracking showing exact status (Test Drive > Financed > Delivered).",
                    "1-Click calling with auto-recording logs all negotiations and trims dispute risks."
                ]}
            />

            {/* Feature Deep Dive */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Deep Dive</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            High-Performance Automotive Features
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Box 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Dealer Lead Routing</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Instantly capture leads from aggregator portals and Facebook Ads.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Route inquiries automatically to the nearest showroom or specialized trim expert.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <span>Ensure 5-minute response times with automated dialer queues.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <CalendarCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Test Drive Scheduling</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Manage showroom and home test-drive appointments seamlessly.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Send automated SMS/WhatsApp confirmations to the customer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0"></div>
                                    <span>Trigger automated feedback requests post-drive to gauge immediate interest.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Service Reminders</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Build recurring WhatsApp sequences based on the vehicle's delivery date.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Automatically notify customers for 6-month and annual vehicle servicing.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"></div>
                                    <span>Send automated policy renewal triggers for tied-insurance products.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Box 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Showroom Analytics</h3>
                            </div>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Track test-drive-to-booking ratios across different sales executives.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Maintain clear visibility on finance approvals inside the booking pipeline.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <span>Listen to telecall recordings to train executives on vehicle feature pitching.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WorkflowVisualization
                steps={[
                    { title: "Lead Captured", description: "Inquiry generated from portals or walk-ins." },
                    { title: "Auto Assigned", description: "Routed instantly to available sales executive." },
                    { title: "Test Drive", description: "Scheduled via CRM with automated WhatsApp nudges." },
                    { title: "Follow-Up", description: "Automated callbacks logged post-test drive." },
                    { title: "Vehicle Delivered", description: "Pipeline updated, service reminders begin." }
                ]}
            />

            <div className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Who This Is For</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Built to Scale Dealership Operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <CarFront className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Car Dealerships</h3>
                            <p className="text-slate-600 text-sm">Organize inquiries across multiple showroom locations. Convert high-intent test drives into financed deliveries faster.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Users className="w-10 h-10 text-emerald-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Bike Showrooms</h3>
                            <p className="text-slate-600 text-sm">Handle extreme lead volume efficiently. Push automated inventory updates and latest financing offers via WhatsApp.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                            <Settings className="w-10 h-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Service Centers</h3>
                            <p className="text-slate-600 text-sm">Boost AMC and recurring revenue by systematically engaging previous buyers with scheduled service maintenance alerts.</p>
                        </div>
                    </div>
                </div>
            </div>

            <BusinessImpact
                stats={[
                    { value: "5 Mins", label: "Faster Response Time", description: "Auto-dialer calls fresh leads instantly" },
                    { value: "+30%", label: "Higher Conversion Rates", description: "Zero missed test drive follow-ups" },
                    { value: "100%", label: "Team Accountability", description: "Every executive interaction logged" },
                    { value: "Unified", label: "Centralized Data", description: "Say goodbye to scattered Excel sheets" }
                ]}
            />

            {/* Custom FAQ for Automobile */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Common Auto CRM Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can it capture leads from portal aggregators?</h4>
                            <p className="text-slate-600">Yes, it safely centralizes inquiries from standard automotive aggregator portals along with your custom digital ad campaigns.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Does it automate WhatsApp test drive reminders?</h4>
                            <p className="text-slate-600">Absolutely. You can implement triggers for automated WhatsApp location pins and test drive confirmations instantly.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Is there reporting on dealer/executive performance?</h4>
                            <p className="text-slate-600">Yes, robust dashboards display exact call counts, follow-up adherence, and booking closure rates per sales executive.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we manage service renewals?</h4>
                            <p className="text-slate-600">Yes, easily upload old delivery data and configure automated out-bound dialing queues and SMS blasts for service and insurance renewals.</p>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Can we track the financing progress?</h4>
                            <p className="text-slate-600">Yes, our drag-and-drop Kanban pipeline provides transparent visualization of every deal waiting on bank approval.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA
                headline="Ready to Accelerate Your Dealership Sales?"
                subheadline="Join top performing showrooms who use CallFlow to dominate their region and convert more test drives."
            />
        </FeaturePageLayout>
    );
}
