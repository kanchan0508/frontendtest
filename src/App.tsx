import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
