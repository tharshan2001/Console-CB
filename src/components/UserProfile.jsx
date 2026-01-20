import React from "react";
import { Github, Twitter, FileText } from "lucide-react";

function UserProfile() {
  return (
    <section className="container mx-auto px-5 ">
      <div className="border border-gray-300 rounded-2xl bg-[#AFDDFF] overflow-hidden shadow-sm">
        {/* Header image */}
        <div className="h-15 w-full overflow-hidden">
          <img
            src="/dark-image.png"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center gap-6"></div>

          {/* Bio */}
          <p className="text-sm text-gray-600 mt-6"></p>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
