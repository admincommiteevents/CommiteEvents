import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeader from '../components/common/SectionHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export const CareerPage = () => {
  const [form, setForm] = React.useState({ fullName: '', email: '', phone: '', role: '', experience: '' });
  const [error, setError] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setForm((f) => ({ ...f, fullName: val }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm((f) => ({ ...f, phone: val }));
  };

  const handleEmailChange = (e) => {
    setForm((f) => ({ ...f, email: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !/^[a-zA-Z\s]+$/.test(form.fullName.trim())) {
      setError('Full name is required and must contain only alphabets.');
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!form.phone || form.phone.length !== 10) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }
    setError('');

    const message = `📋 *NEW CAREER & VOLUNTEER APPLICATION*
📍 *Form Source:* Careers Portal (/career)
-----------------------------------------
👤 *Applicant Name:* ${form.fullName}
📞 *Phone Number:* ${form.phone}
📧 *Email Address:* ${form.email}
🎯 *Applied Role:* ${form.role || 'Not specified'}
📝 *Experience / College:* ${form.experience || 'Not provided'}
-----------------------------------------
_Sent via Commite Events Careers Portal_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919219751766?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setForm({ fullName: '', email: '', phone: '', role: '', experience: '' });
  };

  return (
    <PageContainer
      title="Careers & Volunteer Hiring | Commite Events"
      description="Join Parikshit Events & Crewlytics as an event volunteer, crew member, anchor, or campus ambassador in Lucknow."
    >
      <section className="section-padding grid-background">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            overline="Join Our Force"
            title="Careers & Volunteer Portal"
            subtitle="Apply to join Parikshit Events ground crew or Crewlytics temporary staffing network. Open to students and professionals across Uttar Pradesh."
          />

          <Card hoverEffect className="mb-8">
            <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-4">Registration Form</h3>
            
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="text-emerald-500 font-bold text-xl">✓ Application Submitted</div>
                <p className="text-sm text-[var(--text-secondary)]">Thank you, {form.fullName}! Our recruitment lead will review your application and contact you on {form.phone}.</p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', phone: '', role: '', experience: '' }); }}>Submit Another Application</Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold">
                    ⚠ {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[var(--text-muted)] mb-1">Full Name * (Alphabets Only)</label>
                    <input
                      type="text" required placeholder="Rahul Sharma"
                      value={form.fullName} onChange={handleNameChange}
                      className="w-full h-12 pl-5 pr-4 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[var(--text-muted)] mb-1">Email Address *</label>
                    <input
                      type="email" required placeholder="rahul@company.com"
                      value={form.email} onChange={handleEmailChange}
                      className="w-full h-12 pl-5 pr-4 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[var(--text-muted)] mb-1">Phone Number * (10 Digits Only)</label>
                    <input
                      type="tel" required maxLength={10} placeholder="9219751766"
                      value={form.phone} onChange={handlePhoneChange}
                      className="w-full h-12 pl-5 pr-4 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[var(--text-muted)] mb-1">Primary Role</label>
                    <select
                      value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                      className="w-full h-12 pl-5 pr-4 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] text-sm outline-none cursor-pointer"
                    >
                      <option value="">Select Primary Role</option>
                      <option value="volunteer">Event Volunteer (Parikshit Events)</option>
                      <option value="anchor">Event Anchor / Host (Crewlytics)</option>
                      <option value="promoter">Brand Promoter (Crewlytics)</option>
                      <option value="registration">Registration Staff</option>
                    </select>
                  </div>
                </div>
                <textarea
                  placeholder="College / Previous Experience Details" rows={4}
                  value={form.experience} onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                  className="w-full pl-5 pr-4 py-4 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--text-primary)] text-sm outline-none"
                />
                <Button variant="primary" size="medium" type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </PageContainer>
  );
};

export default CareerPage;
