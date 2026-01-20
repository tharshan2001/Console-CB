import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import ConsoleLayout from "./layout/ConsoleLayout";
import LoginPage from "./components/LoginPage";
import UserProfile from "./components/UserProfile";

function App() {
  const checkAuth = useAuthStore((s) => s.checkAuth);
  const loading = useAuthStore((s) => s.loading);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected console layout */}
        <Route
          path="/console/*"
          element={
            <ProtectedRoute>
              <ConsoleLayout />
            </ProtectedRoute>
          }
        >
          {/* Default nested route: /console */}
          <Route index element={<UserProfile />} />

          {/* Example nested route: /console/files */}
          {/* <Route path="files" element={<FilesPage />} /> */}
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
