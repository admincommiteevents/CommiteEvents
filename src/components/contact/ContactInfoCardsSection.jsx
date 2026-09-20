import React from 'react';
import Card from '../common/Card';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export const ContactInfoCardsSection = () => {
  return (
    <section className="py-6 sm:py-12 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">

          <Card hoverEffect accentBorder className="p-4 sm:p-6 space-y-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)]">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase text-[var(--text-primary)]">Email Communication</h3>
              <p className="font-mono text-[11px] sm:text-xs text-[var(--accent-primary)] font-semibold">Official Inquiries</p>
            </div>
            <p className="body-small text-[var(--text-secondary)] text-xs break-all sm:break-normal">
              vishesh@committeevents.com
            </p>
          </Card>

          <Card hoverEffect accentBorder className="p-4 sm:p-6 space-y-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-primary)]">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold uppercase text-[var(--text-primary)]">Business Hours</h3>
              <p className="font-mono text-[11px] sm:text-xs text-[var(--accent-primary)] font-semibold">Mon – Sat: 09:00 – 20:00</p>
            </div>
            <p className="body-small text-[var(--text-secondary)] text-xs">
              Sunday: On-Ground Live Events Only
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoCardsSection;
