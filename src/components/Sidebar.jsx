import React from 'react';
import { 
  Home, 
  Settings, 
  Mail, 
  Plus, 
  FileText, 
  Calendar, 
  CheckCircle, 
  MoreVertical,
  Layers,
  Search,
  MessageSquare
} from 'lucide-react';

// --- Configuration Data ---
const leftTopItems = [
  { icon: Home, id: 'home' },
  { icon: Layers, id: 'layers' },
  { icon: Search, id: 'search' },
];

const leftBottomItems = [
  { icon: Settings, id: 'settings' },
  { icon: MoreVertical, id: 'more' },
];

const navItems = [
  {
    icon: Mail,
    label: "Messages",
    actionIcon: Plus,
    submenu: [
      { label: "Drafts", count: 10 },
      { label: "Scheduled", count: 4 },
      { label: "Published", count: 20 },
    ],
  },
  {
    icon: Layers,
    label: "Analytics",
    submenu: null
  }
];

// --- Sub-Components ---

const IconButton = ({ Icon, className = "" }) => (
  <button className={`w-11 h-11 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors ${className}`}>
    <Icon size={22} strokeWidth={1.5} />
  </button>
);

const SidebarHeader = () => (
  <div className="flex items-center justify-between p-4 mb-2">
    <div>
      <h2 className="text-base font-bold text-slate-800 leading-tight">Untitled UI</h2>
      <h3 className="text-xs font-medium text-slate-400">store.untitledui.com</h3>
    </div>
    <MoreVertical size={18} className="text-slate-400 cursor-pointer" />
  </div>
);

const Submenu = ({ items }) => (
  <ul className="relative ml-8 pl-4 border-l border-slate-200 space-y-1 my-1">
    {items.map((item, idx) => (
      <li 
        key={idx} 
        className="flex items-center justify-between h-9 px-3 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-200/50 hover:text-slate-800 cursor-pointer transition-colors"
      >
        <span>{item.label}</span>
        {item.count && (
          <span className="text-xs bg-white border border-slate-200 px-1.5 py-0.5 rounded-md text-slate-600 font-semibold">
            {item.count}
          </span>
        )}
      </li>
    ))}
  </ul>
);

const NavItem = ({ item }) => (
  <div className="mb-2">
    <button className="w-full flex items-center gap-3 px-3 h-11 rounded-lg text-slate-500 hover:bg-slate-200/50 hover:text-slate-800 transition-all group/item">
      <item.icon size={18} />
      <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
      {item.actionIcon && (
        <item.actionIcon 
          size={16} 
          className="opacity-0 group-hover/item:opacity-100 transition-opacity" 
        />
      )}
    </button>
    
    {item.submenu && <Submenu items={item.submenu} />}
  </div>
);

// --- Main Components ---

const LeftSidebar = () => (
  <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-white z-20 flex flex-col items-center py-6 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
    {/* Logo Area */}
    <div className="mb-8">
      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
        UI
      </div>
    </div>

    {/* Top Icons */}
    <div className="flex flex-col gap-2">
      {leftTopItems.map((item) => (
        <IconButton key={item.id} Icon={item.icon} />
      ))}
    </div>

    {/* Spacer */}
    <div className="flex-1" />

    {/* Bottom Icons */}
    <div className="flex flex-col gap-2 pb-4">
      {leftBottomItems.map((item) => (
        <IconButton key={item.id} Icon={item.icon} />
      ))}
    </div>
  </div>
);

const RightSidebar = () => (
  <div className="absolute inset-y-2 left-[76px] right-2 bg-[#f4f6fa] rounded-xl p-2 pl-6 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
    <div className="h-full w-[200px] flex flex-col"> {/* Fixed width container to prevent text wrap animation jank */}
      <SidebarHeader />
      <nav className="flex-1 overflow-y-auto mt-2">
        {navItems.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </nav>
    </div>
  </div>
);

// --- Exported Component ---

export default function Sidebar() {
  return (
    // The container
    <aside className="group fixed top-6 left-5 bottom-7 w-[80px] hover:w-[300px] bg-white rounded-[18px] transition-[width] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] shadow-2xl overflow-hidden z-50">
      <LeftSidebar />
      <RightSidebar />
    </aside>
  );
}