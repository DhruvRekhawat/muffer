
import TermsSection from '@/components/ui/terms-section';
import {
    Ban,
    Clock,
    Copyright,
    CreditCard,
    Gavel,
    HelpCircle,
    Info,
    ListOrdered,
    Mail,
    Package,
    RefreshCcw,
    Settings,
    Shield,
    User
} from 'lucide-react';

const TnC = () => {
  const effectiveDate = "May 13, 2025";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-poppins">
      
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 mb-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-2 font-poppins">Terms & Conditions</h1>
            <p className="text-center text-gray-500 mb-6">Effective Date: {effectiveDate}</p>
            <p className="text-gray-700 mb-4">
              By placing an order through Muffer, you agree to the following Terms and Conditions. 
              Please read them carefully before proceeding.
            </p>
            <div className="h-1 w-20 bg-blue-500 mx-auto my-6 rounded-full"></div>
          </div>

          <TermsSection 
            title="1. Service Overview"
            icon={<Info size={24} />}
            content={
              <p>
                Muffer offers a range of video services under three primary categories: <strong>EditMax, AdMax, and ContentMax</strong>, 
                along with optional add-ons and subscription bundles. Each service is customized based on your selected preferences, 
                and pricing is calculated accordingly.
              </p>
            }
          />

          <TermsSection 
            title="2. Order Process"
            icon={<ListOrdered size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders are initiated through our digital form, with step-by-step selections to define your requirements.</li>
                <li>You are responsible for the accuracy of all inputs including file uploads, creative brief, and selected services/add-ons.</li>
                <li>Dynamic pricing will be shown in real time. Final cost is payable at checkout.</li>
              </ul>
            }
          />

          <TermsSection 
            title="3. Payment Terms"
            icon={<CreditCard size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>All payments are required <strong>in advance</strong> and processed securely via our payment gateway.</li>
                <li>Prices listed are in INR (₹) and inclusive of applicable taxes.</li>
                <li>Subscription bundles are billed <strong>monthly</strong>, unless stated otherwise.</li>
                <li>No order will be processed without full payment confirmation.</li>
              </ul>
            }
          />

          <TermsSection 
            title="4. Deliverables & Turnaround Time"
            icon={<Clock size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Delivery timelines vary based on the selected service, video duration, and add-ons. Estimated delivery time will be communicated post-order.</li>
                <li>Rush Delivery charges apply as per the selected service tier.</li>
                <li>Premium packages and bundles may include faster turnaround times or priority handling.</li>
              </ul>
            }
          />

          <TermsSection 
            title="5. Revisions Policy"
            icon={<RefreshCcw size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Each order includes <strong>one (1) round of minor revisions</strong> unless explicitly stated otherwise.</li>
                <li>Major changes (e.g., re-editing from scratch, change of concept or voice-over after delivery) may incur additional charges.</li>
                <li>All revision requests must be submitted within <strong>5 business days</strong> of delivery.</li>
              </ul>
            }
          />

          <TermsSection 
            title="6. Subscription Bundles"
            icon={<Package size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Subscription services are billed monthly and include pre-defined content types.</li>
                <li>Bundles are non-transferable and non-refundable once a cycle starts.</li>
                <li>Unused services within a billing cycle <strong>do not carry over</strong> to the next month.</li>
              </ul>
            }
          />

          <TermsSection 
            title="7. Cancellations & Refunds"
            icon={<Ban size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders can be canceled <strong>within 2 hours</strong> of payment for a full refund.</li>
                <li>After this window, cancellations are not eligible for a refund due to allocation of creative resources.</li>
                <li>In the case of service non-fulfillment or technical error on our end, partial or full refunds may be considered on a case-by-case basis.</li>
              </ul>
            }
          />

          <TermsSection 
            title="8. Intellectual Property"
            icon={<Copyright size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>You retain full rights to the raw and final video content delivered.</li>
                <li>Muffer reserves the right to showcase anonymized versions of completed work (without client branding or sensitive data) for portfolio or promotional use unless explicitly opted out in writing.</li>
              </ul>
            }
          />

          <TermsSection 
            title="9. Customer Responsibilities"
            icon={<User size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide clear, accurate, and complete inputs for all orders.</li>
                <li>Ensure that any files or materials provided do not violate copyright laws or third-party rights.</li>
                <li>Maintain backups of all submitted materials.</li>
              </ul>
            }
          />

          <TermsSection 
            title="10. Communication & Support"
            icon={<Mail size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Support is available via <strong>email: <a href="mailto:support@muffer.in" className="text-blue-500 hover:underline">support@muffer.in</a></strong> and <strong>WhatsApp: [Insert Number]</strong>.</li>
                <li>Standard response time is within <strong>24 business hours</strong>.</li>
              </ul>
            }
          />

          <TermsSection 
            title="11. Limitation of Liability"
            icon={<Shield size={24} />}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Muffer is not liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
                <li>Maximum liability in any case is limited to the amount paid for the specific order in question.</li>
              </ul>
            }
          />

          <TermsSection 
            title="12. Modifications"
            icon={<Settings size={24} />}
            content={
              <p>
                Muffer reserves the right to update or modify these Terms & Conditions at any time without prior notice. 
                Continued use of our services after any such changes constitutes your acceptance of the new terms.
              </p>
            }
          />

          <TermsSection 
            title="13. Governing Law"
            icon={<Gavel size={24} />}
            content={
              <p>
                These Terms shall be governed by the laws of India. Any disputes shall be subject to the 
                jurisdiction of the courts in [Your City/State].
              </p>
            }
          />

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
            <HelpCircle className="mx-auto text-blue-500 mb-3" size={32} />
            <p className="text-blue-700">
              If you have any questions or concerns regarding these Terms, please contact us before proceeding with your order.
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default TnC;