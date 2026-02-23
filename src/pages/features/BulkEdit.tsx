import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Edit3, CheckCircle, CheckSquare, Layers, UserCheck, RefreshCw, Zap, Tag, Share2, Building } from 'lucide-react';

export default function BulkEdit() {
    return (
        <FeaturePageLayout
            title="Bulk Edit Leads in CRM | TeleCRM"
            description="Select hundreds of leads and edit their status, assignment, or tags in a single click."
        >
            <FeatureHero
                headline="Update Thousands of Leads Instantly"
                subheadline="Stop editing records one by one. Select massive lists of contacts and update statuses, tags, or assign them to new agents in a single click."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden flex flex-col">

                        {/* Toolbar */}
                        <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600 text-white w-5 h-5 flex items-center justify-center rounded text-xs font-bold">✓</div>
                                <div className="text-sm font-bold text-slate-800">450 Leads Selected</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded text-sm font-semibold flex items-center gap-2"><Tag className="w-4 h-4 text-slate-500" /> Add Tag</div>
                                <div className="bg-blue-600 border border-blue-600 text-white px-3 py-1.5 rounded text-sm font-semibold flex items-center gap-2"><UserCheck className="w-4 h-4 text-white" /> Reassign To</div>
                            </div>
                        </div>

                        {/* Table structure simulation */}
                        <div className="flex-1 p-4 space-y-2 relative">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-100">
                                    <div className="bg-blue-600 text-white w-4 h-4 flex items-center justify-center rounded text-[10px] font-bold">✓</div>
                                    <div className="w-32 bg-slate-200 h-3 rounded"></div>
                                    <div className="w-24 bg-red-100 h-4 rounded-full border border-red-200"></div>
                                    <div className="flex-1"></div>
                                    <div className="w-20 bg-slate-100 h-3 rounded"></div>
                                </div>
                            ))}

                            {/* Popover overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white shadow-2xl rounded-xl border border-slate-200 p-4 z-10 animate-[scale-in_0.3s_ease-out]">
                                <div className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2">Reassign 450 leads to:</div>
                                <div className="space-y-1 mb-4">
                                    <div className="p-2 bg-blue-50 text-blue-800 hover:bg-blue-100 rounded text-sm cursor-pointer font-medium">Agent: Neha Sharma</div>
                                    <div className="p-2 hover:bg-slate-50 rounded text-sm text-slate-700 cursor-pointer">Agent: Rahul Desai</div>
                                </div>
                                <button className="w-full bg-blue-600 text-white font-bold py-2 rounded text-sm">Confirm Update</button>
                            </div>
                        </div>
                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Manually changing statuses for hundreds of 'dead' leads",
                    "Reassigning lists when an agent leaves the company",
                    "Adding a specific campaign tag to imported Excel bases",
                    "Wasting hours clicking through individual screens"
                ]}
                solutions={[
                    "Mass-update thousands of statuses in 3 seconds",
                    "Select all of Agent A's leads and hand them to Agent B instantly",
                    "Select the entire filter view and apply tags in bulk",
                    "Execute massive data hygiene sweeps without IT support"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: UserCheck, title: "Bulk Reassignment", description: "Redistribute leads between agents seamlessly when scaling teams." },
                    { icon: Tag, title: "Mass Tagging", description: "Categorize massive lists of prospects for targeted marketing campaigns." },
                    { icon: Layers, title: "Status Updates", description: "Mass close invalid numbers, trash leads, or 'not interested' outcomes." },
                    { icon: Share2, title: "Round-Robin Distribute", description: "Select 500 leads and distribute them equally among 5 selected agents." },
                    { icon: CheckSquare, title: "Custom Fields Edit", description: "Update values across specific custom fields for a large filtered set." },
                    { icon: Zap, title: "Instant Execution", description: "Lightning fast database operations. 10,000 leads process in moments." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Filter Data", description: "Search for 'Status: Open' and 'Age > 30 days'." },
                    { title: "Select All", description: "Click the master checkbox to grab thousands of rows." },
                    { title: "Choose Action", description: "Click 'Change Status' via the top action bar." },
                    { title: "Apply Update", description: "Set new status to 'Cold Lead' for all selected." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "Developer Time", description: "No scripts needed to fix data" },
                    { value: "Seconds", label: "To Reassign", description: "Instead of hours of clicking" },
                    { value: "10k+", label: "Capacity", description: "Update massive databases efficiently" },
                    { value: "100%", label: "Data Hygiene", description: "Easy to keep lists clean" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Enterprise Call Centers", description: "Re-distributing massive blocks of untouched data to fresh batches of new hires." },
                    { icon: Layers, industry: "Event Management", description: "Status updating 500+ attendees to 'Checked In' simultaneously." },
                    { icon: RefreshCw, industry: "B2B SaaS", description: "Mass tagging accounts that are up for renewal next month." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
