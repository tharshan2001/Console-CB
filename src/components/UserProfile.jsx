import React from "react";
import { Github, Twitter, FileText } from "lucide-react";

function UserProfile() {
  return (
    <section className="container mx-auto px-5 ">
      <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm">
        {/* Header image */}
        <div className="h-50 w-full overflow-hidden">
          <img
            src="/dark-image.png"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center gap-6">

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                <Github size={16} />
                Github
              </button>
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                <Twitter size={16} />
                Twitter
              </button>
              <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
                <FileText size={16} />
                Medium
              </button>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 mt-6">
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences. <br />
            Driven by design thinking, creativity, and a love for problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
