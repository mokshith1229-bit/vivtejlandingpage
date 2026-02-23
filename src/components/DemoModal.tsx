import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Calendar, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { useState, useEffect, ChangeEvent } from 'react';

// Mock Backend Logic
const submitDemoRequest = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("--- BACKEND AUTOMATION TRIGGERED ---");
      console.log("1. Lead Saved:", data);
      console.log("2. Tagged as: 'Demo Request'");
      console.log("3. Assigned to: Sales Team A (Round Robin)");
      console.log("4. Email Sent: Confirmation Template ID #102");
      console.log("5. Internal Notification: Slack Alert Sent to #sales-leads");
      console.log("6. CRM Task Created: 'Call for Demo' - Due in 2 hrs");
      console.log("7. Pipeline Stage Updated: 'Demo Scheduled'");
      console.log("------------------------------------");
      resolve({ success: true });
    }, 1500);
  });
};

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    teamSize: '',
    leadsVolume: '',
    currentCrm: '',
    goal: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen]);

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid work email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.company) newErrors.company = "Company name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (!formData.teamSize) newErrors.teamSize = "Please select team size";
    if (!formData.leadsVolume) newErrors.leadsVolume = "Please select lead volume";
    if (!formData.goal) newErrors.goal = "Please select a primary goal";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (validateStep2()) {
      setIsLoading(true);
      await submitDemoRequest(formData);
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {isSuccess ? 'Demo Confirmed!' : 'Book Your Personalized Demo'}
                  </h2>
                  {!isSuccess && (
                    <p className="text-sm text-slate-500 mt-1">
                      See how CallFlow can increase your sales by 3x.
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto">
                {!isSuccess ? (
                  <>
                    {/* Progress Indicator */}
                    <div className="flex items-center mb-8">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>1</div>
                      <div className={`flex-1 h-1 mx-4 rounded-full transition-colors ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-100'}`}></div>
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>2</div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-5"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                                <input
                                  type="text"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                                  placeholder="John Doe"
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Work Email</label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                                  placeholder="john@company.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                                <div className="relative">
                                  <span className="absolute left-4 top-2.5 text-slate-400 text-sm border-r border-slate-200 pr-2 mr-2">🇮🇳 +91</span>
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full pl-20 pr-4 py-2.5 rounded-xl border ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                                    placeholder="98765 43210"
                                  />
                                </div>
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                                <input
                                  type="text"
                                  name="company"
                                  value={formData.company}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.company ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                                  placeholder="Acme Inc."
                                />
                                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                              </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                              <button
                                onClick={handleNext}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all"
                              >
                                Continue
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-5"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Industry</label>
                                <select
                                  name="industry"
                                  value={formData.industry}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.industry ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                                >
                                  <option value="">Select Industry</option>
                                  <option value="Real Estate">Real Estate</option>
                                  <option value="Education">Education</option>
                                  <option value="Finance">Finance / Loans</option>
                                  <option value="Healthcare">Healthcare</option>
                                  <option value="Automotive">Automotive</option>
                                  <option value="Other">Other</option>
                                </select>
                                {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Team Size</label>
                                <select
                                  name="teamSize"
                                  value={formData.teamSize}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.teamSize ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                                >
                                  <option value="">Select Size</option>
                                  <option value="1-10">1 - 10 Agents</option>
                                  <option value="10-50">10 - 50 Agents</option>
                                  <option value="50-200">50 - 200 Agents</option>
                                  <option value="200+">200+ Agents</option>
                                </select>
                                {errors.teamSize && <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Monthly Lead Volume</label>
                                <select
                                  name="leadsVolume"
                                  value={formData.leadsVolume}
                                  onChange={handleChange}
                                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.leadsVolume ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                                >
                                  <option value="">Select Volume</option>
                                  <option value="<100">Less than 100</option>
                                  <option value="100-500">100 - 500</option>
                                  <option value="500-2000">500 - 2,000</option>
                                  <option value="2000+">2,000+</option>
                                </select>
                                {errors.leadsVolume && <p className="text-red-500 text-xs mt-1">{errors.leadsVolume}</p>}
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Current CRM (Optional)</label>
                                <input
                                  type="text"
                                  name="currentCrm"
                                  value={formData.currentCrm}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-indigo-100 focus:border-indigo-500 focus:ring-4 outline-none transition-all"
                                  placeholder="e.g. Excel, Salesforce"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-3">Primary Goal</label>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {['Automate Calling', 'Track Sales Team', 'Lead Distribution', 'Better Reporting'].map((goal) => (
                                  <label
                                    key={goal}
                                    className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${formData.goal === goal ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:border-indigo-300'}`}
                                  >
                                    <input
                                      type="radio"
                                      name="goal"
                                      value={goal}
                                      checked={formData.goal === goal}
                                      onChange={(e) => {
                                        setFormData({ ...formData, goal: e.target.value });
                                        setErrors({ ...errors, goal: '' });
                                      }}
                                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-sm font-medium">{goal}</span>
                                  </label>
                                ))}
                              </div>
                              {errors.goal && <p className="text-red-500 text-xs mt-1">{errors.goal}</p>}
                            </div>

                            <div className="pt-4 flex justify-between items-center">
                              <button
                                onClick={() => setStep(1)}
                                className="text-slate-500 hover:text-slate-700 font-medium flex items-center"
                              >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                              </button>
                              <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
                              >
                                {isLoading ? (
                                  <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Booking...
                                  </>
                                ) : (
                                  'Book My Demo'
                                )}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Confirmed!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      We've sent a confirmation email to <strong>{formData.email}</strong>. Please select a time slot below to finalize your demo.
                    </p>

                    {/* Mock Calendar */}
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-left">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-slate-900 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                          Select a Time
                        </h4>
                        <span className="text-sm text-slate-500">Timezone: Asia/Kolkata</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'].map((time) => (
                          <button
                            key={time}
                            className="py-2 px-3 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="mt-8 text-slate-400 hover:text-slate-600 text-sm font-medium"
                    >
                      Close window
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
