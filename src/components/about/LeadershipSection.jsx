import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

export const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Vishesh Pandey',
      role: 'Founder & CEO',
      division: 'Commite Events, Parikshit Events & Crewlytics',
      bio: 'Visionary entrepreneur and event architect. Spearheads strategic direction, university alliances, enterprise partnerships, and ground management across Uttar Pradesh.',
      initials: 'VP',
      instagram: 'https://www.instagram.com/vishesh_pandey_xx/',
      linkedin: null,
      mail: 'vishesh@committeevents.com'
    },
    {
      name: 'Shivam Singh',
      role: 'Co-Founder & COO',
      division: 'Commite Events & Crewlytics',
      bio: 'Strategic operations director. Manages corporate client relations, temporary staffing placement, digital check-in tech, and workforce logistics.',
      initials: 'SS',
      instagram: null,
      linkedin: 'https://www.linkedin.com/in/shivam-singh-622340258',
      mail: 'ssingh070903@gmail.com'
    }
  ];

  return (
    <Section background="secondary" borderTop={true} id="team">
      <Container>
        <SectionHeader
          overline="Executive Leadership"
          title="Founders & Directors"
          subtitle="Meet the visionaries, strategic planners, and ground operation directors driving Commite Events."
        />

        <Grid columns={2} gap="normal">
          {leaders.map((leader) => (
            <PremiumCard
              key={leader.name}
              accentBorder
              className="group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Visual Box */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] border border-[var(--border-medium)] flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-[var(--accent-primary)] transition-colors">
                  <div className="w-20 h-20 rounded-full bg-[var(--accent-primary)] !text-white font-heading font-bold text-2xl flex items-center justify-center shadow-lg shadow-[var(--accent-glow)] group-hover:scale-110 transition-transform">
                    {leader.initials}
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-mono text-[var(--accent-primary)] mb-1 font-semibold">
                  {leader.role}
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">
                  {leader.division}
                </div>

                <p className="body-small text-[var(--text-secondary)] leading-relaxed mb-6">
                  {leader.bio}
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[var(--text-secondary)] text-xs font-mono mt-auto">
                <span>Connect:</span>
                <div className="flex items-center gap-3">
                  {leader.instagram && (
                    <a href={leader.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><InstagramIcon className="w-4 h-4" /></a>
                  )}
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
                  )}
                  <a href={`mailto:${leader.mail}`} className="hover:text-[var(--accent-primary)] transition-colors"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
            </PremiumCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default LeadershipSection;
