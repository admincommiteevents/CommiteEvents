import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, User, ShieldCheck, Users, Gift } from 'lucide-react';

export const BusinessUnitsGridSection = ({ units }) => {
  const icons = {
    'parikshit-events': ShieldCheck,
    'crewlytics': Users,
    'wedding-gifting-agency': Gift
  };

  return (
    <section id="units-grid" className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Divisional Roster"
          title="Explore Our 3 Specialized Units"
          subtitle="Click into any business unit to view detailed services, client portfolios, team leadership, and hiring options."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {units.map((unit) => {
            const UnitIcon = icons[unit.id] || ShieldCheck;
            return (
              <Card
                key={unit.id}
                hoverEffect
                accentBorder
                className="group overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 !"
              >
                <div>
                  {/* Hero Image Header */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={unit.heroImage}
                      alt={unit.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--border-accent)] text-[var(--accent-primary)] shadow-lg">
                      <UnitIcon className="w-6 h-6" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[var(--accent-primary)] !text-white block w-max mb-1.5 shadow-sm">
                        Division
                      </span>
                      <h3 className="font-heading text-xl font-bold uppercase !text-white drop-shadow-md truncate">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Leadership Info */}
                    <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1 border-b border-[var(--border-subtle)] pb-3">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                        <span>Founder: <strong className="text-[var(--text-primary)]">{unit.founder}</strong></span>
                      </div>
                      {(unit.coFounder || unit.lead) && (
                        <div className="flex items-center gap-1.5">
                          <span>Co-Founder: <strong className="text-[var(--text-primary)]">{unit.coFounder || unit.lead}</strong></span>
                        </div>
                      )}
                    </div>

                    <p className="body-small text-[var(--text-secondary)] text-xs line-clamp-3 leading-relaxed">
                      {unit.description}
                    </p>

                    {/* Services Preview */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase text-[var(--accent-primary)] tracking-wider font-bold block mb-1">
                        Key Services:
                      </span>
                      {unit.servicesList.slice(0, 4).map((serv) => (
                        <div key={serv} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                          <span className="truncate">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    to={`/business-units/${unit.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-[var(--accent-primary)] group-hover:translate-x-1.5 transition-transform hover:underline"
                  >
                    <span>Explore Unit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Button href="/contact" variant="secondary" size="small">
                    Enquire
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnitsGridSection;
