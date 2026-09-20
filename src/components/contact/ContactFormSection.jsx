import React, { useState, useId } from 'react';
import Button from '../../components/common/Button';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';

/* ─── Scoped styles — zero dependency on global.css ─── */
const STYLES = `
.cf-root {
  width:100%; background:var(--bg-primary, #0b0c0e);
  font-family:var(--font-body, 'Inter',-apple-system,BlinkMacSystemFont,sans-serif);
  padding:40px 16px;
  position:relative;overflow:hidden;
  transition:var(--transition-theme, background-color 0.3s ease);
}
@media(min-width:768px){.cf-root{padding:72px 24px;}}

.cf-root::before{
  content:'';position:absolute;top:-200px;left:-200px;
  width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(229,9,20,.07) 0%,transparent 70%);
  pointer-events:none;
}
.cf-inner{
  max-width:1200px;margin:0 auto;
  display:grid;grid-template-columns:1fr;gap:24px;align-items:start;
}
@media(min-width:900px){.cf-inner{grid-template-columns:35% 1fr;gap:32px;}}

/* ── Left panel ── */
.cf-left{
  background:linear-gradient(145deg,#0b0c0e 0%,#1a1c22 100%);
  border-radius:20px;padding:28px 20px;color:#fff;
  position:relative;overflow:hidden;
  border:1px solid var(--border-medium, rgba(255,255,255,0.12));
}
@media(min-width:900px){
  .cf-left{position:sticky;top:100px;padding:48px 36px;border-radius:28px;}
}
.cf-left::after{
  content:'';position:absolute;bottom:-80px;right:-80px;
  width:240px;height:240px;border-radius:50%;
  background:radial-gradient(circle,rgba(229,9,20,.18) 0%,transparent 70%);
  pointer-events:none;
}
.cf-badge{
  display:inline-flex;align-items:center;gap:6px;
  padding:4px 10px;border-radius:99px;
  border:1px solid rgba(229,9,20,.35);
  background:rgba(229,9,20,.1);
  color:#e50914;font-size:10px;font-weight:700;
  letter-spacing:.1em;text-transform:uppercase;margin-bottom:20px;
}
.cf-badge-dot{width:6px;height:6px;border-radius:50%;background:#e50914;animation:cfpulse 1.8s infinite;}
@keyframes cfpulse{0%,100%{opacity:1;}50%{opacity:.3;}}
.cf-left-heading{font-size:clamp(20px,2.2vw,28px);font-weight:800;line-height:1.15;margin:0 0 12px;letter-spacing:-.02em;}
.cf-left-sub{font-size:12.5px;color:rgba(255,255,255,.65);line-height:1.6;margin:0 0 24px;}
.cf-info-list{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:14px;}
.cf-info-item{display:flex;align-items:flex-start;gap:12px;}
.cf-info-icon{
  width:34px;height:34px;border-radius:8px;flex-shrink:0;
  background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);
  display:flex;align-items:center;justify-content:center;margin-top:1px;
}
.cf-info-label{font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.4);font-weight:600;margin-bottom:2px;}
.cf-info-value{font-size:12.5px;color:#fff;font-weight:500;line-height:1.4;}
.cf-reply-badge{
  margin-top:8px;padding:10px 14px;border-radius:12px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);
  font-size:11.5px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:8px;
}
.cf-reply-dot{width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0;}

/* ── Right panel ── */
.cf-right{
  background:var(--bg-secondary, #13151a);border-radius:20px;
  padding:24px 18px;border:1px solid var(--border-medium, rgba(255,255,255,0.12));
  box-shadow:var(--shadow-md, 0 8px 24px rgba(0,0,0,0.12));
}
@media(min-width:640px){.cf-right{padding:44px 36px;border-radius:28px;}}
.cf-form-heading{font-size:clamp(20px,2.5vw,30px);font-weight:800;color:var(--text-primary, #fff);letter-spacing:-.02em;margin:0 0 6px;}
.cf-form-sub{font-size:12.5px;color:var(--text-secondary, #94a3b8);line-height:1.6;margin:0 0 24px;}
.cf-form{display:flex;flex-direction:column;gap:0;}
.cf-row{display:grid;grid-template-columns:1fr;gap:14px;margin-bottom:14px;}
@media(min-width:600px){.cf-row{grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;}}
.cf-field{display:flex;flex-direction:column;gap:0;position:relative;}
.cf-field-full{margin-bottom:14px;}
.cf-label{
  font-size:10.5px;font-weight:700;text-transform:uppercase;
  letter-spacing:.1em;color:var(--text-secondary, #94a3b8);margin-bottom:6px;display:block;
}
.cf-input,.cf-select,.cf-textarea{
  width:100%;height:50px;padding:0 16px;
  border:1px solid var(--border-medium, rgba(255,255,255,0.16));border-radius:12px;
  background:var(--bg-tertiary, #1c1f26);font-size:13.5px;color:var(--text-primary, #f8fafc);
  outline:none;transition:border-color .2s,box-shadow .2s,background .2s;
  font-family:inherit;appearance:none;-webkit-appearance:none;box-sizing:border-box;
}
@media(min-width:640px){.cf-input,.cf-select{height:54px;padding:0 18px;border-radius:14px;font-size:14px;}}
.cf-textarea{height:auto;padding:14px 16px;resize:none;line-height:1.55;}
.cf-input::placeholder,.cf-textarea::placeholder{color:var(--text-muted, #64748b);}
.cf-input:focus,.cf-select:focus,.cf-textarea:focus{
  border-color:var(--accent-primary, #e50914);background:var(--bg-secondary, #13151a);
  box-shadow:0 0 0 4px var(--accent-glow, rgba(229,9,20,.18));
}
.cf-select{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;}
.cf-select option{background:var(--bg-secondary, #13151a);color:var(--text-primary, #f8fafc);}
.cf-divider{height:1px;background:var(--border-subtle, rgba(255,255,255,.08));margin:4px 0 20px;}
.cf-btn{
  width:100%;height:54px;border:none;border-radius:14px;cursor:pointer;
  background:var(--accent-primary, #e50914);
  color:#fff;font-size:14px;font-weight:700;letter-spacing:.02em;
  display:flex;align-items:center;justify-content:center;gap:10px;
  transition:transform .2s,box-shadow .2s,background .2s;font-family:inherit;
  box-shadow:0 4px 20px var(--accent-glow, rgba(229,9,20,.3));
}
.cf-btn:hover{background:var(--accent-hover, #ff1e27);transform:translateY(-1px);}
.cf-btn:active{transform:translateY(0);}
.cf-error{
  display:flex;align-items:center;gap:8px;padding:10px 14px;
  border-radius:10px;background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.3);
  color:#ef4444;font-size:12px;font-weight:500;margin-bottom:16px;
}
.cf-success{
  display:flex;flex-direction:column;align-items:center;
  justify-content:center;gap:16px;padding:40px 16px;text-align:center;
}
.cf-success-icon{width:64px;height:64px;border-radius:50%;background:rgba(34,197,94,.1);border:2px solid rgba(34,197,94,.4);display:flex;align-items:center;justify-content:center;}
.cf-success h3{font-size:20px;font-weight:800;color:var(--text-primary, #fff);margin:0;}
.cf-success p{font-size:12.5px;color:var(--text-secondary, #94a3b8);margin:0;max-width:320px;line-height:1.6;}
.cf-success-btn{padding:10px 24px;border-radius:10px;border:1px solid var(--border-medium);background:var(--bg-tertiary);color:var(--text-primary);font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;}
`;

