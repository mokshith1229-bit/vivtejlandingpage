import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export interface ImpactStat {
    value: string;
    label: string;
    description: string;
}

interface BusinessImpactProps {
    headline?: string;
    subheadline?: string;
    stats: ImpactStat[];
}

export default function BusinessImpact({
    headline = "Measurable Business Impact",
    subheadline = "See the numbers that matter.",
    stats
}: BusinessImpactProps) {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-semibold mb-6">
                        <TrendingUp className="w-4 h-4" />
                        <span>Proven Results</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {headline}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {subheadline}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:border-blue-100 transition-all"
                        >
                            <div className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-lg font-bold text-slate-900 mb-2">
                                {stat.label}
                            </div>
                            <p className="text-sm text-slate-500">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
