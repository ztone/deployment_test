import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Campaigns() {
let { id } = useParams();
return (
<>
    <h1 class="text-center">Enquire</h1>
    <p class="text-center">Thank you for enquiring to promote Feldon Valley on 9th November 2022</p>
    <p class="text-center">Please wait for correspondence regarding the status of your Campaign – sort of thing</p>
    <p class="text-center">
        <Link className='btn btn-dark' to="/hotels">Back to Hotels</Link>
    </p>
</>
);
}