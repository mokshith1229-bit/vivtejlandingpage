import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureHeroProps {
    headline: string;
    subheadline: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    mockupPlaceholder: React.ReactNode;
    floatingElements?: React.ReactNode;
    onOpenDemo?: () => void;
}

export default function FeatureHero({
    headline,
    subheadline,
    primaryCtaText = "Book Demo",
    secondaryCtaText = "Start Free Trial",
    mockupPlaceholder,
    floatingElements,
    onOpenDemo
}: FeatureHeroProps) {
    return (
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#f4f7ff] font-sans">
            {/* Abstract Background Waves & Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl opacity-80 transform translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-gradient-to-tr from-blue-200/50 via-indigo-100/30 to-transparent rounded-full blur-3xl opacity-70 transform -translate-x-1/4 translate-y-1/4"></div>

                {/* Optional Topographic / Wavy SVGs for added depth */}
                <svg className="absolute bottom-0 left-0 w-full h-[500px] text-blue-100/30 transform translate-y-20 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,192C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            {subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={onOpenDemo}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 group"
                            >
                                {primaryCtaText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
                                <PlayCircle className="mr-2 w-5 h-5 text-slate-400" />
                                {secondaryCtaText}
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-slate-500">No credit card required. Setup in minutes.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-[1200px]"
                    >
                        <div
                            className="relative transform-style-3d lg:ml-10"
                            style={{
                                transform: 'rotateY(-5deg) rotateX(4deg) rotateZ(1deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {/* Browser Glass Mockup */}
                            <div className="bg-white/80 backdrop-blur-xl rounded-[24px] p-2 sm:p-3 border border-slate-200/80 shadow-2xl xl:-mr-12 relative z-10">
                                <div className="bg-[#f8fafc] rounded-[16px] shadow-inner border border-slate-100 overflow-hidden h-full relative">
                                    {/* Browser Header Bar */}
                                    <div className="bg-[#f0f2f5] px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                    </div>

                                    {/* Content inside browser */}
                                    <div className="relative">
                                        {mockupPlaceholder}
                                    </div>
                                </div>
                            </div>

                            {/* Render custom floating elements for specifically 3D features */}
                            {floatingElements}

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
