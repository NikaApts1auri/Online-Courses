"use client";

import React, { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const base =
    "px-4 py-2  hover:cursor-pointer rounded font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
};

export default Button;
