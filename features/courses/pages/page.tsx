import { Course } from "../../../shared/types";
import CourseList from "../components/CourseList";

// async function getCourses(): Promise<Course[]> {
// //   const res = await fetch("https://api.example.com/courses");
// //   if (!res.ok) return [];
// //   return res.json();
// }

// ვაკომენტარებ რადგან ჯერ არ მაქვს რეალური API

export default async function CoursesPage() {
  //   const courses = await getCourses();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Courses</h1>
      <p className="text-gray-600 mb-8">
        Browse through our collection of online courses.
      </p>

      {/* <CourseList courses={courses} /> */}
    </main>
  );
}
//აქენ არის ყველა კურსის გვერდი, სადაც ჩამოთვლილია ყველა კურსი.
