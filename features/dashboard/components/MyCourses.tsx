// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Course } from "../../../shared/types";

// // mock მონაცემები (რეალურ შემთხვევაში fetch ან context)
// const mockCourses: Course[] = [];

// export default function MyCourses() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {mockCourses.map((course) => {
//         const slug = course.title.toLowerCase().replace(/\s+/g, "-");

//         return (
//           <Link
//             key={course.id}
//             href={`/course/${course.id}-${slug}`}
//             className="block border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
//           >
//             <Image
//               src={course.image}
//               alt={course.title}
//               width={400}
//               height={200}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-lg font-semibold">{course.title}</h3>
//             <p className="text-gray-600 text-sm mt-1">{course.description}</p>
//             <span className="text-xs text-gray-400 mt-2 inline-block"></span>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }
