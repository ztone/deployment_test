import React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
return (
<>
<div class="display-1 text-center recenter-menu">VOi</div>
    <ul>
        <p class="text-center">
            <li> <Link className='btn btn-light btn-lg w-25' to='hotels'>Stays</Link> </li>
        </p>
        <p class="text-center">
            <li> <Link className='btn btn-light btn-lg w-25' to='campaigns'>My Campaigns</Link> </li>
        </p>
        <p class="text-center">
            <li> <Link className='btn btn-light btn-lg w-25' to='profile'>My Profile</Link> </li>
        </p>
        <p class="text-center">
            <li> <Link className='btn btn-light btn-lg w-25' to='about'>About VOi</Link> </li>
        </p>
    </ul>
</>
);
}