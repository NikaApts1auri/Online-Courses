"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuthActions } from "../../../shared/hooks/useAuthActions";
import api from "../../../shared/lib/axiosInstance";

interface User {
  id: string;
  userName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    userName: string,
    email: string,
    password: string,
    acceptTerms: boolean
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const { login, register: registerAction, logout } = useAuthActions(setUser);

  const register = async (
    userName: string,
    email: string,
    password: string,
    acceptTerms: boolean
  ) => {
    await registerAction(userName, email, password, acceptTerms);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/current-user");
        setUser(res.data.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
