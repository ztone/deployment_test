import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Hotels() {
let { search } = useParams();
return (
<>
<form action="/hotels">
    <input type='text' placeholder='Search stays' id="search" name="search"/>
    <input type="submit" value="Filter" />
</form>
<div className='float-right'>
<button className="btn btn-dark"><Link className="text-center" to='/'>Menu</Link></button>
</div>
<h1 >Stays {search}</h1>
<div className="container">
  <div className="row">
    <div className="col-sm">
        <Link className="text-center" to='hotel/1'>Feldon Vally</Link>
        <p>Sutton Lane, Lower Brailes, OX15 5BB</p>
        <img src="images/felldonvalley.png" alt="felldonvalley" width="200"  />
    </div>
    <div className="col-sm">
        <div className="text-center">Foodie Gold Campain</div>
        <p>2 nights accommodation in a main lodge standard room with 1 round of golf and breakfast each morning for creator + 1 guest.</p>
        <div className="row">
          <div className="col-sm btn btn-dark">Foodie</div>
          <div className="col-sm btn btn-dark">Golf</div>
          <div className="col-sm btn btn-dark">Wellness</div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div>Post requirements:</div>
            <div>1 grid post, 5 stories</div>
            <div>% offered:</div>
            <div>8%</div>
          </div>
          <div className="col-sm">
            <div>Audience required:</div>
            <div>60,000</div>
            <div>Follower Discount:</div>
            <div>10%</div>
          </div>
        </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
        <Link to='hotel/2'>Pennyhill Park</Link><br/>
        <p>London Road, Bagshot, GU19 5EU</p>
        <img src="images/pennyhillpark.png" alt="Girl in a jacket" width="200"  />
    </div>
    <div className="col-sm">
        General description of campaign & keywords they are looking for
    </div>
  </div>
</div>
</>
);
}