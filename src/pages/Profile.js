import React from 'react';
import { useParams } from 'react-router-dom';
export default function UserPage() {
let { id } = useParams();
return (
<>
<h1>My Profile {id}</h1>
<ul>
    <li>Name: John Johnson</li>
    <li>Town: London</li>
    <li>Channels: <select name="channel" id="channel">
        <option value="golf">Golf</option>
        <option value="gym">Gym</option>
        <option value="fitness">Fitness</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="travel">Travel</option>
        <option value="luxury">Luxury</option>
        </select>
    </li>
</ul>
</>
);
}