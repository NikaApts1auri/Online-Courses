"use client";

import CourseList from "../../courses/components/CourseList";
import { Course } from "../../../shared/types";

interface FeaturedCoursesProps {
  courses: Course[];
}

export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <p className="text-sm text-gray-600 mt-1">
            Hand-picked courses to boost your career.
          </p>
        </div>
        <div className="text-sm text-orange-600 font-medium cursor-pointer">
          View all
        </div>
      </div>

      <CourseList courses={courses} />
    </section>
  );
}
