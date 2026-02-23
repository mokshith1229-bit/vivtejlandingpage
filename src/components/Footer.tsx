import { motion } from 'motion/react';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call to /api/subscribe-newsletter
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Mobile App", path: "/features/mobile-app" },
        { name: "Integrations", path: "/features/integrations" },
        { name: "Updates", path: "/blog/updates" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Help Center", path: "/help-center" },
        { name: "Webinars", path: "/webinars" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Community", path: "/community" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Legal", path: "/legal" },
        { name: "Contact", path: "/contact" },
        { name: "Partners", path: "/partners" }
      ]
    }
  ];
  return (
    <footer className="bg-[#0A0B1A] text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">CallFlow</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The smartest calling CRM for high-growth sales teams. Automate, track, and close more deals.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {[
                { name: 'Twitter', Icon: Twitter },
                { name: 'LinkedIn', Icon: Linkedin },
                { name: 'Facebook', Icon: Facebook },
                { name: 'Instagram', Icon: Instagram }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-500 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-300">
                    <social.Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-4 text-slate-100">{column.title}</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="group flex items-center hover:text-indigo-400 transition-colors">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-indigo-500" />
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300 inline-block">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-md hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] transition-all duration-500"
        >
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6 rounded-xl bg-[#0A0B1A]/50">
            <span className="text-white font-semibold text-sm md:text-base">Get growth insights for sales teams</span>
            <div className="flex w-full md:w-auto gap-2 group relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                disabled={status === 'loading' || status === 'success'}
                required
                className="w-full md:w-64 bg-[#0A0B1A] border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all disabled:opacity-50"
              />
              <motion.button
                whileHover={status === 'idle' ? { scale: 1.05 } : {}}
                whileTap={status === 'idle' ? { scale: 0.95 } : {}}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-500/50 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-500/25 shrink-0 flex items-center justify-center min-w-[110px]"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : status === 'success' ? (
                  <><CheckCircle className="w-4 h-4 mr-1.5" /> Subscribed</>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} CallFlow CRM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
