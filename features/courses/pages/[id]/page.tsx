import { Course } from "../../../../shared/types";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const courseId = Number(params.id.split("-")[0]);

  const res = await fetch(`https://api.example.com/courses/${courseId}`);
  if (!res.ok) return <p>Course not found</p>;

  const course: Course = await res.json();

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700">{course.description}</p>
      <p className="text-sm text-gray-500 mt-4">Category: {course.category}</p>
    </div>
  );
}
//კონკრეტული 1 კურსის ინფორმაცია, რომელსაც დააკლიკებენ და გაიხსნება ახალი გვერდი.
