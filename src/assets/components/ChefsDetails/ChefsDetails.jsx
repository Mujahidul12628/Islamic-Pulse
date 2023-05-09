

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChefsDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefsDetails = () => {
    const notify = () => {
        // toast("Added to Favorite food")
        alert('Added to Favorite food')
    };


    const { id } = useParams();
    const [chefData, setChefData] = useState(null);

    useEffect(() => {
        fetch(`https://savoury-bite-server-mujahidul12628.vercel.app/chefData/${id}`)
            .then((res) => res.json())
            .then((data) => setChefData(data));
    }, [id]);

    return (
        <div>
            <div>
                <h1>Turkish Chef</h1>
                {chefData ? (
                    <div id='welcome'>
                        <div id='banner-img'>
                            <img src={chefData?.chefImg} alt="banner" />
                        </div>
                        <div id='welcoming-msg'>
                            <h2>{chefData?.name}</h2>
                            <p>{chefData?.bio}</p>
                            <div id='chef-public-info'>
                                <p>Likes: <span className='likes'>{chefData?.likes}</span></p>

                                <p>Recipes: <span className='recipes'>{chefData?.recipes}</span></p>

                                <p>Experience: <span className='experience'>{chefData?.experience} Years</span> </p>
                                {/* <button className='favorite-btn' onClick={notify}>Favorite</button> */}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div>
                <h1>Turkish Food Recipe</h1>
                <div id='food-recipe-container'>
                    <div>
                        {chefData ? (
                            <div id='welcome'>
                                <div id='banner-img'>
                                    <img src={chefData?.recipeImg1} alt="recipe" />
                                </div>
                                <div id='welcoming-msg'>
                                    <h2>{chefData?.recipeName1}</h2>
                                    <p>Rating: {chefData?.rating1}</p>
                                    <p><b>Cooking Ingredients</b> </p>
                                    <ul>
                                        {chefData?.ingredients1.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p><b>Cooking Method:</b>   {chefData?.method1}</p>
                                    <button className='favorite-btn' onClick={notify}>Favorite</button>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div>
                        {chefData ? (
                            <div id='welcome'>
                                <div id='banner-img'>
                                    <img src={chefData?.recipeImg3} alt="recipe" />
                                </div>
                                <div id='welcoming-msg'>
                                    <h2>{chefData?.recipeName3}</h2>
                                    <p>Rating: {chefData?.rating3}</p>
                                    <p><b>Cooking Ingredients</b> </p>
                                    <ul>
                                        {chefData?.ingredients3.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p><b>Cooking Method:</b>   {chefData?.method3}</p>
                                    <button className='favorite-btn' onClick={notify}>Favorite</button>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div>
                        {chefData ? (
                            <div id='welcome'>
                                <div id='banner-img'>
                                    <img src={chefData?.recipeImg2} alt="recipe" />
                                </div>
                                <div id='welcoming-msg'>
                                    <h2>{chefData?.recipeName2}</h2>
                                    <p>Rating: {chefData?.rating2}</p>
                                    <p><b>Cooking Ingredients</b> </p>
                                    <ul>
                                        {chefData?.ingredients2.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p><b>Cooking Method:</b>   {chefData?.method2}</p>
                                    <button className='favorite-btn' onClick={notify}>Favorite</button>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                </div>


            </div>


        </div>
    );
};

export default ChefsDetails;
