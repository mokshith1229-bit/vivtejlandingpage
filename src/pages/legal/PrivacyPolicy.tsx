import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';

export default function PrivacyPolicy({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <FeaturePageLayout
            title="Privacy Policy | CallFlow CRM"
            description="Learn how CallFlow collects, uses, and protects your personal and company data."
        >
            <section className="pt-32 pb-24 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-12 pb-8 border-b border-slate-200">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-display">Privacy Policy</h1>
                        <p className="text-slate-500">Last Updated: October 20, 2026</p>
                    </div>

                    <div className="prose prose-lg prose-indigo max-w-none text-slate-600">
                        <p>
                            At CallFlow Inc. ("CallFlow", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy.
                        </p>
                        <p>
                            This policy describes the types of information we may collect from you or that you may provide when you visit the website `https://callflow.com` (our "Website") or use our web and mobile applications (our "Service") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
                        <p>We collect several types of information from and about users of our Service, including information:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Personal Data:</strong> By which you may be personally identified, such as name, postal address, e-mail address, telephone number, and payment information.</li>
                            <li><strong>Usage Data:</strong> About your internet connection, the equipment you use to access our Service, and usage details.</li>
                            <li><strong>Customer Data:</strong> Data that you input into our CRM, such as your leads' contact information, call recordings, and chat logs. <strong>You retain all rights to your Customer Data.</strong></li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>To present our Service and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it (e.g., executing a billing transaction).</li>
                            <li>To notify you about changes to our Service.</li>
                            <li>To allow you to participate in interactive features on our Service.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Data Security & Storage</h2>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls using enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit).
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Third-Party Integrations</h2>
                        <p>
                            Our Service allows you to connect with third-party applications (e.g., Twilio, WhatsApp, Salesforce). Should you choose to enable these integrations, information may be shared between CallFlow and these third-party services. We are not responsible for the privacy practices of these third parties.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Information</h2>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@callflow.com" className="text-indigo-600 hover:underline">privacy@callflow.com</a>.
                        </p>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
