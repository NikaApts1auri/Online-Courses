"use client";

import Link from "next/link";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import Checkbox from "../../shared/components/ui/checkbox";
import { RegisterFormData } from "../../validations/registerSchema";

interface TermsCheckboxProps {
  register: UseFormRegister<RegisterFormData>;
  name: keyof RegisterFormData;
  rules?: RegisterOptions<RegisterFormData, keyof RegisterFormData>;
  error?: string;
}

const TermsCheckbox = ({
  register,
  name,
  rules,
  error,
}: TermsCheckboxProps) => {
  return (
    <div className="flex items-start gap-2">
      <Checkbox {...register(name, rules)} className="cursor-pointer" />
      <label className="text-sm leading-snug">
        I agree with{" "}
        <Link
          href="/terms"
          className="text-blue-600 hover:underline font-medium"
        >
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-blue-600 hover:underline font-medium"
        >
          Privacy Policy
        </Link>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TermsCheckbox;
