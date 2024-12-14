import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-white text-black h-screen px-4 lg:px-12">
      {/* Left Section: Text */}
      <div className="flex flex-col justify-center w-1/2 lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="font-bold text-2xl lg:text-3xl leading-snug">
          Hi, I am Hussain Ali, a NextJS and TypeScript developer, and a student of GIAIC.
        </h1>

        <p className="text-gray-800 text-sm lg:text-base leading-relaxed mt-6">
          My work is mainly focused on third-dimension modeling, texturing, and rendering. I like exploring creatures with a touch of dark surrealism for characters and production. 
          <br />
          <br />
          Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
        </p>
      </div>

      {/* Right Section: Button */}
      <div className="flex justify-center lg:justify-end items-center w-1/2 lg:w-1/2">
        <button className="bg-black text-white w-1/2 lg:w-1/3 h-[30%] mr-72 lg:h-64 rounded-lg shadow-md text-lg lg:text-xl">
          Explore Projects
        </button>
      </div>
    </div>
  );
}
