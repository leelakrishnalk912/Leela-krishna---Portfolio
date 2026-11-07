/**
 * Type definitions for Leela Krishna's portfolio.
 * Accurately models a first-semester B.Tech student's projects, skills, and roadmap.
 */

export type SkillLevel = 'Learning' | 'Exploring' | 'Familiar' | 'Foundational';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web Development' | 'AI' | 'Foundations & Practices';
  level: SkillLevel;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  technology: string;
  concepts: string[];
  problemStatement: string;
  logicExplanation: string;
  codeSnippet: string;
  sampleInput: string;
  sampleOutput: string;
  interactiveType: 'voter' | 'calculator' | 'atm' | 'grade';
}

export interface HackathonPillar {
  title: string;
  description: string;
  takeaway: string;
}

export interface RoadmapStep {
  step: number;
  stage: string;
  status: 'current' | 'in-progress' | 'upcoming';
  description: string;
  focusAreas: string[];
}
