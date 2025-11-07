import { Metadata } from "next";

import { getAboutData } from "./services/aboutService";
import AchievementCard from "./components/AchievementCard";
import GoalCard from "./components/GoalCard";

export const metadata: Metadata = {
  title: "About Us | E-learn",
  description:
    "Learn more about E-learn — our achievements, goals, and vision for the future of digital education.",
};

// ✅ Server Component (Next.js 13+ App Router)
// პირდაპირ async — მომავალში ბექიდან წამოიღებს მონაცემებს
export default async function AboutPage() {
  const { achievements, goals } = await getAboutData();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-orange-500 font-bold mb-4">
            About E-learn
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to E-learn, where education meets innovation. We’re
            dedicated to empowering learners through practical, industry-driven
            online experiences.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-2xl text-orange-500 font-semibold mb-10 text-center">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <AchievementCard key={a.id} {...a} />
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="mb-20">
          <h2 className="text-2xl text-orange-500 font-semibold mb-10 text-center">
            Our Goals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((g) => (
              <GoalCard key={g.id} {...g} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 bg-orange-50 py-14 px-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Together, let’s shape the future of digital innovation
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us in creating transformative learning experiences for
            tomorrow’s world.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Join Now
          </a>
        </div>
      </section>
    </main>
  );
}
