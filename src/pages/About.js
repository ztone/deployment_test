import React from 'react';
import { useParams } from 'react-router-dom';
export default function About() {
let { id } = useParams();
return (
<>
    <h1 class="text-center">VOI</h1>
    <p>VOi enables creators to obtain complimentary stays at desirable venues whilst enabling them to earn their fair share of commission by offering a discount to their following through the use of promotional codes.</p>
    <p>VOi is a platform targeted at increasing hotels’ direct bookings by utilising creators’ voice of influence. VOi values the individuality of creators and their direct relationship with their audience.</p>
    <ul>
        <li>Jai Hermolle	Founder & CEO</li>
        <li>Andrew White	Commercial Director</li>
        <li>Paul Hermolle	Development Director</li>
    </ul>
</>
);
}