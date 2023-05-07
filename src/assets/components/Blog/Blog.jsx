import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="question">
                <h2>Differences between uncontrolled and controlled components?</h2>
                <p>Uncontrolled components are managed by the browser, whereas controlled components are managed by React. In uncontrolled components, the form data is handled by the DOM itself, while in controlled components, the form data is managed by React and the state is updated on every change. Controlled components provide more flexibility and control, but can require more code. Uncontrolled components are simpler and faster to write, but have less control over the form data.</p>

            </div>
            <div className="question">
                <h2>How to validate React props using PropTypes?</h2>
                <p>
                    PropTypes is a built-in feature of React that allows for the validation of props passed to components. It helps in ensuring that the expected type, shape, and presence of props are as intended. This is particularly useful for avoiding errors and debugging code. PropTypes can be used to validate the data type, check if a prop is required or not, and ensure the shape of an object prop. PropTypes can be imported from the (prop-types) package, and the validation rules can be defined in a separate PropTypes object within the component.
                </p>

            </div>
            <div className="question">
                <h2>Difference between nodejs and express js?</h2>
                <p>Node.js is a server-side runtime environment that allows you to run JavaScript code on the server. It provides a platform for building scalable, high-performance applications that can handle a large number of simultaneous connections.Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, including routing, middleware, and templates.</p>

            </div>
            <div className="question">
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom hook is a reusable function in React that encapsulates common logic for components. It is created to simplify the code by extracting complex logic into a single, reusable function. Custom hooks are useful when you have complex logic that needs to be shared across multiple components, or when you want to abstract away repetitive code.

                    By creating a custom hook, you can make your code more modular, easier to read and maintain, and reduce duplication of code. Custom hooks can also make testing easier, as you can test the hook in isolation from your components. Overall, custom hooks are a powerful feature of React that can help you write more efficient and reusable code.</p>

            </div>
        </div>
    );
};

export default Blog;