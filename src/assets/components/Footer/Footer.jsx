

import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <footer className="p-0 mx-auto footer max-w-7xl">
            <div className="container">
                <div className='footer-body'>

                    <div className={`col-md-6 ${showLinks ? 'show' : ''}`}>
                        <ul className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/chefs">Chefs</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    </div>
                    <div>
                        <p ><small id='copy-right'>All right reserved &copy; Savoury Bite</small> </p>
                    </div>
                    <div className="hamburger-menu" onClick={toggleLinks}>
                        <div className={`line ${showLinks ? 'active' : ''}`}></div>
                        <div className={`line ${showLinks ? 'active' : ''}`}></div>
                        <div className={`line ${showLinks ? 'active' : ''}`}></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
