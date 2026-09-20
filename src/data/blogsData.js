import { blogAssets } from '../assets/images';

export const blogCategories = [
  'All',
  'Event Planning',
  'Wedding',
  'Corporate Events',
  'College Fest',
  'Sports',
  'Technical',
  'Volunteer Management',
  'Marketing',
  'Brand Promotion',
  'Industry News'
];

export const blogPosts = [
  {
    id: 1,
    slug: 'how-to-plan-college-fest-lucknow',
    title: 'The Ultimate Guide to Planning a Massive College Fest in Lucknow',
    category: 'College Fest',
    author: 'Vishesh Pandey',
    authorRole: 'Founder & CEO',
    date: 'July 15, 2026',
    readTime: '6 min read',
    coverImage: blogAssets.collegeGuide,
    summary: 'A step-by-step masterclass on budget allocation, celebrity artist booking, crowd control barricading, and volunteer management for university cultural fests.',
    content: `
Planning a 35,000-student university cultural fest in Lucknow requires balancing creative ambition with disciplined ground engineering. From securing police NOCs to managing VIP escorts and stage acoustics, every single detail counts.

### 1. Budget Allocation Strategy
Divide your total fest budget into clear operational buckets:
- **35%**: Artist Performance Fees & Technical Riders
- **25%**: Stage Fabrication, LED Displays & Sound Line Arrays
- **20%**: Security, Bouncers, DFMD Gates & Volunteer Logistics
- **10%**: Marketing, Campus Branding & Digital PR
- **10%**: Contingency Reserve

### 2. Barricading & Crowd Flow Engineering
Stampede risks occur at venue bottlenecks. Parikshit Events utilizes a dual-corridor barricade layout:
- **Outer Perimeter**: High-security DFMD gates and QR ticket scanners.
- **Inner Arena**: Segmented VIP, General, and Press enclosures with dedicated emergency lanes.

### 3. Artist Logistics & Backstage Protocol
Never mix general attendee entry with artist arrival routes. Set up an isolated green room zone with dedicated security guards and direct stage ramp access.
    `,
    keywords: ['College Fest Organizer Lucknow', 'University Event Management UP', 'Parikshit Events Volunteers'],
    isFeatured: true
  },
  {
    id: 2,
    slug: 'corporate-event-management-trends-2026',
    title: 'Top Corporate Event Management Trends in Uttar Pradesh for 2026',
    category: 'Corporate Events',
    author: 'Shivam Singh',
    authorRole: 'Co-Founder & Talent Director',
    date: 'July 10, 2026',
    readTime: '5 min read',
    coverImage: blogAssets.corporateTrends,
    summary: 'Discover how modern enterprises are integrating P2.5 LED visual walls, interactive digital registration check-ins, and hybrid streaming for corporate keynotes.',
    content: `
Corporate events in 2026 are shifting from traditional banquet setups to immersive experiential summits. Enterprises in Lucknow and NCR demand high-speed delegate check-in and interactive technology.

### Key Trends Shaping Corporate Events:
1. **Instant QR Badging**: Reducing delegate check-in times to under 3 seconds per person.
2. **Interactive P2.5 LED Stages**: Dynamic 3D visual backgrounds for keynote speakers.
3. **Bilingual Event Anchors**: Hiring professional emcees who seamlessly transition between Hindi and English for executive audiences.
    `,
    keywords: ['Corporate Event Management Lucknow', 'Enterprise Summit Organizer', 'Crewlytics Staffing'],
    isFeatured: false
  },
  {
    id: 3,
    slug: 'luxury-wedding-planning-tips-lucknow',
    title: '10 Essential Tips for Planning a Luxury Royal Wedding in Lucknow',
    category: 'Wedding',
    author: 'Gracee Bisht',
    authorRole: 'Agency Lead, Wedding & Gifting Agency',
    date: 'July 04, 2026',
    readTime: '7 min read',
    coverImage: blogAssets.weddingTips,
    summary: 'From royal mandap fabrications to bespoke guest return gift hampers, learn how to execute an unforgettable luxury celebration.',
    content: `
Lucknow’s rich cultural heritage demands wedding decor and guest hospitality that reflects royal grandeur and timeless Nawabi elegance.

### 1. Royal Mandap Architecture
Incorporate fresh jasmine, roses, and custom brass lanterns into a 30ft elevated ceiling mandap setup.

### 2. Custom Return Gift Hampers
Replace standard sweet boxes with handcrafted artisan gift hampers containing silver coins, organic teas, and custom monogrammed keepsakes curated by Wedding & Gifting Agency.
    `,
    keywords: ['Wedding Planner Lucknow', 'Luxury Mandap Decor', 'Return Gift Hampers Lucknow'],
    isFeatured: false
  },
  {
    id: 4,
    slug: 'volunteer-management-crowd-control-tactics',
    title: 'How Parikshit Events Manages 5,000+ Volunteers for Zero-Incident Events',
    category: 'Volunteer Management',
    author: 'Ratnesh',
    authorRole: 'Co-Founder & Operations Lead',
    date: 'June 28, 2026',
    readTime: '8 min read',
    coverImage: blogAssets.volunteerTactics,
    summary: 'Insights into pre-event briefings, tactical zone positioning, walkie-talkie communication protocols, and emergency crowd management.',
    content: `
Volunteer management is the operational backbone of large live events. Without disciplined ground crews, even the best stage setup will collapse under crowd pressure.

### Parikshit Events 4-Point Command Framework:
- **Comprehensive Pre-Briefing**: Training 100+ uniformed volunteers on crowd empathy, emergency exits, and registration desk software.
- **Zonal Captains**: Assigning senior squad leaders to oversee every 10 volunteers.
- **Radio Frequency Protocol**: Dedicated walkie-talkie channels connecting registration, security, and stage crews.
    `,
    keywords: ['Volunteer Management Lucknow', 'Event Staffing Ground Ops', 'Parikshit Events'],
    isFeatured: false
  }
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((p) => p.slug === slug) || blogPosts[0];
};
