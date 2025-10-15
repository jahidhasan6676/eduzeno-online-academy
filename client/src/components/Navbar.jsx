import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-gray-300 flex items-center justify-center gap-20 '>
            <div>
                <h2 className='text-xl font-medium text-center py-5'>This is Eduzeno Online Academy Navbar</h2>

            </div>
            <div className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;