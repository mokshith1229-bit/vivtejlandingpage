import { XCircle, CheckCircle } from 'lucide-react';

interface ProblemSolutionProps {
    problems: string[];
    solutions: string[];
}

export default function ProblemSolution({ problems, solutions }: ProblemSolutionProps) {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        The Problem vs. The Solution
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how our tailored features transform your daily struggles into streamlined operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Problem Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-rose-100 text-rose-600 p-2 rounded-lg mr-3">
                                <XCircle className="w-5 h-5" />
                            </span>
                            Without TeleCRM
                        </h3>
                        <ul className="space-y-4">
                            {problems.map((problem, idx) => (
                                <li key={idx} className="flex items-start text-slate-600">
                                    <XCircle className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{problem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-900/5 border border-blue-100 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 group-hover:h-1.5 transition-all"></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                                <CheckCircle className="w-5 h-5" />
                            </span>
                            With TeleCRM
                        </h3>
                        <ul className="space-y-4">
                            {solutions.map((solution, idx) => (
                                <li key={idx} className="flex items-start text-slate-700 font-medium">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
