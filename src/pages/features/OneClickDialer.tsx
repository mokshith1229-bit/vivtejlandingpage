import FeaturePageLayout from '../../components/layout/FeaturePageLayout';
import FeatureHero from '../../components/features/FeatureHero';
import ProblemSolution from '../../components/features/ProblemSolution';
import CoreCapabilities from '../../components/features/CoreCapabilities';
import WorkflowVisualization from '../../components/features/WorkflowVisualization';
import BusinessImpact from '../../components/features/BusinessImpact';
import IndustryUseCases from '../../components/features/IndustryUseCases';
import FinalCTA from '../../components/features/FinalCTA';
import { Phone, CheckCircle, Clock, Zap, Target, BookOpen, Headphones, ShieldCheck, Download, Users, BarChart2, Calendar, MessageSquare, PhoneOff, UserSquare2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function OneClickDialer() {
    return (
        <FeaturePageLayout
            title="One Click Dialer CRM Software | TeleCRM"
            description="Make faster calls directly from your CRM with integrated one-click browser dialer and automatic call logging."
        >
            <FeatureHero
                headline="Dial Smarter, Not Harder"
                subheadline="Turn your browser into a powerful calling machine. Connect instantly, log automatically, and close deals faster with our One Click Dialer."
                mockupPlaceholder={
                    <div className="h-[400px] bg-white flex flex-col justify-center items-center relative overflow-hidden">
                        {/* Soft Glow behind profile */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6 border-4 border-white shadow-xl shadow-blue-200/50"
                            >
                                <Phone className="w-10 h-10 text-blue-600" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Calling Nikhil Sharma...</h3>
                            <div className="text-sm font-medium text-slate-500 mb-8 font-mono bg-slate-100 px-3 py-1 rounded-full">00:14</div>

                            <div className="flex gap-6">
                                <button className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm">
                                    <MessageSquare className="w-6 h-6 text-slate-600" />
                                </button>
                                <button className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors shadow-lg shadow-red-200">
                                    <PhoneOff className="w-6 h-6 text-red-600" />
                                </button>
                                <button className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm">
                                    <UserSquare2 className="w-6 h-6 text-slate-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
                floatingElements={
                    <>
                        {/* Top Left: Analytics Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-8 -left-12 lg:-left-24 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 w-48 z-20"
                            style={{ transform: 'translateZ(40px)' }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                    <BarChart2 className="w-4 h-4 text-indigo-600" />
                                </div>
                                <div className="text-sm font-bold text-slate-800">Connection Rate</div>
                            </div>
                            <div className="text-2xl font-black text-indigo-600 mb-1">68%</div>
                            <div className="text-xs text-emerald-600 font-medium flex items-center">
                                <Zap className="w-3 h-3 mr-1" /> +12% this week
                            </div>
                        </motion.div>

                        {/* Top Right: Notification Bubble */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                            className="absolute top-12 -right-8 lg:-right-16 bg-emerald-500 rounded-2xl p-3 shadow-xl shadow-emerald-200 flex items-center gap-2 z-20"
                            style={{ transform: 'translateZ(60px)' }}
                        >
                            <CheckCircle className="w-5 h-5 text-white" />
                            <span className="text-white font-bold text-sm pr-2">Deal Won!</span>
                        </motion.div>

                        {/* Bottom Left: Dial Pad Mockup */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-16 -left-8 lg:-left-16 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 w-56 z-30"
                            style={{ transform: 'translateZ(80px) rotateX(10deg) rotateY(10deg)' }}
                        >
                            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-3">
                                <div className="text-xs text-slate-400 font-medium mb-1">Enter number...</div>
                                <div className="text-lg font-bold text-slate-800">+1 (555) 019-</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
                                    <div key={i} className="aspect-square rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 font-bold hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors border border-slate-100">
                                        {num}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Bottom Right: Calendar/Notes */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                            className="absolute -bottom-8 -right-8 lg:-right-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 w-48 z-20"
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-orange-600" />
                                </div>
                                <div className="text-sm font-bold text-slate-800">Follow-up</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                                <div className="h-2 bg-slate-100 rounded-full w-4/5"></div>
                                <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                            </div>
                            <div className="mt-3 inline-flex items-center px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded-lg border border-orange-100">
                                Tomorrow, 2:00 PM
                            </div>
                        </motion.div>
                    </>
                }
            />

            <ProblemSolution
                problems={[
                    "Manually typing 10-digit numbers into your phone",
                    "Forgetting to log call notes after hanging up",
                    "Switching between CRM and calling apps constantly",
                    "Not knowing which agent made which call"
                ]}
                solutions={[
                    "Click the number directly in CRM to dial",
                    "Notes pop up automatically during the call",
                    "Everything happens inside your browser window",
                    "100% accurate call tracking and agent attribution"
                ]}
            />

            <CoreCapabilities
                capabilities={[
                    { icon: Phone, title: "Browser-based Calling", description: "Make calls directly from Chrome without needing any physical phone or extra software." },
                    { icon: CheckCircle, title: "Auto Call Logging", description: "Every call duration, timestamp, and outcome is logged to the lead profile instantly." },
                    { icon: Target, title: "Click-to-Call from Lists", description: "Power through lead lists with a single click next to any phone number." },
                    { icon: Clock, title: "Call Status Tracking", description: "Know exactly who answered, who didn't, and who needs a callback." },
                    { icon: Zap, title: "Integrated with Pipeline", description: "Calls automatically move leads forward in your sales pipeline based on the outcome." },
                    { icon: ShieldCheck, title: "Zero Manual Dialing", description: "Eliminate misdials and save up to 2 hours per agent every day." }
                ]}
            />

            <WorkflowVisualization
                steps={[
                    { title: "Open Lead List", description: "Agent opens their assigned daily leads in TeleCRM." },
                    { title: "Click to Call", description: "Clicks the green phone icon next to the lead's name." },
                    { title: "Talk & Take Notes", description: "Call connects via browser. Agent types notes in the popup." },
                    { title: "Auto Logged", description: "Call hangs up, recording and notes are saved forever." }
                ]}
            />

            <BusinessImpact
                stats={[
                    { value: "3x", label: "More Calls/Day", description: "Increase agent calling capacity" },
                    { value: "0", label: "Misdial Errors", description: "Eliminate manual typing mistakes" },
                    { value: "100%", label: "Call Logging", description: "No more missing history" },
                    { value: "2hrs", label: "Saved Daily", description: "Per agent, every single day" }
                ]}
            />

            <IndustryUseCases
                useCases={[
                    { icon: BookOpen, industry: "Education Consultants", description: "Counselors call hundreds of student inquiries daily to schedule campus visits." },
                    { icon: Headphones, industry: "Sales Call Centers", description: "High-volume outbound teams maximizing connect rates without missing a beat." },
                    { icon: Users, industry: "Real Estate Brokers", description: "Quickly dialing new property inquiries before competitors reach them." },
                    { icon: Download, industry: "Loan Agencies", description: "Processing fast verification calls seamlessly logged to applicant files." }
                ]}
            />

            <FinalCTA />
        </FeaturePageLayout>
    );
}
