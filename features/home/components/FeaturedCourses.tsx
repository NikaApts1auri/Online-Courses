"use client";
import React from "react";
import CourseCard from "../../courses/components/CourseCard";
import { Course } from "../../../shared/types";

interface FeaturedCoursesProps {
  courses: Course[];
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
