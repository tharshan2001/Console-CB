import { useState, useRef, useLayoutEffect } from "react";
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
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, type: "page" },
  {
    id: "files",
    label: "Files",
    icon: Layers,
    type: "submenu",
    children: [
      { id: "active", label: "Active" },
      { id: "completed", label: "Completed" },
      { id: "archived", label: "Archived" },
    ],
  },
  { id: "team", label: "Team", icon: Users, type: "page" },
  {
    id: "MyDisk",
    label: "MyDisk",
    icon: HardDrive,
    type: "submenu",
    children: [
      { id: "reports", label: "Reports" },
      { id: "logs", label: "Logs" },
    ],
  },
  { id: "settings", label: "Settings", icon: Settings, type: "page" },
  { id: "help", label: "Help", icon: HelpCircle, type: "page" },
];

const SubMenu = ({ isOpen, items, activeItem, onClick }) => {
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
            <button
              onClick={() => onClick(item.id)}
              className={`relative flex h-11 w-full items-center pl-12 text-sm
                ${
                  activeItem === item.id
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-800"
                }
                before:absolute before:left-[22px] before:top-1/2
                before:h-1.5 before:w-1.5 before:-translate-y-1/2
                before:rounded-full
                ${
                  activeItem === item.id
                    ? "before:bg-indigo-600"
                    : "before:bg-slate-300"
                }
              `}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <aside
      className="
        fixed left-6 top-6 bottom-6 w-[220px]
        rounded-2xl
        bg-white/80 backdrop-blur-xl
        border border-slate-200/60
        shadow-2xl
        px-5 py-4 z-50
      "
    >
      {/* Header */}
      <div className="flex h-[70px] items-center gap-3 border-b border-slate-200 pb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-semibold">
          <Home size={18} />
        </div>
        <span className="text-lg font-semibold text-slate-800">
          Brand
        </span>
      </div>

      {/* Navigation */}
      <ul className="mt-4 space-y-1">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const open = openSubmenu === item.id;

          return (
            <li key={item.id}>
              <button
                onClick={() =>
                  item.type === "page"
                    ? setActiveItem(item.id)
                    : setOpenSubmenu(open ? null : item.id)
                }
                className="
                  flex h-12 w-full items-center gap-3 rounded-md px-4
                  text-slate-600 hover:text-slate-900
                  hover:bg-slate-200/50 transition
                "
              >
                <Icon size={20} />
                <span className="text-sm font-medium">
                  {item.label}
                </span>

                {item.type === "submenu" && (
                  <ChevronDown
                    size={16}
                    className={`ml-auto transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.type === "submenu" && (
                <SubMenu
                  isOpen={open}
                  items={item.children}
                  activeItem={activeItem}
                  onClick={setActiveItem}
                />
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
