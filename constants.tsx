
import { Vault, Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '3',
    title: 'The Visual Vault: Lagos Pulse',
    vault: Vault.VISUAL,
    image_url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    description: 'Cinematic storytelling through high-octane event coverage and drone cinematography.',
    tags: ['Drone', '4K Video', 'Editing'],
    case_study: {
      blocks: [],
      challenge: 'Traditional event coverage lacked the cinematic scale needed to match the prestige of modern Lagos summits.',
      strategy: 'Utilized high-altitude drone maneuvers and synchronized multi-cam 4K feeds to create an immersive "Live Reel" experience.',
      result: 'Delivered a 60-second high-energy sizzle reel that boosted client engagement by 45% on social platforms.'
    }
  },
  {
    id: '7',
    title: 'Afro-Fusion Beats',
    vault: Vault.DESIGN,
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    description: 'Album art and branding for an upcoming Afro-fusion artist.',
    tags: ['Branding', 'Graphic Design', 'Music'],
    case_study: {
      blocks: [],
      challenge: 'Creating a visual language that fuses traditional African patterns with modern pop aesthetics.',
      strategy: 'Digitized authentic textile patterns and remixed them with bold, contemporary typography.',
      result: 'The album cover was featured in several design blogs for its innovative use of cultural heritage.'
    }
  }
];

export const ALL_SERVICES: Service[] = [
  { id: 's1', title: 'Events Coverage', items: ['Wedding / Milestone', 'Corporate Events', 'Conference Coverage'], icon: '🎥' },
  { id: 's2', title: 'LiveStreaming', items: ['High-Energy Events', 'Corporate Keynotes', 'Digital Broadcasts'], icon: '📡' },
  { id: 's3', title: 'Media Production', items: ['Cinematic Movies', 'Music Videos', 'Commercial Content'], icon: '🎬' },
  { id: 's4', title: 'Branding Design', items: ['Visual Identity', 'Logo Systems', 'Brand Guidelines'], icon: '🎨' },
  { id: 's5', title: 'Social & Motion', items: ['Social Content', 'Motion Graphics', 'Short-form Video'], icon: '⚡' },
  { id: 's6', title: 'Prints & Merch', items: ['Official Merchandize', 'Print Campaigns', 'Packaging Design'], icon: '👕' }
];

export const CREATIVE_SERVICES: Service[] = ALL_SERVICES.slice(0, 3);
export const DIGITAL_SERVICES: Service[] = ALL_SERVICES.slice(3, 6);
