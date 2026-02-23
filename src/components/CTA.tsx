import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { Check } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0A0B1A]">
      {/* Deep Cosmic Background & Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0A0B1A] to-[#05050A]"></div>

        {/* Soft magical glowing orbs */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[120px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] transform translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[0%] left-[40%] w-[600px] h-[300px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px]"></div>

        {/* CSS Stars / Particles Overlay (simplified) */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(2px 2px at 40px 60px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 20px 50px, rgba(255,255,255,0.8), rgba(0,0,0,0)), radial-gradient(2px 2px at 30% 65%, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0)), radial-gradient(2px 2px at 90% 20%, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 80% 50%, rgba(255,255,255,0.5), rgba(0,0,0,0)), radial-gradient(2px 2px at 70% 80%, #fff, rgba(0,0,0,0))', backgroundSize: '250px 250px, 150px 150px, 300px 300px, 200px 200px, 250px 250px, 180px 180px, 220px 220px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Scale Faster. Close Smarter.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto"
        >
          Join 5,000+ high-growth teams automating calls, routing leads, and closing deals faster.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        >
          <button
            onClick={() => { }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white overflow-hidden rounded-2xl w-full sm:w-auto"
          >
            {/* Outline gradient glowing background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20 border border-white/20 rounded-2xl backdrop-blur-sm group-hover:border-white/40 group-hover:bg-white/5 transition-all"></div>
            <span className="relative flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => { }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white overflow-hidden rounded-2xl w-full sm:w-auto transition-all bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-indigo-500/50"
          >
            <span className="relative">Book a Demo</span>
          </button>
        </motion.div>

        {/* Feature Checkmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-indigo-100/70"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-white/20">
              <Check className="w-3 h-3 text-white" />
            </div>
            No credit card
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-white/20">
              <Check className="w-3 h-3 text-white" />
            </div>
            Setup in 5 minutes
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-white/20">
              <Check className="w-3 h-3 text-white" />
            </div>
            Cancel anytime
          </div>
        </motion.div>
      </div>

      {/* Bottom glowing divider edge to transition into footer smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[50px] bg-blue-500/20 blur-3xl rounded-full"></div>
    </section>
  );
}
