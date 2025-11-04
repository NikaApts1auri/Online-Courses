import FeaturedCourses from "../features/home/components/FeaturedCourses";
import HeroSection from "../features/home/components/HeroSection";
import Partners from "../features/home/components/Partners";
import Testimonials from "../features/home/components/Testimonials";
import { Course } from "../shared/types";

async function getFeaturedCourses(): Promise<Course[]> {
  return [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React",
      image: "/react.png",
    },
    {
      id: 2,
      title: "Next.js 13",
      description: "Learn Next.js",
      image: "/next.png",
    },
    {
      id: 3,
      title: "TypeScript",
      description: "Learn TypeScript",
      image: "/ts.png",
    },
  ];
}

export default async function HomePage() {
  const courses = await getFeaturedCourses();
  const partners = ["/logo1.png", "/logo2.png", "/logo3.png"];

  return (
    <main className="py-16 max-w-6xl mx-auto">
      {/* Hero section */}
      <HeroSection />

      {/* Featured Courses section */}
      <FeaturedCourses courses={courses} />

      {/* Testimonials section */}
      <Testimonials testimonials={[]} />

      {/* Partners section */}
      <Partners partners={partners} />
    </main>
  );
}
