import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

export default function Menu() {
return (
<>
    <div className="display-1 text-center">
        <img src="/images/logo.png" alt="Voice of influence" /> 
    </div>
    <ul className='mt-5'>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='hotels'>Stays</Link> </li>
        </p>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='campaigns'>My Campaigns</Link> </li>
        </p>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='profile'>My Profile</Link> </li>
        </p>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='about'>About VOi</Link> </li>
        </p>
    </ul>
    <Footer />
</>
);
}