import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, Phone, Trophy, MessageCircle, Bell, 
  BarChart3, GitBranch, Mic, Users, Edit, FileSpreadsheet, Facebook, 
  Code, Share2, MessageSquare, Mail, Smartphone, CreditCard, Clock,
  Building2, GraduationCap, Plane, Coins, Stethoscope, Car, Briefcase,
  Headset, Megaphone, UserPlus, Cloud, Rocket, Banknote, Shield
} from 'lucide-react';
import { useState } from 'react';

const mainFeatures = [
  { name: '1-Click Dialer', icon: Phone, href: '#' },
  { name: 'Leaderboard Report', icon: Trophy, href: '#' },
  { name: 'WhatsApp Broadcast Marketing', icon: MessageCircle, href: '#' },
  { name: 'Call Reminders', icon: Bell, href: '#' },
  { name: 'Sales Report', icon: BarChart3, href: '#' },
  { name: 'Smart Workflows', icon: GitBranch, href: '#' },
  { name: 'Automatic Call Recording', icon: Mic, href: '#' },
  { name: 'Agents Report', icon: Users, href: '#' },
  { name: 'Bulk Edit', icon: Edit, href: '#' },
];

const moreFeatures = [
  { name: 'Excel Import', icon: FileSpreadsheet },
  { name: 'FB Lead Capture', icon: Facebook },
  { name: 'Custom API Integration', icon: Code },
  { name: 'Lead Routing', icon: Share2 },
  { name: 'WhatsApp Alerts', icon: MessageSquare },
  { name: '1-Click WhatsApp', icon: MessageCircle },
  { name: '1-Click SMS/Email', icon: Mail },
  { name: 'Push Notification', icon: Smartphone },
  { name: 'Payment Creation', icon: CreditCard },
  { name: 'Hour-by-hour Report', icon: Clock },
];

const mainIndustries = [
  { name: 'Real Estate CRM', icon: Building2, href: '#' },
  { name: 'CRM for Education Sales Teams', icon: GraduationCap, href: '#' },
  { name: 'Travel CRM', icon: Plane, href: '#' },
  { name: 'Loan DSA CRM', icon: Coins, href: '#' },
  { name: 'Healthcare CRM', icon: Stethoscope, href: '#' },
];

const moreIndustries = [
  { name: 'Automobile CRM', icon: Car },
  { name: 'B2B CRM Software', icon: Briefcase },
  { name: 'Call Center CRM', icon: Headset },
  { name: 'CRM for Digital Marketing', icon: Megaphone },
  { name: 'CRM for Recruiting', icon: UserPlus },
  { name: 'CRM for SaaS Companies', icon: Cloud },
  { name: 'CRM for Startups', icon: Rocket },
  { name: 'Financial Services CRM', icon: Banknote },
  { name: 'Fintech CRM', icon: CreditCard },
  { name: 'Insurance CRM', icon: Shield },
];

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">CallFlow</span>
            </a>
            <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
              {/* Features Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
              >
                <button 
                  className="flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none py-2"
                >
                  Features
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Features Dropdown Menu */}
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                    >
                      <div className="flex">
                        {/* Main Features Column */}
                        <div className="w-1/2 p-4 border-r border-slate-100 bg-white">
                          <div className="space-y-1">
                            {mainFeatures.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-3 py-2.5 rounded-lg hover:bg-indigo-50 group transition-colors"
                              >
                                <item.icon className="w-5 h-5 text-indigo-600 mr-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-100 px-3">
                            <a href="#features" className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center">
                              See all features <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                            </a>
                          </div>
                        </div>

                        {/* Secondary Features Column */}
                        <div className="w-1/2 p-4 bg-slate-50/50">
                          <div className="space-y-1">
                            {moreFeatures.map((item) => (
                              <a
                                key={item.name}
                                href="#"
                                className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                              >
                                <item.icon className="w-4 h-4 text-slate-500 mr-3 group-hover:text-indigo-600" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                Pricing
              </a>

              {/* Industries Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button 
                  className="flex items-center text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none py-2"
                >
                  Industries
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Industries Dropdown Menu */}
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                    >
                      <div className="flex">
                        {/* Main Industries Column */}
                        <div className="w-1/2 p-4 border-r border-slate-100 bg-white">
                          <div className="space-y-1">
                            {mainIndustries.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-3 py-2.5 rounded-lg hover:bg-indigo-50 group transition-colors"
                              >
                                <item.icon className="w-5 h-5 text-indigo-600 mr-3 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-100 px-3">
                            <span className="text-sm font-medium text-slate-500">More</span>
                          </div>
                        </div>

                        {/* Secondary Industries Column */}
                        <div className="w-1/2 p-4 bg-slate-50/50 max-h-[400px] overflow-y-auto">
                          <div className="space-y-1">
                            {moreIndustries.map((item) => (
                              <a
                                key={item.name}
                                href="#"
                                className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                              >
                                <item.icon className="w-4 h-4 text-slate-500 mr-3 group-hover:text-indigo-600" />
                                <span className="text-sm text-slate-600 group-hover:text-slate-900">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* ... Right side buttons ... */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
              Log in
            </a>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Features Mobile */}
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Features</div>
            {mainFeatures.map((item) => (
               <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-5 h-5 mr-3 text-indigo-500" />
                {item.name}
              </a>
            ))}
            
            <div className="mt-4 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">More Features</div>
             {moreFeatures.slice(0, 5).map((item) => (
               <a
                key={item.name}
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-4 h-4 mr-3 text-slate-400" />
                {item.name}
              </a>
            ))}

            <div className="border-t border-slate-100 my-2"></div>
            
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">
              Pricing
            </a>

            {/* Industries Mobile */}
            <div className="mt-4 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Industries</div>
            {mainIndustries.map((item) => (
               <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-5 h-5 mr-3 text-indigo-500" />
                {item.name}
              </a>
            ))}
            
            <div className="mt-2 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">More Industries</div>
             {moreIndustries.slice(0, 5).map((item) => (
               <a
                key={item.name}
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-4 h-4 mr-3 text-slate-400" />
                {item.name}
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-100">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">
                Log in
              </a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemo();
                }}
                className="block w-full text-center mt-2 px-5 py-3 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
