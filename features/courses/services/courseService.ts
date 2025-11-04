import axios from "axios";

export const getCourses = async () => {
  try {
    const response = await axios.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};
