import { motion } from 'motion/react';
import { Check, X, HelpCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Quarterly',
    price: '₹849',
    period: '/user/month',
    description: 'Perfect for small teams getting started.',
    features: [
      'Unlimited Calling',
      'Basic Lead Management',
      'Mobile App Access',
      'Call Recording (3 Months)',
      'Email Support',
      'Excel Import/Export'
    ],
    cta: 'Start Quarterly Plan',
    popular: false
  },
  {
    name: 'Annual',
    price: '₹599',
    period: '/user/month',
    description: 'Best value for growing businesses.',
    features: [
      'Everything in Quarterly',
      'Advanced Automation',
      'WhatsApp Integration',
      'Call Recording (1 Year)',
      'Priority Support',
      'Custom Reports',
      'API Access',
      'Dedicated Account Manager'
    ],
    cta: 'Start Annual Plan',
    popular: true
  }
];

const comparisonFeatures = [
  { name: 'Lead Capture', quarterly: true, annual: true },
  { name: 'Auto Dialer', quarterly: true, annual: true },
  { name: 'Call Recording History', quarterly: '3 Months', annual: '1 Year' },
  { name: 'WhatsApp Integration', quarterly: false, annual: true },
  { name: 'Bulk SMS', quarterly: false, annual: true },
  { name: 'Team Performance Reports', quarterly: 'Basic', annual: 'Advanced' },
  { name: 'API Access', quarterly: false, annual: true },
  { name: 'Dedicated Account Manager', quarterly: false, annual: true },
  { name: 'Onboarding Support', quarterly: 'Email', annual: 'Priority Video Call' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-4 text-xl text-slate-500">
            No hidden fees. Pay for what you use.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 bg-white rounded-2xl border ${tier.popular ? 'border-indigo-600 shadow-xl ring-1 ring-indigo-600' : 'border-slate-200 shadow-sm'} flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 -mt-4 mr-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
                <div className="text-xs text-slate-400 mt-1">Billed {tier.name.toLowerCase()}</div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`w-full block text-center py-3 px-6 rounded-xl font-medium transition-all ${
                  tier.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-slate-50 text-sm font-semibold text-slate-900 rounded-tl-xl border-b border-slate-200">Feature</th>
                  <th className="py-4 px-6 bg-slate-50 text-sm font-semibold text-slate-900 border-b border-slate-200 text-center">Quarterly</th>
                  <th className="py-4 px-6 bg-slate-50 text-sm font-semibold text-indigo-600 border-b border-slate-200 text-center rounded-tr-xl">Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 border border-slate-200">
                {comparisonFeatures.map((row, index) => (
                  <tr key={row.name} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-4 px-6 text-sm text-slate-700 font-medium flex items-center">
                      {row.name}
                      <HelpCircle className="w-4 h-4 text-slate-400 ml-2 cursor-help" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.quarterly === 'boolean' ? (
                        row.quarterly ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-sm text-slate-600">{row.quarterly}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-indigo-50/10">
                      {typeof row.annual === 'boolean' ? (
                        row.annual ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-sm font-medium text-indigo-700">{row.annual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-slate-500">Need a custom enterprise plan? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact Sales</a></p>
        </div>
      </div>
    </section>
  );
}
