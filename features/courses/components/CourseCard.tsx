"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "../../../shared/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="relative h-40 w-full mb-4 rounded overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          priority={true} // თუ above-the-fold content-ია
        />
      </div>
      <h3 className="font-bold text-xl mb-2">{course.title}</h3>
      <p className="text-gray-600 flex-1">{course.description}</p>
      <Link href={`/courses/${course.id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Course
        </button>
      </Link>
    </div>
  );
};

export default CourseCard;
