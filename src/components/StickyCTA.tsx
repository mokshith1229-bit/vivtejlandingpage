import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function StickyCTA({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40 hidden lg:block"
    >
      <button
        onClick={onOpen}
        className="group flex items-center gap-3 pl-4 pr-6 py-3 bg-indigo-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <CalendarIcon className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-sm tracking-wide">Book a Demo</span>
      </button>
    </motion.div>
  );
}
