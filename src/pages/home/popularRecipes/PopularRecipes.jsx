import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayRecipes, setDisplayRecipes] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5555/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  // Initially showed 8 recipes card
  useEffect(() => {
    setDisplayRecipes(recipes.slice(0, 8));
  }, [recipes]);

  // When toggle arrow button then showed 8 or all recipes cards
  const handleDisplayRecipes = () => {
    if (displayRecipes.length > 8) {
      setDisplayRecipes(recipes.slice(0, 8));
    } else {
      setDisplayRecipes(recipes);
    }
  };

  return (
    <div id="popularRecipes" className="my-16 px-5 sm:px-10">
      {loading ? (
        <div>Loading..</div>
      ) : (
        <>
          {" "}
          <h2 className="text-3xl font-bold text-center">
            Most popular recipes
          </h2>
          <p className="text-lg text-center mx-auto mt-2 sm:w-3/5">
            Mock Turtle's heavy sobs. Lastly, she pictured to herself that
            perhaps it was quite tired of being all alone here!' As she said to
            herself; 'I should like to see what was going on, as she could do.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            {displayRecipes.map((recipe) => (
              <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleDisplayRecipes}
              className="text-4xl p-2 text-slate-500 bg-gray-200 rounded-full"
            >
              {displayRecipes.length > 8 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularRecipes;
