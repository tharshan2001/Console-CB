import React, { useState } from "react";
import { 
  Cloud, 
  LayoutGrid, 
  Folder, 
  Users, 
  History, 
  Star, 
  Archive, 
  Book 
} from "lucide-react";

const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutGrid },
    { name: "Files", icon: Folder },
    { name: "Team", icon: Users },
    { name: "Recent", icon: History },
    { name: "Favorites", icon: Star },
    { name: "Archive", icon: Archive },
  ];

  return (
    <aside className="bg-white h-screen border-r border-gray-100 flex flex-col items-center py-8 w-24">
      {/* --- Logo Section --- */}
      <div className="mb-8">
        <Cloud size={32} className="text-blue-500" strokeWidth={2.5} />
      </div>

      {/* --- Navigation Items --- */}
      <ul className="flex flex-col space-y-6 w-full items-center px-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`
                cursor-pointer transition-all duration-200 flex items-center justify-center
                ${isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-200 rounded-2xl p-3.5"
                  : "text-gray-400 hover:text-blue-500 p-2"
                }
              `}
            >
              <item.icon
                size={24}
                strokeWidth={2}
                className={`transition-transform duration-200 ${!isActive && "hover:scale-110"}`}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AppSidebar;
