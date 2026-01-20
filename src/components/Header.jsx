import React, { useState, useRef, useEffect } from "react";
import { Bell, UserCircle } from "lucide-react";
import { createPortal } from "react-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between h-12 bg-white border border-gray-200 rounded-xl px-4">

        <div></div>

        <div className="flex items-center gap-4">

          {/* Notification */}
          <button>
            <Bell className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>

          {/* Profile */}
          <div ref={ref}>
            <button onClick={() => setOpen(!open)}>
              <UserCircle className="w-5.5 h-5.5 text-gray-600 hover:text-black" />
            </button>

            {/* ✅ POPUP RENDERED USING PORTAL */}
            {open &&
              createPortal(
                <div
                  className="fixed top-16 right-6 w-64 bg-white border rounded-xl shadow-lg p-3 z-[99999]"
                >
                  <div className="mb-3">
                    <p className="font-semibold text-sm">Anton Tharshan</p>
                    <p className="text-xs text-gray-500">
                      aptharshan@gmail.com
                    </p>
                  </div>

                  <hr className="my-2" />

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
                </div>,
                document.body
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
