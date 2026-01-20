import { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Files,
  Users,
  Layers,
  HardDrive,
  ChevronDown,
  Home,
  BarChart2,
  HelpCircle,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/console", type: "page" },
  {
    id: "files",
    label: "Files",
    icon: Layers,
    type: "submenu",
    children: [
      { id: "active", label: "Active", path: "/console/files/active" },
      { id: "completed", label: "Completed", path: "/console/files/completed" },
      { id: "archived", label: "Archived", path: "/console/files/archived" },
    ],
  },
  { id: "team", label: "Team", icon: Users, path: "/console/team", type: "page" },
  {
    id: "MyDisk",
    label: "MyDisk",
    icon: HardDrive,
    type: "submenu",
    children: [
      { id: "reports", label: "Reports", path: "/console/mydisk/reports" },
      { id: "logs", label: "Logs", path: "/console/mydisk/logs" },
    ],
  },
  { id: "settings", label: "Settings", icon: Settings, path: "/console/settings", type: "page" },
  { id: "help", label: "Help", icon: HelpCircle, path: "/console/help", type: "page" },
];

const SubMenu = ({ isOpen, items }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden transition-[height] duration-300"
      style={{ height }}
    >
      <ul ref={ref} className="mt-1">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative flex h-11 w-full items-center pl-12 text-sm ${
                  isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
                } before:absolute before:left-[22px] before:top-1/2
                  before:h-1.5 before:w-1.5 before:-translate-y-1/2
                  before:rounded-full ${
                    isActive ? "before:bg-indigo-600" : "before:bg-slate-300"
                  }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <aside
      className="
        fixed left-1 top-0 bottom-6 w-[220px]
        rounded-2xl
        bg-white/80 backdrop-blur-xl
        border border-slate-200/60
        shadow-2xl
        px-5 py-2 z-50
      "
    >
      {/* Header */}
      <div className="flex h-[90px] items-center gap-3 pb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-semibold">
          <Home size={18} />
        </div>
        <span className="text-lg font-semibold text-slate-800">Brand</span>
      </div>

      {/* Navigation */}
      <ul className="mt-4 space-y-1">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const open = openSubmenu === item.id;

          return (
            <li key={item.id}>
              {item.type === "page" ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex h-12 w-full items-center gap-3 rounded-md px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition ${
                      isActive ? "bg-slate-200/50 text-slate-900" : ""
                    }`
                  }
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ) : (
                <>
                  <button
                    onClick={() => setOpenSubmenu(open ? null : item.id)}
                    className="flex h-12 w-full items-center gap-3 rounded-md px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition"
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <SubMenu isOpen={open} items={item.children} />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
