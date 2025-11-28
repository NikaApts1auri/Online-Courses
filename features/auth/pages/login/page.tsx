"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import Image from "next/image";
import Button from "../../../../shared/components/ui/Button";
import Input from "../../../../shared/components/ui/Input";
import {
  LoginFormData,
  loginSchema,
} from "../../../../validations/loginSchema";
import { useAuth } from "../../context/authContext";

const LoginForm = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      console.log("succes:", data);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Login</h2>
      <p className="text-gray-500 mb-6 text-sm">
        Access your account and continue learning.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input
            {...register("email")}
            type="text"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-3">
        <button className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors !`text-black`">
          <Image
            src="/google.png"
            alt="Google"
            width={20}
            height={20}
            priority
          />
          Login with Google
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
