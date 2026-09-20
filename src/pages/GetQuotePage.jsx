// import React, { useState } from 'react';
// import PageContainer from '../components/layout/PageContainer';
// import { CheckCircle2, ArrowLeft, Send } from 'lucide-react';
// import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';
// import Button from '../components/common/Button';

// export const GetQuotePage = () => {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);

//   const [quoteData, setQuoteData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     organization: '',
//     city: 'Lucknow',
//     eventType: 'Corporate Event',
//     expectedDate: '',
//     attendeesCount: '1,000 – 5,000 Attendees',
//     services: ['Planning', 'Volunteers', 'Sound', 'Stage', 'Security'],
//     budget: '₹5 Lakhs – ₹15 Lakhs',
//     notes: ''
//   });

//   const availableServices = [
//     'Planning', 'Volunteers', 'Crew Staffing', 'Photography', 'Videography',
//     'Decoration', 'Sound & Line Array', 'Lighting Design', 'LED Visual Walls',
//     'Stage Fabrication', 'Event Marketing', 'Registration Desk', 'Security & Bouncers',
//     'Food Court Ops', 'Brand Promotion'
//   ];

//   const handleServiceToggle = (serv) => {
//     if (quoteData.services.includes(serv)) {
//       setQuoteData({
//         ...quoteData,
//         services: quoteData.services.filter((s) => s !== serv)
//       });
//     } else {
//       setQuoteData({
//         ...quoteData,
//         services: [...quoteData.services, serv]
//       });
//     }
//   };

//   const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
//   const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <PageContainer
//       title="Get Free Event Quote | Commite Events Lucknow"
//       description="Request a customized cost estimate and technical proposal for your upcoming corporate summit, college fest, royal wedding, or live show in Lucknow."
//     >
//       {/* 1. Hero */}
//       <section className="relative w-full min-h-[280px] flex flex-col justify-center pt-12 lg:pt-16 pb-12 grid-background select-none border-b border-[var(--border-subtle)]">
//         <div className="container-custom relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-12 space-y-4 max-w-3xl">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--border-subtle)] w-max">
//                 <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
//                 <span className="text-xs font-mono font-medium text-red-600 tracking-wide uppercase">
//                   Instant Cost Estimator
//                 </span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
//                 Request A Custom Quote
//               </h1>
//               <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
//                 Fill out our multi-step event estimator to receive a detailed cost breakdown and technical rider proposal within 2 hours.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Multi-Step Form */}
//       <section className="pt-20 pb-24 bg-slate-50">
//         <div className="w-full max-w-[1100px] mx-auto px-6">
          
//           {/* 2. Multi-Step Form */}
//           <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-14 relative border border-slate-200">
//             {submitted ? (
//               <div className="py-16 text-center space-y-4 animate-fadeIn">
//                 <div className="w-20 h-20 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mx-auto border border-slate-100">
//                   <CheckCircle2 size={40} />
//                 </div>
//                 <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Message Received</h3>
//                 <p className="text-slate-500 max-w-md mx-auto">
//                   Our operations team is drafting your custom proposal for <strong className="text-slate-900">{quoteData.eventType}</strong>. We will respond within 2 hours.
//                 </p>
//                 <div className="pt-6">
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setSubmitted(false);
//                       setStep(1);
//                     }}
//                     className="w-full sm:w-auto"
//                   >
//                     Send Another Request
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="text-left">
                
//                 {/* STEP HEADER */}
//                 <div className="animate-fadeIn mb-8">
//                   <span className="text-[10px] font-bold tracking-[0.15em] text-[#64748B] mb-2 block uppercase text-left">
//                     Step 0{step} / 05
//                   </span>
//                   <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 text-left">
//                     {step === 1 && "Send Us a Message"}
//                     {step === 2 && "Event Details"}
//                     {step === 3 && "Required Services"}
//                     {step === 4 && "Budget & Specs"}
//                     {step === 5 && "Review Inquiry"}
//                   </h3>
//                   <p className="text-sm text-slate-400 text-left">
//                     {step === 1 && "Fill in the details below and our operations team will respond within 2 hours."}
//                     {step === 2 && "Tell us about the scale and category of your upcoming event."}
//                     {step === 3 && "Select all the operational services you require for this event."}
//                     {step === 4 && "Define your budget expectations and any technical notes."}
//                     {step === 5 && "Ensure all information is correct before submitting your inquiry."}
//                   </p>
//                 </div>

