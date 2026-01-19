import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  loading: true,

  checkAuth: async () => {
    try {
      const res = await fetch("http://localhost:8090/auth/me", {
        credentials: "include",
      });

      set({ isAuthenticated: res.ok });
    } catch {
      set({ isAuthenticated: false });
    } finally {
      set({ loading: false });
    }
  },

  login: async (data) => {
    const res = await fetch("http://localhost:8090/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Login failed");

    set({ isAuthenticated: true });
  },

  logout: async () => {
    await fetch("http://localhost:8090/auth/logout", {
      credentials: "include",
    });

    set({ isAuthenticated: false });
  },
}));
