import { galleryAssets } from '../assets/images';
import reel1 from '../assets/reel1.MOV';
import reel2 from '../assets/reel2.MOV';
import reel3 from '../assets/reel3.mp4';

export const galleryCategories = [
  'All',
  'Corporate',
  'College',
  'Wedding',
  'Sports',
  'Technical',
  'Comedy',
  'Live Shows',
  'Concerts',
  'E-Sports',
  'Brand Activation',
  'Government',
  'NGO',
  'Behind The Scenes'
];

export const photoGalleryData = [
  {
    id: 1,
    title: 'University Mega Concert Night',
    category: 'Concerts',
    location: 'Lucknow Stadium Ground',
    date: 'March 2025',
    url: galleryAssets.photos[0],
    aspect: 'tall'
  },
  {
    id: 2,
    title: 'C-Suite Business Summit Stage',
    category: 'Corporate',
    location: 'Taj Hotel, Lucknow',
    date: 'February 2025',
    url: galleryAssets.photos[1],
    aspect: 'wide'
  },
  {
    id: 3,
    title: 'Royal Mandap Floral Fabrication',
    category: 'Wedding',
    location: 'Centrum Hotel, Lucknow',
    date: 'January 2025',
    url: galleryAssets.photos[2],
    aspect: 'square'
  },
  {
    id: 4,
    title: 'State City Marathon Finish Line',
    category: 'Sports',
    location: 'Hazratganj Boulevard',
    date: 'December 2024',
    url: galleryAssets.photos[3],
    aspect: 'wide'
  },
  {
    id: 5,
    title: 'National BGMI Esports LAN Arena',
    category: 'E-Sports',
    location: 'Indira Gandhi Pratishthan',
    date: 'November 2024',
    url: galleryAssets.photos[4],
    aspect: 'tall'
  },
  {
    id: 6,
    title: 'Steel Reinforced Robo-War Cage',
    category: 'Technical',
    location: 'AKTU Campus, Lucknow',
    date: 'October 2024',
    url: galleryAssets.photos[5],
    aspect: 'square'
  },
  {
    id: 7,
    title: 'Celebrity Stand-up Comedy Arena',
    category: 'Comedy',
    location: 'Scientific Convention Center',
    date: 'September 2024',
    url: galleryAssets.photos[6],
    aspect: 'wide'
  },
  {
    id: 8,
    title: 'State Tourism Heritage Festival',
    category: 'Government',
    location: 'Ambedkar Memorial Park',
    date: 'August 2024',
    url: galleryAssets.photos[7],
    aspect: 'tall'
  },
  {
    id: 9,
    title: 'Parikshit Events Volunteer Briefing',
    category: 'Behind The Scenes',
    location: 'Control Center, Lucknow',
    date: 'July 2024',
    url: galleryAssets.photos[8],
    aspect: 'wide'
  }
];

export const videoGalleryData = [
  {
    id: 1,
    title: 'Lucknow Open Mic, Comedy & Poetry',
    category: 'Live Shows',
    duration: '03:45',
    thumbnail: galleryAssets.photos[0],
    videoUrl: reel1,
    isLocal: true
  },
  {
    id: 2,
    title: 'Client Testimonial & Event Feedback',
    category: 'Feedback',
    duration: '04:15',
    thumbnail: galleryAssets.photos[2],
    videoUrl: reel3,
    isLocal: true
  },
  {
    id: 3,
    title: 'Behind the Scenes & Event Management',
    category: 'Management',
    duration: '02:30',
    thumbnail: galleryAssets.photos[1],
    videoUrl: reel2,
    isLocal: true
  }
];

export const beforeAfterData = [
  {
    id: 1,
    title: 'Stadium Ground Transformation',
    category: 'Concert Stage Fabrication',
    beforeImage: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Bare Convention Hall to Royal Mandap',
    category: 'Wedding Architecture',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  }
];

export const btsData = [
  { title: 'Sound Line Array Tuning', desc: 'Acoustic balancing 6 hours before showtime.', img: galleryAssets.bts[0] },
  { title: 'Volunteers Control Briefing', desc: 'Parikshit Events briefing 100+ uniformed crew.', img: galleryAssets.bts[1] },
  { title: 'Aluminium Trussing Assembly', desc: 'Structural engineers building 40ft concert stage.', img: galleryAssets.bts[2] }
];
