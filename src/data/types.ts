export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Ingredient {
  id: string;
  name: string;
  origin: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  size: string;
  badge?: string;
  gradient: string;
  image?: string;
  imageAlt?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestHypothesis {
  id: string;
  title: string;
  hypothesis: string;
  why: string;
  metric: string;
  priority: 'high' | 'medium' | 'low';
  status: 'ready' | 'running' | 'completed';
  expectedImpact: string;
}
