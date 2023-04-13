import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Hotels() {
let { search } = useParams();
return (
<>
<div className="container mt-3">
  <form action="/hotels">
      <input type='text' placeholder='Search stays' id="search" name="search"/>
      <input type="submit" value="Filter" />
      <Link className="btn btn-light menu-btn" to='/'>Menu</Link>
  </form>

  <h4>Stays {search}</h4>
  
  <div className="row">
    <div className="col-sm">
      <div className='text-center'>
        <Link to='hotel/1'>Feldon Vally</Link>
      </div>
      <p className='text-center'>Sutton Lane, Lower Brailes, OX15 5BB</p>
      <div className='text-center'>
        <img src="images/felldonvalley.png" alt="felldonvalley" width="300"  />
      </div>
    </div>
    <div className="col-sm">
      <div className="fw-bold text-center">Foodie Gold Campain</div>
      <p>2 nights accommodation in a main lodge standard room with 1 round of golf and breakfast each morning for creator + 1 guest.</p>
      <div className="row">
          <div className="col-sm btn btn-light tag">Foodie</div>
          <div className="col-sm btn btn-light tag">Golf</div>
          <div className="col-sm btn btn-light tag">Wellness</div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className='mt-3'>Post requirements:</div>
            <div>1 grid post, 5 stories</div>
            <div>% offered:</div>
            <div>8%</div>
          </div>
          <div className="col-sm">
            <div className='mt-3'>Audience required:</div>
            <div>60,000</div>
            <div>Follower Discount:</div>
            <div>10%</div>
          </div>
        </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
      <div className='text-center'>
        <Link to='hotel/2'>Pennyhill Park</Link><br/>
      </div>
      <p className='text-center'>London Road, Bagshot, GU19 5EU</p>
      <div className='text-center'>
        <img src="images/pennyhillpark.png" alt="Girl in a jacket" width="300"/>
      </div>
    </div>
    <div className="col-sm">
        General description of campaign & keywords they are looking for
    </div>
  </div>
</div>
</>
);
}