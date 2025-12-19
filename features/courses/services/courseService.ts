import api from "../../../shared/lib/axiosInstance";
import { Course } from "../../../shared/types";

export const getCourses = async (): Promise<Course[]> => {
  const res = await api.get("/courses");
  return res.data.data ?? res.data;
};

export const getCourseById = async (id: string): Promise<Course> => {
  const res = await api.get(`/courses/${id}`);
  return res.data.data ?? res.data;
};