const contactDetails = [
  { icon: MapPin, label: 'Office', value: 'Gomti Nagar, Lucknow\nUttar Pradesh — 226010' },
  { icon: Phone,  label: 'Call Us',      value: '+91 92197 51766' },
  { icon: Mail,   label: 'Email',        value: 'support@committeevents.com' },
  { icon: Clock,  label: 'Working Hours',value: 'Mon – Sat, 9 AM – 8 PM' },
];

function FormField({ label, children }) {
  return (
    <div className="cf-field">
      <label className="cf-label">{label}</label>
      {children}
    </div>
  );
}

export const ContactFormSection = () => {
  const [form, setForm] = useState({ fullName:'', email:'', phone:'', eventType:'', company:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

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

  const submit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setError('Please enter your full name (alphabets only).');
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(form.fullName.trim())) {
      setError('Full name must contain only alphabets.');
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

    const msg = `📬 *NEW WEBSITE CONTACT FORM INQUIRY*
📍 *Form Source:* Contact Us Page (/contact)
-----------------------------------------
👤 *Client Name:* ${form.fullName}
📧 *Email Address:* ${form.email}
📞 *Phone Number:* ${form.phone}
🏢 *Company/College:* ${form.company || 'Not specified'}
🎯 *Event Type:* ${form.eventType || 'Not specified'}
💰 *Estimated Budget:* ${form.budget || 'Not specified'}
📝 *Message:* ${form.message || 'No message provided'}
-----------------------------------------
_Sent via Commite Events Website Contact Form_`;

    const waUrl = `https://wa.me/919219751766?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setForm({ fullName: '', email: '', phone: '', eventType: '', company: '', budget: '', message: '' });
  };

  return (
    <>
      <style>{STYLES}</style>
      <section className="cf-root">
        <div className="cf-inner">

          {/* ── LEFT PANEL ── */}
          <aside className="cf-left">
            <div className="cf-badge"><span className="cf-badge-dot" /> Live Support</div>
            <h2 className="cf-left-heading">Let's Build Something Extraordinary Together</h2>
            <p className="cf-left-sub">
              Lucknow's most trusted enterprise event partner — from 500-seat corporate summits to 15,000-capacity college fests.
            </p>
            <ul className="cf-info-list">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <li key={label} className="cf-info-item">
                  <div className="cf-info-icon"><Icon size={15} color="rgba(255,255,255,.6)" /></div>
                  <div>
                    <div className="cf-info-label">{label}</div>
                    <div className="cf-info-value" style={{ whiteSpace: 'pre-line' }}>{value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cf-reply-badge">
              <span className="cf-reply-dot" />
              We usually reply within 2 hours on business days.
            </div>
          </aside>

          {/* ── RIGHT PANEL ── */}
          <div className="cf-right">
            {submitted ? (
              <div className="cf-success">
                <div className="cf-success-icon"><CheckCircle size={32} color="#22c55e" /></div>
                <h3>Inquiry Received!</h3>
                <p>Thank you, <strong>{form.fullName}</strong>. Our senior director will review your requirements and reach out shortly.</p>
                <Button variant="secondary" onClick={() => { setSubmitted(false); setForm({ fullName:'', email:'', phone:'', eventType:'', company:'', budget:'', message:'' }); }}>Send Another Inquiry</Button>
              </div>
            ) : (
              <>
                <h2 className="cf-form-heading">Send Us a Message</h2>
                <p className="cf-form-sub">Fill in the details below and our operations team will respond within 2 hours.</p>

                {error && (
                  <div className="cf-error">
                    <span>⚠</span> {error}
                  </div>
                )}

                <form className="cf-form" onSubmit={submit} noValidate>
                  <div className="cf-row">
                    <FormField label="Full Name * (Alphabets Only)">
                      <input className="cf-input" type="text" placeholder="Rahul Sharma" value={form.fullName} onChange={handleNameChange} required />
                    </FormField>
                    <FormField label="Email Address *">
                      <input className="cf-input" type="email" placeholder="rahul@company.com" value={form.email} onChange={handleEmailChange} required />
                    </FormField>
                  </div>

                  <div className="cf-row">
                    <FormField label="Phone Number * (10 Digits Only)">
                      <input className="cf-input" type="tel" maxLength={10} placeholder="9219751766" value={form.phone} onChange={handlePhoneChange} required />
                    </FormField>
                    <FormField label="Event Type">
                      <select className="cf-select" value={form.eventType} onChange={set('eventType')}>
                        <option value="">Select event type</option>
                        <option>Corporate Event / Summit</option>
                        <option>College Cultural Fest</option>
                        <option>Royal Wedding & Sangeet</option>
                        <option>Sports & Esports LAN</option>
                        <option>Concert / Standup Show</option>
                        <option>Government / NGO Event</option>
                      </select>
                    </FormField>
                  </div>

                  <div className="cf-row">
                    <FormField label="Company / College">
                      <input className="cf-input" type="text" placeholder="AKTU / Tech Corp" value={form.company} onChange={set('company')} />
                    </FormField>
                    <FormField label="Estimated Budget">
                      <select className="cf-select" value={form.budget} onChange={set('budget')}>
                        <option value="">Select budget range</option>
                        <option>Under ₹1 Lakh</option>
                        <option>₹1 Lakh – ₹5 Lakhs</option>
                        <option>₹5 Lakhs – ₹15 Lakhs</option>
                        <option>₹15 Lakhs+ (Flagship)</option>
                      </select>
                    </FormField>
                  </div>

                  <div className="cf-field-full">
                    <label className="cf-label">Message & Requirements</label>
                    <textarea className="cf-textarea" rows={5} placeholder="Describe your event — audience size, services needed (stage, sound, volunteers, décor, security)..." value={form.message} onChange={set('message')} />
                  </div>

                  <div className="cf-divider" />

                  <Button variant="primary" type="submit" className="w-full">Submit Event Inquiry</Button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactFormSection;
