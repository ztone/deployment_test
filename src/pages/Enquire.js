import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Campaigns() {
let { id } = useParams();
return (
<>
    <div className="display-1 text-center">
        <img src="/images/logo.png" alt="Voice of influence" /> 
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">Enquire</div>

    <p class="text-center mt-5">Thank you for enquiring to promote Feldon Valley on 9th November 2022</p>
    <p class="text-center">Please wait for correspondence regarding the status of your Campaign.</p>
    <p class="text-center">
        <Link className='text-center' to="/hotels">Back to Hotels</Link>
    </p>
</>
);
}