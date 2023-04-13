import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function About() {
let { id } = useParams();
return (
<>
<div className='container mt-3'>
  <div className='float-r'>
    <Link className="btn btn-light menu-btn" to='/'>Menu</Link>
  </div>
    <div class="display-1 text-center recenter">VOi</div>
    <h4 className='text-center fw-bold mt-5'>About VOi</h4>
    <p>VOi enables creators to obtain complimentary stays at desirable venues whilst enabling them to earn their fair share of commission by offering a discount to their following through the use of promotional codes.</p>
    <p>VOi is a platform targeted at increasing hotels’ direct bookings by utilising creators’ voice of influence. VOi values the individuality of creators and their direct relationship with their audience.</p>
    <ul>
        <li><p>Jai Hermolle	Founder & CEO</p></li>
        <li><p>Andrew White	Commercial Director</p></li>
        <li><p>Paul Hermolle	Development Director</p></li>
    </ul>
</div> 
</>
);
}