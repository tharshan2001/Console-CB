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
    <div className="flex w-full gap-6 bg-slate-50">
      {/* Files panel */}
      <div className="flex-1 flex flex-col p-10 overflow-hidden min-h-0">
        <h2 className="text-3xl font-black text-slate-800 mb-8 sticky top-0 bg-slate-50 z-10">
          {selectedCube ? `Cube: ${selectedCube}` : "← Select a Cube Instance"}
        </h2>

        <div className="flex-1 overflow-y-auto min-h-0">
          <FilesPanel files={files} loading={loading} />
        </div>
      </div>

      {/* Inventory panel */}
      <div className="w-90 bg-white border-l border-slate-200 p-3 shadow-2xl flex flex-col h-190">
        <div className="flex-1 overflow-y-auto min-h-0">
          <InventoryPanel
            cubes={cubes}
            selectedCube={selectedCube}
            onSelectCube={setSelectedCube}
          />
        </div>
      </div>
    </div>
  );
}
