"use client";

import React from "react";

interface FileData {
  id: number;
  filename: string;
  relativePath: string;
  fileKey: string;
  uploadedAt: string;
}

const getFileMeta = (filename: string) => {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  
  switch (ext) {
    case 'pdf': 
      return { label: 'PDF', bg: 'bg-rose-50', iconColor: 'text-rose-500' };
    case 'xlsx': case 'xls': case 'csv': 
      return { label: 'XLS', bg: 'bg-emerald-50', iconColor: 'text-emerald-500' };
    case 'doc': case 'docx': 
      return { label: 'DOC', bg: 'bg-blue-50', iconColor: 'text-blue-500' };
    case 'png': case 'jpg': case 'jpeg': 
      return { label: 'IMG', bg: 'bg-indigo-50', iconColor: 'text-indigo-500' };
    case 'mp4': case 'mov': case 'avi': case 'mkv':
      return { label: 'VID', bg: 'bg-purple-50', iconColor: 'text-purple-600' };
    default: 
      return { label: 'FILE', bg: 'bg-amber-50', iconColor: 'text-amber-500' };
  }
};

export default function FilesPanel({ files, loading }: { files: FileData[], loading: boolean }) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto min-h-0 p-4 bg-white">
      {loading ? (
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-20 bg-slate-50 animate-pulse rounded-[20px]" />
          ))}
        </div>
      ) : files.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {files.map(file => {
            const meta = getFileMeta(file.filename);
            
            return (
              <div 
                key={file.fileKey} 
                className="group p-3 bg-white border border-slate-100 rounded-[22px] shadow-sm hover:shadow-md transition-all flex items-center gap-3"
              >
                {/* Compact Icon Circle */}
                <div className={`w-11 h-11 rounded-full ${meta.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-[9px] font-black tracking-tighter ${meta.iconColor} border-[1.5px] border-current px-1 rounded-[3px]`}>
                    {meta.label}
                  </span>
                </div>

                {/* Compact Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1e2b4d] text-[14px] truncate leading-tight">
                    {file.filename}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-0.5 text-slate-400 text-[11px] font-medium">
                    <span className="truncate">
                      {new Date(file.uploadedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric'
                      })}
                    </span>
                    <span className="opacity-40">•</span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-10 text-center border-2 border-dashed border-slate-100 rounded-[24px] text-slate-300 text-sm">
          No files found.
        </div>
      )}
    </div>
  );
}