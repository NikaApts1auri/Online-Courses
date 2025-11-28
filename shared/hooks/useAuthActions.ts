import { useRouter } from "next/navigation";
import api from "../lib/axiosInstance";

export interface User {
  id: string;
  userName: string;
  email: string;
}

export function useAuthActions(setUser: (user: User | null) => void) {
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/sign-in", { email, password });
    localStorage.setItem("token", res.data.token);

    const userRes = await api.get<{ data: User }>("/auth/current-user");
    setUser(userRes.data.data);
    router.push("/dashboard");
  };

  const register = async (
    userName: string,
    email: string,
    password: string,
    acceptTerms: boolean
  ) => {
    const res = await api.post("/auth/sign-up", {
      userName,
      email,
      password,
      acceptTerms,
    });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.data as User);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/auth/sign-in");
  };

  return { login, register, logout };
}
