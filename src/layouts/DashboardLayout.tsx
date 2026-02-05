"use client";
import React from "react";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto min-h-0">
          {children}
        </main>
      </div>
    </div>
  );
}
