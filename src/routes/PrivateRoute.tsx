"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../context/useAuthStore";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, fetchUser, loading } = useAuthStore();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await fetchUser();
      setChecking(false);
    };
    checkAuth();
  }, [fetchUser]);

  useEffect(() => {
    if (!loading && !user && !checking) {
      router.push("/login");
    }
  }, [user, loading, checking, router]);

  if (loading || checking) return <p>Loading...</p>;

  return user ? <>{children}</> : null;
}
