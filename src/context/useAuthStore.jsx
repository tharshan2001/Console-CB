// src/context/authStore.js
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,          // logged-in user info
  loading: false,      // request state
  error: null,         // error message

  // REGISTER
  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8090/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Registration failed");
      const user = await res.json();
      set({ user, loading: false });
      return user;
    } catch (err) {
      set({ error: err.message, loading: false });
      return null;
    }
  },

  // LOGIN
  login: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8090/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Login failed");
      const user = await res.json();
      set({ user, loading: false });
      return user;
    } catch (err) {
      set({ error: err.message, loading: false });
      return null;
    }
  },

  // GET CURRENT USER
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8090/auth/me", {
        credentials: "include", // if your backend uses cookies
      });
      if (!res.ok) throw new Error("Failed to fetch user");
      const user = await res.json();
      set({ user, loading: false });
      return user;
    } catch (err) {
      set({ error: err.message, loading: false });
      return null;
    }
  },

  // LOGOUT
  logout: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:8090/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Logout failed");
      set({ user: null, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
