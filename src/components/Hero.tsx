import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              New: AI-Powered Call Analysis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              The Smartest <span className="text-indigo-600">Calling CRM</span> for High-Growth Teams
            </h1>
            <p className="mt-4 text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Automate lead distribution, track every call, and close more deals with the all-in-one tele-calling platform designed for modern sales teams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-2xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all"
              >
                <Play className="mr-2 h-5 w-5 fill-slate-700" />
                Book a Demo
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="pt-8 pb-4 px-4 bg-slate-50">
               {/* Mock UI Content */}
               <div className="grid grid-cols-12 gap-6">
                  {/* Sidebar Mock */}
                  <div className="hidden md:block col-span-2 bg-white rounded-xl h-[600px] shadow-sm border border-slate-100 p-4 space-y-4">
                    <div className="h-8 w-3/4 bg-slate-100 rounded mb-6"></div>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-10 w-full bg-slate-50 rounded-lg flex items-center px-3">
                         <div className="h-4 w-4 bg-slate-200 rounded mr-3"></div>
                         <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Content Mock */}
                  <div className="col-span-12 md:col-span-10 space-y-6">
                    {/* Top Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {['Total Calls', 'Connected', 'Leads Won', 'Talk Time'].map((stat, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                          <div className="text-sm text-slate-500 mb-1">{stat}</div>
                          <div className="text-2xl font-bold text-slate-800">
                            {i === 0 ? '1,248' : i === 1 ? '856' : i === 2 ? '42' : '34h 12m'}
                          </div>
                          <div className="text-xs text-emerald-600 mt-2 flex items-center">
                            <span className="bg-emerald-100 px-1.5 py-0.5 rounded mr-1">↑ 12%</span> vs last week
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-80">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="font-semibold text-slate-800">Call Volume Analytics</h3>
                          <div className="h-8 w-24 bg-slate-100 rounded"></div>
                        </div>
                        <div className="flex items-end space-x-4 h-56 px-4">
                           {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                             <div key={i} className="flex-1 bg-indigo-50 rounded-t-sm relative group">
                               <div 
                                 className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-sm transition-all duration-500"
                                 style={{ height: `${h}%` }}
                               ></div>
                             </div>
                           ))}
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-80">
                         <h3 className="font-semibold text-slate-800 mb-4">Lead Status</h3>
                         <div className="flex items-center justify-center h-56">
                            <div className="w-40 h-40 rounded-full border-8 border-indigo-100 border-t-indigo-500 border-r-indigo-400 relative">
                               <div className="absolute inset-0 flex items-center justify-center flex-col">
                                  <span className="text-2xl font-bold text-slate-800">85%</span>
                                  <span className="text-xs text-slate-500">Active</span>
                               </div>
                            </div>
                         </div>
                      </div>
                    </div>
                    
                    {/* Recent Calls Table */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-semibold text-slate-800">Recent Activities</h3>
                        <div className="text-indigo-600 text-sm font-medium cursor-pointer">View All</div>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium mr-4">
                                {i === 1 ? 'JD' : i === 2 ? 'AS' : 'MR'}
                              </div>
                              <div>
                                <div className="font-medium text-slate-800">
                                  {i === 1 ? 'John Doe' : i === 2 ? 'Alice Smith' : 'Mike Ross'}
                                </div>
                                <div className="text-sm text-slate-500">Called • 4m 32s • Interested</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                               <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                 Qualified
                               </span>
                               <div className="text-slate-400 text-sm">2 min ago</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
      </div>
    </div>
  );
}
