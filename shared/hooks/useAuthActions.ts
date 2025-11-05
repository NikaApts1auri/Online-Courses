import { useRouter } from "next/navigation";
import api from "../lib/axiosInstance";

interface User {
  id: string;
  name: string;
  email: string;
}

export function useAuthActions(setUser: (user: User | null) => void) {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const res = await api.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    router.push("/dashboard");
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await api.post("/register", { name, email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return { login, register, logout };
}
