
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