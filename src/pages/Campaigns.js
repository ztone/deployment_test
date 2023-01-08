import React from 'react';
import { useParams } from 'react-router-dom';
export default function Campaigns() {
let { id } = useParams();
return (
<>
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
    <ul>
        <li>Active Campaigns
            <p>Show hotels which have gone through to the active stage, links to internal ads. Shows stay to voucher expiry date</p>
        </li>
        <li>Scheduled Campaigns
            <p>Show hotels which have accepted campaign pitch</p>
        </li>
        <li>Completed Campaigns
            <p>Show each campaign with its corresponding hotel, Conversions, rev generated & influencer comms</p>
        </li>
    </ul>
</>
);
}