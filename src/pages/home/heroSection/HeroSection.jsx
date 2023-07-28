import React from "react";
import { scrollToTarget } from "../../../utils/utils";
import './Herosection.css'

const Hero = () => {
  return (


    <div className="h-screen sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[600px] custom-container relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9cwLFGL/Screenshot-2023-07-24-194200.jpg')]">


      <div className="bg-black opacity-40 h-full w-full absolute"></div>
      <div className="sm:w-2/3 p-5 sm:pl-10 z-10 text-center mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-white ">
          Turkish Cuisine
        </h2>
        <p className="text-slate-300 text-xl sm:text-2xl mt-5 text-justify w-10/12 mx-auto">
          <span className="block md:hidden">A Journey Through Authentic Turkish Food Recipes.</span>
          <span className="hidden md:inline-block">A Journey Through Authentic Turkish Food Recipes.Embark on a Flavorful Adventure with Exquisite Cuisine and Tempting Recipes.</span>
        </p>
        <button
          onClick={() => scrollToTarget("popularRecipes")}
          className="mt-10 px-3 py-2 hover:bg-green-500 border border-green-500 text-white text-2xl shadow box-shadow rounded-md "
        >
          OUR RECIPES
        </button>
      </div>
    </div >
  );
};

export default Hero;
