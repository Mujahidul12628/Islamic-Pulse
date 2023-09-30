import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";


const RecipeCard = ({ recipe }) => {
  const [favorite, setFavorite] = useState(true);
  const { recipe_id, course_name, rating, picture, instructor, category } = recipe;

  const StarDrawing = (
    <path className="bg-red"
      d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
            c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
            c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
            c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
            c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
            C426.818,168.817,420.858,143.814,398.799,141.794z"
    />
  ); // Source: https://www.svgrepo.com/svg/118939/star
  // Rating star custom styles
  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: "#f5b042",
    inactiveFillColor: "#fae0b6",
  };

  // Recipe card favorite button handle
  const handleFavorite = () => {
    if (favorite) {
      setFavorite(false);
      toast.success("Successfully add!");
    } else {
      toast.error("You have already added!");
    }
  };

  return (
    <div className="w-full pb-2 text-gray-800 border border-green-100 rounded-md shadow-container">
      <LazyLoadImage
        src={
          picture ||
          "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
        }
        className="w-full rounded-t-md"
        alt="Image"
      />
      <div className="m-2">
        <h5 className="flex justify-center mt-2 mb-1 text-2xl font-semibold text-center">{course_name}</h5>
        <h5 className="flex justify-center mb-1 text-lg font-semibold text-center">
          ({instructor})</h5>
        <h5 className="flex justify-center mb-1 text-lg text-center">
          {category}</h5>

        <div className="flex items-center justify-center gap-1 mt-1 mb-5">
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            readOnly
            itemStyles={customStyles}
          />{" "}
          <div>{rating}</div>
        </div>
        <div className="flex items-center justify-between ">

          <Link
            to={`/recipe/${recipe_id}`}
            className="px-5 pt-1 pb-2 font-semibold duration-200 border border-green-500 rounded-md shadow-md hover:bg-green-500 hover:text-white underline-offset-2"
          >
            Enter
          </Link>

          <span
            className="p-2 text-2xl rounded-full shadow-inner bg-rose-100 text-rose-500"
            onClick={() => handleFavorite()}
          >
            {favorite ? <FaRegHeart /> : <FaHeart />}
          </span>
        </div>

      </div>
    </div>
  );
};

export default RecipeCard;

