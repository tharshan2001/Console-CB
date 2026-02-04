// app/components/ClientAuthWrapper.tsx
"use client"; // MUST be client component
import { usePathname } from "next/navigation";
import PrivateRoute from "../routes/PrivateRoute";

interface Props {
  children: React.ReactNode;
}

const publicRoutes = ["/login", "/signup", "/forgot-password"];

export default function ClientAuthWrapper({ children }: Props) {
  const pathname = usePathname();
  const isPublicRoute = publicRoutes.includes(pathname || "");

  return isPublicRoute ? <>{children}</> : <PrivateRoute>{children}</PrivateRoute>;
}
