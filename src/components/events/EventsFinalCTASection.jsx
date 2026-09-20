import React from 'react';
import Button from '../common/Button';
import ChromeObject3D from '../common/ChromeObject3D';
import SectionHeader from '../common/SectionHeader';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const EventsFinalCTASection = () => {
  return (
    <section className="py-24 bg-[#0B0C0E] text-white border-t border-white/10 relative overflow-hidden select-none m-[2px_3px_5px_3px] rounded-[1.25rem]" style={{marginTop:"2px",marginLeft:"3px",marginRight:"3px",marginBottom:"5px",paddingTop:"6rem",paddingBottom:"6rem"}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E50914] opacity-30 rounded-full blur-[180px] pointer-events-none" />

      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        <div className="mb-6">
          <ChromeObject3D variant="sphere" size={130} />
        </div>

        <SectionHeader
          overline="Turnkey Event Execution"
          title={<>Ready To Organize Your <span className="text-gradient">Next Event?</span></>}
          subtitle="Contact Commite Events today for customized quotes, venue inspection, stage fabrications, and ground operation support in Lucknow & North India."
          lightText={true}
          className="mb-10"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="large" icon={ArrowRight}>
            Book Your Event
          </Button>

          <Button href="tel:+919219751766" variant="outline-white">Call Operations</Button>

          <Button href="https://wa.me/919219751766" variant="outline-white">WhatsApp</Button>
        </div>
      </div>
    </section>
  );
};

export default EventsFinalCTASection;
