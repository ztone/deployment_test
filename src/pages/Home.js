import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
return (
<>
<h1 class="text-center">VOi</h1>
    <ul>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='hotels'>Stays</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='campaigns'>My Campaigns</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='profile'>My Profile</Link> </li>
        </p>
        <p class="text-center">
            <li class="btn btn-dark"> <Link to='about'>About VOi</Link> </li>
        </p>
    </ul>
</>
);
}