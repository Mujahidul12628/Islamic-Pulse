import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Chefs.css'
import banner from '../../images/banner.jpeg'
import service from '../../images/service.png'
import food from '../../images/food.png'
import chefsImg from '../../images/chefsImg.png'

const Chefs = () => {
    const [chefData, setChefData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://savoury-bite-server-mujahidul12628.vercel.app/chefData")
            .then((response) => response.json())
            .then((data) => {
                setChefData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    console.log(chefData);

    return (
        <div className='mainChefContainer'>
            <div id='welcome'>
                <div id='welcoming-msg'>
                    <h2>Experience The Authentic Test</h2>
                    <p>Discover delicious recipes and culinary inspiration and connect with talented chefs on our food site. From appetizers to desserts, we have got you covered with our mouth-watering selection of dishes</p>
                    <button>Order Now</button>
                </div>
                <div id='banner-img'>
                    <img src={banner} alt="banner" />
                </div>
            </div>
            <div>
                <h1 id='ho'>Recent Top Rated  Food</h1>
                <div id='best-section'>

                    <div className='chef-card'>
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200401171803-07-best-turkish-foods-inegol-kofte.jpg?q=x_0,y_0,h_1688,w_2999,c_fill/h_720,w_1280/f_webp" alt="" />
                        <h4>Inegol kofte</h4>
                        <p>Grilled meatballs made using ground beef or lamb, breadcrumbs and onions.</p>
                    </div>
                    <div className='chef-card'>
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200401171826-08-best-turkish-foods-iskender-kebab.jpg?q=x_0,y_0,h_1688,w_2999,c_fill/h_720,w_1280/f_webp" alt="" />
                        <h4>Iskender kebab</h4>
                        <p>Iskender kebab is named after İskender Efendi, the man who invented the dish.</p>
                    </div>
                    <div className='chef-card'>
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200401171851-09-best-turkish-foods-cag-kebab.jpg?q=x_0,y_0,h_1688,w_2999,c_fill/h_720,w_1280/f_webp" alt="" />
                        <h4>Cag kebab</h4>
                        <p>Marinated lamb roasted on a horizontal rotating spit and cooked over a wood fire.</p>
                    </div>
                </div>
            </div>
            <h1>Our Chefs</h1>
            <div className="chefs">
                {/* {chefData[0]?.chefs?.map((chef) => ( */}
                {chefData.map((chef) => (
                    <div key={chef?.id} className="chef-card">
                        <img src={chef?.chefImg} alt="" />
                        <h2>{chef?.name}</h2>
                        <p>Experience: {chef?.experience}</p>

                        <ul>
                            {chef?.items?.map((item) => (
                                <li key={item?.id}>
                                    {item?.name} - ${item?.experience}
                                </li>
                            ))}
                        </ul>

                        <p>Ratings: {chef?.rating}</p>
                        <p>Likes: {chef?.likes}</p>
                        <Link to={`/chefs/${chef?.id}`}>
                            <button id='view-recipe'>View Recipes</button>
                        </Link>
                    </div>
                ))}
            </div>


            <div>

                <h1 id='ho'>Why We are Best</h1>
                <div id='best-section'>

                    <div className='chef-card'>
                        <img src={food} alt="food" />
                        <h3 className='best-section-class'>Best Food</h3>
                        <p className='best-section-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias quaerat voluptate repudiandae? Aliquid accusamus voluptas maiores ducimus repudiandae eum.</p>
                    </div>
                    <div className='chef-card'>

                        <img src={service} alt="service" />
                        <h3 className='best-section-class'>Best Service</h3>
                        <p className='best-section-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias quaerat voluptate repudiandae? Aliquid accusamus voluptas maiores ducimus repudiandae eum.</p>
                    </div>
                    <div className='chef-card'>
                        <img src={chefsImg} alt="chefs" />
                        <h3 className='best-section-class'>Best Chef</h3>
                        <p className='best-section-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat alias quaerat voluptate repudiandae? Aliquid accusamus voluptas maiores ducimus repudiandae eum.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Chefs;