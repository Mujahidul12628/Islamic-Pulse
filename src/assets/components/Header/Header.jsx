/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    return (

        <nav className='header-content'>
            <div className='logo-container'>
                <h3>Savory Bites</h3>
            </div>
            <div>
                <Link to="/" > Home </Link>
                <Link to="/blog">Blog</Link >
                <Link to="/chefs">Chefs</Link >
                <Link to="/register">Registration</Link >
                <Link to="/login">Login</Link >
            </div>
        </nav>
    );
};

export default Header;

