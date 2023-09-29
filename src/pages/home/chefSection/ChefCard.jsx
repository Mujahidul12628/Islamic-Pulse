import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { scrollTop } from "../../../utils/utils";

const ChefCard = ({ chef }) => {
  const {
    chef_id,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
    picture,
  } = chef;
  const { setChef } = useContext(AuthContext);
  return (
    <div className="w-full pb-5 mx-auto text-gray-800 rounded-md box-shadow shadow-green-200">
      <div className="relative w-full rounded-t-md">
        <LazyLoadImage
          src={
            picture ||
            "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          }
          className="w-full h-full rounded-t-md"
          alt="Chef Avatar"
        />
        <div className="absolute flex items-center gap-1 p-1 rounded bg-rose-200 bg-opacity-60 w-fit text-rose-500 bottom-1 left-1">
          <FaHeart></FaHeart>
          <small className="text-sm font-semibold text-slate-600">
            {likes}
          </small>
        </div>
      </div>
      <div className="ml-2">
        <h5 className="mt-2 mb-1 text-xl font-semibold">{chef_name}</h5>

        <p className="text-md">
          Experience:{" "}
          <span className="font-semibold">{years_of_experience} years</span>
        </p>
        <p className="mb-5 text-md">
          Course Conduct:{" "}
          <span className="font-semibold">{num_recipes} times</span>
        </p>
        <Link
          to={`/chef/${chef_id}`}
          onClick={() => {
            setChef(chef), scrollTop();
          }}
          className="px-3 pt-1 pb-2 duration-200 border border-green-300 rounded-md hover:bg-green-500 hover:text-white hover:underline underline-offset-4"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
