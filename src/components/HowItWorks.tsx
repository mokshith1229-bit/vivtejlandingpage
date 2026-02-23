import { motion } from 'motion/react';
import { UserPlus, Phone, BarChart2, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Connect Lead Sources',
    description: 'Integrate Facebook Ads, Google Forms, Website, or upload Excel sheets. Leads land directly in your CRM.',
    icon: UserPlus,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    title: 'Auto-Assign to Team',
    description: 'Set rules to distribute leads instantly to your sales agents. No manual intervention needed.',
    icon: CheckCircle,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 3,
    title: 'Call & Follow Up',
    description: 'Agents use the mobile app to dial with one click. Automatic reminders ensure no lead is forgotten.',
    icon: Phone,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 4,
    title: 'Track & Optimize',
    description: 'Monitor call recordings, duration, and conversion rates. Optimize your sales process with real data.',
    icon: BarChart2,
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Workflow</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From lead to deal in 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-0 right-0 -mt-3 -mr-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
