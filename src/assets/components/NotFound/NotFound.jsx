import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <div className='robot'>
                {/* <img src="https://th.bing.com/th/id/OIP.Q924Am0-aFeF80lQds84HwHaIh?pid=ImgDet&rs=1" alt="" /> */}
            </div>
            <div className='not-found'>
                <h1>404 Not Found</h1>
                <h4>The page you are looking for does not exist.</h4>
                <p>Click this <Link to='/'>URL</Link> to go Home Page</p>
            </div>
        </div>
    );
};

export default NotFound;