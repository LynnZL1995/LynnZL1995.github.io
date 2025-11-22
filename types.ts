export interface Project {
  id: string;
  title: string;
  category: 'Mobile' | 'Web' | 'Branding';
  imageUrl: string;
  description: string;
  tags: string[];
}

export enum Sender {
  User = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  isTyping?: boolean;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}