import React from "react";
import { scrollToTarget } from "../../../utils/utils";
import './Herosection.css'

const Hero = () => {
  return (


    <div className="h-screen sm:h-[700px] md:h-[500px] lg:h-[600px] xl:h-[800px] custom-container relative rounded-b flex items-center bg-cover bg-center bg-blend-darken bg-[url('https://i.ibb.co/9cwLFGL/Screenshot-2023-07-24-194200.jpg')]">


      <div className="bg-black opacity-40 h-full w-full absolute"></div>
      <div className="sm:w-2/3 p-5 sm:pl-10 z-10 text-center mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-white ">
          Savoring Turkish Cuisine

        </h2>
        <p className="text-slate-400 text-xl sm:text-2xl mt-5">
          A Journey Through Authentic Turkish Food Recipes.Embark on a Flavorful Adventure with Exquisite Cuisine and Tempting Recipes.
        </p>
        <button
          onClick={() => scrollToTarget("popularRecipes")}
          className="mt-10 px-3 py-2 hover:bg-green-500 border border-green-500 text-white text-2xl shadow shadow-green-500"
        >
          SEE OUR RECIPES
        </button>
      </div>
    </div >
  );
};

export default Hero;
