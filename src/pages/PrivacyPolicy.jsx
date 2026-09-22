import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { POLICY_VERSION, hasAcceptedCurrentPrivacy, savePrivacyAcceptance } from '../config/privacyConfig';
import { MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search, state } = location;
  const params = new URLSearchParams(search);
  const next = params.get('next') || '/';
  const originalFrom = state?.from || '/';
  const alreadyAccepted = hasAcceptedCurrentPrivacy();

  const accept = () => {
    try {
      savePrivacyAcceptance();
    } catch (e) {
      console.warn('Could not persist privacy acceptance', e);
    }
    navigate(next, { state: { from: originalFrom }, replace: true });
  };

  const decline = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 py-20 px-4">
      <div className="max-w-4xl w-full bg-white rounded-[20px] shadow-2xl border border-slate-100 p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-orange-600 p-3 rounded-lg text-white"><MapPin /></div>
          <div>
            <h1 className="text-2xl font-serif font-black text-slate-900">Privacy Policy & User Consent</h1>
            <p className="text-sm text-slate-500">Effective: {POLICY_VERSION}</p>
          </div>
        </div>

        {/* Full policy (expanded, formal) */}
        <section className="mb-6 text-sm text-slate-700 leading-relaxed">
          <h3 className="font-bold mb-3">Privacy Policy — Full Text</h3>
          <p className="mb-3">Introduction: BharatDarshan ("we", "our", or "us") is committed to protecting the privacy of users of our website and services. This Privacy Policy describes the types of information we collect, how we use and disclose that information, and the choices you have regarding your information. By using our services or accepting this policy you consent to the practices described in this document.</p>

          <p className="mb-3">Information we collect: We collect information you provide directly to us when you create an account, sign in with an external provider, communicate with support, or otherwise interact with features that require identification. This includes your name, email address, profile picture and any content you provide. We also automatically collect technical and usage information such as device identifiers, browser type, IP address, geographic information approximated from IP, event logs, pages visited, and other diagnostic data necessary to deliver and improve our service.</p>

          <p className="mb-3">How we use information: We use personal information to authenticate accounts, provide and personalize the service, enable features (such as saved searches and preferences), communicate important notices, and improve user experience. We also use aggregated or anonymized data for analytics, product improvement and research. We may send administrative messages by email (for example account verification or policy updates).</p>

          <p className="mb-3">Legal bases for processing (where applicable): Where required by applicable law, we rely on one or more legal bases to process personal data, including consent, performance of a contract, legitimate interests in providing and improving the service, and compliance with legal obligations. When you sign up or accept this policy, you provide consent for the processing described herein, to the extent consent is required.</p>

          <p className="mb-3">Sharing and disclosure: We do not sell personal data to third parties. We may share data with service providers who perform services on our behalf (for example hosting, analytics, email delivery). These service providers are contractually limited to use the data only for the services they perform. We may also disclose information to comply with legal obligations, to enforce our terms, or to protect the rights, safety or property of BharatDarshan, our users, or others.</p>

          <p className="mb-3">Security and storage: We store user data using Firebase services and industry-standard protections. We employ administrative, technical and physical safeguards designed to protect data from unauthorized access and use. While we take reasonable steps to protect user data, no transmission or storage system can be guaranteed to be 100% secure.</p>

          <p className="mb-3">Data retention: We retain personal data as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Where feasible, we delete or anonymize data once it is no longer needed. For users who request account deletion we will remove personal information from active systems subject to legal and operational constraints.</p>

          <p className="mb-3">Children's privacy: Our service is not intended for children under the age of 13. We do not knowingly collect personal data from children under applicable age limits. If you believe we have collected personal information from a child without proper parental consent, please contact us and we will take steps to remove the information.</p>

          <p className="mb-3">International transfers: Our systems may transfer and store personal information in servers located in countries other than your home country. Where required, we implement safeguards to protect data when transferred across borders, including contractual protections with service providers.</p>

          <p className="mb-3">Your rights and choices: Depending on your jurisdiction, you may have rights to access, correct, port, restrict or delete your personal data. You may opt out of receiving promotional communications. To exercise these rights or make a request, contact us at joinbharatdarshanyatra@gmail.com. We will respond in accordance with applicable law and may need to verify your identity before fulfilling certain requests.</p>

          <p className="mb-3">Changes to this policy: We may update this policy from time to time. If we make material changes, we will post the updated policy and, where required by law or significant change, request re-acceptance from users. The current policy version is shown at the top of this page.</p>

          <p className="mb-3">Contact: For questions, requests or privacy concerns contact: joinbharatdarshanyatra@gmail.com. You may also write to our data protection officer at the address published on our website.</p>

          <p className="mb-3">Acknowledgement: By clicking "I accept" you confirm that you have read and understood this Privacy Policy and consent to our processing of your personal data as described herein.</p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          {alreadyAccepted ? (
            <button onClick={accept} className="py-3 px-5 bg-orange-600 text-white rounded-lg font-bold">
              Continue
            </button>
          ) : (
            <>
              <button onClick={decline} className="py-3 px-5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50">
                I do not accept
              </button>
              <button onClick={accept} className="py-3 px-5 bg-orange-600 text-white rounded-lg font-bold">
                I accept
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

