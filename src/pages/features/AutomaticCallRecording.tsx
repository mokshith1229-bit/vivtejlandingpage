import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Mic, CheckCircle, Shield, FileAudio, PlayCircle, Search, Headset, ShieldAlert, GraduationCap, Building } from 'lucide-react';

export default function AutomaticCallRecording() {
    return (
        <FeaturePageLayout
            title="Automatic Call Recording Software | TeleCRM"
            description="Record, store, and playback every sales call automatically for quality assurance and training."
        >
            <FeatureHero
                headline="Never Lose a Conversation"
                subheadline="Automatically record every incoming and outgoing call. Perfect for quality monitoring, dispute resolution, and training new agents."
                mockupPlaceholder={
                    <div className="aspect-[4/3] bg-slate-900 border-8 border-slate-800 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">

                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full mb-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"><Mic className="w-5 h-5 text-white animate-pulse" /></div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Call with Rohan Mehta</div>
                                        <div className="text-slate-400 text-xs">Yesterday, 4:30 PM • 12m 45s</div>
                                    </div>
                                </div>
                                <div className="bg-slate-700 px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
                                    <PlayCircle className="w-4 h-4 text-emerald-400" /> Play
                                </div>
                            </div>

                            {/* Audio Waveform Simulation */}
                            <div className="flex items-center gap-1 h-8 w-full border-t border-slate-700 pt-4">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <div key={i} className="flex-1 bg-blue-400/80 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                                ))}
                            </div>
                        </div>

                    </div>
                }
            />

            <ProblemSolution
                problems={[
                    "He-said, she-said disputes with clients over commitments",
                    "Inability to verify if agents are following the sales script",
                    "Lost context if an agent leaves the company",
                    "Hard to train new hires without real examples of good/bad calls"
                ]}
                solutions={[
                    "Concrete audio proof of exactly what was promised",
                    "Managers can randomly audit calls for QA and compliance",
                    "Call history perfectly preserved on the lead's timeline",
                    "Build a library of 'Best Practice' calls for onboarding"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Mic, title: "100% Automatic", description: "Zero buttons to press. Every call connected via TeleCRM is recorded seamlessly." },
                    { icon: FileAudio, title: "Cloud Storage", description: "Recordings are securely stored in the cloud and attached directly to the lead profile." },
                    { icon: PlayCircle, title: "In-Browser Playback", description: "Listen to past calls instantly without needing to download large audio files." },
                    { icon: Shield, title: "Access Controls", description: "Restrict playback access to managers or specific admins for privacy." },
                    { icon: Search, title: "Timeline Search", description: "Easily find specific recordings by looking at the lead's chronological history." },
                    { icon: Headset, title: "Quality Auditing", description: "Tools for managers to leave feedback notes while listening to agent calls." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Call Initiated", description: "Agent calls lead. Recording begins automatically." },
                    { title: "Conversation", description: "High-quality audio captures both sides." },
                    { title: "Call Ends", description: "Audio file is compressed and encrypted." },
                    { title: "Auto-Attached", description: "Recording appears in the lead's history instantly." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "100%", label: "Compliance", description: "Verifiable proof of interactions" },
                    { value: "50%", label: "Faster Onboarding", description: "Using real call libraries for training" },
                    { value: "0", label: "Lost Details", description: "Never forget what was discussed" },
                    { value: "Unlimited", label: "Cloud Storage", description: "Secure, scalable infrastructure" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: ShieldAlert, industry: "Insurance Brokers", description: "Mandatory compliance requires recording verbal consent to policy terms." },
                    { icon: GraduationCap, industry: "EdTech Sales", description: "Coaching massive sales floors by reviewing calls where leads objected." },
                    { icon: Building, industry: "Real Estate", description: "Tracking specific property preferences mentioned during long discovery calls." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
