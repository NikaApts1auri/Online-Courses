import HeroSection from "../features/home/components/HeroSection";
import FeaturedCourses from "../features/home/components/FeaturedCourses";
import Testimonials from "../features/home/components/Testimonials";
import Partners from "../features/home/components/Partners";
import { Course } from "../shared/types";

async function getFeaturedCourses(): Promise<Course[]> {
  return [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React",
      image: "/react.png",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Next.js 13",
      description: "Learn Next.js",
      image: "/next.png",
      category: "Frontend",
    },
    {
      id: 3,
      title: "TypeScript",
      description: "Learn TypeScript",
      image: "/ts.png",
      category: "Programming",
    },
  ];
}

export default async function HomePage() {
  const courses = await getFeaturedCourses();
  const partners = ["/logo1.png", "/logo2.png", "/logo3.png"];

  return (
    <main className="py-16 max-w-6xl mx-auto">
      <HeroSection />

      <FeaturedCourses courses={courses} />

      <Testimonials testimonials={[]} />

      <Partners partners={partners} />
    </main>
  );
}
