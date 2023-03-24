import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my country</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;