/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PersonalInfo {
  name: string;
  avatarSeed: string;
  email: string;
  altEmail: string;
  phone: string;
  altPhone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  dob: string;
  linkedin: string;
  linkedinAlt: string;
  bio: string;
  parentNames: {
    mother: string;
    father: string;
  };
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  session: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  level: "Bachelors" | "Intermediate" | "School";
}

export interface SkillEntry {
  category: "Languages" | "Databases" | "Core Concepts" | "Interpersonal" | "Hobbies";
  name: string;
  level: number; // 1-100 gauge
}

export interface ProjectEntry {
  title: string;
  duration: string;
  environment: string;
  languages: string[];
  description: string;
  highlights: string[];
}

export interface CertificateEntry {
  title: string;
  issuer: string;
  type: "Industrial" | "Internship";
}

export interface AchievementEntry {
  title: string;
  category: "sports" | "academic" | "general";
  description: string;
}

export interface ShaikTousiffProfile {
  personal: PersonalInfo;
  education: EducationEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
  certifications: CertificateEntry[];
  achievements: AchievementEntry[];
  languagesKnown: string[];
}

export interface PromptConfig {
  framework: "React + Tailwind" | "React + Three.js" | "Next.js + Three.js" | "HTML + CSS + JS (Vanilla)";
  colorTheme: "Cyberpunk Glow (Neon Pink & Cyber Blue)" | "AI Matrix (Emerald & Deep Dark)" | "Minimalist Slate (Silver & Neon Purple)" | "Monochrome Tech (Cool White & Shadow)";
  visualStyle: "Semi-3D Grid & Cards" | "True 3D Interactive Canvas" | "Bento Box Dynamic Layout" | "Futuristic CLI Terminal";
  targetedAudience: "General Visitor" | "Tech Recruiter" | "Engineering Manager" | "Startup Founder";
  includeExtraDetails: boolean;
}
