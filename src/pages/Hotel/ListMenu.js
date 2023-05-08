import React from 'react';
import { Link  } from 'react-router-dom';

export default function ListMenu() {
return (
    <>
        <div className='list-btn fw-bold btn'>Calendar View</div><br/>
        <div className='list-btn fw-bold btn'>List View</div><br/>
        <div className='list-btn fw-bold btn'>Creator Applications</div><br/>
        <div className='list-btn fw-bold btn'>Browse Creators</div><br/>
        <div className='list-btn fw-bold btn'>My Personas</div><br/>
        <div className='list-btn fw-bold btn'>Create Campain</div><br/>
        <div className='list-btn fw-bold btn'>History</div>
    </>
);
}