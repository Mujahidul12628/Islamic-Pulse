import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { IoIosSearch } from "react-icons/io";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [displayRecipes, setDisplayRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterInstructor, setFilterInstructor] = useState(null);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://islamic-pulse-server.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  // Initially showed 8 recipes card
  // useEffect(() => {
  //   setDisplayRecipes(recipes.slice(0, 6));
  // }, [recipes]);


  useEffect(() => {
    // Apply filters based on search term, category, and instructor
    let filteredRecipes = recipes.filter((recipe) =>
      recipe.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterCategory) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.category === filterCategory
      );
    }

    if (filterInstructor) {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.instructor === filterInstructor
      );
    }

    setDisplayRecipes(filteredRecipes.slice(0, 6));
  }, [recipes, searchTerm, filterCategory, filterInstructor]);


  // When toggle arrow button then showed all cards
  const handleDisplayRecipes = () => {
    if (displayRecipes.length > 6) {
      setDisplayRecipes(recipes.slice(0, 6));
    } else {
      setDisplayRecipes(recipes);
    }
  };

  return (
    <div id="popularRecipes" className="px-5 my-10 xl:px-0">
      {loading ? (
        <div>Loading..</div>
      ) : (
        <>
          {" "}
          <h2 className="mb-8 text-3xl font-bold text-center">
            Popular Courses
          </h2>
          <div className="flex flex-col justify-between sm:flex-row item-center">

            <div className="flex items-center w-full mb-3 sm:mb-0 xl:w-2/3">
              <div className="relative w-full sm:w-10/12 md:w-7/12 lg:w-5/12">
                <input
                  type="text"
                  placeholder="Search Course Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-1 border-2 border-green-500 rounded-md"
                />
                <IoIosSearch className="absolute text-green-600 transform -translate-y-1/2 top-1/2 right-1" size={30} />
              </div>
            </div>


            <div className="flex flex-col sm:flex-row">
              <select
                value={filterInstructor}
                onChange={(e) => setFilterInstructor(e.target.value)}
                className="p-1 m-0 border-2 border-green-500 rounded-md sm:mr-2"
              >
                <option value="">Search By Instructor</option>
                {["Shaikh Abdul Rahman", "Maolana Tariq Jamil", "Shaikh Rashid Alafasy", "Shaikh Ahmadullah"].map((instructor) => (
                  <option key={instructor} value={instructor}>
                    {instructor}
                  </option>
                ))}
              </select>


              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="p-1 mt-3 border-2 border-green-500 rounded-md sm:mt-0 sm:ml-2"
              >
                <option className="" value="">Search By Categories</option>
                {["Foundational", "Cultural", "Practical", "Spiritual"].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

          </div>
          {/* <p className="mx-auto mt-2 text-lg text-center sm:w-3/5">
            
          </p> */}
          <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3">
            {displayRecipes.length === 0 ? (
              <p className="text-xl text-red-500 text-start">No course found...</p>
            ) : (
              displayRecipes.map((recipe) => (
                <RecipeCard key={recipe.recipe_id} recipe={recipe} />
              ))
            )}
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={handleDisplayRecipes}
              className="p-2 text-4xl text-green-500 rounded-full bg-green-50"
            >
              {displayRecipes.length > 6 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </>
      )}



    </div>
  );
};

export default PopularRecipes;
