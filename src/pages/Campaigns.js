import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Campaigns() {
let { id } = useParams();
return (
<>
<div className='container mt-3'>
<div className="btn btn-light menu-btn"><Link className="text-center" to='/'>Menu</Link></div>
    
    <h1 class="text-center">My Campaigns</h1>
    <div class="container">
        <div class="row">
            <div class="col-sm">
            <input type="date" id="start" name="trip-start"
                value="2022-07-22"
                min="2022-01-01" max="2022-12-31"></input>
            </div>
            <div class="col-sm">
            <input type="date" id="end" name="trip-end"
                value="2022-08-22"
                min="2022-01-01" max="2022-12-31"></input>
            </div>
        </div>
    </div>
    <ul className='mt-3'>
        <li><span className='fw-bold'>Active Campaigns</span>
            <p>Show hotels which have gone through to the active stage, links to internal ads. Shows stay to voucher expiry date</p>
        </li>
        <li><span className='fw-bold'>Scheduled Campaigns</span>
            <p>Show hotels which have accepted campaign pitch</p>
        </li>
        <li><span className='fw-bold'>Completed Campaigns</span>
            <p>Show each campaign with its corresponding hotel, Conversions, rev generated & influencer comms</p>
        </li>
    </ul>
    </div>
</>
);
}