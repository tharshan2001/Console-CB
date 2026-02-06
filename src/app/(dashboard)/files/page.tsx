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
        <div className="flex h-screen items-center justify-center bg-[#f8fafc]">
          <div className="p-10 bg-white rounded-[32px] shadow-sm border border-slate-100 text-center max-w-sm">
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-8V5m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 114 0 2 2 0 01-4 0zm14 0a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
            </div>
            <h2 className="text-[#1e2b4d] font-bold text-xl mb-2">Access Denied</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We couldn't verify your credentials. (Status: {res.status})
            </p>
            <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all">
              Try Logging In Again
            </button>
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
      <div className="flex h-screen items-center justify-center bg-[#f8fafc]">
        <div className="p-10 bg-white rounded-[32px] shadow-sm border border-slate-100 text-center">
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-[#1e2b4d] font-bold text-xl mb-1">Server Unreachable</h2>
          <p className="text-slate-400 text-sm">
            Check if the backend is running on port <code className="bg-slate-100 px-1 rounded">8090</code>
          </p>
        </div>
      </div>
    );
  }
}