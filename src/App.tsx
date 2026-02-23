import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import OneClickDialer from './pages/features/OneClickDialer';
import LeaderboardReport from './pages/features/LeaderboardReport';
import WhatsappBroadcast from './pages/features/WhatsappBroadcast';
import CallReminders from './pages/features/CallReminders';
import SalesReport from './pages/features/SalesReport';
import SmartWorkflows from './pages/features/SmartWorkflows';
import AutomaticCallRecording from './pages/features/AutomaticCallRecording';
import AgentsReport from './pages/features/AgentsReport';
import BulkEdit from './pages/features/BulkEdit';
import ExcelImport from './pages/features/ExcelImport';
import FbLeadCapture from './pages/features/FbLeadCapture';
import CustomApiIntegration from './pages/features/CustomApiIntegration';
import LeadRouting from './pages/features/LeadRouting';
import WhatsappAlerts from './pages/features/WhatsappAlerts';
import OneClickWhatsapp from './pages/features/OneClickWhatsapp';
import OneClickSmsEmail from './pages/features/OneClickSmsEmail';
import PushNotification from './pages/features/PushNotification';
import PaymentCreation from './pages/features/PaymentCreation';
import HourByHourReport from './pages/features/HourByHourReport';
import RealEstateCRM from './pages/industries/RealEstateCRM';
import EducationCRM from './pages/industries/EducationCRM';
import TravelCRM from './pages/industries/TravelCRM';
import LoanDSACRM from './pages/industries/LoanDSACRM';
import HealthcareCRM from './pages/industries/HealthcareCRM';
import AutomobileCRM from './pages/industries/AutomobileCRM';
import B2BCRM from './pages/industries/B2BCRM';
import CallCenterCRM from './pages/industries/CallCenterCRM';
import DigitalMarketingCRM from './pages/industries/DigitalMarketingCRM';
import RecruitingCRM from './pages/industries/RecruitingCRM';
import SaaSCRM from './pages/industries/SaaSCRM';
import StartupCRM from './pages/industries/StartupCRM';
import FinancialServicesCRM from './pages/industries/FinancialServicesCRM';
import FintechCRM from './pages/industries/FintechCRM';
import InsuranceCRM from './pages/industries/InsuranceCRM';

// New Core Pages
import Features from './pages/features/Features';
import MobileApp from './pages/features/MobileApp';
import Integrations from './pages/features/Integrations';
import Pricing from './pages/pricing/Pricing';
import Blog from './pages/blog/Blog';
import Updates from './pages/blog/Updates';
import HelpCenter from './pages/help/HelpCenter';
import Webinars from './pages/webinars/Webinars';
import CaseStudies from './pages/case-studies/CaseStudies';
import Community from './pages/community/Community';
import About from './pages/company/About';
import Careers from './pages/company/Careers';
import Legal from './pages/legal/Legal';
import Contact from './pages/contact/Contact';
import Partners from './pages/partners/Partners';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Core Pages */}
        <Route path="/features" element={<Features />} />
        <Route path="/features/mobile-app" element={<MobileApp />} />
        <Route path="/features/integrations" element={<Integrations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/updates" element={<Updates />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Feature Specific Pages */}
        <Route path="/features/one-click-dialer" element={<OneClickDialer />} />
        <Route path="/features/leaderboard-report" element={<LeaderboardReport />} />
        <Route path="/features/whatsapp-broadcast-marketing" element={<WhatsappBroadcast />} />
        <Route path="/features/call-reminders" element={<CallReminders />} />
        <Route path="/features/sales-report" element={<SalesReport />} />
        <Route path="/features/smart-workflows" element={<SmartWorkflows />} />
        <Route path="/features/automatic-call-recording" element={<AutomaticCallRecording />} />
        <Route path="/features/agents-report" element={<AgentsReport />} />
        <Route path="/features/bulk-edit" element={<BulkEdit />} />
        <Route path="/features/excel-import" element={<ExcelImport />} />
        <Route path="/features/fb-lead-capture" element={<FbLeadCapture />} />
        <Route path="/features/custom-api-integration" element={<CustomApiIntegration />} />
        <Route path="/features/lead-routing" element={<LeadRouting />} />
        <Route path="/features/whatsapp-alerts" element={<WhatsappAlerts />} />
        <Route path="/features/one-click-whatsapp" element={<OneClickWhatsapp />} />
        <Route path="/features/one-click-sms-email" element={<OneClickSmsEmail />} />
        <Route path="/features/push-notification" element={<PushNotification />} />
        <Route path="/features/payment-creation" element={<PaymentCreation />} />
        <Route path="/features/hour-by-hour-report" element={<HourByHourReport />} />
        <Route path="/industries/real-estate-crm" element={<RealEstateCRM />} />
        <Route path="/industries/crm-for-education" element={<EducationCRM />} />
        <Route path="/industries/travel-crm" element={<TravelCRM />} />
        <Route path="/industries/loan-dsa-crm" element={<LoanDSACRM />} />
        <Route path="/industries/healthcare-crm" element={<HealthcareCRM />} />
        <Route path="/industries/automobile-crm" element={<AutomobileCRM />} />
        <Route path="/industries/b2b-crm-software" element={<B2BCRM />} />
        <Route path="/industries/call-center-crm" element={<CallCenterCRM />} />
        <Route path="/industries/crm-for-digital-marketing" element={<DigitalMarketingCRM />} />
        <Route path="/industries/crm-for-recruiting" element={<RecruitingCRM />} />
        <Route path="/industries/crm-for-saas-companies" element={<SaaSCRM />} />
        <Route path="/industries/crm-for-startups" element={<StartupCRM />} />
        <Route path="/industries/financial-services-crm" element={<FinancialServicesCRM />} />
        <Route path="/industries/fintech-crm" element={<FintechCRM />} />
        <Route path="/industries/insurance-crm" element={<InsuranceCRM />} />
      </Routes>
    </Router>
  );
}
