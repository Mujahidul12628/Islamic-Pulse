import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5555/chef")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-5 mt-10 sm:px-10">
      <h2 className="text-3xl font-bold text-center">Popular Chef</h2>
      <p className="mt-2 text-lg text-center">GOOD FOOD || GOOD LIFE</p>
      <div className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {chef.map((chefBio) => (
          <ChefCard key={chefBio.chef_id} chef={chefBio}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
