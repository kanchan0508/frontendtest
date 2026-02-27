import React from "react";
import AuthPageShell from "@/components/auth/AuthPageShell";
import LoginForm from "@/components/auth/LoginForm";

export default function SignUpPage() {
  return (
    <AuthPageShell>
      <LoginForm mode="signup" />
    </AuthPageShell>
  );
}
