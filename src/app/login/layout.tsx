// app/login/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // No PrivateRoute here
  return <>{children}</>;
}

// app/register/layout.tsx would be the same
