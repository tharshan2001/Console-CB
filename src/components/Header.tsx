import React from "react";
import { Search, SlidersHorizontal, Settings, Bell, Cloud } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white py-5 px-8 flex items-center justify-between border-b border-gray-100 sticky top-0 z-10">
      
      {/* --- Left Section: Logo & Greeting --- */}
      <div className="flex items-center gap-4">

        
        {/* Text Group */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            My Dashboard
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Hello Noah, Good Morning!
          </p>
        </div>
      </div>

      {/* --- Center Section: Search Bar --- */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full py-3 pl-12 pr-12 text-gray-900 bg-gray-100 rounded-full border-none outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder-gray-500 font-medium"
            placeholder="Search in Cloudsync"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button className="p-1.5 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Right Section: Actions & Profile --- */}
      <div className="flex items-center gap-4">
        {/* Settings Button */}
        <button className="p-3 rounded-full bg-blue-50 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
          <Settings size={20} />
        </button>

        {/* Notification Button */}
        <button className="relative p-3 rounded-full bg-blue-50 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
          <Bell size={20} />
          {/* Blue Notification Dot */}
          <span className="absolute top-3 right-3.5 h-2.5 w-2.5 bg-blue-600 border-2 border-white rounded-full"></span>
        </button>

        {/* Profile Picture */}
        <div className="ml-2 w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </header>
  );
};

export default Header;