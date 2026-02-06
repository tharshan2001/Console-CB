"use client";

interface Cube {
  name: string;
  apiKey: string;
}

export default function InventoryPanel({ cubes, selectedCube, onSelectCube }: { cubes: Cube[], selectedCube: string | null, onSelectCube: (name: string) => void }) {
  return (
    <div className="w-80 flex-shrink-0 bg-white border-l border-slate-100 p-6 flex flex-col">
      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">
        Cubes Inventory
      </h3>
      
      <div className="flex-1 overflow-y-auto min-h-0 space-y-4 pr-1">
        {cubes.map(cube => {
          const isSelected = selectedCube === cube.name;
          
          return (
            <button
              key={cube.apiKey}
              onClick={() => onSelectCube(cube.name)}
              className={`w-full text-left p-4 rounded-[24px] border transition-all duration-200 flex items-center gap-4 ${
                isSelected
                  ? 'border-blue-100 bg-blue-50/50 shadow-sm'
                  : 'border-slate-50 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Folder Icon Styling from Reference */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                isSelected ? 'bg-blue-100' : 'bg-amber-50'
              }`}>
                <svg 
                  className={`w-6 h-6 ${isSelected ? 'text-blue-500' : 'text-amber-500'}`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                </svg>
              </div>

              {/* Cube Details */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-sm truncate ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                  {cube.name}
                </h4>
                <div className="mt-1 flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-emerald-400 animate-pulse'}`} />
                  <span className="text-[10px] font-medium text-slate-400 truncate tracking-tight">
                    {cube.apiKey.slice(0, 12)}...
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Optional bottom action */}
      <button className="mt-6 w-full py-3 px-4 border-2 border-dashed border-slate-200 rounded-[20px] text-slate-400 text-xs font-bold hover:border-slate-300 hover:text-slate-500 transition-all">
        + Create New Cube
      </button>
    </div>
  );
}