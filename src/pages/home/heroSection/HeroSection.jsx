import React from "react";
import { scrollToTarget } from "../../../utils/utils";
import './Herosection.css'

const Hero = () => {
  return (


    <div className="h-screen sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[600px] custom-container relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/TkPzpLy/cover.jpg')]">


      <div className="absolute w-full h-full bg-black opacity-30"></div>
      <div className="z-10 p-5 mx-auto text-center sm:w-2/3 sm:pl-10">
        <h2 className="p-1 text-3xl font-bold text-white sm:text-4xl ">
          Islamic Learning Center
        </h2>
        <p className="w-11/12 mx-auto mt-5 text-justify text-md md:text-lg md:w-10/12 lg:w-8/12 text-slate-300 sm:text-lg">
          <span className="">Nurturing Souls, Enlightening Minds: Your Guiding Light on the Path of Islamic Wisdom and Knowledge for a Fulfilling Journey.</span>
        </p>
        <div className="flex flex-wrap items-center w-10/12 mx-auto md:w-8/12 sm:flex-nowrap justify-evenly">
          <button
            onClick={() => scrollToTarget("popularRecipes")}
            className="p-1 mt-10 text-2xl text-white border border-green-500 rounded-md shadow sm:px-3 sm:py-1 hover:bg-green-500 box-shadow "
          >
            Courses
          </button>
          <button
            onClick={() => scrollToTarget("popularRecipes")}
            className="px-3 py-1 mt-10 text-2xl text-white border border-green-500 rounded-md shadow hover:bg-green-500 box-shadow "
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div >
  );
};

export default Hero;
