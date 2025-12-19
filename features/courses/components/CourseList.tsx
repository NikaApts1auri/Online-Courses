import { Course } from "../../../shared/types";
import CourseCard from "./CourseCard";

interface Props {
  courses: Course[];
}

const CourseList = ({ courses }: Props) => {
  if (!courses || courses.length === 0) return <p>No courses found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard key={course._id} courses={course} />
      ))}
    </div>
  );
};

export default CourseList;
