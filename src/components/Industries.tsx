import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase, Headset } from 'lucide-react';

const industries = [
  {
    name: 'Real Estate',
    icon: Building2,
    description: 'Manage property inquiries, schedule site visits, and follow up with homebuyers automatically.',
    stats: '3x more site visits'
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Streamline student counseling, track admissions, and manage counselor performance.',
    stats: '45% higher enrollment'
  },
  {
    name: 'Sales Teams',
    icon: Briefcase,
    description: 'Perfect for insurance, loans, and financial services. Track every call and close more deals.',
    stats: '2x revenue growth'
  },
  {
    name: 'Call Centers',
    icon: Headset,
    description: 'High-volume dialing, call recording, and quality monitoring for support and sales teams.',
    stats: '50% less idle time'
  }
];

export default function Industries() {
  return (
    <section id="solutions" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Industries</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tailored for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {industry.description}
              </p>
              <div className="pt-6 border-t border-slate-700">
                <div className="text-indigo-400 font-bold text-lg">{industry.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
