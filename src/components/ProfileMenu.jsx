import React, { useState, useRef, useEffect } from "react";
import { UserCircle } from "lucide-react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // Full page height
    <div className="min-h-screen relative p-4" ref={ref}>
      {/* Profile Icon */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="profile-menu-popover"
        className="p-1"
      >
        <UserCircle className="w-8 h-8 text-gray-600 hover:text-black" />
      </button>

      {/* Popover */}
      {open && (
        <div
          id="profile-menu-popover"
          className="absolute right-4 mt-3 w-64 bg-white border rounded-xl shadow-lg p-3 z-50"
        >
          {/* User Info */}
          <div className="mb-3">
            <p className="font-semibold text-sm">Anton Tharshan</p>
            <p className="text-xs text-gray-500">aptharshan@gmail.com</p>
          </div>

          <hr className="my-2" />

          {/* Menu Items */}
          <div className="space-y-2 text-sm">
            <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">
              Organizations
            </button>
            <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">
              All Clusters
            </button>
            <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">
              Invitations
            </button>
            <button className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded">
              Send Feedback
            </button>

            <hr />

            <button className="w-full text-left text-red-500 hover:bg-red-50 px-2 py-1 rounded">
              Log out
            </button>
          </div>
        </div>
      )}

      {/* Long content to test scrolling */}
      <div className="mt-4 space-y-6">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="text-6xl font-bold">
            Hii
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProfileMenu;
