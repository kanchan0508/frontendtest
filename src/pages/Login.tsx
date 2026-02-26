import React from "react";
import AuthPageShell from "@/components/auth/AuthPageShell";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <AuthPageShell>
      <LoginForm mode="login" />
    </AuthPageShell>
  );
}
