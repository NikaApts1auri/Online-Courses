"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import TermsCheckbox from "./TermsCheckbox";
import PasswordInput from "./PasswordInput";
import OAuthButton from "./OAuthButton";
import { useAuth } from "../../features/auth/context/authContext";
import Button from "../../shared/components/ui/Button";
import Input from "../../shared/components/ui/Input";
import {
  RegisterFormData,
  registerSchema,
} from "../../validations/registerSchema";

const RegisterForm = () => {
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log(data.password);
    console.log(data.agree);

    try {
      await registerUser(data.name, data.email, data.password);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="w-full max-w-md m-5 5 bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
        Sign Up
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Create an account to unlock exclusive features.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Input {...register("name")} placeholder="Full Name" />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input {...register("email")} type="text" placeholder="Email" />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <PasswordInput
          register={register("password")}
          placeholder="Password"
          error={errors.password}
        />

        <TermsCheckbox
          register={register}
          name="agree"
          rules={{ setValueAs: (value) => !!value }}
          error={errors.agree?.message}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>

      <div className="flex items-center my-6">
        <span className="px-3 text-gray-400 text-sm">OR</span>
        <div className="flex-`grow` h-px bg-gray-200"></div>
      </div>

      <OAuthButton
        provider="Google"
        onClick={() => console.log("Google signup")}
      />

      <p className="text-sm text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Login →
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
