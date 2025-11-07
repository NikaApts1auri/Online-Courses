"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import Input from "../../../../shared/components/ui/Input";

interface PasswordInputProps {
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError;
}

const PasswordInput = ({
  register,
  placeholder,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...register}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
