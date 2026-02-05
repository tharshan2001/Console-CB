"use client";

interface Cube {
  name: string;
  apiKey: string;
}

export default function InventoryPanel({ cubes, selectedCube, onSelectCube }: { cubes: Cube[], selectedCube: string | null, onSelectCube: (name: string) => void }) {
  return (
    <div className="w-80 flex-shrink-0 bg-white border-l border-slate-200 p-6 shadow-2xl flex flex-col">
      <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
        Inventory
      </h3>
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3">
        {cubes.map(cube => (
          <button
            key={cube.apiKey}
            onClick={() => onSelectCube(cube.name)}
            className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
              selectedCube === cube.name
                ? 'border-blue-600 bg-blue-50 shadow-md'
                : 'border-transparent bg-slate-50 hover:bg-slate-100'
            }`}
          >
            <h4 className="font-bold text-slate-800 text-sm">{cube.name}</h4>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <code className="text-[9px] text-slate-400 truncate">{cube.apiKey}</code>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
