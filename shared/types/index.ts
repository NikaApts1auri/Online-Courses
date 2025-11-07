export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  message: string;
}

export interface Partner {
  name: string;
  logo: string;
}
export interface Course {
  id: number;
  title: string;
  description: string;
  category?: string;
  image: string;
}
