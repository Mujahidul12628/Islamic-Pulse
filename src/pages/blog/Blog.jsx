import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";


const Blog = () => {
  const questions = useLoaderData();
  const ref = useRef();

  return (
    <>
      <div className="bg-rose-100">
        {/* <Pdf targetRef={ref} filename="questions.pdf" pageSize="A4">
          {({ toPdf }) => (
            <button
              className="px-3 py-1 font-semibold text-white rounded-r-full shadow-md bg-rose-500"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          )}
        </Pdf> */}
      </div>
      <div className="mb-10" ref={ref}>
        <div className="py-5 text-center bg-primary">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Find Your Question
          </h2>
        </div>
        <div className="grid gap-5 px-5 sm:px-10 sm:grid-cols-2 gap-y-8">
          {questions.map((question) => (
            <div
              key={question.id}
              className="overflow-hidden bg-gray-100 rounded-md shadow shadow-violet-300"
            >
              <h2 className="px-5 pt-2 text-lg font-semibold tracking-wide text-white bg-gray-400 sm:text-xl bg-gradient">
                {question.question}
              </h2>
              <p className="px-5 pt-1 pb-5 text-gray-600">{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
