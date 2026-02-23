import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { PieChart, CheckCircle, BarChart3, TrendingUp, Calendar, Filter, FileSpreadsheet, Building, Briefcase, Factory } from 'lucide-react';

export default function SalesReport() {
    return (
        <FeaturePageLayout
            title="Advanced Sales Reporting & Analytics | TeleCRM"
            description="Visualize your pipeline, track revenue, and make data-driven decisions with real-time sales reports."
        >
            <FeatureHero
                headline="Crystal Clear Pipeline Visibility"
                subheadline="Stop guessing. Start knowing. Get real-time insights into your sales performance, revenue projections, and team efficiency."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-900 p-6 flex flex-col justify-end relative overflow-hidden rounded-xl shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-white font-bold text-lg flex items-center"><PieChart className="w-5 h-5 mr-2 text-blue-400" /> Revenue Dashboard</div>
                            <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded border border-slate-700">This Month ▼</div>
                        </div>

                        {/* Chart bars simulation */}
                        <div className="flex-1 flex items-end gap-3 pb-8 border-b border-slate-800 relative pt-10">
                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between pt-10 pb-8 text-[10px] text-slate-500">
                                <span>$100k</span><span>$50k</span><span>$0</span>
                            </div>
                            <div className="w-8 ml-8 h-[30%] bg-blue-900/50 rounded-t-sm border-t border-blue-500/50"></div>
                            <div className="w-8 h-[45%] bg-blue-800/60 rounded-t-sm border-t border-blue-500/60 transition-all hover:h-[48%] cursor-pointer group relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">$45k</div>
                            </div>
                            <div className="w-8 h-[80%] bg-blue-600 rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:h-[85%] cursor-pointer group relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">$82k</div>
                            </div>
                            <div className="w-8 h-[60%] bg-blue-700/80 rounded-t-sm transition-all hover:h-[65%] cursor-pointer group relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100">$60k</div>
                            </div>
                        </div>

                        {/* X-axis labels */}
                        <div className="flex gap-3 mt-3 ml-8 text-[10px] text-slate-500 font-medium">
                            <div className="w-8 text-center">W1</div>
                            <div className="w-8 text-center">W2</div>
                            <div className="w-8 text-center text-blue-400">W3</div>
                            <div className="w-8 text-center">W4</div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Spending hours manually building reports in Excel",
                    "Data is always 2-3 days outdated",
                    "Hard to pinpoint exactly where deals are dropping off",
                    "Difficulty forecasting next month's revenue"
                ]}
                solutions={[
                    "Beautiful charts automatically generated in real-time",
                    "Instant dashboard updates with every logged call",
                    "Visual pipeline stages show exact bottlenecks",
                    "Predictive reporting based on historical win rates"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: BarChart3, title: "Visual Dashboards", description: "Convert complex lead data into easy-to-read graphs and charts." },
                    { icon: TrendingUp, title: "Pipeline Tracking", description: "See exactly how much revenue is sitting in each stage of your funnel." },
                    { icon: Filter, title: "Advanced Filtering", description: "Slice data by agent, team, location, product, or custom parameters." },
                    { icon: Calendar, title: "Custom Date Ranges", description: "Compare Q2 vs Q3 performance or look at year-over-year growth instantly." },
                    { icon: PieChart, title: "Source Attribution", description: "Know exactly which marketing channels are generating the best leads." },
                    { icon: FileSpreadsheet, title: "1-Click Exports", description: "Download any report as CSV/Excel for board meetings or external analysis." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Agents Work", description: "Team handles calls, changes statuses, closes deals." },
                    { title: "Data Aggregation", description: "TeleCRM automatically compiles all actions." },
                    { title: "Manager Reviews", description: "Manager opens dashboard, sees live metrics instantly." },
                    { title: "Data-Driven Action", description: "Manager adjusts strategy based on concrete data." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "Spreadsheet Hassle", description: "Fully automated reporting" },
                    { value: "100%", label: "Real-time Metrics", description: "No delay in decision making" },
                    { value: "3x", label: "Better Forecasting", description: "Accurate pipeline predictions" },
                    { value: "+20%", label: "Win Rate", description: "By identifying and fixing bottlenecks" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Factory, industry: "Manufacturing", description: "Tracking long-cycle capital equipment sales across multiple quarters." },
                    { icon: Briefcase, industry: "Agencies", description: "Monitoring project acquisition costs versus lifetime value." },
                    { icon: Building, industry: "Franchises", description: "Comparing sales performance across different branch locations easily." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
