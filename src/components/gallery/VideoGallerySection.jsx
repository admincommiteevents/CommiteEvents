import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import { Play, X, Clock } from 'lucide-react';

export const VideoGallerySection = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="video-gallery" className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative">
      <div className="container-custom">
        <SectionHeader
          overline="Cinematic Aftermovies"
          title="Video Highlights Gallery"
          subtitle="Watch 4K video recaps of our major stadium concerts, corporate summits, and royal weddings."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <Card
              key={vid.id}
              hoverEffect
              accentBorder
              className="group overflow-hidden cursor-pointer !"
              onClick={() => setActiveVideo(vid)}
            >
              {/* Thumbnail Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors pointer-events-none" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-primary)] !text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white">
                  <Clock className="w-3 h-3 text-[var(--accent-primary)]" />
                  <span>{vid.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2">
                <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--border-subtle)] inline-block">
                  {vid.category}
                </span>
                <h3 className="font-heading text-base font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors truncate">
                  {vid.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {activeVideo.isLocal ? (
                <video
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                />
              ) : (
                <iframe
                  src={activeVideo.videoUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallerySection;
