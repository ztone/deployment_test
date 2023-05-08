import React from 'react';
import { Link } from "react-router-dom";

export default function Root() {
return (
<>
<h1 class="text-center">Voice of Influence</h1>
    <ul>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='hotels'>Hotels</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='campaigns'>My Campaigns</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='profile'>My Profile</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='about'>About Us</Link> </li>
        </p>
    </ul>
</>
);
}