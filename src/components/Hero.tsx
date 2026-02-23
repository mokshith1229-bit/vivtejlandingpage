import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Phone, Mail, Send, Sparkles, MessageSquare, Plus, Check } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#f4f7ff] pt-32 pb-24 lg:pt-40 lg:pb-32 font-sans">
      {/* Abstract Background Waves & Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Wave Gradient */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl opacity-70 transform translate-x-1/3 -translate-y-1/4"></div>
        {/* Bottom Left Wave Gradient */}
        <div className="absolute bottom-0 left-0 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-200/50 via-indigo-100/30 to-transparent rounded-full blur-3xl opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Wavy shape approximation (using an SVG) */}
        <svg className="absolute bottom-0 left-0 w-full h-[500px] text-blue-100/40 transform translate-y-20 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,192C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg className="absolute bottom-10 left-0 w-full h-[400px] text-white/50 transform translate-y-10 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,197.3C480,213,600,203,720,176C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        {/* Floating Elements (similar to the image) */}
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-[30%] left-[8%] hidden lg:block opacity-60">
          <Send className="w-16 h-16 text-indigo-300 transform -rotate-12" />
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute bottom-[20%] right-[10%] hidden lg:flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-lg border border-indigo-50">
          <Mail className="w-6 h-6 text-blue-500" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white"></div>
        </motion.div>

        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute bottom-[25%] left-[45%] hidden lg:flex items-center justify-center w-12 h-12 bg-green-500 rounded-2xl shadow-xl shadow-green-200">
          <Phone className="w-5 h-5 text-white" />
        </motion.div>

        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute top-[35%] right-[5%] hidden lg:flex items-center justify-center w-12 h-12 bg-cyan-400 rounded-2xl shadow-xl shadow-cyan-200">
          <MessageSquare className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Left Content Area */}
        <div className="text-center lg:text-left max-w-2xl lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-indigo-100/80 text-indigo-700 shadow-sm border border-indigo-100 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                New: AI-Powered Call Analysis
              </span>
            </div>

            <h1 className="text-[2.75rem] md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#1e2330] mb-6 leading-[1.1]">
              The Smartest <span className="text-indigo-600">Calling CRM</span> for High-Growth Teams
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              Automate lead distribution, track every call, and close more deals with the all-in-one tele-calling platform designed for modern sales teams.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base md:text-lg font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-100 text-base md:text-lg font-bold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all"
              >
                <Play className="mr-3 h-5 w-5 fill-slate-700 text-slate-700" />
                Book a Demo
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-y-3 sm:gap-6 text-sm md:text-base font-medium text-slate-600">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup Area */}
        <div className="lg:w-1/2 relative w-full mt-10 lg:mt-0 flex justify-center perspective-[1000px]">

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 0 }}
            animate={{ opacity: 1, x: 0, rotateY: -12 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:-right-10 transform-style-3d w-full max-w-[700px] xl:max-w-[800px] hidden md:block"
            style={{
              transform: 'rotateY(-10deg) rotateX(10deg) rotateZ(3deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Laptop Frame Container */}
            <div className="relative w-full">
              {/* Laptop Screen (Bezel) */}
              <div className="bg-[#f8fafc] p-2 md:p-3 rounded-t-[20px] md:rounded-t-[24px] border border-slate-300 shadow-2xl relative">
                {/* Camera dot */}
                <div className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 bg-slate-300 rounded-full"></div>

                {/* Main Application Window */}
                <div className="bg-white rounded-[12px] md:rounded-[16px] border border-slate-200/60 overflow-hidden relative h-[450px] md:h-[520px]">

                  {/* Browser Header */}
                  <div className="bg-[#f0f2f5] px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-400"></div>
                    {/* Search Bar / Browser Box */}
                    <div className="ml-4 bg-white/80 h-6 rounded-md w-48 md:w-64 flex items-center px-3 shadow-sm border border-slate-200/50">
                      <span className="w-4 h-4 rounded bg-indigo-600 flex items-center justify-center mr-2">
                        <Phone className="w-2.5 h-2.5 text-white" />
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">app.callflow.com/dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="bg-[#f8fafc] p-4 md:p-6 h-full overflow-hidden">
                    {/* Top Level Stats */}
                    <div className="grid grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
                      {/* Stat 1 */}
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                        <span className="text-slate-500 text-[10px] md:text-xs font-semibold">Total Calls</span>
                        <span className="text-slate-800 text-lg md:text-2xl font-black mt-1">1,248</span>
                        <div className="flex items-center mt-2 md:mt-3">
                          <span className="bg-emerald-100 text-emerald-600 text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center">
                            ↑ 12%
                          </span>
                          <span className="text-slate-400 text-[8px] md:text-[10px] ml-1.5 truncate">vs last week</span>
                        </div>
                      </div>
                      {/* Stat 2 */}
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                        <span className="text-slate-500 text-[10px] md:text-xs font-semibold">Connected</span>
                        <span className="text-slate-800 text-lg md:text-2xl font-black mt-1">856</span>
                        <div className="flex items-center mt-2 md:mt-3">
                          <span className="bg-emerald-100 text-emerald-600 text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center">
                            ↑ 12%
                          </span>
                          <span className="text-slate-400 text-[8px] md:text-[10px] ml-1.5 truncate">vs last week</span>
                        </div>
                      </div>
                      {/* Stat 3 */}
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                        <span className="text-slate-500 text-[10px] md:text-xs font-semibold">Leads Won</span>
                        <span className="text-slate-800 text-lg md:text-2xl font-black mt-1">42</span>
                        <div className="flex items-center mt-2 md:mt-3">
                          <span className="bg-emerald-100 text-emerald-600 text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center">
                            ↑ 12%
                          </span>
                          <span className="text-slate-400 text-[8px] md:text-[10px] ml-1.5 truncate">vs last week</span>
                        </div>
                      </div>
                      {/* Stat 4 */}
                      <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                        <span className="text-slate-500 text-[10px] md:text-xs font-semibold">Talk Time</span>
                        <span className="text-slate-800 text-lg md:text-2xl font-black tracking-tight mt-1">34h 12m</span>
                        <div className="flex items-center mt-2 md:mt-3">
                          <span className="bg-emerald-100 text-emerald-600 text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center">
                            ↑ 12%
                          </span>
                          <span className="text-slate-400 text-[8px] md:text-[10px] ml-1.5 truncate">vs last week</span>
                        </div>
                      </div>
                    </div>

                    {/* Filters Bar */}
                    <div className="flex gap-2 mb-3 md:mb-4">
                      <div className="h-2 w-24 md:w-32 bg-slate-200 rounded-full"></div>
                      <div className="h-2 w-16 md:w-24 bg-slate-200 rounded-full"></div>
                      <div className="h-2 w-12 md:w-16 bg-slate-200 rounded-full ml-auto"></div>
                    </div>

                    {/* Calls List Table Mock */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 relative h-[250px] overflow-hidden">
                      <div className="space-y-1">
                        {[
                          { name: 'Sarice Neme', status: 'Connected', time: '1 min ago', rep: 'Esqir Name', statusStyle: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                          { name: 'Earlen Neme', status: 'Connected', time: '1 min ago', rep: 'Esqir Neme', statusStyle: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                          { name: 'Earlen Neme', status: 'Not answered', time: '2 min ago', rep: 'Cannat Neme', statusStyle: 'bg-rose-50 text-rose-600 border-rose-100' },
                          { name: 'Slace Neme', status: 'Not answered', time: '1 min ago', rep: 'Sanant Buttlen', statusStyle: 'bg-rose-50 text-rose-600 border-rose-100' },
                          { name: 'Sull Neme', status: 'Connected', time: '3 min ago', rep: 'Poot Eesame', statusStyle: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between p-2 md:p-3 hover:bg-slate-50 rounded-lg group transition-colors">
                            <div className="flex items-center gap-2 md:gap-3 w-[40%] md:w-1/3">
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover opacity-80" />
                              </div>
                              <div>
                                <div className="text-[10px] md:text-[11px] font-bold text-slate-800 truncate">{row.name}</div>
                                <div className="text-[8px] md:text-[9px] text-slate-400">+1 234 567</div>
                              </div>
                            </div>
                            <div className="w-1/4 hidden md:block">
                              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold border ${row.statusStyle}`}>
                                {row.status === 'Connected' ? <Phone className="w-2.5 h-2.5 mr-1" /> : <Phone className="w-2.5 h-2.5 mr-1 opacity-50" />} {row.status}
                              </span>
                            </div>
                            <div className="w-1/4 md:w-1/6 text-[9px] md:text-[10px] text-slate-400 font-medium">
                              {row.time}
                            </div>
                            <div className="w-1/4 flex items-center justify-end md:justify-between">
                              <div className="text-[9px] md:text-[10px] font-semibold text-slate-700 hidden md:block truncate">{row.rep}</div>
                              <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-500 ml-auto md:ml-0" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base (Keyboard Deck / Chassis) */}
              <div className="relative w-[114%] -ml-[7%] h-4 md:h-6 bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] rounded-b-[16px] md:rounded-b-[24px] rounded-t-sm shadow-xl flex justify-center z-10 border border-slate-300">
                {/* Trackpad notch */}
                <div className="w-1/6 md:w-1/5 h-1 md:h-1.5 bg-slate-400/50 rounded-b-md"></div>
                {/* Bottom Lip shading */}
                <div className="absolute -bottom-1 md:-bottom-2 w-[98%] h-2 bg-slate-400 rounded-b-[24px] shadow-2xl blur-[2px] opacity-60"></div>
              </div>
            </div>

            {/* Floating AI Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -top-12 right-12 md:-right-8 bg-white/95 backdrop-blur rounded-[20px] shadow-2xl border border-slate-100 w-72 p-5 z-20"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                </div>
                <span className="font-bold text-sm text-slate-800">AI-Powered Call Analysis</span>
              </div>

              <div className="space-y-4">
                {/* Speech Bubble 1 */}
                <div className="bg-indigo-50 rounded-xl rounded-tl-sm p-3 border border-indigo-100 text-[10px] text-indigo-900 leading-relaxed font-medium">
                  <div className="flex items-center gap-1 mb-1">
                    <Phone className="w-3 h-3 text-indigo-500" />
                    <span className="font-bold text-indigo-700">Recorded Call: #8418</span>
                  </div>
                  Client mentioned competitor pricing. Attempted comparison on features but client was focused on budget constraints...
                </div>

                {/* Speech Bubble 2 */}
                <div className="bg-emerald-50 rounded-xl rounded-tr-sm p-3 border border-emerald-100 text-[10px] text-emerald-900 leading-relaxed font-medium">
                  <span className="font-bold text-emerald-700 block mb-1">AI Suggestion:</span>
                  Send follow-up email outlining long-term ROI vs short-term competitor pricing. Include case study attached.
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 shadow-sm">
                    <Plus className="w-3 h-3" /> Create Task
                  </button>
                  <button className="flex-1 bg-indigo-600 text-white text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center shadow-sm">
                    Send Email
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
