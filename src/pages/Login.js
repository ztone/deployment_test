import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
return (
<>
    <div className="display-1 text-center">
        <img src="/images/logo.png" alt="Voice of influence" /> 
    </div>
    <ul className='mt-5'>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='menu'>Creators</Link> </li>
        </p>
        <p className="text-center">
            <li> <Link className='main-menu-btn fw-bold btn btn-light btn-lg w-75' to='calendar'>Hotels</Link> </li>
        </p>
    </ul>
</>
);
}