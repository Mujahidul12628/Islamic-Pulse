// import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import RecipeCard from "../home/popularRecipes/RecipeCard";
// import { AuthContext } from "../../providers/AuthProvider";
// import { FaHeart } from "react-icons/fa";

// const ChefRecipes = () => {
//   const recipes = useLoaderData();

//   const { chef } = useContext(AuthContext);
//   const { chef_name, years_of_experience, num_recipes, likes, picture, bio } =
//     chef;

//   return (
//     <div className="mb-10">
//       <div className="flex flex-col gap-10 px-5 py-10 bg-green-50 sm:flex-row sm:px-10">
//         <div className="relative flex-1 h-96 sm:w-1/2 md:w-1/3">
//           <img
//             className="w-full h-full rounded-lg shadow-md shadow-gray-400"
//             src={
//               picture ||
//               "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
//             }
//             alt="avatar"
//           />
//           <div className="absolute flex items-center gap-1 px-2 py-2 text-5xl rounded bg-rose-500 bg-opacity-70 w-fit text-teal-50 -top-0 -right-0">
//             <FaHeart style={{ fontSize: '30px' }}></FaHeart>
//             <small className="text-2xl font-semibold text-white">
//               {likes}
//             </small>
//           </div>
//         </div>
//         <div className="sm:w-1/2 md:w-2/3">
//           <span className="text-xl font-semibold">Biography:</span> <span className="text-sm sm:text-md">{bio}</span>

//           <h5 className="mb-3 text-3xl font-bold">{chef_name}</h5>
//           <p className="text-lg">
//             Experience:{" "}
//             <span className="font-semibold">{years_of_experience} years</span>
//           </p>
//           <p className="mb-5 text-lg">
//             Total Recipes:{" "}
//             <span className="font-semibold">{num_recipes} items</span>
//           </p>

//         </div>
//       </div>


//       <h5 className="mt-16 ml-5 text-2xl font-semibold underline sm:text-3xl sm:ml-10">
//         Recipes List
//       </h5>
//       console.log(recipe);
//       <div className="grid gap-5 px-5 mt-4 sm:px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

//         {recipes && recipes.map((recipe) => (
//           <RecipeCard key={recipe.recipe_id} recipe={recipe}>
//             Hek
//           </RecipeCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChefRecipes;

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../home/popularRecipes/RecipeCard";
import { AuthContext } from "../../providers/AuthProvider";
import { FaHeart } from "react-icons/fa";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular } from "react-icons/ti";




const ChefRecipes = () => {
  const recipes = useLoaderData();

  const { chef } = useContext(AuthContext);
  const { chef_name, years_of_experience, num_recipes, likes, picture, bio } =
    chef;

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-10 px-5 py-10 bg-green-50 sm:flex-row sm:px-10">
        <div className="relative flex-1 h-96 sm:w-1/2 md:w-1/3">
          <img
            className="w-full h-full rounded-lg shadow-md shadow-gray-400"
            src={
              picture ||
              "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            }
            alt="avatar"
          />
          <div className="absolute flex items-center gap-1 px-2 py-2 text-5xl rounded bg-rose-500 bg-opacity-70 w-fit text-teal-50 -top-0 -right-0">
            <FaHeart style={{ fontSize: '30px' }}></FaHeart>
            <small className="text-2xl font-semibold text-white">
              {likes}
            </small>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-2/3">
          <span className="text-xl font-semibold">Biography:</span>{" "}
          <span className="text-sm sm:text-md">{bio}</span>

          <h5 className="mb-3 text-3xl font-bold">{chef_name}</h5>
          <p className="text-lg">
            Experience:{" "}
            <span className="font-semibold">{years_of_experience} years</span>
          </p>
          <p className="mb-2 text-lg">
            Total Recipes:{" "}
            <span className="font-semibold">{num_recipes} items</span>
          </p>
          <div className="flex justify-start">
            <a href="https://www.facebook.com/muzahidulislam.rony" target="_blank"><TiSocialFacebookCircular className='mr-1 text-green-600 rounded-full' size={50} /></a>
            <a href="https://www.linkedin.com/in/mujahidulislam628/" target="_blank"><TiSocialLinkedinCircular className='mr-1 text-green-600 rounded-full' size={50} /></a>

            <TiSocialGooglePlusCircular className='mr-1 text-green-600 rounded-full' size={50} />
            <TiSocialTwitterCircular className='mr-1 text-green-600 rounded-full' size={50} />
          </div>
        </div>
      </div>

      <h5 className="mt-16 ml-5 text-2xl font-semibold underline sm:text-3xl sm:ml-10">
        Recipes List
      </h5>

      <div className="grid gap-5 px-5 mt-4 sm:px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {recipes &&
          recipes.map((recipe) => {
            console.log("recipe"); // Log the recipe object
            return <RecipeCard key={recipe.recipe_id} recipe={recipe} />;
          })}
      </div>
    </div>
  );
};

export default ChefRecipes;

