"use client";

import { useEffect, useState } from "react";
import FilesPanel from "../components/FilesPanel";
import InventoryPanel from "../components/InventoryPanel";

interface FileData {
  id: number;
  filename: string;
  relativePath: string;
  fileKey: string;
  uploadedAt: string;
}

interface Cube {
  name: string;
  apiKey: string;
}

export default function CubeLayout({
  cubes,
}: {
  cubes: Cube[];
}) {
  const [selectedCube, setSelectedCube] = useState<string | null>(
    cubes.length > 0 ? cubes[0].name : null
  );

  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCube) return;

    async function fetchFiles() {
      setLoading(true);
      try {
        const res = await fetch(`/api/proxy/files/${selectedCube}`);
        const data = await res.json();
        setFiles(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("File fetch error:", err);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, [selectedCube]);

  return (
    <div className="flex w-full h-190 bg-[#F8FAFC] overflow-hidden">
      {/* Main Content Area: Files */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Section */}
        <header className="px-10 pt-10 pb-6 flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#1e2b4d] tracking-tight">
              {selectedCube ? selectedCube : "Select a Cube"}
            </h1>
            <p className="text-slate-400 text-sm font-medium mt-1">
              {loading ? "Syncing files..." : `${files.length} items available in this storage`}
            </p>
          </div>
          
          {/* Action buttons could go here (Search, Filter, etc) */}
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </header>

        {/* Scrollable Files Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-10 custom-scrollbar">
          <FilesPanel files={files} loading={loading} />
        </div>
      </main>

      {/* Right Sidebar: Inventory */}
      <aside className="w-[380px] bg-white border-l border-slate-100 flex flex-col shadow-[ -10px_0_30px_rgba(0,0,0,0.02)]">
        <div className="flex-1 overflow-y-auto min-h-0">
          <InventoryPanel
            cubes={cubes}
            selectedCube={selectedCube}
            onSelectCube={setSelectedCube}
          />
        </div>
        
        {/* Storage Health/Status Footer */}
        <div className="p-6 border-t border-slate-50">
          <div className="bg-slate-50 rounded-2xl p-4">
            <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
              <span>Storage Usage</span>
              <span>72%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[72%] rounded-full" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}