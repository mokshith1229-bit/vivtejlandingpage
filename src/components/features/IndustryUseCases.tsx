import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export interface UseCase {
    icon: LucideIcon;
    industry: string;
    description: string;
}

interface IndustryUseCasesProps {
    headline?: string;
    subheadline?: string;
    useCases: UseCase[];
}

export default function IndustryUseCases({
    headline = "Who uses this feature?",
    subheadline = "Adaptable solutions designed for every major industry.",
    useCases
}: IndustryUseCasesProps) {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            {headline}
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            {subheadline}
                        </p>
                        <div className="hidden lg:block w-20 h-1 bg-blue-600 rounded"></div>
                    </div>

                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
                        {useCases.map((useCase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all flex flex-col h-full"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
                                    <useCase.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">
                                    {useCase.industry}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                    {useCase.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
