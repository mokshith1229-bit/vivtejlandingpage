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
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: "Lead Management",
    description: "Capture leads from Facebook, Google, Website, and more in one central hub. Never lose a lead again.",
    icon: Users,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Auto Lead Distribution",
    description: "Automatically assign leads to your sales team based on rules, round-robin, or performance.",
    icon: RefreshCw,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Calling & Telephony",
    description: "One-click dialing from web and mobile. Track every call duration, status, and outcome automatically.",
    icon: PhoneCall,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Follow-up Automation",
    description: "Set automatic reminders and follow-up sequences so your team never misses a callback.",
    icon: MessageSquare,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Call Recording",
    description: "Record all incoming and outgoing calls for quality monitoring and training purposes.",
    icon: Mic,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Reporting & Analytics",
    description: "Deep insights into team performance, call volume, lead conversion rates, and revenue.",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Role-Based Access",
    description: "Control what your team sees. Set permissions for admins, managers, and sales agents.",
    icon: ShieldCheck,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "WhatsApp & SMS",
    description: "Send personalized WhatsApp messages and SMS directly from the CRM to nurture leads.",
    icon: MessageSquare,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Mobile CRM",
    description: "Full-featured mobile app for field sales. Track location, calls, and meetings on the go.",
    icon: Smartphone,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "Admin Controls",
    description: "Complete control over your organization's data, users, and configurations.",
    icon: Settings,
    color: "bg-slate-100 text-slate-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
