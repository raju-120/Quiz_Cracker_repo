import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <nav className='nav-container'>
            
            <div className='nav-left-element'>
                <h3>Quiz Cracker</h3>
                <div className='nav-right-element'>
                    <Link to='/'           className='link-items'>Home</Link>
                    <Link to='/statistics' className='link-items'>Statistics</Link>
                    <Link to='/blog'       className='link-items'>Blog</Link>
                </div>
            </div>

        </nav>
    );
};

export default Header;