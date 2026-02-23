import React, { useState } from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import { Search, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog({ onOpenDemo }: { onOpenDemo?: () => void }) {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Sales Tips', 'Productivity', 'Company News', 'Engineering'];

    const posts = [
        {
            title: "10 Cold Calling Scripts That Actually Work in 2026",
            excerpt: "Stop sounding like a robot. Use these proven frameworks to lower guard and book more meetings out of thin air.",
            category: "Sales Tips",
            date: "Oct 12, 2026",
            author: "Jane Doe",
            image: "https://images.unsplash.com/photo-1552581232-26cb6d568c8c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "How to Build a High-Velocity Sales Engine",
            excerpt: "Scaling from 5 to 50 reps requires process. Learn how to map stages, automate follow-ups, and track the metrics that matter.",
            category: "Productivity",
            date: "Oct 08, 2026",
            author: "John Smith",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Announcing CallFlow AI: The Future of Call Coaching",
            excerpt: "Our newest feature automatically transcribes calls, analyzes sentiment, and grades your reps against your winning playbook.",
            category: "Company News",
            date: "Oct 01, 2026",
            author: "Sarah Jenkins",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Why CRM Hygiene is Costing You Revenue",
            excerpt: "Bad data leads to bad decisions. Here is a 3-step checklist to clean up your pipeline and forecast accurately.",
            category: "Sales Tips",
            date: "Sep 28, 2026",
            author: "Jane Doe",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Under the Hood: How We Handled 1B API Requests",
            excerpt: "A deep dive into our infrastructure choices, scaling challenges, and why we migrated to a multi-region PostgreSQL setup.",
            category: "Engineering",
            date: "Sep 20, 2026",
            author: "David Chen",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Ultimate Guide to B2B Lead Routing",
            excerpt: "Speed to lead is everything. Learn how to automatically route inbound inquiries to the right rep instantly.",
            category: "Sales Tips",
            date: "Sep 15, 2026",
            author: "Mike Thompson",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

    return (
        <FeaturePageLayout
            title="Blog & Resources | CallFlow CRM"
            description="Expert sales strategies, product updates, and industry insights."
        >
            {/* Header */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
                        The CallFlow Blog
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Insights, strategies, and news to help you build a better sales engine.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group mb-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm text-slate-900"
                            placeholder="Search articles..."
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post (if 'All' is selected) */}
            {activeCategory === 'All' && (
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm border border-slate-100 hover:shadow-xl transition-shadow bg-slate-50">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={posts[0].image}
                                        alt={posts[0].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                                    <div className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-4">
                                        Featured
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        {posts[0].excerpt}
                                    </p>
                                    <div className="flex items-center text-sm text-slate-500 mb-8 space-x-4">
                                        <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {posts[0].author}</span>
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {posts[0].date}</span>
                                    </div>
                                    <div className="inline-flex items-center font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                                        Read Article <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Post Grid */}
            <section className="py-12 bg-white pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(activeCategory === 'All' ? posts.slice(1) : filteredPosts).map((post, idx) => (
                            <div key={idx} className="group cursor-pointer rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all flex flex-col bg-white">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                                        <span className="font-semibold text-slate-700">{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0A0B1A] relative text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">
                        Stop reading. Start selling.
                    </h2>
                    <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
                        Put these strategies into practice immediately with CallFlow's powerful suite.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold text-lg transition-all shadow-lg shadow-white/10">
                            Start Free Trial
                        </button>
                        <button
                            onClick={onOpenDemo}
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
