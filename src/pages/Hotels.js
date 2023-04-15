import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Hotels() {
let { search } = useParams();
return (
<>
  <div className="display-1 text-center small-logo">
        <img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/> 
  </div>
  <div className="container mt-3">
  <form action="/hotels">
      <div className='w-100'>
        <input className='w-25' type="submit" value="Filter" />
        <input className='w-75' type='text' placeholder='Search stays' id="search" name="search"/>
      </div>
  </form>
  <div className='mid-line w-25 float-l'></div>
  <div className='mid-line w-25 float-r'></div>
  <div className="text-center">Stays</div>

  <div className="row">
    <div className="col-auto">
      <img className='float-l' src="images/felldonvalley.png" alt="felldonvalley" width="100px" height="130px" />
    </div>
    <div className="col">
      <div className='text-center title'>
        <Link to='hotel/1'>Feldon Vally</Link>
      </div>
      <p className='text-center address'>Sutton Lane, Lower Brailes, OX15 5BB</p>
      <div className="text-center title">Foodie Gold Campain</div>
      <div className='description'>2 nights accommodation in a main lodge standard room with 1 round of golf and breakfast each morning for creator + 1 guest.</div>
      <div className="row">
        <div className="col text-center description">% offered</div>
        <div className="col text-center description">Follwer discount</div>
      </div> 
      <div className="row">
        <div className='col text-center percentage text-c'>8%</div>
        <div className='col text-center percentage'>10%</div>
      </div>
      <div className="row">
        <div className="col tag h-25">Foodie</div>
        <div className="col tag">Golf</div>
        <div className="col tag">Wellness</div>
      </div> 
    </div>
  </div>
{/* 
  <img className='float-l' src="images/felldonvalley.png" alt="felldonvalley" width="120px" height="150px" />
  <div className='text-center title'>
    <Link to='hotel/1'>Feldon Vally</Link>
  </div>
  <p className='text-center address'>Sutton Lane, Lower Brailes, OX15 5BB</p>
  <div className="text-center title">Foodie Gold Campain</div>
  <p className='description'>2 nights accommodation in a main lodge standard room with 1 round of golf and breakfast each morning for creator + 1 guest.</p>

  <div className='float-c'></div> */}
  
  {/* <div className="row">
    <div className="col-sm">
      <img src="images/felldonvalley.png" alt="felldonvalley" width="120px" height="150px"  />
    </div>
    <div className="col-sm">
      <div>Feldon Vally</div>
    </div> 
  </div> */}
      {/* <div className='text-center'>
        <Link to='hotel/1'>Feldon Vally</Link>
      </div> */}
      {/* 
      <p className='text-center'>Sutton Lane, Lower Brailes, OX15 5BB</p>
    
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
        </div> */}
  
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