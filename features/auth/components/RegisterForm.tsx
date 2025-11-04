"use client";

import React, { useState } from "react";
import Button from "../../../shared/components/ui/Button";
import Input from "../../../shared/components/ui/Input";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [form, setForm] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", form);
    // აქ შემდეგში გამოიძახე authService.register(form)
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded"
      onSubmit={handleSubmit}
    >
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="primary"
        className="w-full cursor-pointer mt-4"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
