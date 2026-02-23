import React from 'react';
import FeaturePageLayout from '../../components/layout/FeaturePageLayout';

export default function TermsOfService({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <FeaturePageLayout
            title="Terms of Service | CallFlow CRM"
            description="Terms, conditions, and guidelines for using the CallFlow platform and services."
        >
            <section className="pt-32 pb-24 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-12 pb-8 border-b border-slate-200">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-display">Terms of Service</h1>
                        <p className="text-slate-500">Effective Date: October 20, 2026</p>
                    </div>

                    <div className="prose prose-lg prose-indigo max-w-none text-slate-600">
                        <p>
                            Welcome to CallFlow. These Terms of Service ("Terms") shape our relationship with you. Please read them carefully. By using our Services, you agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of an organization, you are agreeing to these Terms for that organization and representing that you have the authority to bind that organization to these terms.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Access and Use of the Service</h2>
                        <p>
                            <strong>1.1 Your Account:</strong> To access the Service, you must create an account. You must provide accurate and complete information and keep your account information updated. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure.
                        </p>
                        <p>
                            <strong>1.2 Acceptable Use:</strong> You agree not to misuse the CallFlow services or help anyone else do so. You agree not to do any of the following in connection with the Services:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                            <li>Probe, scan, or test the vulnerability of any system or network.</li>
                            <li>Breach or otherwise circumvent any security or authentication measures.</li>
                            <li>Access, tamper with, or use non-public areas or parts of the Services.</li>
                            <li>Interfere with or disrupt any user, host, or network, for example by sending a virus, overloading, flooding, spamming, or mail-bombing any part of the Services.</li>
                            <li>Send unsolicited communications, promotions or advertisements, or spam.</li>
                            <li>Use CallFlow in violation of telecommunication laws, including the TCPA (Telephone Consumer Protection Act) or local equivalents regarding robocalls, autodialers, and DNC (Do Not Call) lists.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Payment and Billing</h2>
                        <p>
                            <strong>2.1 Fees:</strong> You will pay all fees specified in the Order Form or applicable online purchasing portal. Payment obligations are non-cancelable, and fees paid are non-refundable.
                        </p>
                        <p>
                            <strong>2.2 Invoicing and Payment:</strong> You will provide us with valid and updated credit card information, or with a valid purchase order or alternative document reasonably acceptable to us. If you provide credit card information to us, you authorize us to charge such credit card for all Purchased Services.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Term and Termination</h2>
                        <p>
                            <strong>3.1 Term:</strong> The term of each subscription shall be as specified in the applicable Order Form. Except as otherwise specified in an Order Form, subscriptions will automatically renew for additional periods equal to the expiring subscription term unless either party gives the other notice of non-renewal.
                        </p>
                        <p>
                            <strong>3.2 Termination for Cause:</strong> A party may terminate this Agreement for cause (i) upon 30 days written notice to the other party of a material breach if such breach remains uncured at the expiration of such period, or (ii) if the other party becomes the subject of a petition in bankruptcy or any other proceeding relating to insolvency.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by applicable law, in no event will CallFlow, its affiliates, directors, employees or its licensors be liable for any direct, indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, that result from the use of, or inability to use, this service.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Modifications to Terms</h2>
                        <p>
                            We may revise these Terms from time to time by posting a modified version on our website. By continuing to access or use the Services after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, please stop using the Services.
                        </p>

                        <div className="mt-16 text-sm text-slate-500">
                            Questions about the Terms of Service should be sent to us at <a href="mailto:legal@callflow.com" className="text-indigo-600 hover:underline">legal@callflow.com</a>.
                        </div>
                    </div>
                </div>
            </section>
        </FeaturePageLayout>
    );
}
