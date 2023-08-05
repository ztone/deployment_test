import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Campaigns() {
let { id } = useParams();
return (
<>
    <div className="display-1 text-center">
        <Link to="/menu"><img src="/images/logo.png" alt="Voice of influence" /></Link>
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">Enquire</div>

    <div className='container'>
        <p className="text-center mt-5">Thank you for enquiring to promote Feldon Valley on 9th November 2022</p>
        <p className="text-center">Please wait for correspondence regarding the status of your Campaign.</p>
    </div>
    <Footer />
</>
);
}