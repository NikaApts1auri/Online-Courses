import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses courses={[]} />
      <Testimonials testimonials={[]} />
      <Partners partners={[]} />
    </main>
  );
}
