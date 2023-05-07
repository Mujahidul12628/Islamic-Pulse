import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className='footer-body'>

                    <div className="col-md-6">
                        <ul className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/chefs">Chefs</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </ul>
                    </div>
                    <div>
                        <p ><small>All right reserve &copy;Chef Recipe Hunter</small> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
