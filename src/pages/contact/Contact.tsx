import React, { useState } from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <FeaturePageLayout
            title="Contact Us | CallFlow Sales & Support"
            description="Get in touch with the CallFlow team. We're here to help you scale your sales processes."
        >
            <section className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-3xl mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl mix-blend-multiply pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                            Let's talk.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Whether you have a question about pricing, need an enterprise demo, or require technical support, our team is ready to help.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Contact Details & Map */}
                        <div className="w-full lg:w-1/3 order-2 lg:order-1 space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">Contact Info</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Email Sales</div>
                                            <a href="mailto:sales@callflow.com" className="text-indigo-600 hover:underline">sales@callflow.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Phone Support</div>
                                            <a href="tel:+18005550199" className="text-slate-600 hover:text-indigo-600">+1 (800) 555-0199</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 mr-4">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">HQ Office</div>
                                            <p className="text-slate-600 leading-relaxed">
                                                100 Innovation Drive<br />
                                                Suite 400<br />
                                                Austin, TX 78701
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-64 bg-slate-200 rounded-3xl border border-slate-200 overflow-hidden relative shadow-lg">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover grayscale opacity-70" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-bounce">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3 order-1 lg:order-2">
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl shadow-indigo-100/50 relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-8 font-display">Send us a message</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                            <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                            <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                                    </div>

                                    <div>
                                        <label htmlFor="reason" className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                                        <select id="reason" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white">
                                            <option>I want to evaluate CallFlow for my team</option>
                                            <option>I need technical support</option>
                                            <option>I have a billing question</option>
                                            <option>Partnership inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                        <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-slate-900/20 flex items-center justify-center disabled:opacity-70"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                        ) : status === 'success' ? (
                                            <><CheckCircle className="w-5 h-5 mr-2" /> Message Sent Successfully</>
                                        ) : (
                                            <><Send className="w-5 h-5 mr-2" /> Send Message</>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
