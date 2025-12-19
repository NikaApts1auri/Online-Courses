import { Achievement, Goal } from "../ types";

const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Trusted by Thousands",
    text: "Our community includes thousands of learners worldwide.",
  },
  {
    id: 2,
    title: "Award-Winning Courses",
    text: "Recognized globally for teaching excellence and innovation.",
  },
  {
    id: 3,
    title: "Positive Student Feedback",
    text: "Consistently rated highly by students for engagement and clarity.",
  },
];

const MOCK_GOALS: Goal[] = [
  {
    id: 1,
    title: "Provide Practical Skills",
    text: "Deliver hands-on learning that drives real-world impact.",
  },
  {
    id: 2,
    title: "Foster Creative Problem-Solving",
    text: "Encourage innovative and analytical thinking.",
  },
  {
    id: 3,
    title: "Stay Ahead of the Curve",
    text: "Keep our programs up-to-date with emerging tech trends.",
  },
];

// რეალური ვერსია შემდეგში  ჩაvანაცვლო axios/fetch-ით:
export async function getAboutData() {
  try {
    // const { data } = await axios.get("/about");
    // return data;

    // დროებით mock
    return {
      achievements: MOCK_ACHIEVEMENTS,
      goals: MOCK_GOALS,
    };
  } catch (error) {
    console.error("Failed to load about data", error);
    return { achievements: [], goals: [] };
  }
}
