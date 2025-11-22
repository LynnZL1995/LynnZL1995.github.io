import { Project, SkillData, ExperienceItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'UI Design', A: 95, fullMark: 100 },
  { subject: 'UX Research', A: 85, fullMark: 100 },
  { subject: 'Prototyping', A: 90, fullMark: 100 },
  { subject: 'Frontend', A: 70, fullMark: 100 },
  { subject: 'Animation', A: 80, fullMark: 100 },
  { subject: 'Strategy', A: 75, fullMark: 100 },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    year: '2023 - Present',
    role: 'Senior Product Designer',
    company: 'TechFlow Inc.',
    description: 'Leading the design system migration and overseeing the mobile app redesign which increased retention by 15%.',
  },
  {
    year: '2021 - 2023',
    role: 'UX Designer',
    company: 'Creative Pulse',
    description: 'Collaborated with cross-functional teams to deliver SaaS solutions for enterprise clients.',
  },
  {
    year: '2019 - 2021',
    role: 'Junior Visual Designer',
    company: 'StartUp Lab',
    description: 'Designed marketing assets and initial prototypes for early-stage fintech products.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/finance/800/600',
    description: 'A comprehensive analytics dashboard for high-frequency trading platforms.',
    tags: ['React', 'D3.js', 'Dark Mode'],
  },
  {
    id: '2',
    title: 'HealthTrack App',
    category: 'Mobile',
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    description: 'Personalized wellness tracking application with AI-driven insights.',
    tags: ['iOS', 'HealthKit', 'Minimalism'],
  },
  {
    id: '3',
    title: 'Lumina Brand Identity',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/brand/800/600',
    description: 'Complete brand overhaul for a renewable energy startup.',
    tags: ['Logo', 'Typography', 'Guidelines'],
  },
  {
    id: '4',
    title: 'E-Commerce Redesign',
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/shop/800/600',
    description: 'Streamlining the checkout flow to reduce cart abandonment.',
    tags: ['UX Research', 'Figma', 'Conversion'],
  },
  {
    id: '5',
    title: 'Travel Companion',
    category: 'Mobile',
    imageUrl: 'https://picsum.photos/seed/travel/800/600',
    description: 'AR-enabled city guide for modern travelers.',
    tags: ['AR', 'Maps', 'Social'],
  },
  {
    id: '6',
    title: 'NeoBank Interface',
    category: 'Web',
    imageUrl: 'https://picsum.photos/seed/bank/800/600',
    description: 'Futuristic banking interface with voice command integration.',
    tags: ['Voice UI', 'Security', 'Animation'],
  },
];

export const AI_SYSTEM_INSTRUCTION = `
You are "Aether AI", a virtual persona of a Senior UX Designer.
Your style is professional yet creative, insightful, and brief.
You answer questions about UX design, design systems, React frontend development, and the specific portfolio projects of your creator.
Keep responses under 80 words unless asked for detail.
Tone: Futuristic, helpful, sophisticated.
`;