//                 {/* STEP CONTENT */}
//                 <div className="animate-fadeIn text-left mb-8">
//                   {step === 1 && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           value={quoteData.fullName}
//                           onChange={(e) => setQuoteData({ ...quoteData, fullName: e.target.value })}
//                           placeholder="Rahul Sharma"
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           required
//                           value={quoteData.email}
//                           onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
//                           placeholder="rahul@company.com"
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Phone Number *
//                         </label>
//                         <input
//                           type="tel"
//                           required
//                           value={quoteData.phone}
//                           onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
//                           placeholder="+91 92197 51766"
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Company / College
//                         </label>
//                         <input
//                           type="text"
//                           value={quoteData.organization}
//                           onChange={(e) => setQuoteData({ ...quoteData, organization: e.target.value })}
//                           placeholder="AKTU / Tech Corp"
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {step === 2 && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Event Type
//                         </label>
//                         <select
//                           value={quoteData.eventType}
//                           onChange={(e) => setQuoteData({ ...quoteData, eventType: e.target.value })}
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none cursor-pointer"
//                         >
//                           <option value="Corporate Event">Corporate Summit / Keynote</option>
//                           <option value="College Fest">College Cultural Fest</option>
//                           <option value="Wedding">Royal Wedding Celebration</option>
//                           <option value="Sports">Sports Tournament / Esports LAN</option>
//                           <option value="Concert">Concert / Live Show</option>
//                           <option value="Government">Government / NGO Event</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Expected Attendees
//                         </label>
//                         <select
//                           value={quoteData.attendeesCount}
//                           onChange={(e) => setQuoteData({ ...quoteData, attendeesCount: e.target.value })}
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none cursor-pointer"
//                         >
//                           <option value="Under 500 Attendees">Under 500 Attendees</option>
//                           <option value="500 – 1,000 Attendees">500 – 1,000 Attendees</option>
//                           <option value="1,000 – 5,000 Attendees">1,000 – 5,000 Attendees</option>
//                           <option value="5,000 – 35,000+ Attendees">5,000 – 35,000+ Attendees (Stadium)</option>
//                         </select>
//                       </div>
//                     </div>
//                   )}

//                   {step === 3 && (
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {availableServices.map((serv) => {
//                         const isChecked = quoteData.services.includes(serv);
//                         return (
//                           <div
//                             key={serv}
//                             onClick={() => handleServiceToggle(serv)}
//                             className={`h-[56px] px-5 rounded-2xl border text-[13px] font-semibold transition-all flex items-center gap-3 cursor-pointer select-none ${
//                               isChecked
//                                 ? 'bg-[#111111] text-white border-[#111111] shadow-md'
//                                 : 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white'
//                             }`}
//                           >
//                             <div className={`w-4 h-4 rounded-sm flex flex-shrink-0 items-center justify-center text-[10px] ${isChecked ? 'bg-white text-[#111111]' : 'border border-[#CBD5E1] bg-white'}`}>
//                               {isChecked && '✓'}
//                             </div>
//                             <span className="truncate">{serv}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   {step === 4 && (
//                     <div className="space-y-8">
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Estimated Budget
//                         </label>
//                         <select
//                           value={quoteData.budget}
//                           onChange={(e) => setQuoteData({ ...quoteData, budget: e.target.value })}
//                           className="w-full h-[56px] px-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none cursor-pointer"
//                         >
//                           <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
//                           <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
//                           <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
//                           <option value="₹15 Lakhs+">₹15 Lakhs+ (Flagship Mega Fest)</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#64748B] mb-2.5">
//                           Message & Requirements
//                         </label>
//                         <textarea
//                           rows={4}
//                           value={quoteData.notes}
//                           onChange={(e) => setQuoteData({ ...quoteData, notes: e.target.value })}
//                           placeholder="Describe your event — audience size, services needed (stage, sound, volunteers, décor, security)..."
//                           className="w-full min-h-[140px] p-5 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#CBD5E1] focus:bg-white focus:ring-4 focus:ring-[#F1F5F9] transition-all outline-none resize-none"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {step === 5 && (
//                     <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-200 space-y-5 text-sm text-left">
//                       <div className="flex justify-between border-b border-slate-200 pb-4">
//                         <span className="text-slate-500">Client Name:</span>
//                         <span className="text-slate-900 font-semibold">{quoteData.fullName || 'Not provided'}</span>
//                       </div>
//                       <div className="flex justify-between border-b border-slate-200 pb-4">
//                         <span className="text-slate-500">Event Type:</span>
//                         <span className="text-slate-900 font-semibold">{quoteData.eventType}</span>
//                       </div>
//                       <div className="flex justify-between border-b border-slate-200 pb-4">
//                         <span className="text-slate-500">Headcount:</span>
//                         <span className="text-slate-900 font-semibold">{quoteData.attendeesCount}</span>
//                       </div>
//                       <div className="flex justify-between border-b border-slate-200 pb-4">
//                         <span className="text-slate-500">Estimated Budget:</span>
//                         <span className="text-slate-900 font-semibold">{quoteData.budget}</span>
//                       </div>
//                       <div className="pt-2">
//                         <span className="text-slate-500 block mb-3">Selected Services:</span>
//                         <div className="flex flex-wrap gap-2">
//                           {quoteData.services.map((s) => (
//                             <span key={s} className="px-4 py-2 rounded-xl bg-white text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm">
//                               {s}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="h-px w-full bg-slate-200/80 mb-8"></div>

//                 {/* Form Controls */}
//                 <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
//                   {step > 1 ? (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       onClick={handlePrev}
//                       className="w-full sm:w-auto !rounded-2xl !h-[60px]"
//                     >
//                       <ArrowLeft className="mr-2" size={16} />
//                       Previous Step
//                     </Button>
//                   ) : (
//                     <div className="hidden sm:block"></div>
//                   )}

//                   {step < 5 ? (
//                     <Button
//                       type="button"
//                       variant="primary"
//                       onClick={handleNext}
//                       className="w-full sm:w-auto !rounded-2xl !h-[60px] !bg-[#111111] !text-white hover:!bg-black"
//                     >
//                       Continue
//                     </Button>
//                   ) : (
//                     <Button
//                       type="submit"
//                       variant="primary"
//                       className="w-full sm:w-auto !rounded-2xl !h-[60px] !bg-[#111111] !text-white hover:!bg-black"
//                     >
//                       Submit Request
//                       <Send className="ml-2" size={16} />
//                     </Button>
//                   )}
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* 3. Final CTA */}
//       <GalleryFinalCTASection />
//     </PageContainer>
//   );
// };

// export default GetQuotePage;
import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import { CheckCircle2, ArrowLeft, ArrowRight, Send, Check } from 'lucide-react';
import GalleryFinalCTASection from '../components/gallery/GalleryFinalCTASection';


const STEP_LABELS = ['Contact', 'Event', 'Services', 'Budget', 'Review'];

const AVAILABLE_SERVICES = [
  'Planning', 'Volunteers', 'Crew Staffing', 'Photography', 'Videography',
  'Decoration', 'Sound & Line Array', 'Lighting Design', 'LED Visual Walls',
  'Stage Fabrication', 'Event Marketing', 'Registration Desk', 'Security & Bouncers',
  'Food Court Ops', 'Brand Promotion'
];

const INITIAL_QUOTE_DATA = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  city: 'Lucknow',
  eventType: 'Corporate Event',
  expectedDate: '',
  attendeesCount: '1,000 – 5,000 Attendees',
  services: ['Planning', 'Volunteers', 'Sound & Line Array', 'Stage Fabrication', 'Security & Bouncers'],
  budget: '₹5 Lakhs – ₹15 Lakhs',
  notes: ''
};

export const GetQuotePage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState(INITIAL_QUOTE_DATA);
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState('');
  const [lastSubmittedEventType, setLastSubmittedEventType] = useState('Corporate Event');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setQuoteData((prev) => ({ ...prev, fullName: val }));
    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setQuoteData((prev) => ({ ...prev, phone: val }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setQuoteData((prev) => ({ ...prev, email: val }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handleServiceToggle = (serv) => {
    setQuoteData((prev) => ({
      ...prev,
      services: prev.services.includes(serv)
        ? prev.services.filter((s) => s !== serv)
        : [...prev.services, serv]
    }));
  };

  const validateStep1 = () => {
    const errs = {};
    if (!quoteData.fullName.trim()) {
      errs.fullName = 'Full Name is required (alphabets only)';
    } else if (!/^[a-zA-Z\s]+$/.test(quoteData.fullName.trim())) {
      errs.fullName = 'Full Name must contain only alphabets';
    }

    if (!quoteData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quoteData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!quoteData.phone) {
      errs.phone = 'Phone number is required';
    } else if (quoteData.phone.length !== 10) {
      errs.phone = 'Phone number must be exactly 10 digits';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) return;
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const generateWhatsappMessage = (data) => {
    const servicesList = data.services && data.services.length > 0
      ? data.services.map((s) => `• ${s}`).join('\n')
      : '• None selected';

    return `🧾 *NEW EVENT QUOTE REQUEST*
📍 *Form Source:* Get Quote Page (/get-quote)
━━━━━━━━━━━━━━━━━━━━━
👤 *CLIENT DETAILS*
• *Name:* ${data.fullName || 'Not provided'}
• *Email:* ${data.email || 'Not provided'}
• *Phone:* ${data.phone || 'Not provided'}
• *Organization:* ${data.organization || 'N/A'}

🎉 *EVENT SPECIFICATIONS*
• *Event Type:* ${data.eventType}
• *Expected Attendees:* ${data.attendeesCount}
• *Estimated Budget:* ${data.budget}

🛠️ *REQUIRED SERVICES*
${servicesList}

📝 *ADDITIONAL NOTES & REQUIREMENTS*
${data.notes || 'No extra notes provided.'}
━━━━━━━━━━━━━━━━━━━━━
_Sent via Commite Events Get Quote Estimator_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }
    const message = generateWhatsappMessage(quoteData);
    setLastSubmittedMsg(message);
    setLastSubmittedEventType(quoteData.eventType);

    const waUrl = `https://wa.me/919219751766?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    // CLEAR FORM INPUTS IMMEDIATELY
    setQuoteData(INITIAL_QUOTE_DATA);
    setErrors({});
    setSubmitted(true);
  };

  const update = (field) => (e) => setQuoteData({ ...quoteData, [field]: e.target.value });

  return (
    <>
      <style>{`/* ==========================================================================
   GetQuotePage — standalone, scoped styles (prefix: gq-)
   Independent of Tailwind's content/purge pipeline. Same brand palette:
   ink #0F172A, slate #64748B/#94A3B8, hairline #E2E8F0, surface #F8FAFC,
   accent-black #111111, accent-red #DC2626 (live badge / active step).
   ========================================================================== */

.gq-root, .gq-root *, .gq-root *::before, .gq-root *::after {
  box-sizing: border-box;
}

.gq-root {
  --gq-ink: var(--text-primary, #F8FAFC);
  --gq-slate: var(--text-secondary, #94A3B8);
  --gq-slate-soft: var(--text-muted, #64748B);
  --gq-line: var(--border-subtle, rgba(255, 255, 255, 0.1));
  --gq-line-strong: var(--border-medium, rgba(255, 255, 255, 0.2));
  --gq-surface: var(--bg-secondary, #13151A);
  --gq-card-bg: var(--bg-secondary, #13151A);
  --gq-hero-bg: var(--bg-primary, #0B0C0E);
  --gq-white: var(--bg-primary, #0B0C0E);
  --gq-black: var(--accent-primary, #E50914);
  --gq-red: var(--accent-primary, #E50914);
  font-family: var(--font-body, -apple-system, "Segoe UI", Inter, system-ui, sans-serif);
  color: var(--gq-ink);
  transition: var(--transition-theme, background-color 0.3s ease, color 0.3s ease);
}

/* ---------- Hero ---------- */

.gq-hero {
  position: relative;
  width: 100%;
  padding: clamp(48px, 8vw, 88px) 24px clamp(56px, 9vw, 96px);
  background:
    radial-gradient(circle at 1px 1px, var(--border-subtle, rgba(255, 255, 255, 0.06)) 1px, transparent 0) 0 0 / 28px 28px,
    var(--gq-hero-bg);
  border-bottom: 1px solid var(--gq-line);
}

.gq-hero-inner {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
}

.gq-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--gq-surface);
  border: 1px solid var(--gq-line-strong);
  margin-bottom: 20px;
}

.gq-eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gq-red);
  animation: gq-pulse 1.8s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes gq-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.82); }
}

.gq-eyebrow-text {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gq-red);
  font-family: "SF Mono", "JetBrains Mono", monospace;
}

.gq-h1 {
  font-size: clamp(2.2rem, 5.5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
  color: var(--gq-ink);
}

.gq-hero-sub {
  font-size: clamp(0.98rem, 1.6vw, 1.15rem);
  line-height: 1.6;
  color: var(--gq-slate);
  max-width: 560px;
  margin: 0 auto;
}

/* ---------- Section wrapper / centering ---------- */

.gq-section {
  width: 100%;
  background: var(--gq-hero-bg);
  padding: clamp(40px, 6vw, 72px) 20px clamp(72px, 9vw, 112px);
  display: flex;
  justify-content: center;
}

.gq-shell {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
}

/* ---------- Step rail (signature element) ---------- */

.gq-stepper {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 36px;
}

.gq-step-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.gq-step-header {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  justify-content: center;
  height: 36px;
}

.gq-step-line-left,
.gq-step-line-right {
  position: absolute;
  top: 50%;
  height: 1.5px;
  background: var(--gq-line-strong);
  transform: translateY(-50%);
  z-index: 1;
  transition: background 0.35s ease;
}

.gq-step-line-left {
  left: 0;
  right: 50%;
}

.gq-step-line-right {
  left: 50%;
  right: 0;
}

.gq-step-line-left.is-filled,
.gq-step-line-right.is-filled {
  background: var(--gq-red);
}

.gq-rail-node {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  border: 1.5px solid var(--gq-line-strong);
  background: var(--gq-surface);
  color: var(--gq-slate-soft);
  position: relative;
  z-index: 2;
  transition: all 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

.gq-rail-node.is-done {
  background: var(--gq-red);
  border-color: var(--gq-red);
  color: #FFFFFF;
}

.gq-rail-node.is-active {
  border-color: var(--gq-red);
  color: var(--gq-ink);
  box-shadow: 0 0 0 4px var(--accent-glow, rgba(229, 9, 20, 0.25));
}

.gq-step-label {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gq-slate-soft);
  text-align: center;
  margin-top: 8px;
  transition: color 0.3s ease;
}

@media (max-width: 639px) {
  .gq-step-label {
    font-size: 8.5px;
    letter-spacing: 0.02em;
  }
}

.gq-step-label.is-current {
  color: var(--gq-ink);
}

/* ---------- Card ---------- */

.gq-card {
  background: var(--gq-card-bg);
  border: 1px solid var(--gq-line-strong);
  border-radius: 20px;
  box-shadow: var(--shadow-md, 0 8px 24px rgba(0, 0, 0, 0.12));
  padding: clamp(24px, 4vw, 56px);
  width: 100%;
}

/* ---------- Success state ---------- */

.gq-success {
  padding: 48px 12px;
  text-align: center;
}

.gq-success-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--gq-surface);
  border: 1px solid var(--gq-line-strong);
  color: var(--gq-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
}

.gq-success-title {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 12px;
  color: var(--gq-ink);
}

.gq-success-body {
  color: var(--gq-slate);
  max-width: 420px;
  margin: 0 auto;
  line-height: 1.6;
}

.gq-success-body strong {
  color: var(--gq-ink);
}

/* ---------- Step header ---------- */

.gq-step-eyebrow {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gq-red);
  display: block;
  margin-bottom: 10px;
}

.gq-step-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
  color: var(--gq-ink);
}

.gq-step-desc {
  font-size: 14px;
  color: var(--gq-slate);
  margin: 0 0 32px;
  line-height: 1.5;
}

/* ---------- Fields ---------- */

.gq-grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px 24px;
}

@media (min-width: 640px) {
  .gq-grid-2 { grid-template-columns: 1fr 1fr; }
}

.gq-field-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--gq-slate);
  margin-bottom: 10px;
}

.gq-input, .gq-select, .gq-textarea {
  width: 100%;
  height: 54px;
  padding: 0 18px;
  border-radius: 14px;
  background: var(--bg-tertiary, #1C1F26);
  border: 1px solid var(--gq-line-strong);
  font-size: 14px;
  color: var(--gq-ink);
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  appearance: none;
}

.gq-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 42px;
}

.gq-textarea {
  height: auto;
  min-height: 132px;
  padding: 16px 18px;
  border-radius: 18px;
  resize: vertical;
  line-height: 1.55;
}

.gq-input::placeholder, .gq-textarea::placeholder {
  color: var(--gq-slate-soft);
}

.gq-input:focus, .gq-select:focus, .gq-textarea:focus {
  border-color: var(--gq-red);
  background: var(--gq-surface);
  box-shadow: 0 0 0 4px var(--accent-glow, rgba(229, 9, 20, 0.2));
}

.gq-field { min-width: 0; }
.gq-field-full { grid-column: 1 / -1; }

/* ---------- Services (step 3) ---------- */

.gq-services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .gq-services-grid { grid-template-columns: repeat(3, 1fr); }
}

.gq-service-chip {
  height: 54px;
  padding: 0 16px;
  border-radius: 14px;
  border: 1px solid var(--gq-line-strong);
  background: var(--bg-tertiary, #1C1F26);
  color: var(--gq-slate);
  font-size: 12.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  transition: all 0.18s ease;
}

.gq-service-chip:hover {
  border-color: var(--gq-red);
  color: var(--gq-ink);
  background: var(--gq-surface);
}

.gq-service-chip.is-checked {
  background: var(--gq-red);
  border-color: var(--gq-red);
  color: #FFFFFF;
  box-shadow: 0 6px 16px -6px var(--accent-glow, rgba(229, 9, 20, 0.4));
}

.gq-chip-check {
  width: 16px;
  height: 16px;
  border-radius: 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border: 1px solid var(--gq-line-strong);
  background: var(--gq-surface);
  color: var(--gq-ink);
}

.gq-service-chip.is-checked .gq-chip-check {
  background: #FFFFFF;
  color: var(--gq-red);
  border-color: transparent;
}

.gq-chip-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- Review (step 5) ---------- */

.gq-review {
  border: 1px solid var(--gq-line-strong);
  background: var(--bg-tertiary, #1C1F26);
  border-radius: 18px;
  padding: clamp(20px, 3vw, 32px);
}

.gq-review-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--gq-line);
  font-size: 14px;
}

.gq-review-row:first-child { padding-top: 0; }

.gq-review-label { color: var(--gq-slate); flex-shrink: 0; }
.gq-review-value { color: var(--gq-ink); font-weight: 600; text-align: right; }

.gq-review-services {
  padding-top: 20px;
}

.gq-review-services-label {
  color: var(--gq-slate);
  font-size: 14px;
  display: block;
  margin-bottom: 12px;
}

.gq-review-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.gq-review-tag {
  padding: 8px 14px;
  border-radius: 10px;
  background: var(--gq-surface);
  border: 1px solid var(--gq-line-strong);
  font-size: 12px;
  font-weight: 600;
  color: var(--gq-ink);
}

/* ---------- Divider + controls ---------- */

.gq-divider {
  height: 1px;
  width: 100%;
  background: var(--gq-line-strong);
  margin: 36px 0 28px;
  border: none;
}

.gq-controls {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  justify-content: space-between;
  gap: 12px;
}

@media (min-width: 640px) {
  .gq-controls { flex-direction: row; align-items: center; }
}

.gq-btn {
  height: 56px;
  padding: 0 26px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  width: 100%;
}

@media (min-width: 640px) {
  .gq-btn { width: auto; }
}

.gq-btn:active { transform: scale(0.98); }

.gq-btn-primary {
  background: var(--accent-primary, #E50914);
  color: #FFFFFF;
}

.gq-btn-primary:hover {
  background: var(--accent-hover, #FF1E27);
  box-shadow: 0 8px 20px var(--accent-glow, rgba(229, 9, 20, 0.4));
}

.gq-btn-outline {
  background: var(--gq-surface);
  color: var(--gq-ink);
  border: 1px solid var(--gq-line-strong);
}

.gq-btn-outline:hover {
  border-color: var(--gq-red);
  background: var(--bg-tertiary);
}

.gq-controls-spacer {
  display: none;
}

@media (min-width: 640px) {
  .gq-controls-spacer { display: block; }
}

/* ---------- Motion ---------- */

.gq-fade {
  animation: gq-fade-in 0.32s ease both;
}

@keyframes gq-fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .gq-fade, .gq-eyebrow-dot, .gq-rail-node, .gq-rail-track-fill, .gq-btn {
    animation: none !important;
    transition: none !important;
  }
}

/* ---------- Focus visibility (a11y) ---------- */

.gq-root button:focus-visible,
.gq-root [role="button"]:focus-visible,
.gq-root input:focus-visible,
.gq-root select:focus-visible,
.gq-root textarea:focus-visible {
  outline: 2px solid var(--gq-red);
  outline-offset: 2px;
}
`}</style>
      <PageContainer
      title="Get Free Event Quote | Commite Events Lucknow"
      description="Request a customized cost estimate and technical proposal for your upcoming corporate summit, college fest, royal wedding, or live show in Lucknow."
    >
      <div className="gq-root">

        {/* ---------------- Hero ---------------- */}
        <section className="gq-hero">
          <div className="gq-hero-inner">
            <span className="gq-eyebrow">
              <span className="gq-eyebrow-dot" />
              <span className="gq-eyebrow-text">Instant Cost Estimator</span>
            </span>
            <h1 className="gq-h1">Request A Custom Quote</h1>
            <p className="gq-hero-sub">
              Fill out our five-step event estimator to receive a detailed cost breakdown
              and technical rider proposal within 2 hours.
            </p>
          </div>
        </section>

        {/* ---------------- Form ---------------- */}
        <section className="gq-section">
          <div className="gq-shell">

            {!submitted && (
              <>
                {/* 5-Step Stepper Rail */}
                <div className="gq-stepper" aria-hidden="false">
                  {STEP_LABELS.map((label, i) => {
                    const idx = i + 1;
                    const isDone = idx < step;
                    const isActive = idx === step;
                    const isLineLeftFilled = idx <= step;
                    const isLineRightFilled = idx < step;
                    return (
                      <div className="gq-step-col" key={label}>
                        <div className="gq-step-header">
                          {i > 0 && (
                            <div className={`gq-step-line-left ${isLineLeftFilled ? 'is-filled' : ''}`} />
                          )}
                          <div className={`gq-rail-node ${isDone ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`}>
                            {isDone ? <Check size={14} /> : idx}
                          </div>
                          {i < STEP_LABELS.length - 1 && (
                            <div className={`gq-step-line-right ${isLineRightFilled ? 'is-filled' : ''}`} />
                          )}
                        </div>
                        <span className={`gq-step-label ${isActive ? 'is-current' : ''}`}>
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            <div className="gq-card">
              {submitted ? (
                <div className="gq-success gq-fade">
                  <div className="gq-success-icon">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="gq-success-title">Inquiry Sent via WhatsApp!</h3>
                  <p className="gq-success-body">
                    Your detailed quote request for <strong>{lastSubmittedEventType}</strong> has been formatted and opened in WhatsApp. Form inputs have been cleared for your privacy. Our operations team will respond within 2 hours.
                  </p>
                  <div style={{ marginTop: 28, display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/919219751766?text=${encodeURIComponent(lastSubmittedMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gq-btn gq-btn-primary"
                      style={{ textDecoration: 'none', background: '#25D366' }}
                    >
                      <Send size={16} />
                      Resend / Open WhatsApp
                    </a>
                    <button
                      type="button"
                      className="gq-btn gq-btn-outline"
                      onClick={() => { setSubmitted(false); setStep(1); }}
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="gq-fade" key={step}>
                    <span className="gq-step-eyebrow">Step 0{step} / 05</span>
                    <h3 className="gq-step-title">
                      {step === 1 && 'Send Us a Message'}
                      {step === 2 && 'Event Details'}
                      {step === 3 && 'Required Services'}
                      {step === 4 && 'Budget & Specs'}
                      {step === 5 && 'Review Inquiry'}
                    </h3>
                    <p className="gq-step-desc">
                      {step === 1 && 'Fill in the details below and our operations team will respond within 2 hours.'}
                      {step === 2 && 'Tell us about the scale and category of your upcoming event.'}
                      {step === 3 && 'Select all the operational services you require for this event.'}
                      {step === 4 && 'Define your budget expectations and any technical notes.'}
                      {step === 5 && 'Ensure all information is correct before submitting your inquiry.'}
                    </p>

                    {step === 1 && (
                      <div className="gq-grid-2">
                        <div className="gq-field">
                          <label className="gq-field-label">Full Name * (Alphabets Only)</label>
                          <input
                            type="text" required className="gq-input"
                            value={quoteData.fullName} onChange={handleNameChange}
                            placeholder="Rahul Sharma"
                          />
                          {errors.fullName && (
                            <span style={{ color: '#DC2626', fontSize: '11px', display: 'block', marginTop: '6px', fontWeight: '600' }}>
                              {errors.fullName}
                            </span>
                          )}
                        </div>
                        <div className="gq-field">
                          <label className="gq-field-label">Email Address *</label>
                          <input
                            type="email" required className="gq-input"
                            value={quoteData.email} onChange={handleEmailChange}
                            placeholder="rahul@company.com"
                          />
                          {errors.email && (
                            <span style={{ color: '#DC2626', fontSize: '11px', display: 'block', marginTop: '6px', fontWeight: '600' }}>
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div className="gq-field">
                          <label className="gq-field-label">Phone Number * (10 Digits Only)</label>
                          <input
                            type="tel" required className="gq-input" maxLength={10}
                            value={quoteData.phone} onChange={handlePhoneChange}
                            placeholder="9219751766"
                          />
                          {errors.phone && (
                            <span style={{ color: '#DC2626', fontSize: '11px', display: 'block', marginTop: '6px', fontWeight: '600' }}>
                              {errors.phone}
                            </span>
                          )}
                        </div>
                        <div className="gq-field">
                          <label className="gq-field-label">Company / College</label>
                          <input
                            type="text" className="gq-input"
                            value={quoteData.organization} onChange={update('organization')}
                            placeholder="AKTU / Tech Corp"
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="gq-grid-2">
                        <div className="gq-field">
                          <label className="gq-field-label">Event Type</label>
                          <select className="gq-select" value={quoteData.eventType} onChange={update('eventType')}>
                            <option value="Corporate Event">Corporate Summit / Keynote</option>
                            <option value="College Fest">College Cultural Fest</option>
                            <option value="Wedding">Royal Wedding Celebration</option>
                            <option value="Sports">Sports Tournament / Esports LAN</option>
                            <option value="Concert">Concert / Live Show</option>
                            <option value="Government">Government / NGO Event</option>
                          </select>
                        </div>
                        <div className="gq-field">
                          <label className="gq-field-label">Expected Attendees</label>
                          <select className="gq-select" value={quoteData.attendeesCount} onChange={update('attendeesCount')}>
                            <option value="Under 500 Attendees">Under 500 Attendees</option>
                            <option value="500 – 1,000 Attendees">500 – 1,000 Attendees</option>
                            <option value="1,000 – 5,000 Attendees">1,000 – 5,000 Attendees</option>
                            <option value="5,000 – 35,000+ Attendees">5,000 – 35,000+ Attendees (Stadium)</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="gq-services-grid">
                        {AVAILABLE_SERVICES.map((serv) => {
                          const isChecked = quoteData.services.includes(serv);
                          return (
                            <div
                              key={serv}
                              role="button"
                              tabIndex={0}
                              onClick={() => handleServiceToggle(serv)}
                              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleServiceToggle(serv)}
                              className={`gq-service-chip ${isChecked ? 'is-checked' : ''}`}
                            >
                              <span className="gq-chip-check">{isChecked && '✓'}</span>
                              <span className="gq-chip-label">{serv}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <div className="gq-field" style={{ marginBottom: 28 }}>
                          <label className="gq-field-label">Estimated Budget</label>
                          <select className="gq-select" value={quoteData.budget} onChange={update('budget')}>
                            <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>
                            <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
                            <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
                            <option value="₹15 Lakhs+">₹15 Lakhs+ (Flagship Mega Fest)</option>
                          </select>
                        </div>
                        <div className="gq-field">
                          <label className="gq-field-label">Message & Requirements</label>
                          <textarea
                            rows={4} className="gq-textarea"
                            value={quoteData.notes} onChange={update('notes')}
                            placeholder="Describe your event — audience size, services needed (stage, sound, volunteers, décor, security)..."
                          />
                        </div>
                      </div>
                    )}

                    {step === 5 && (
                      <div className="gq-review">
                        <div className="gq-review-row">
                          <span className="gq-review-label">Client Name</span>
                          <span className="gq-review-value">{quoteData.fullName || 'Not provided'}</span>
                        </div>
                        <div className="gq-review-row">
                          <span className="gq-review-label">Event Type</span>
                          <span className="gq-review-value">{quoteData.eventType}</span>
                        </div>
                        <div className="gq-review-row">
                          <span className="gq-review-label">Headcount</span>
                          <span className="gq-review-value">{quoteData.attendeesCount}</span>
                        </div>
                        <div className="gq-review-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                          <span className="gq-review-label">Estimated Budget</span>
                          <span className="gq-review-value">{quoteData.budget}</span>
                        </div>
                        <div className="gq-review-services">
                          <span className="gq-review-services-label">Selected Services</span>
                          <div className="gq-review-tags">
                            {quoteData.services.map((s) => (
                              <span key={s} className="gq-review-tag">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <hr className="gq-divider" />

                  <div className="gq-controls">
                    {step > 1 ? (
                      <button type="button" className="gq-btn gq-btn-outline" onClick={handlePrev}>
                        <ArrowLeft size={16} />
                        Previous Step
                      </button>
                    ) : (
                      <div className="gq-controls-spacer" />
                    )}

                    {step < 5 ? (
                      <button type="button" className="gq-btn gq-btn-primary" onClick={handleNext}>
                        Continue
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button type="submit" className="gq-btn gq-btn-primary">
                        Submit Request
                        <Send size={16} />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <GalleryFinalCTASection />
      </div>
    </PageContainer>
    </>
  );
};

export default GetQuotePage;
