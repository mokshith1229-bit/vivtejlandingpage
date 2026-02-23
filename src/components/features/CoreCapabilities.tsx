import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

export interface Capability {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface CoreCapabilitiesProps {
    headline?: string;
    subheadline?: string;
    capabilities: Capability[];
}

export default function CoreCapabilities({
    headline = "Core Capabilities",
    subheadline = "Everything you need to automate and scale your operations.",
    capabilities
}: CoreCapabilitiesProps) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {headline}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {subheadline}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <capability.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {capability.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {capability.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
