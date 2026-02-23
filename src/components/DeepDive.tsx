import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function DeepDive() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Lead Management */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              Lead Management
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Capture and distribute leads automatically
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Stop manually assigning leads via Excel. Automatically capture leads from Facebook, Google, and your website, then instantly assign them to the right sales agent.
            </p>
            <ul className="space-y-4">
              {[
                'Integration with Facebook Ads & Google Forms',
                'Round-robin or performance-based distribution',
                'Instant notification to sales agents',
                'Duplicate lead detection'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <div className="h-10 bg-white border-b border-slate-200 flex items-center px-4">
                    <span className="font-semibold text-sm text-slate-700">Lead Distribution Rules</span>
                  </div>
                  <div className="p-6 space-y-4">
                     <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center">
                           <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">f</div>
                           <div>
                              <div className="font-medium text-slate-900">Facebook Leads</div>
                              <div className="text-xs text-slate-500">Source: Campaign A</div>
                           </div>
                        </div>
                        <div className="h-px w-12 bg-slate-300"></div>
                        <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Round Robin</div>
                        <div className="h-px w-12 bg-slate-300"></div>
                        <div className="flex -space-x-2">
                           {[1,2,3].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                           ))}
                        </div>
                     </div>
                     <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm opacity-70">
                        <div className="flex items-center">
                           <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">G</div>
                           <div>
                              <div className="font-medium text-slate-900">Website Form</div>
                              <div className="text-xs text-slate-500">Source: Contact Page</div>
                           </div>
                        </div>
                        <div className="h-px w-12 bg-slate-300"></div>
                        <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">Direct Assign</div>
                        <div className="h-px w-12 bg-slate-300"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Mobile CRM */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 mb-6">
              Mobile App
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your office in your pocket
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Empower your field sales team with a powerful mobile app. Track calls, update lead status, and schedule follow-ups on the go.
            </p>
            <ul className="space-y-4">
              {[
                'Auto-dialer for high volume calling',
                'Call tracking & recording on mobile',
                'Geo-fencing for field visits',
                'Offline mode support'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
             <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-white overflow-hidden relative">
                   {/* Mobile App Header */}
                   <div className="bg-indigo-600 h-32 p-6 pt-12 text-white">
                      <div className="text-xs opacity-80">Good Morning,</div>
                      <div className="text-xl font-bold">Alex Johnson</div>
                   </div>
                   {/* Mobile App Content */}
                   <div className="p-4 -mt-6">
                      <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
                         <div className="flex justify-between text-sm text-slate-500 mb-2">
                            <span>Today's Target</span>
                            <span>12/40 Calls</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-indigo-500 h-2 rounded-full w-[30%]"></div>
                         </div>
                      </div>
                      
                      <div className="space-y-3">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Up Next</div>
                         {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center justify-between">
                               <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold mr-3">
                                     {i === 1 ? 'RK' : i === 2 ? 'SM' : 'JD'}
                                  </div>
                                  <div>
                                     <div className="font-semibold text-slate-800 text-sm">Rahul Kumar</div>
                                     <div className="text-xs text-slate-500">Interested • Follow up</div>
                                  </div>
                               </div>
                               <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                  <PhoneCall className="w-4 h-4" />
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   {/* Bottom Nav */}
                   <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex justify-around items-center px-4">
                      <div className="text-indigo-600"><LayoutGrid className="w-6 h-6" /></div>
                      <div className="text-slate-400"><Users className="w-6 h-6" /></div>
                      <div className="text-slate-400"><Settings className="w-6 h-6" /></div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Section 3: Call Recording */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-6">
              Call Recording
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Monitor quality & train your team
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Listen to every conversation. Use call recordings to identify coaching opportunities, resolve disputes, and ensure compliance.
            </p>
            <ul className="space-y-4">
              {[
                'Automatic call recording (Inbound & Outbound)',
                'Playback speed control (1x, 1.5x, 2x)',
                'Add notes and tags to specific timestamps',
                'Download recordings for offline access'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
             <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold mr-4">
                         JD
                      </div>
                      <div>
                         <div className="font-bold text-slate-900">John Doe</div>
                         <div className="text-sm text-slate-500">Outgoing Call • 14:32 • Oct 24</div>
                      </div>
                   </div>
                   <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Connected</div>
                </div>
                
                {/* Waveform Mock */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                   <div className="flex items-center space-x-1 h-12 mb-2 justify-center">
                      {[...Array(40)].map((_, i) => (
                         <div 
                            key={i} 
                            className={`w-1 rounded-full ${i > 10 && i < 25 ? 'bg-indigo-500' : 'bg-slate-300'}`}
                            style={{ height: `${Math.random() * 100}%` }}
                         ></div>
                      ))}
                   </div>
                   <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>00:00</span>
                      <span>04:32</span>
                   </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center space-x-6 mb-8">
                   <button className="p-2 text-slate-400 hover:text-indigo-600"><div className="w-4 h-4 border-l-2 border-b-2 border-current transform rotate-45"></div></button>
                   <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                   </button>
                   <button className="p-2 text-slate-400 hover:text-indigo-600"><div className="w-4 h-4 border-r-2 border-b-2 border-current transform -rotate-45"></div></button>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                   <div className="text-sm font-semibold text-slate-800">Call Notes</div>
                   <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-sm text-yellow-800">
                      <span className="font-bold mr-2">01:45</span>
                      Customer asked about enterprise pricing. Mentioned budget is flexible.
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Section 4: Analytics */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
              Reporting & Analytics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Data-driven decisions, not guesswork
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get a 360-degree view of your sales process. Track individual agent performance, call durations, and revenue generation in real-time.
            </p>
            <ul className="space-y-4">
              {[
                'Real-time leaderboards',
                'Call recording analysis',
                'Conversion rate tracking',
                'Exportable reports (PDF/Excel)'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-lg text-slate-800">Team Performance</h3>
                  <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">This Month</div>
               </div>
               <div className="space-y-6">
                  {[
                     { name: 'Sarah Wilson', calls: 1450, sales: 42, color: 'bg-indigo-500' },
                     { name: 'Mike Ross', calls: 1200, sales: 38, color: 'bg-blue-500' },
                     { name: 'Jessica Pearson', calls: 980, sales: 31, color: 'bg-emerald-500' },
                  ].map((agent, i) => (
                     <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                           <span className="font-medium text-slate-700">{agent.name}</span>
                           <span className="text-slate-500">{agent.sales} Deals Closed</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3 mb-1">
                           <div className={`${agent.color} h-3 rounded-full`} style={{ width: `${(agent.sales / 50) * 100}%` }}></div>
                        </div>
                        <div className="text-xs text-slate-400 text-right">{agent.calls} Calls made</div>
                     </div>
                  ))}
               </div>
               <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                  <div>
                     <div className="text-2xl font-bold text-slate-900">4,230</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wide">Total Calls</div>
                  </div>
                  <div>
                     <div className="text-2xl font-bold text-slate-900">142</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wide">Deals Won</div>
                  </div>
                  <div>
                     <div className="text-2xl font-bold text-slate-900">$128k</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wide">Revenue</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
import { PhoneCall, LayoutGrid, Users, Settings } from 'lucide-react';
