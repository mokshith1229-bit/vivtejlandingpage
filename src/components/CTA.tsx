import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Ready to skyrocket your sales?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto"
        >
          Join 5,000+ sales teams who are closing deals faster with CallFlow. Start your 14-day free trial today.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-indigo-600 bg-white hover:bg-indigo-50 shadow-lg transition-all transform hover:-translate-y-1"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-2xl text-white hover:bg-white/10 transition-all"
          >
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
