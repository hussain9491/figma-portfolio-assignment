import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row bg-white p-4 lg:p-8 overflow-x-hidden overflow-y-hidden w-full">
      {/* Left Section */}
      <div className="bg-white h-full flex flex-col w-full lg:w-1/2 text-black p-4 lg:p-6">
        <h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left">
          Hello, I am Hussain Ali <br /> Junior Frontend Developer
        </h1>

        <h3 className="text-lg lg:text-xl font-medium pt-12 lg:pt-20">
          01/ Resume Builder
        </h3>
        <h5 className="text-base pt-4">
          I created a Resume Builder where users input some details. <br />
          It generates a CV showing user information, education, skills, and other details.
        </h5>

        <p className="text-sm text-gray-800 pt-6 lg:pt-10">
          I built the Resume Builder using HTML, CSS, and TypeScript. <br />
          Users can enter details like name, contact information, skills, and education.
        </p>

        <h3 className="font-semibold text-lg underline pt-10 lg:pt-12">
          More shots from this project
        </h3>

        <h3 className="text-lg lg:text-xl font-medium pt-12 lg:pt-20">
          02/ GIAIC Clone/Webpage
        </h3>
        <p className="text-sm text-gray-800 pt-4">
          Governor Kamran Khan Tessori Clone Website <br />
          I created multiple web pages: Home, About, Courses, Jobs.
        </p>

        <h3 className="font-semibold text-lg underline pt-10 lg:pt-20">
          See Case Study Syllabus of GIAIC
        </h3>

        <h3 className="text-lg lg:text-xl font-medium pt-12 lg:pt-20">
          03/ Pizza Clone/Webpage
        </h3>
        <p className="text-sm text-gray-800 pt-4">
          Explore your favorite pizza flavors, order, and get them delivered.
        </p>

        <h3 className="font-semibold text-lg underline pt-10 lg:pt-20">
          Pizza Website Project
        </h3>
      </div>

      {/* Right Section */}
      <div className="image w-full lg:w-1/2 flex flex-col items-center justify-start mt-8 lg:mt-0">
        <p className="text-base lg:text-lg text-gray-700 px-6 lg:px-10 text-center">
          A Junior NextJS and TypeScript Developer, I am a student of GIAIC,
          learning NextJS, then Python, and then AI.
        </p>

        {/* Buttons with larger height and width */}
        <button className="bg-black w-5/6 h-[30%] text-white mt-6 lg:mt-8 rounded-md">
          View Resume Builder
        </button>
        <button className="bg-black w-5/6 h-[30%] text-white mt-6 lg:mt-8 rounded-md">
          View GIAIC Project
        </button>
        <button className="bg-black w-5/6 h-[30%] text-white mt-6 lg:mt-8 rounded-md">
          View Pizza Project
        </button>
      </div>
    </div>
  );
}
