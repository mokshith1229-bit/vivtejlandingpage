import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface WorkflowStep {
    title: string;
    description: string;
}

interface WorkflowVisualizationProps {
    headline?: string;
    steps: WorkflowStep[];
}

export default function WorkflowVisualization({
    headline = "How It Works",
    steps
}: WorkflowVisualizationProps) {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {headline}
                    </h2>
                    <p className="text-lg text-slate-300">
                        A seamless, automated sequence from start to finish.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2"></div>

                    <div className="grid lg:grid-cols-4 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:bg-slate-800 transition-colors group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center border-4 border-slate-900 shadow-xl group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>

                                <h3 className="text-xl font-bold mt-4 mb-2 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Arrow pointing to next (except last element) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-slate-600">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}

                                {/* Arrow pointing down for mobile */}
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-600">
                                        <ArrowRight className="w-5 h-5 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
