import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null, // store user object
  loading: true,

  checkAuth: async () => {
    try {
      const res = await fetch("http://localhost:8090/auth/me", {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Not authenticated");

      const data = await res.json(); // { message: "id: 2, name: Anton, email: aptharshan@gmail.com, apiKey: ..." }

      // Parse the message string into an object
      const userData = {};
      data.message.split(',').forEach(pair => {
        const [key, value] = pair.split(':').map(s => s.trim());
        userData[key] = value;
      });

      set({ isAuthenticated: true, user: userData });
    } catch {
      set({ isAuthenticated: false, user: null });
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

    // After login, fetch user details
    const meRes = await fetch("http://localhost:8090/auth/me", {
      credentials: "include",
    });
    const meData = await meRes.json();

    const userData = {};
    meData.message.split(',').forEach(pair => {
      const [key, value] = pair.split(':').map(s => s.trim());
      userData[key] = value;
    });

    set({ isAuthenticated: true, user: userData });
  },

  logout: async () => {
    await fetch("http://localhost:8090/auth/logout", {
      credentials: "include",
    });

    set({ isAuthenticated: false, user: null });
  },
}));
