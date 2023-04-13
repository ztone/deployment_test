import React from 'react';
import { Link, useParams } from 'react-router-dom';
export default function Hotel() {
let { search } = useParams();
return (
<>
<div className='container mt-3'>
<div className='float-r'>
    <Link className="btn btn-light menu-btn" to='/'>Menu</Link>
  </div>
    <h1 class="text-center">Feldon Vally</h1>
    <p class="text-center">Sutton Lane, Lower Brailes, OX15 5BB</p>
    <p class="text-center">
        <img src="/images/felldonvalley-big.png" alt="Girl in a jacket" />
    </p>
    <div class="container">
    <div class="row">
        <div class="col-sm">
            <p className="text-center fw-bold">Foodie Golf Campaign</p>
            <p className='box-text'>General description of hotel, facilities – more detailed info which can be used during the campaign posting</p>
            <p className='box-text'>Terms and conditions for the campaign to be shown here.</p>
        </div>
        <div class="col-sm">
            <input type="date" id="start" name="trip-start"
                value="2022-07-22"
                min="2022-01-01" max="2022-12-31"></input>
            <input type="date" id="end" name="trip-end"
                value="2022-08-22"
                min="2022-01-01" max="2022-12-31"></input>
            </div>
        </div>
    </div>
    <p class="text-center">
        <Link className='btn btn-dark' to="enquire">Enquire</Link>
    </p>
    </div>
</>
);
}