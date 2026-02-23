import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Trophy, MessageCircle, Bell,
  BarChart3, GitBranch, Mic, Users, Edit, FileSpreadsheet, Facebook,
  Code, Share2, MessageSquare, Mail, Smartphone, CreditCard, Clock,
  Building2, GraduationCap, Plane, Coins, Stethoscope, Car, Briefcase,
  Headset, Megaphone, UserPlus, Cloud, Rocket, Banknote, Shield
} from 'lucide-react';
import { useState } from 'react';

const mainFeatures = [
  { name: '1-Click Dialer', icon: Phone, href: '/features/one-click-dialer' },
  { name: 'Leaderboard Report', icon: Trophy, href: '/features/leaderboard-report' },
  { name: 'WhatsApp Broadcast Marketing', icon: MessageCircle, href: '/features/whatsapp-broadcast-marketing' },
  { name: 'Call Reminders', icon: Bell, href: '/features/call-reminders' },
  { name: 'Sales Report', icon: BarChart3, href: '/features/sales-report' },
  { name: 'Smart Workflows', icon: GitBranch, href: '/features/smart-workflows' },
  { name: 'Automatic Call Recording', icon: Mic, href: '/features/automatic-call-recording' },
  { name: 'Agents Report', icon: Users, href: '/features/agents-report' },
  { name: 'Bulk Edit', icon: Edit, href: '/features/bulk-edit' },
];

const moreFeatures = [
  { name: 'Excel Import', icon: FileSpreadsheet, href: '/features/excel-import' },
  { name: 'FB Lead Capture', icon: Facebook, href: '/features/fb-lead-capture' },
  { name: 'Custom API Integration', icon: Code, href: '/features/custom-api-integration' },
  { name: 'Lead Routing', icon: Share2, href: '/features/lead-routing' },
  { name: 'WhatsApp Alerts', icon: MessageSquare, href: '/features/whatsapp-alerts' },
  { name: '1-Click WhatsApp', icon: MessageCircle, href: '/features/one-click-whatsapp' },
  { name: '1-Click SMS/Email', icon: Mail, href: '/features/one-click-sms-email' },
  { name: 'Push Notification', icon: Smartphone, href: '/features/push-notification' },
  { name: 'Payment Creation', icon: CreditCard, href: '/features/payment-creation' },
  { name: 'Hour-by-hour Report', icon: Clock, href: '/features/hour-by-hour-report' },
];

const mainIndustries = [
  { name: 'Real Estate CRM', icon: Building2, href: '/industries/real-estate-crm' },
  { name: 'CRM for Education Sales Teams', icon: GraduationCap, href: '/industries/crm-for-education' },
  { name: 'Travel CRM', icon: Plane, href: '/industries/travel-crm' },
  { name: 'Loan DSA CRM', icon: Coins, href: '/industries/loan-dsa-crm' },
  { name: 'Healthcare CRM', icon: Stethoscope, href: '/industries/healthcare-crm' },
];

