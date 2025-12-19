import { getCourses } from "./services/courseService";
import CourseList from "./components/CourseList";
import { Course } from "../../shared/types";

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    courses = await getCourses();
  } catch (err) {
    console.error("Failed to fetch courses:", err);
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}
