import React from "react";
import Hero from "./heroSection/HeroSection";
import ChefSection from "./chefSection/ChefSection";
import PopularRecipes from "./popularRecipes/PopularRecipes";




const Home = () => {
  return (

    <div className="mx-auto max-w-7xl" >
      <Hero></Hero>
      <ChefSection></ChefSection>
      <PopularRecipes></PopularRecipes>

    </div>

  );
};

export default Home;