const moreIndustries = [
  { name: 'Automobile CRM', icon: Car, href: '/industries/automobile-crm' },
  { name: 'B2B CRM Software', icon: Briefcase, href: '/industries/b2b-crm-software' },
  { name: 'Call Center CRM', icon: Headset, href: '/industries/call-center-crm' },
  { name: 'CRM for Digital Marketing', icon: Megaphone, href: '/industries/crm-for-digital-marketing' },
  { name: 'CRM for Recruiting', icon: UserPlus, href: '/industries/crm-for-recruiting' },
  { name: 'CRM for SaaS Companies', icon: Cloud, href: '/industries/crm-for-saas-companies' },
  { name: 'CRM for Startups', icon: Rocket, href: '/industries/crm-for-startups' },
  { name: 'Financial Services CRM', icon: Banknote, href: '/industries/financial-services-crm' },
  { name: 'Fintech CRM', icon: CreditCard, href: '/industries/fintech-crm' },
  { name: 'Insurance CRM', icon: Shield, href: '/industries/insurance-crm' },
];

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">CallFlow</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
              {/* Features Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => { setFeaturesOpen(false); setShowAllFeatures(false); }}
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
                      className="absolute left-0 mt-0 flex bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                    >
                      {/* Main Features Column */}
                      <div className="w-[320px] p-4 bg-white z-10 shrink-0 relative">
                        <div className="space-y-1">
                          {mainFeatures.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center px-3 py-2.5 rounded-lg hover:bg-indigo-50 group transition-colors"
                            >
                              <item.icon className="w-5 h-5 text-indigo-600 mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 px-3">
                          <button
                            onClick={(e) => { e.preventDefault(); setShowAllFeatures(!showAllFeatures); }}
                            className="w-full text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center justify-between group"
                          >
                            <span>See all features</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllFeatures ? 'rotate-180 text-indigo-600' : '-rotate-90 group-hover:translate-x-1'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Secondary Features Column (Animated) */}
                      <AnimatePresence>
                        {showAllFeatures && (
                          <motion.div
                            initial={{ width: 0, opacity: 0, filter: 'blur(4px)' }}
                            animate={{ width: 320, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ width: 0, opacity: 0, filter: 'blur(4px)' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-slate-50/50 border-l border-slate-100 overflow-hidden shrink-0"
                          >
                            <div className="p-4 w-[320px]">
                              <div className="space-y-1">
                                {moreFeatures.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                                  >
                                    <item.icon className="w-4 h-4 text-slate-500 mr-3 group-hover:text-indigo-600" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900">
                                      {item.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                onMouseLeave={() => { setIndustriesOpen(false); setShowAllIndustries(false); }}
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
                      className="absolute left-0 mt-0 flex bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                    >
                      {/* Main Industries Column */}
                      <div className="w-[320px] p-4 bg-white z-10 shrink-0 relative">
                        <div className="space-y-1">
                          {mainIndustries.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center px-3 py-2.5 rounded-lg hover:bg-indigo-50 group transition-colors"
                            >
                              <item.icon className="w-5 h-5 text-indigo-600 mr-3 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-700">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 px-3">
                          <button
                            onClick={(e) => { e.preventDefault(); setShowAllIndustries(!showAllIndustries); }}
                            className="w-full text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center justify-between group"
                          >
                            <span>More Industries</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllIndustries ? 'rotate-180 text-indigo-600' : '-rotate-90 group-hover:translate-x-1'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Secondary Industries Column (Animated) */}
                      <AnimatePresence>
                        {showAllIndustries && (
                          <motion.div
                            initial={{ width: 0, opacity: 0, filter: 'blur(4px)' }}
                            animate={{ width: 320, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ width: 0, opacity: 0, filter: 'blur(4px)' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-slate-50/50 border-l border-slate-100 overflow-hidden shrink-0"
                          >
                            <div className="p-4 w-[320px] max-h-[400px] overflow-y-auto custom-scrollbar">
                              <div className="space-y-1">
                                {moreIndustries.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                                  >
                                    <item.icon className="w-4 h-4 text-slate-500 mr-3 group-hover:text-indigo-600" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900">
                                      {item.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-5 h-5 mr-3 text-indigo-500" />
                {item.name}
              </Link>
            ))}

            <div className="mt-4 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">More Features</div>
            {moreFeatures.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-4 h-4 mr-3 text-slate-400" />
                {item.name}
              </Link>
            ))}

            <div className="border-t border-slate-100 my-2"></div>

            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">
              Pricing
            </a>

            {/* Industries Mobile */}
            <div className="mt-4 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Industries</div>
            {mainIndustries.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-5 h-5 mr-3 text-indigo-500" />
                {item.name}
              </Link>
            ))}

            <div className="mt-2 px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">More Industries</div>
            {moreIndustries.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              >
                <item.icon className="w-4 h-4 mr-3 text-slate-400" />
                {item.name}
              </Link>
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
