import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import { ShieldCheck, FileText, Lock, Eye, Scale, UserCheck, AlertCircle, Mail } from 'lucide-react';

export const PrivacyPolicyPage = () => (
  <PageContainer 
    title="Privacy Policy | Commite Events Lucknow"
    description="Official Privacy Policy and Data Protection guidelines for Commite Events, Parikshit Events, and Crewlytics in Lucknow, Uttar Pradesh."
  >
    <section className="section-padding grid-background select-none">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          overline="Legal & Data Governance"
          title="Privacy Policy"
          subtitle="Last Updated: July 2026 • Enterprise Data Protection & Security Guidelines"
        />

        <div className="flex flex-col gap-[10px] text-[var(--text-primary)]" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Introduction Card */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                1. Commitment To Privacy
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              Commite Events ("Company", "We", "Us", or "Our"), operating out of Gomti Nagar, Lucknow, Uttar Pradesh, along with its specialized divisions — <strong>Parikshit Events</strong> and <strong>Crewlytics</strong> — is committed to protecting the privacy and security of our clients, event attendees, corporate partners, and volunteer force. This Privacy Policy outlines how we collect, process, store, and safeguard information provided across our website, consultation forms, and event management operations.
            </p>
          </Card>

          {/* Data Collection */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Eye className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                2. Information We Collect
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              We gather necessary details to deliver high-precision event logistics, staffing, and consultation services:
            </p>
            <ul className="space-y-3 pl-4 list-disc text-sm text-[var(--text-secondary)]">
              <li><strong>Contact & Business Data:</strong> Full name, official email address, telephone numbers, organization/institution name, and office address provided during quote requests or inquiries.</li>
              <li><strong>Event Specifications:</strong> Venue details, estimated budget tiers, audience headcount, technical riders, artist booking requirements, and event schedules.</li>
              <li><strong>Staffing & Candidate Profiles:</strong> For applicants connecting via Crewlytics or Parikshit Events, we collect resumes, skill sets, identity verification documents, and availability schedules for ground deployment.</li>
              <li><strong>Technical & Usage Metrics:</strong> Device IP addresses, browser types, page interaction logs, and referral source data gathered automatically via cookies to optimize website performance.</li>
            </ul>
          </Card>

          {/* Usage of Information */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <FileText className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                3. How We Use Collected Data
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              Collected information is strictly utilized for operational efficiency and service fulfillment:
            </p>
            <ul className="space-y-3 pl-4 list-disc text-sm text-[var(--text-secondary)]">
              <li>Preparing customized event proposals, cost estimates, and contractual execution riders.</li>
              <li>Deploying vetted volunteer crews, security personnel, hostesses, and technical directors to assigned event venues.</li>
              <li>Communicating critical event updates, venue inspection reports, and billing milestones.</li>
              <li>Fulfilling legal, tax, compliance, and safety obligations under Uttar Pradesh state laws.</li>
            </ul>
          </Card>

          {/* Protection & Non-Disclosure */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Lock className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                4. Data Security & Non-Disclosure
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              We enforce strict data access protocols. We <strong>NEVER sell, rent, or trade</strong> client details or candidate data to third-party advertising brokers. Confidential information is shared only with verified internal event leads, necessary logistics vendors, and government/security authorities when mandatory for event permits and public safety compliance.
            </p>
          </Card>

          {/* Photography & Media Usage */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <UserCheck className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                5. Media & Event Photography Rights
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              As part of our portfolio archive, Commite Events records photos and videos of live stage setups, crowd management execution, and event highlights. High-level event photos may be featured in our official case studies unless a client explicitly requests a non-disclosure agreement (NDA) prior to contract execution.
            </p>
          </Card>

          {/* Contact Details */}
          <Card hoverEffect className="p-8 space-y-4 bg-[var(--bg-tertiary)] border-[var(--border-medium)]">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Mail className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                6. Privacy Inquiries & Contact
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              If you have any questions regarding this Privacy Policy or wish to request data updates, please contact our administrative desk:
            </p>
            <div className="text-xs font-mono text-[var(--text-primary)] space-y-1 pt-2">
              <p><strong>Office:</strong> Commite Events, Gomti Nagar, Lucknow, UP 226010</p>
              <p><strong>Email:</strong> support@committeevents.com</p>
              <p><strong>Direct Helpline:</strong> +91 92197 51766</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  </PageContainer>
);

export const TermsPage = () => (
  <PageContainer 
    title="Terms & Conditions | Commite Events Lucknow"
    description="Official Terms of Service and Operational Conditions governing Commite Events, Parikshit Events, and Crewlytics services."
  >
    <section className="section-padding grid-background select-none">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          overline="Operational Governance"
          title="Terms & Conditions"
          subtitle="Enterprise Service Agreements & Standard Operational Protocols"
        />

        <div className="flex flex-col gap-[10px] text-[var(--text-primary)]" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Section 1 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Scale className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                1. Acceptance & Contractual Binding
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              By engaging Commite Events, requesting a quotation, or signing an event service rider (including contracts for <strong>Parikshit Events</strong> or <strong>Crewlytics</strong>), the client ("Client") agrees to be legally bound by these Terms & Conditions. These terms apply to all corporate conferences, college fests, live concerts, luxury weddings, and sports management projects executed across India.
            </p>
          </Card>

          {/* Section 2 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <FileText className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                2. Scope of Services & Deliverables
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              Commite Events agrees to supply specified turn-key services including stage fabrication, sound & lighting setup, volunteer force management, security bouncers, artist coordination, and ground control as detailed in the approved project scope document. Any additions or scope expansions requested during or right before the event will be billed as additional deliverables.
            </p>
          </Card>

          {/* Section 3 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                3. Booking, Payment & Settlement Terms
              </h3>
            </div>
            <ul className="space-y-3 pl-4 list-disc text-sm text-[var(--text-secondary)]">
              <li><strong>Advance Booking Deposit:</strong> Event booking is confirmed only upon receipt of the agreed advance deposit percentage.</li>
              <li><strong>Milestone Payments:</strong> Remaining balances must be cleared strictly as per the milestone payment schedule outlined in the contract prior to event execution or stage handover.</li>
              <li><strong>Third-Party Vendor Expenses:</strong> Venue fees, artist performance deposits, and government permit charges must be funded directly or deposited in advance.</li>
            </ul>
          </Card>

          {/* Section 4 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <AlertCircle className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                4. Client Responsibilities & Venue Compliance
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              The Client is responsible for ensuring venue access during scheduled setup windows, providing stable main electrical power supply, and securing primary local permissions unless municipal clearance has been explicitly assigned to Commite Events in writing.
            </p>
          </Card>

          {/* Section 5 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Lock className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                5. Intellectual Property & Custom Designs
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              All custom event concepts, 3D stage designs, thematic blueprints, and operational flowcharts developed by Commite Events remain the exclusive intellectual property of the Company until full contractual payment is cleared.
            </p>
          </Card>

          {/* Section 6 */}
          <Card hoverEffect className="p-8 space-y-4">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                6. Force Majeure & Limitation of Liability
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              Commite Events shall not be held liable for failure or delay in executing event deliverables resulting from acts of God, extreme weather conditions, government restrictions, pandemic mandates, civil unrest, or venue power grid failures beyond reasonable control. In all events, the maximum aggregate liability of the Company shall be strictly limited to the service fee received for the specific project.
            </p>
          </Card>

          {/* Section 7 */}
          <Card hoverEffect className="p-8 space-y-4 bg-[var(--bg-tertiary)] border-[var(--border-medium)]">
            <div className="flex items-center gap-3 text-[var(--accent-primary)] mb-2">
              <Scale className="w-6 h-6" />
              <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-[var(--text-primary)]">
                7. Legal Jurisdiction
              </h3>
            </div>
            <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to our services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Lucknow, Uttar Pradesh</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  </PageContainer>
);

export default PrivacyPolicyPage;
