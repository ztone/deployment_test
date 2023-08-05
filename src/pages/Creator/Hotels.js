import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Hotels() {
let { search } = useParams();
return (
<>
  <div className="display-1 text-center">
        <Link to="/menu"><img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/></Link>
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
        <div className='float-r'>
            <img className='small-icon' src="/images/instagram-icon.png" alt="Instagram"/>
            <img className='small-icon' src="/images/tiktok-icon.png" alt="Tik Tok"/>
        </div>
        <div className='text-center title'>
          <Link to='hotel/1'>Feldon Vally</Link>
        </div>
        <div className='text-center address'>
          <a href="https://goo.gl/maps/iQfYG5gdUuGQG9qs9">
            <img className='small-icon' src="/images/map-icon.png" alt="Map of Sutton Lane"/>
          </a>
          Sutton Lane, Lower Brailes, OX15 5BB
        </div>
        <div className="text-center title mt-1">Foodie Gold Campain</div>
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
    <div className="row mt-2">
      <div className="col-auto">
        <Link to='hotel/1'><img className='float-l' src="images/pennyhillpark.png" alt="Penny Hill Park" width="100px" height="130px" /></Link>
      </div>
      <div className="col">
        <div className='float-r'>
          <img className='small-icon' src="/images/instagram-icon.png" alt="Instagram"/>
          <img className='small-icon disabled' src="/images/tiktok-icon.png" alt="Tik Tok"/>
        </div>
        <div className='text-center title'>
          <Link to='hotel/1'>Pennyhill Park</Link>
        </div>
        <div className='text-center address'><img className='small-icon' src="/images/map-icon.png" alt="Map of London Road"/>London Road, Bagshot, GU19 5EU</div>
        <div className="text-center title mt-1">Afternoon Tea Campaign</div>
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
    <div className="row mt-2">
      <div className="col-auto">
        <Link to='hotel/1'><img className='float-l' src="images/pennyhillpark.png" alt="Penny Hill Park" width="100px" height="130px" /></Link>
      </div>
      <div className="col">
        <div className='float-r'>
          <img className='small-icon' src="/images/instagram-icon.png" alt="Instagram"/>
          <img className='small-icon disabled' src="/images/tiktok-icon.png" alt="Tik Tok"/>
        </div>
        <div className='text-center title'>
          <Link to='hotel/1'>Pennyhill Park</Link>
        </div>
        <div className='text-center address'><img className='small-icon' src="/images/map-icon.png" alt="Map of London Road"/>London Road, Bagshot, GU19 5EU</div>
        <div className="text-center title mt-1">Afternoon Tea Campaign</div>
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
    <div className="row mt-2">
      <div className="col-auto">
        <Link to='hotel/1'><img className='float-l' src="images/pennyhillpark.png" alt="Penny Hill Park" width="100px" height="130px" /></Link>
      </div>
      <div className="col">
        <div className='float-r'>
          <img className='small-icon' src="/images/instagram-icon.png" alt="Instagram"/>
          <img className='small-icon disabled' src="/images/tiktok-icon.png" alt="Tik Tok"/>
        </div>
        <div className='text-center title'>
          <Link to='hotel/1'>Pennyhill Park</Link>
        </div>
        <div className='text-center address'><img className='small-icon' src="/images/map-icon.png" alt="Map of London Road"/>London Road, Bagshot, GU19 5EU</div>
        <div className="text-center title mt-1">Afternoon Tea Campaign</div>
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
    <div className='mb-5'></div>
    <Footer />
  </div>
</>
);
}