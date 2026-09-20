import React from 'react';
import Button from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const BusinessUnitsFinalCTASection = () => {
  return (
    <section className="py-24 bg-[#0B0C0E] text-white border-t border-white/10 relative overflow-hidden select-none m-[2px_3px_5px_3px] rounded-[1.25rem]" style={{marginTop:"2px",marginLeft:"3px",marginRight:"3px",marginBottom:"5px",paddingTop:"6rem",paddingBottom:"6rem"}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914] opacity-30 rounded-full blur-[180px] pointer-events-none" />

      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={130} />
        </div>

        <SectionHeader
          overline="Multi-Brand Synergy"
          title={<>Let's Build Your Next <span className="text-gradient">Successful Event Together</span></>}
          subtitle="Contact Commite Events or connect directly with our specialized divisions — Parikshit Events, Crewlytics, or Wedding & Gifting Agency."
          lightText={true}
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+91 92197 51766"
            className="inline-flex items-center gap-2.5 rounded-[var(--radius-md)] bg-[#E50914] text-white text-sm font-heading font-semibold uppercase hover:bg-red-700 transition-all cursor-pointer shadow-lg shadow-red-900/30 whitespace-nowrap"
            style={{ padding: '16px 32px' }}
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Talk To Expert</span>
          </a>

          <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
            Book Consultation
          </Button>

          <Button href="https://wa.me/919219751766" variant="outline-white">WhatsApp</Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsFinalCTASection;
