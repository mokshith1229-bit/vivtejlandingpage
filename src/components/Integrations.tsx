import { motion } from 'motion/react';

const integrations = [
  { name: 'Facebook Ads', icon: 'f' },
  { name: 'Google Ads', icon: 'G' },
  { name: 'WhatsApp', icon: 'WA' },
  { name: 'WordPress', icon: 'W' },
  { name: 'Shopify', icon: 'S' },
  { name: 'Zapier', icon: 'Z' },
  { name: 'HubSpot', icon: 'H' },
  { name: 'Salesforce', icon: 'SF' },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Connects with tools you already use
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Don't change your workflow. CallFlow integrates seamlessly with your favorite lead sources, marketing tools, and CRMs.
            </p>
            <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
              View all 50+ integrations <span className="ml-2">→</span>
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-4 gap-6">
              {integrations.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center justify-center hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-2">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-500">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
