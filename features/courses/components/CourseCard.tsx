import Link from "next/link";
import { Course } from "../../../shared/types";

interface Props {
  courses: Course;
}

const CourseCard = ({ courses }: Props) => {
  if (!courses) return null;

  return (
    <Link href={`/courses/${courses._id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer">
        <img
          src={courses.image}
          alt={courses.title}
          className="w-full h-44 object-cover rounded"
        />
        <h2 className="text-xl font-bold mt-2">{courses.title}</h2>
        <p className="text-gray-600">{courses.level}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
