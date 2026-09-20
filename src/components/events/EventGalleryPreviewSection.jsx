import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Maximize2, X } from 'lucide-react';

export const EventGalleryPreviewSection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    { title: 'Concert Star Night Stage', category: 'Concerts', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80' },
    { title: 'Corporate C-Suite Summit', category: 'Corporate', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
    { title: 'University Youth Fest Arena', category: 'College', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
    { title: 'Marathon Stadium Finish Line', category: 'Sports', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' },
    { title: 'E-Sports LAN Gaming Arena', category: 'Gaming', url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80' },
    { title: 'Royal Mandap Wedding Decor', category: 'Wedding', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <section className="section-padding grid-background relative border-t border-[var(--border-subtle)]">
      <div className="container-custom">
        <SectionHeader
          overline="Visual Portfolio"
          title="Event Gallery Preview"
          subtitle="Explore iconic moments captured across our corporate summits, university star nights, and stadium sports events."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <Card
              key={idx}
              hoverEffect
              className="group overflow-hidden relative cursor-pointer h-64 !"
              onClick={() => setSelectedImg(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--accent-primary)] !text-white block w-max mb-1.5 shadow-sm">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-sm font-bold uppercase !text-white drop-shadow-md truncate">
                    {item.title}
                  </h4>
                </div>

                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <div className="mt-4 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-primary)]">
                  {selectedImg.category}
                </span>
                <h3 className="font-heading text-lg font-bold uppercase text-white">
                  {selectedImg.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventGalleryPreviewSection;
