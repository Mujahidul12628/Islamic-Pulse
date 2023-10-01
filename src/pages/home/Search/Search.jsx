import React, { useState } from "react";
import RecipeCard from "../popularRecipes/RecipeCard";

const Search = ({ recipes }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [minRating, setMinRating] = useState(0);

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.course_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            recipe.rating >= minRating
    );

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by course name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min Rating"
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                />
            </div>
            <div>
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Search;
