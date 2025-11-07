// import axios from "axios";

// export const getCourses = async () => {
//   try {
//     const response = await axios.get("/courses");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching courses:", error);
//     return [];
//   }
// };
// mock data until backend is ready
export const mockCourses = [
  {
    id: 1,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and experience design.",
    category: "Design",
    image: "/images/course-1.jpg",
  },
  {
    id: 2,
    title: "Web Development with React",
    description: "Master modern frontend using React, Next.js and Tailwind.",
    category: "Development",
    image: "/images/course-2.jpg",
  },
  {
    id: 3,
    title: "Advanced JavaScript Techniques",
    description: "Asynchronous patterns, performance, internals.",
    category: "Programming",
    image: "/images/course-3.jpg",
  },
  {
    id: 4,
    title: "Full-Stack Bootcamp",
    description: "React + Node.js + Database practical projects.",
    category: "Full-Stack",
    image: "/images/course-4.jpg",
  },
];
