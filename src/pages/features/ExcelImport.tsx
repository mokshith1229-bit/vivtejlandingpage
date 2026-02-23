import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { FileSpreadsheet, CheckCircle, Database, Network, Key, AlertTriangle, FastForward, Building, Zap, Briefcase } from 'lucide-react';

export default function ExcelImport() {
    return (
        <FeaturePageLayout
            title="Excel & CSV Lead Import CRM | TeleCRM"
            description="Upload tens of thousands of leads from Excel or CSV files in seconds with smart column mapping."
        >
            <FeatureHero
                headline="From Excel to CRM in Seconds"
                subheadline="Say goodbye to manual data entry. Upload massive CSV or Excel files, map your columns visually, and have thousands of leads ready to dial instantly."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-emerald-50 border border-emerald-100 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">

                        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm mx-auto border border-emerald-100">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                                    <FileSpreadsheet className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div className="font-bold text-slate-800 text-lg">leads_final_q3.xlsx</div>
                                <div className="text-slate-500 text-sm">2.4 MB • 14,500 rows</div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center bg-slate-50 p-2 rounded">
                                    <div className="text-sm font-semibold text-slate-700">Name Column</div>
                                    <div className="text-sm text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded">Mapped → ClientName</div>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 p-2 rounded">
                                    <div className="text-sm font-semibold text-slate-700">Phone Number</div>
                                    <div className="text-sm text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded">Mapped → Mobile</div>
                                </div>
                            </div>

                            <div className="bg-emerald-600 text-white font-bold py-3 rounded-xl w-full text-center shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2">
                                <Zap className="w-5 h-5" /> Import 14,500 Leads
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "Wasting days typing data from trade-show lead sheets",
                    "Importing duplicates that ruin your database hygiene",
                    "CRMs breaking when trying to upload files over 5MB",
                    "Losing custom data because the CRM doesn't have the right fields"
                ]}
                solutions={[
                    "Upload raw CSV/XLSX files and map them visually in 2 minutes",
                    "Intelligent de-duplication skips or overwrites existing numbers",
                    "High-performance importer handles 50,000+ rows smoothly",
                    "Automatically create custom fields on-the-fly during upload"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: FileSpreadsheet, title: "Excel & CSV Support", description: "Drop in your raw files directly. No need to strictly format them first." },
                    { icon: Network, title: "Visual Column Mapping", description: "Match your spreadsheet columns to CRM fields visually via dropdowns." },
                    { icon: Database, title: "Custom Field Creation", description: "Found a new column? Create a custom field for it during the import process." },
                    { icon: Key, title: "De-duplication logic", description: "Decide whether to update existing leads or skip duplicates based on phone/email." },
                    { icon: AlertTriangle, title: "Error Handling", description: "Get a separate fallback file of any rows that failed so you can fix and re-upload." },
                    { icon: FastForward, title: "Auto-Assign on Import", description: "Instantly distribute the uploaded file across 10 agents via round-robin." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Upload File", description: "Drag and drop your .xlsx or .csv file into TeleCRM." },
                    { title: "Map Columns", description: "Tell the system which column is 'Phone', 'Name', etc." },
                    { title: "Set Rules", description: "Choose rules for handling duplicate numbers." },
                    { title: "Import!", description: "Thousands of leads populate the system instantly." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "0", label: "Data Entry Costs", description: "Stop paying for manual typing" },
                    { value: "2 mins", label: "Upload Time", description: "Even for massive datasets" },
                    { value: "100%", label: "Accuracy", description: "No human typos in phone numbers" },
                    { value: "1", label: "Clean Database", description: "Smart de-duplication handles messy files" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: Building, industry: "Trade Show Marketing", description: "Importing badge-scanner Excel sheets directly to the sales floor the same day." },
                    { icon: Database, industry: "Lead Generation Agencies", description: "Loading massive purchased databases into the dialer seamlessly." },
                    { icon: Briefcase, industry: "Migration", description: "Moving thousands of historical records from an old, legacy CRM." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
