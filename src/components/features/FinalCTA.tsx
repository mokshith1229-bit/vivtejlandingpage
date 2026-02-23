import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
    headline?: string;
    subheadline?: string;
    onOpenDemo?: () => void;
}

export default function FinalCTA({
    headline = "Ready to experience smarter sales operations?",
    subheadline = "Join thousands of businesses scaling their revenue with TeleCRM.",
    onOpenDemo
}: FinalCTAProps) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-black rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-blue-900/20"
                >
                    {/* Background Decorative Rings */}
                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            {headline}
                        </h2>
                        <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                            {subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={onOpenDemo}
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-xl hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 active:scale-95 group"
                            >
                                Book Demo
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                            >
                                <PlayCircle className="mr-2 w-5 h-5 text-white/70" />
                                Start Free Trial
                            </button>
                        </div>

                        <p className="mt-8 text-sm text-blue-200/60 font-medium">
                            Trusted by 5,000+ businesses across India
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
