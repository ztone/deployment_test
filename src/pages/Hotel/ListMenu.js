import React from 'react';
import { Link  } from 'react-router-dom';

export default function ListMenu() {
return (
    <>
        <Link className='list-btn fw-bold btn' to='/calendar'>Calendar View</Link>
        <Link className='list-btn fw-bold btn' to='/listview'>List View</Link>
        <Link className='list-btn fw-bold btn' to='/creatorapp'>Creator Applications</Link>
        <Link className='list-btn fw-bold btn' to='/browse'>Browse Creators</Link>
        <Link className='list-btn fw-bold btn' to='/mypersonas'>My Personas</Link>
        <Link className='list-btn fw-bold btn' to='/createcampain'>Create Campain</Link>
        <Link className='list-btn fw-bold btn' to='/history'>History</Link>
    </>
);
}