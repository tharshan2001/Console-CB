import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function ConsoleLayout() {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* 🔒 Background blocker */}
      <div className="fixed z-40" />

      {/* Sidebar */}
      <Sidebar />

      <div className="ml-56 px-1 pt-1 relative z-10">
        <Header />
      </div>

      {/* Page Content */}
      <main className="ml-[250px] min-h-screen p-5 px-1 relative z-10">
        <Outlet />
      </main>
    </>
  );
}
