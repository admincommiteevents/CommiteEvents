import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { MapPin, ExternalLink } from 'lucide-react';

export const GoogleMapSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Location Map"
          title="Visit Our Lucknow Office"
          subtitle="Located centrally in Lucknow, Uttar Pradesh for easy in-person event strategy meetings."
        />

        <Card hoverEffect accentBorder className="overflow-hidden relative h-72 sm:h-80 md:h-96">
          <iframe
            title="Commite Events Lucknow Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.3939634907!2d80.86054817551065!3d26.84869155700868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 opacity-90 transition-opacity"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
            <a
              href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-[var(--accent-primary)] !text-white text-xs font-heading font-semibold uppercase hover:bg-red-700 transition-all shadow-xl cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GoogleMapSection;
