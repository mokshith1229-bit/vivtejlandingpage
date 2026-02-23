import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Calendar, Loader2, Globe, Clock, ChevronLeft, ChevronRight, Video } from 'lucide-react';
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
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentDateView, setCurrentDateView] = useState(new Date());
  const [demoBooked, setDemoBooked] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    company: '',
    email: '',
    jobTitle: '',
    state: '',
    timeline: '',
    source: '',
    teamSize: '',
    industry: '',
    reasonForCrm: '',
    currentTool: '',
    monthlyRevenue: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setErrors({});
      setSelectedDate(null);
      setCurrentDateView(new Date());
      setDemoBooked(false);
    }
  }, [isOpen]);

  const calendarYear = currentDateView.getFullYear();
  const calendarMonth = currentDateView.getMonth();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
  const startingDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handlePrevMonth = () => {
    setCurrentDateView(new Date(calendarYear, calendarMonth - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDateView(new Date(calendarYear, calendarMonth + 1, 1));
    setSelectedDate(null);
  };

  const todayDateObj = new Date();
  const isCurrentMonth = todayDateObj.getFullYear() === calendarYear && todayDateObj.getMonth() === calendarMonth;
  const todayDateNum = todayDateObj.getDate();

  const handleTimeSelect = (time: string) => {
    setDemoBooked(true);
    setTimeout(() => {
      onClose();
    }, 4000);
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamSize) newErrors.teamSize = "Please select team size";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.industry) newErrors.industry = "Please select an industry";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.reasonForCrm) newErrors.reasonForCrm = "Required";
    if (!formData.currentTool) newErrors.currentTool = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone no. is required";
    if (!formData.company) newErrors.company = "Company name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Company email is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.state) newErrors.state = "Please select a state";
    if (!formData.timeline) newErrors.timeline = "Please select a timeline";
    if (!formData.source) newErrors.source = "Please tell us how you heard about us";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const handleSubmit = async () => {
    if (validateStep4()) {
      setIsLoading(true);
      await submitDemoRequest(formData);
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
              className={`bg-white rounded-2xl shadow-2xl w-full ${isSuccess ? 'max-w-5xl' : 'max-w-2xl'} overflow-hidden flex flex-col max-h-[90vh] relative transition-all duration-300`}
            >
              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Book a demo
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        See how CallFlow can increase your sales by 3x.
                      </p>
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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                          >
                            <div>
                              <h3 className="text-lg font-medium text-slate-800 mb-4">How many people are there in your sales team? <span className="text-red-500">*</span></h3>
                              <div className="space-y-3">
                                {['Upto 2', '3-5', '6-10', '11-20', '21-50', '51-100', '100plus'].map((size) => (
                                  <label key={size} className="flex items-center cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${formData.teamSize === size ? 'border-indigo-600' : 'border-slate-300 group-hover:border-indigo-400'}`}>
                                      {formData.teamSize === size && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>}
                                    </div>
                                    <span className="text-slate-700 font-medium">{size}</span>
                                    <input
                                      type="radio"
                                      name="teamSize"
                                      value={size}
                                      checked={formData.teamSize === size}
                                      onChange={handleChange}
                                      className="hidden"
                                    />
                                  </label>
                                ))}
                              </div>
                              {errors.teamSize && <p className="text-red-500 text-xs mt-2">{errors.teamSize}</p>}
                            </div>

                            <div className="pt-6 flex justify-center">
                              <button
                                type="button"
                                onClick={handleNext}
                                className="w-full text-center px-8 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all font-medium"
                              >
                                Continue
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
                            className="space-y-6"
                          >
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Industry <span className="text-red-500">*</span></label>
                              <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.industry ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                              >
                                <option value="">Choose...</option>
                                <option value="Education">Education</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Finance">Finance</option>
                                <option value="Travel">Travel</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Other">Other</option>
                              </select>
                              {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-4">
                              <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-full text-center px-8 py-3 rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all font-medium"
                              >
                                Previous
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className="w-full text-center px-8 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all font-medium"
                              >
                                Continue
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Why do you need a CRM? <span className="text-red-500">*</span></label>
                              <textarea
                                name="reasonForCrm"
                                rows={4}
                                value={formData.reasonForCrm}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.reasonForCrm ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all resize-none bg-white`}
                              />
                              {errors.reasonForCrm && <p className="text-red-500 text-xs mt-1">{errors.reasonForCrm}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">What are you using right now to manage your leads and follow-ups? <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="currentTool"
                                value={formData.currentTool}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.currentTool ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                              />
                              {errors.currentTool && <p className="text-red-500 text-xs mt-1">{errors.currentTool}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">What is your monthly revenue?</label>
                              <input
                                type="text"
                                name="monthlyRevenue"
                                value={formData.monthlyRevenue}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-indigo-100 focus:border-indigo-500 focus:ring-4 outline-none transition-all bg-white`}
                              />
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-4">
                              <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="w-full text-center px-8 py-3 rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all font-medium"
                              >
                                Previous
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className="w-full text-center px-8 py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all font-medium"
                              >
                                Continue
                              </button>
                            </div>
                          </motion.div>
                        )}

                        {step === 4 && (
                          <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Name <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                              />
                              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone no. <span className="text-red-500">*</span></label>
                              <div className="relative">
                                <span className="absolute left-4 top-2.5 text-slate-500 text-sm border-r border-slate-200 pr-2 mr-2 bg-slate-100 px-2 py-0.5 rounded">🇮🇳 +91</span>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  className={`w-full pl-24 pr-4 py-2.5 rounded-xl border ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                                />
                              </div>
                              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Company name <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.company ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                              />
                              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Company email <span className="text-red-500">*</span></label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                              />
                              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Job title <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.jobTitle ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all`}
                              />
                              {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">Select State <span className="text-red-500">*</span></label>
                              <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.state ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                              >
                                <option value="">Choose...</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Other">Other</option>
                              </select>
                              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">How soon are you planning to start? <span className="text-red-500">*</span></label>
                              <select
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.timeline ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                              >
                                <option value="">Choose...</option>
                                <option value="Immediately">Immediately</option>
                                <option value="1-3 Months">1-3 Months</option>
                                <option value="3+ Months">3+ Months</option>
                              </select>
                              {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1.5">How did you hear about us? <span className="text-red-500">*</span></label>
                              <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className={`w-full px-4 py-2.5 rounded-xl border ${errors.source ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'} focus:ring-4 outline-none transition-all bg-white`}
                              >
                                <option value="">Choose...</option>
                                <option value="Google">Google Search</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Friend">Friend / Colleague</option>
                                <option value="Advertisement">Advertisement</option>
                              </select>
                              {errors.source && <p className="text-red-500 text-xs mt-1">{errors.source}</p>}
                            </div>

                            <div className="pt-6 grid grid-cols-2 gap-4 mt-6 sticky bottom-0 bg-white border-t border-slate-100 pb-2">
                              <button
                                type="button"
                                onClick={() => setStep(3)}
                                className="w-full text-center px-8 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors font-medium"
                              >
                                Previous
                              </button>
                              <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="inline-flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                              >
                                {isLoading ? (
                                  <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Submitting
                                  </>
                                ) : (
                                  'Continue'
                                )}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex flex-col md:flex-row w-full bg-white relative min-h-[500px]">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors z-20"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="absolute top-0 right-10 bg-slate-500 text-white text-[10px] font-bold px-4 py-1.5 transform rotate-45 translate-x-8 -translate-y-2 uppercase tracking-wider z-10 shadow-sm pointer-events-none opacity-80">
                    <span className="block leading-tight text-center">Powered by<br />Calendly</span>
                  </div>

                  {/* Left Side: Information */}
                  <div className="w-full md:w-[45%] border-r border-slate-200 p-8 pt-10 flex flex-col">
                    <div className="flex-1">
                      {/* Logo Placeholder */}
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                        <motion.div
                          animate={{ rotate: 180 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Globe className="w-6 h-6" />
                        </motion.div>
                      </div>

                      <div className="text-slate-500 font-semibold mb-1 text-sm uppercase tracking-wide">CallFlow</div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">CallFlow Demo Webinar</h2>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-center text-slate-600 font-medium text-[15px]">
                          <Clock className="w-5 h-5 mr-3 text-slate-400" />
                          1 hr
                        </div>
                        <div className="flex items-start text-slate-600 font-medium text-[15px]">
                          <Video className="w-5 h-5 mr-3 mt-0.5 text-slate-400" />
                          Web conferencing details provided upon confirmation.
                        </div>
                      </div>

                      <div className="text-slate-600 text-[15px] space-y-4 leading-relaxed max-w-sm">
                        <p>CallFlow is India's Best Tele-calling, Lead management CRM.<br />Using CallFlow you can:-</p>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-sm flex items-center justify-center mr-3 mt-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span>Capture your leads from any platform and create robust automation.</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-sm flex items-center justify-center mr-3 mt-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span>Engage your leads super fast (make calls, schedule follow-up, create payment).</span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-sm flex items-center justify-center mr-3 mt-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span>Get a customized report on what is going on</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-sm text-indigo-600 hover:underline cursor-pointer font-medium">
                      Cookie settings
                    </div>
                  </div>

                  {/* Right Side: Calendar Selection */}
                  <div className="w-full md:w-[55%] p-8 pt-10 flex">
                    <div className={`flex flex-col flex-1 transition-all ${selectedDate ? 'pr-6 md:w-1/2' : 'w-full'}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-8">Select a Date & Time</h3>

                      <div className="flex items-center justify-between mb-8 max-w-[280px] mx-auto w-full">
                        <button onClick={handlePrevMonth} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="font-semibold text-slate-700">{monthNames[calendarMonth]} {calendarYear}</div>
                        <button onClick={handleNextMonth} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 mb-4 max-w-[280px] mx-auto w-full">
                        <div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
                      </div>

                      <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center max-w-[280px] mx-auto w-full mb-10">
                        {Array.from({ length: startingDayIndex }).map((_, i) => (
                          <div key={`empty-${i}`} className="p-2"></div>
                        ))}

                        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                          const isPast = isCurrentMonth && day < todayDateNum;
                          const isToday = isCurrentMonth && day === todayDateNum;

                          return (
                            <div key={`day-${day}`} className="flex items-center justify-center relative">
                              <button
                                onClick={() => !isPast && setSelectedDate(day)}
                                disabled={isPast}
                                className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-all ${selectedDate === day
                                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                                  : isPast
                                    ? 'text-slate-300 cursor-not-allowed'
                                    : 'text-indigo-600 bg-indigo-50/50 hover:bg-indigo-100/80 cursor-pointer'
                                  }`}
                              >
                                {day}
                              </button>
                              {isToday && !selectedDate && <div className="w-1 h-1 bg-indigo-600 rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2"></div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots Slide-in Panel */}
                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, x: 20, width: 0 }}
                          animate={{ opacity: 1, x: 0, width: '220px' }}
                          exit={{ opacity: 0, x: 20, width: 0 }}
                          className="border-l border-slate-100 pl-6 flex flex-col pt-16 overflow-hidden flex-shrink-0"
                        >
                          <div className="text-slate-700 mb-6 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                            {dayNames[new Date(calendarYear, calendarMonth, selectedDate).getDay()]}, {monthNames[calendarMonth]} {selectedDate}
                          </div>
                          <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                            {['4:00pm', '4:30pm', '5:00pm', '5:30pm'].map(time => (
                              <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className="w-full py-4 border border-indigo-200 text-indigo-600 font-bold rounded-lg hover:border-indigo-600 hover:border-2 transition-all text-center"
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {demoBooked && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-8 text-center rounded-2xl"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                        >
                          <CheckCircle className="w-12 h-12 text-green-600" />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl font-bold text-slate-900 mb-4"
                        >
                          You are scheduled!
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-slate-600 max-w-md text-lg"
                        >
                          A calendar invitation has been sent to your email address. We look forward to showing you CallFlow!
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
