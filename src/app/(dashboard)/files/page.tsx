import { cookies } from "next/headers";
import CubeLayout from "@/layouts/CubeLayout";

export default async function CubePage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  try {
    const res = await fetch("http://localhost:8090/api/cubes", {
      headers: {
        Cookie: cookieHeader,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return (
        <div className="flex h-screen items-center justify-center bg-slate-50">
          <div className="p-6 bg-white rounded-xl shadow border border-red-100">
            <h2 className="text-red-600 font-bold text-xl">Access Denied</h2>
            <p className="text-slate-500 italic">API Status: {res.status}</p>
          </div>
        </div>
      );
    }

    const cubes = await res.json();

    return (
      <CubeLayout
        cubes={cubes}
      />
    );
  } catch (error) {
    return (
      <div className="p-10 text-red-500">
        Backend server at :8090 is unreachable.
      </div>
    );
  }
}
