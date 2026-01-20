# CB-Console Frontend

## Overview
CB-Console is a React-based frontend dashboard for managing users and authentication. It uses:

- **React 18 + Vite** for fast development
- **Tailwind CSS** for styling
- **Zustand** for state management
- **React Router v6** for routing and protected routes
- **Fetch API** for communicating with the Spring Boot backend
- Supports **cookie-based authentication** with HttpOnly cookies

---

## Features

- Login and registration pages
- Protected routes (dashboard and other pages)
- Global auth state using Zustand
- Real-time error handling
- Tailwind-styled UI components
- Auto-login support on page refresh (via backend `/auth/me`)

---

## Prerequisites

- Node.js v18+  
- npm or yarn
- Running backend on `http://localhost:8090` with CORS enabled and cookies supported  

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd CB-Console
