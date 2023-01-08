import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function UserPage() {
let { search } = useParams();
return (
<>
<form action="/hotels">
    <input type='text' placeholder='Search hotel' id="search" name="search"/>
    <input type="submit" value="Filter" />
</form>
<h1>Hotels {search}</h1>
<ul>
    <li> <Link to='hotel/1'>Feldon Vally</Link> </li>
    <li> <Link to='hotel/2'>Pennyhill Park</Link> </li>
</ul>
</>
);
}