"use client";

import { Course } from "../../../shared/types";
import Image from "next/image";
import Link from "next/link";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  if (courses.length === 0) {
    return <p className="text-gray-500">No courses available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => {
        // Create SEO-friendly slug from title
        const slug = course.title.toLowerCase().replace(/\s+/g, "-"); //სეოსთვის

        return (
          <Link
            key={course.id}
            href={`/courses/${course.id}-${slug}`}
            className="block border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            {course.image ? (
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4" />
            )}
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{course.description}</p>
            <span className="text-xs text-gray-400 mt-2 inline-block">
              {course.category}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
