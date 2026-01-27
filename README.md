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
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx
│   ├── LoginPage.jsx
│   ├── ProductHero.jsx
│   ├── ProfileMenu.jsx
│   ├── Sidebar.jsx
│   └── UserProfile.jsx
├── layout/
│   └── ConsoleLayout.jsx
├── routes/
│   └── ProtectedRoute.jsx
├── store/
│   └── useAuthStore.jsx
├── assets/              # Static assets
├── App.jsx              # Main App component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.
