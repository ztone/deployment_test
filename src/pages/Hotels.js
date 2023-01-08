import React from 'react';
import { useParams } from 'react-router-dom';
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
    <li>Feldon Vally</li>
    <li>Pennyhill Park</li>
</ul>
</>
);
}