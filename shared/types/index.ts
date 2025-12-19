export interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // საათებში
  author: string;
  slug: string;
  curriculums: Curriculum[];
}

export interface Testimonial {
  name: string;
  message: string;
}

export interface Partner {
  name: string;
  logo: string;
}
// Course-ის ტიპის მაქსიმალურად დეტალური აღწერა
export interface Lesson {
  _id: string;
  title: string;
  content: string; // მოკლე აღწერა ან ვიდეო ბმული
  duration: number; // წუთებში
}

export interface Curriculum {
  order: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

// export interface Course {
//   _id: string; // მონაცემთა ბაზის ID
//   title: string;
//   description: string;
//   image: string; // სურათის URL
//   level: "Beginner" | "Intermediate" | "Advanced";
//   duration: number; // საათებში
//   author: string;
//   slug: string; // სურვილისამებრ, თუ API აბრუნებს
//   curriculums: Curriculum[];
// }
