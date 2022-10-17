import React from 'react';
import { Link } from 'react-router-dom';
//import './Header.css';

const Header = () => {
    return (

        <nav className=' bg-gray-800 rounded-xl'>
            
            <div className=' decoration-white flex justify-between'>
                <h3 className='text-white m-4'>Quiz Cracker</h3>
                <div className=' flex'>
                    <Link to='/'           className=' mx-10 p-5 text-white hover:opacity-50'>Home</Link>
                    <Link to='/statistics' className=' mx-10 p-5 text-white hover:opacity-50'>Statistics</Link>
                    <Link to='/blog'       className=' mx-10 p-5 text-white hover:opacity-50'>Blog</Link>
                    
                </div>
            </div>

        </nav>
    );
};

export default Header;