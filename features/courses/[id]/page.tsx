/* eslint-disable @next/next/no-img-element */
import { getCourseById } from "../services/courseService";
import { Course } from "../../../shared/types";

interface Props {
  params: { id: string };
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = params;
  let course: Course;

  try {
    course = await getCourseById(id);
  } catch (err: any) {
    return <p className="text-red-500">Failed to load course: {err.message}</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-4xl font-bold mt-6">{course.title}</h1>
      <p className="text-gray-700 mt-2">{course.description}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum</h2>
      {course.curriculums.map((cur) => (
        <div key={cur.order} className="border p-4 rounded mb-6">
          <h3 className="text-xl font-bold">{cur.title}</h3>
          <p className="text-gray-600">{cur.description}</p>

          <div className="mt-3">
            {cur.lessons.map((lesson) => (
              <div key={lesson._id} className="bg-gray-100 p-2 rounded mb-2">
                <p className="font-medium">{lesson.title}</p>
                <p className="text-sm">{lesson.content}</p>
                <p className="text-xs text-gray-500">
                  Duration: {lesson.duration} mins
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
