import React from "react";
import { useLoaderData } from "react-router-dom";
import { scrollTop } from "../../utils/utils";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialGooglePlusCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import Review from "../review/review";
import ReactPlayer from 'react-player';

const RecipeDetails = () => {
  const { course_name, category, instructor, years_of_experience, num_recipes, likes, Instructor_Picture, ingredients, course_content, rating, picture, course_video3, course_video2, course_video1 } = useLoaderData();


  // const cookingMethodLines = cooking_method.split("\n");
  // const cookingMethodLines = cooking_method ? cooking_method.split("\n") : [];


  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-200 "
      onLoad={scrollTop()}
    >
      <div className="flex items-center justify-center w-full p-1 gradient-container">
        <img
          className="w-full mx-auto rounded-md md:rounded-b-full md:w-1/2"
          src={
            picture ||
            "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          }
          alt=""
        />
      </div>
      <div className="sm:col-span-3">


        <div className="grid grid-cols-4">
          <div className="order-1 col-span-4 px-5 pb-5 md:pb-0 md:col-span-3 bg-slate-200 ">
            <h4 className="flex items-center justify-center my-5 text-3xl font-bold text-green-500 ">
              {course_name}
            </h4>
            {/* <div>
              <h5 className="text-2xl font-semibold">Course Syllabus</h5>
              <ul className="ml-5 list-disc">
                {ingredients &&
                  ingredients.map((item, index) => (
                    <li key={index} className="flex items-center">

                      <LiaArrowCircleRightSolid className='mr-2 text-green-600' size={20} />
                      {item}
                    </li>
                  ))}
              </ul>
            </div> */}

            {/* <div>
              <h5 className="mt-4 text-2xl font-semibold">Course Content</h5>
              {course_content.map((content, index) => (
                <div key={index} className="my-1">
                  <h2 className="text-xl font-bold">{content.title}</h2>
                  <p>{content.description}</p>
                </div>
              ))}
            </div> */}

            <div>
              <table className="min-w-full p-1 border bg-slate-300 border-slate-400">
                <thead>
                  <tr>
                    <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-900 uppercase border text-md border-slate-400">Syllabus</th>
                    <th className="px-6 py-3 font-medium tracking-wider text-left text-gray-900 uppercase border text-md border-slate-400">Course Content</th>
                  </tr>
                </thead>
                <tbody>
                  {course_content.map((content, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-gray-100'}>
                      <td className="px-6 py-4 border border-slate-400">{content.title}</td>
                      <td className="px-6 py-4 border border-slate-400">{content.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="my-3 ">
                <h2 className="w-1/4 p-1 mx-auto mb-2 text-lg font-semibold text-center text-green-600 border-2 border-green-600 rounded-md">{course_name} Course Part 1</h2>
                <iframe
                  src={course_video1}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full sm:w-5/6 lg:w-4/5 mx-auto h-[300px] rounded-md"
                ></iframe>
              </div>
              <div className="my-3">
                <h2 className="w-1/4 p-1 mx-auto mb-2 text-lg font-semibold text-center text-green-600 border-2 border-green-600 rounded-md">{course_name} Course Part 2</h2>
                <iframe
                  src={course_video2}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full sm:w-5/6 lg:w-4/5 mx-auto h-[300px] rounded-md"
                ></iframe>
              </div>

              <div>
                <h2 className="w-1/4 p-1 mx-auto mb-2 text-lg font-semibold text-center text-green-600 border-2 border-green-600 rounded-md">{course_name} Course Part 3</h2>
                <iframe
                  src={course_video3}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full sm:w-5/6 lg:w-4/5 mx-auto h-[350px] rounded-md"
                ></iframe>
              </div>

            </div>

            <div>
              <h1 className="my-5 text-2xl font-semibold text-center text-green-500">User Review</h1>
              <Review></Review>
            </div>
          </div>

          <div className="order-2 col-span-4 p-1 shadow-xl md:sticky md:top-0 checked: md:col-span-1 bg-slate-300">
            <img
              className="w-3/6 mx-auto rounded-full sm:w-2/6 md:w-1/2"
              src={
                Instructor_Picture ||
                "https://i.ibb.co/6H8F3BW/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
              alt=""
            />
            <div className="text-xl text-center lg:text-2xl">{instructor}</div>
            <div className="flex justify-center">

              <a href="https://www.facebook.com/muzahidulislam.rony" target="_blank"><TiSocialFacebookCircular className='mr-1 text-green-600 rounded-full' size={40} /></a>
              <a href="https://www.linkedin.com/in/mujahidulislam628/" target="_blank"><TiSocialLinkedinCircular className='mr-1 text-green-600 rounded-full' size={40} /></a>

              <TiSocialGooglePlusCircular className='mr-1 text-green-600 rounded-full' size={40} />
              <TiSocialTwitterCircular className='mr-1 text-green-600 rounded-full' size={40} />

            </div>
            <div className="flex flex-col items-center justify-center mt-2 text-lg">
              <div>Experience: <span className="p-1 font-semibold "> {years_of_experience} years</span> </div>
              <div>Course Conduct:  <span className="p-1 font-semibold ">{num_recipes}<span>+</span></span>  </div>
              <div>Instructor Rating: <span className="p-1 font-semibold ">{rating}</span> </div>
              <div className="flex items-center justify-center">
                <span>Total Likes: </span>

                <AiOutlineLike className='ml-1' size={20} />
                <span className="font-semibold ">{likes}</span>


              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RecipeDetails;
