import React from 'react';
import Button from '../../components/common/Button';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

export const ContactPreviewSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative rounded-[1.25rem] m-[2px_3px_5px_3px]">
      <div className="container-custom">
        <SectionHeader
          overline="Direct Communication"
          title="Get In Touch"
          subtitle="Visit our Lucknow Office or reach out to our event operations desk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details Grid */}
          <div className="lg:col-span-6 space-y-6">
            <Card hoverEffect className="space-y-6 ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1">Office Location</h4>
                  <p className="body-small text-[var(--text-secondary)]">Commite Events Enterprise, Gomti Nagar, Lucknow, Uttar Pradesh, 226010, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1">Business Hours</h4>
                  <p className="body-small text-[var(--text-secondary)]">Monday – Saturday: 09:00 AM – 08:00 PM | 24×7 Event On-Ground Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1">Direct Helpline</h4>
                  <p className="body-small text-[var(--text-secondary)]">+91 90000 00000 | +91 80000 00000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-medium)] text-[var(--accent-primary)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold uppercase text-[var(--text-primary)] mb-1">Email Inquiry</h4>
                  <p className="body-small text-[var(--text-secondary)]">support@committeevents.com | vishesh@committeevents.com</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-4 text-[var(--text-secondary)]">
                <span className="text-xs font-mono uppercase text-[var(--text-muted)]">Connect:</span>
                <a href="https://www.instagram.com/commiteevents/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/commite-events/?viewAsMember=true" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
              </div>
            </Card>
          </div>

          {/* Google Maps Visual Preview */}
          <div className="lg:col-span-6">
            <Card hoverEffect accentBorder className="h-[420px] relative overflow-hidden flex items-center justify-center !">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950/40 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)] !text-white flex items-center justify-center mb-4 shadow-[0_0_30px_#E50914]">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">Lucknow Operations Hub</h3>
                <p className="body-small text-slate-300 max-w-sm mb-6">Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button href="tel:+919219751766" variant="secondary">Call Operations</Button>

                  <Button href="https://wa.me/919219751766" variant="secondary">WhatsApp</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreviewSection;
