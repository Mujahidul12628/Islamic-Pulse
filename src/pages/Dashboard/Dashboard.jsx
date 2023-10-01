import React, { useState } from 'react';

import PopularRecipes from '../home/popularRecipes/PopularRecipes';
import RecipeCard from '../home/popularRecipes/RecipeCard';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({
        title: '',
        description: '',
        coverImage: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
    };

    const handleCreateCourse = () => {
        setCourses((prevCourses) => [...prevCourses, newCourse]);
        setNewCourse({
            title: '',
            description: '',
            coverImage: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="p-4 text-center text-white bg-green-500">
                <h1 className="text-2xl font-bold">Course Instructor Dashboard</h1>
            </header>

            {/* Create New Course Section */}
            <section className="p-6 mx-4 my-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Create New Course</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-gray-700">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newCourse.title}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Description:</label>
                        <textarea
                            name="description"
                            value={newCourse.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Cover Image URL:</label>
                    <input
                        type="text"
                        name="coverImage"
                        value={newCourse.coverImage}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <button
                    onClick={handleCreateCourse}
                    className="px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-700"
                >
                    Create Course
                </button>
            </section>

            {/* List of Existing Courses */}
            <section className="p-6 mx-4 my-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Existing Courses</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {courses.map((course, index) => (
                        <RecipeCard key={index} course={course} />
                    ))}
                </div>
            </section>

            {/* Analytics Section */}
            <section className="p-6 mx-4 my-8 bg-white rounded-lg shadow-md">
                <PopularRecipes />
            </section>

            {/* Footer Section */}
            <footer className="p-4 mt-auto text-center text-white bg-blue-500">
                <p>&copy; 2023 Course Dashboard</p>
            </footer>
        </div>
    );
};

export default Dashboard;
