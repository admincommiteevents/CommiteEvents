import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Grid from '../layout/Grid';
import SectionHeader from '../common/SectionHeader';
import PremiumCard from '../common/PremiumCard';
import { Mail } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

export const TeamGridSection = () => {
  const teamMembers = [
    { name: 'Vishesh Pandey', role: 'Founder & CEO', team: 'Executive', initials: 'VP' },
    { name: 'Shivam Singh', role: 'Co-Founder & COO', team: 'Executive', initials: 'SS' },
    { name: 'Aarav Verma', role: 'Stage & Acoustic Director', team: 'Technical Team', initials: 'AV' },
    { name: 'Riya Malhotra', role: 'Corporate Client Director', team: 'Marketing & PR', initials: 'RM' },
    { name: 'Kabir Das', role: 'Volunteer Logistics Lead', team: 'Parikshit Events', initials: 'KD' },
    { name: 'Sneha Roy', role: 'Staffing Placement Head', team: 'Crewlytics', initials: 'SR' }
  ];

  return (
    <Section background="primary" borderTop={true}>
      <Container>
        <SectionHeader
          overline="Operational Backbone"
          title="Meet The Team"
          subtitle="The dedicated directors, technical heads, and ground leads working behind the scenes."
        />

        <Grid columns={4} gap="normal">
          {teamMembers.map((member) => (
            <PremiumCard
              key={member.name}
              accentBorder
              className="group transition-all duration-300  flex flex-col justify-between"
              paddingSize="none"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-accent)] text-[var(--accent-primary)] font-heading font-bold text-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[var(--accent-primary)] group-hover:!text-white transition-all">
                  {member.initials}
                </div>

                <span className="text-overline text-[10px] text-[var(--accent-primary)] block mb-1">
                  {member.team}
                </span>

                <h4 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {member.name}
                </h4>

                <p className="body-small text-[var(--text-secondary)] mb-4">
                  {member.role}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[var(--text-secondary)] mt-auto">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Lucknow Base</span>
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/company/commite-events/?viewAsMember=true" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><LinkedinIcon className="w-3.5 h-3.5" /></a>
                  <a href="https://www.instagram.com/commiteevents/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent-primary)] transition-colors"><InstagramIcon className="w-3.5 h-3.5" /></a>
                </div>
              </div>
            </PremiumCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default TeamGridSection;
