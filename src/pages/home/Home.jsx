import React from "react";
import Hero from "./heroSection/HeroSection";
import ChefSection from "./chefSection/ChefSection";
import CateringSection from "./cateringSection/CateringSection";
import PopularRecipes from "./popularRecipes/PopularRecipes";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl" >
      <Hero></Hero>
      <ChefSection></ChefSection>
      <CateringSection></CateringSection>
      <PopularRecipes></PopularRecipes>
    </div>
  );
};

export default Home;
