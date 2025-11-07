"use client";

import Image from "next/image";
import Button from "../../../shared/components/ui/Button";
import { Course } from "../../../shared/types";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 duration-200">
      <div className="relative w-full h-44">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-orange-600">
            {course.category}
          </span>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">
            Enroll
          </Button>
        </div>
      </div>
    </article>
  );
}
