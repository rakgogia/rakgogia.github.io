
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  logo?: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  graduationHonor: string;
  honors: string[];
  societies: string[];
}

export interface HighSchoolInfo {
  institution: string;
  location: string;
  classYear: string;
  honors: string[];
  societies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface MicrosoftProduct {
  name: string;
  logo: 'outlook' | 'teams' | 'sharepoint' | 'copilot' | 'copilot-search';
}

export interface PersonalProject {
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface GitHubProject {
  name: string;
  description: string;
  language: string;
  topics: string[];
  url: string;
  liveUrl?: string;
}