import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { InstagramIcon } from '../common/SocialIcons';
import { Heart, ExternalLink } from 'lucide-react';

export const InstagramFeedSection = () => {
  const instaPosts = [
    { id: 1, likes: '2.4k', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80' },
    { id: 2, likes: '1.8k', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
    { id: 3, likes: '3.1k', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80' },
    { id: 4, likes: '1.2k', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Social Connection"
          title="Follow Us On Instagram"
          subtitle="@committeeevents — Real-time event stories, live stage setups, and behind-the-scenes moments."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden relative rounded-xl h-56 block p-0 border border-[var(--border-subtle)]"
            >
              <img
                src={post.img}
                alt="Instagram post"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                  <Heart className="w-4 h-4 fill-current text-red-500" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  <span>View Post</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
