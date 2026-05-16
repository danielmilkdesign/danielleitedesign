export interface ProjectMedia {
  type: 'image' | 'video' | 'gif';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
  details?: {
    fullDescription: string;
    challenges: string;
    solution: string;
    results: string;
    media: ProjectMedia[];
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
}

export interface DesignStep {
  title: string;
  description: string;
  icon: string;
}
