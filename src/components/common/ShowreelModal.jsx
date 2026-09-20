import React from 'react';
import { X } from 'lucide-react';
import reel3 from '../../assets/reel3.mp4';

export const ShowreelModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none"
        aria-label="Close Showreel"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black relative flex items-center justify-center">
        <video
          src={reel3}
          className="w-full h-full object-contain"
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

export default ShowreelModal;
