import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

export default function About() {
let { id } = useParams();

return (
<>
    <div className="display-1 text-center mb-5">
        <Link to='/'><img src="/images/logo.png" alt="Voice of influence" /></Link>
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">About VOi</div>
    
    <div className='container mt-3'>        
        <p>VOi enables creators to obtain complimentary stays at desirable venues whilst enabling them to earn their fair share of commission by offering a discount to their following through the use of promotional codes.</p>
        <p>VOi is a platform targeted at increasing hotels’ direct bookings by utilising creators’ voice of influence. VOi values the individuality of creators and their direct relationship with their audience.</p>
        <ul>
            <li><p className='fw-bold'>Jai Hermolle	Founder & CEO</p></li>
            <li><p className='fw-bold'>Andrew White	Commercial Director</p></li>
            <li><p className='fw-bold'>Paul Hermolle Development Director</p></li>
        </ul>
        <Footer/>
    </div> 
</>
);
}