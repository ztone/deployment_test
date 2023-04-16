import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Hotels() {
let { search } = useParams();
return (
<>
  <div className="display-1 text-center small-logo">
        <Link to="/"><img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/></Link>
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
        <Link to='hotel/1'><img className='float-l' src="images/felldonvalley.png" alt="Felldon Valley" width="100px" height="130px" /></Link>
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
    <div className="row">
      <div className="col-auto">
        <img className='float-l' src="images/pennyhillpark.png" alt="Penny Hill Park" width="100px" height="130px" />
      </div>
      <div className="col">
        <div className='text-center title'>
          <Link to='hotel/1'>Pennyhill Park</Link>
        </div>
        <p className='text-center address'>London Road, Bagshot, GU19 5EU</p>
        <div className="text-center title">Afternoon Tea Campaign</div>
        <div className='description'>1 nights accommodation in a standard room with afternoon tea on arrival for creator + 1 guest.</div>
        <div className="row">
          <div className="col text-center description">% offered</div>
          <div className="col text-center description">Follwer discount</div>
        </div> 
        <div className="row">
          <div className='col text-center percentage text-c'>6%</div>
          <div className='col text-center percentage'>15%</div>
        </div>
        <div className="row">
          <div className="col tag h-25">Foodie</div>
          <div className="col tag">Couple</div>
          <div className="col tag">Luxury</div>
        </div> 
      </div>
    </div>
    <Footer />
  </div>
</>
);
}