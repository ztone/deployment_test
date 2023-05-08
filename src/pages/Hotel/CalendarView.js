import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CalendarView() {
  let { search } = useParams();

return (
<>
  {/* Header */}
  <div className="row w-100">
    <div className="col">
      <div className="text-left logo pr-3">
          <Link to="/calendar"><img className='logo' src="/images/logo.png" alt="Voice of influence"/></Link>
      </div>
    </div>
    <div className="col text-c">
      <div className="display-5">Feldon Vally</div>
    </div>
    <div className="col text-r">
      <div className='btn tablet-header-bth'>Exit</div><br/>
      <div className='btn tablet-header-bth'>Help</div>
    </div>
  </div>
  {/* Line */}
  <div className='mid-line w-25 float-l'></div>
  <div className='mid-line w-25 float-r'></div>
  <p className="text-center">
      <a href="https://goo.gl/maps/6QkonmGVu86wFogYA">
          <img className='small-icon' src="/images/map-icon.png" alt="Map of Sutton Lane"/>
      </a>
      Sutton Lane, Lower Brailes, OX15 5BB
  </p>

  {/* Main */}
  {/* <div className='container'> */}
    <div className="row">
      
      {/* Buttons */}
      <div className="col">
        <div className='list-btn fw-bold btn'>Calendar View</div><br/>
        <div className='list-btn fw-bold btn'>List View</div><br/>
        <div className='list-btn fw-bold btn'>Creator Applications</div><br/>
        <div className='list-btn fw-bold btn'>Browse Creators</div><br/>
        <div className='list-btn fw-bold btn'>My Personas</div><br/>
        <div className='list-btn fw-bold btn'>Create Campain</div><br/>
        <div className='list-btn fw-bold btn'>History</div>
      </div>

      {/* Calendar */}
      <div className="col-9">
      <div className='btn btn-dark w-100'>Calendar View</div><br/>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}