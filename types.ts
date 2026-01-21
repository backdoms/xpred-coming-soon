import { ReactNode } from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string; // URL
  rating: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}
