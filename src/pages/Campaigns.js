import React from 'react';
import { useParams } from 'react-router-dom';
export default function Campaigns() {
let { id } = useParams();
return (
<>
    <h1>My Campaigns</h1>
    <input type="date" id="start" name="trip-start"
        value="2022-07-22"
        min="2022-01-01" max="2022-12-31"></input>
    <input type="date" id="end" name="trip-end"
        value="2022-08-22"
        min="2022-01-01" max="2022-12-31"></input>
    <ul>
        <li>Active Campaigns</li>
        <li>Scheduled Campaigns</li>
        <li>Completed Campaigns</li>
    </ul>
</>
);
}