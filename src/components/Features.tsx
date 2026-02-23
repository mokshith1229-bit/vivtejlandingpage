import {
  Users,
  PhoneCall,
  BarChart3,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  Mic,
  LayoutGrid,
  Settings,
  CreditCard,
  Code2,
  BellRing,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "One-Click Dialer",
    description: "Launch calls directly from your browser or mobile app with a single click. Save hours of manual dialing.",
    icon: PhoneCall,
    color: "bg-blue-100 text-blue-600",
    link: "/features/one-click-dialer"
  },
  {
    title: "Smart Lead Routing",
    description: "Automatically assign incoming leads to the right sales reps based on rules, round-robin, or performance.",
    icon: RefreshCw,
    color: "bg-indigo-100 text-indigo-600",
    link: "/features/lead-routing"
  },
  {
    title: "WhatsApp Broadcasts",
    description: "Send personalized WhatsApp campaigns to hundreds of leads at once. Increase engagement and response rates.",
    icon: MessageSquare,
    color: "bg-green-100 text-green-600",
    link: "/features/whatsapp-broadcast-marketing"
  },
  {
    title: "Call Recording",
    description: "Automatically record every inbound and outbound call for quality monitoring and team training.",
    icon: Mic,
    color: "bg-red-100 text-red-600",
    link: "/features/automatic-call-recording"
  },
  {
    title: "Sales Reporting",
    description: "Track conversions, revenue, and agent performance through beautiful, real-time visual dashboards.",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-600",
    link: "/features/sales-report"
  },
  {
    title: "Smart Workflows",
    description: "Automate repetitive tasks, status updates, and follow-ups. Let the CRM do the heavy lifting for you.",
    icon: Settings,
    color: "bg-purple-100 text-purple-600",
    link: "/features/smart-workflows"
  },
  {
    title: "FB Lead Capture",
    description: "Instantly sync leads from your Facebook Ad campaigns directly into the CRM without downloading CSVs.",
    icon: Users,
    color: "bg-teal-100 text-teal-600",
    link: "/features/fb-lead-capture"
  },
  {
    title: "Instant Payments",
    description: "Create invoices and payment links on the fly. Send them to customers and close deals while on the phone.",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-600",
    link: "/features/payment-creation"
  },
  {
    title: "Custom API Integration",
    description: "Connect TeleCRM securely with your entire tech stack using our robust REST APIs and Webhooks.",
    icon: Code2,
    color: "bg-pink-100 text-pink-600",
    link: "/features/custom-api-integration"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Core Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to manage your sales team
          </p>
          <p className="mt-4 text-xl text-slate-500">
            A complete suite of tools designed to help you capture, track, and close more leads efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Link to={feature.link} key={feature.title} className="block w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-8 bg-white h-full rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed flex-grow">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 group-hover:transition-all">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
