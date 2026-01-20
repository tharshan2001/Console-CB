import React from "react";

const ProductHero = () => {
  return (
    <div className="bg-gray-50">
      <div className="h-[100px] md:h-55 flex items-center relative border border-gray-100 rounded-2xl bg-gradient-to-b from-slate-50 via-blue-100 to-blue-200 overflow-hidden shadow-sm backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl pl-4 font-bold text-orange-400/90 absolute top-5">
            Welcome to Cloud Box!
          </h1>

          <div className="absolute right-20 top-0 z-20 translate-y-10">
            <img
              src="/drako.png"
              alt="Drako"
              className="rounded-lg w-25 h-45"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;

