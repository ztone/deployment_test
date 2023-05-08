import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './Footer';

export default function Profile() {
let { id } = useParams();
return (
<>
    <div className="display-1 text-center small-logo">
        <Link to='/'><img className='small-logo' src="/images/logo.png" alt="Voice of influence" width="70px"/></Link>
    </div>
    <div className='mid-line w-25 float-l'></div>
    <div className='mid-line w-25 float-r'></div>
    <div className="text-center">My Profile</div>
<div className="container mt-3">  
  <div className="row">
    <div className="col-auto">
       <img src="images/profile.png" alt="My Profile" width="120"  />
    </div>
    <div className="col">
        <div className='float-r'>
            <img className='small-icon' src="/images/instagram-icon.png" alt="Instagram"/>
            <img className='small-icon disabled' src="/images/tiktok-icon.png" alt="Tik Tok"/>
        </div>
        <div className='text-center title fw-bold'>Profile Details</div>
        <div className='information-text mt-1'>Name: Charlie Irons</div>
        <div className='information-text mt-1'>Town/City: Chipping Norton</div>
        <div className='information-text mt-1'>Followers: 86,458</div>
        <div className='information-text mt-1'>Bio: Scraped from Instragram or write option to write own bio.</div>
        <div className="row mt-1">
          <div className="col tag h-25">Foodie</div>
          <div className="col tag">Golf</div>
          <div className="col tag">Wellness</div>
        </div> 
    </div>
  </div>
  <div className='text-center fw-b mt-2'>Edit</div>
  <form action="/hotels">
        
        <div className="input-box w-100 mt-3">
            <span className="prefix">Name:</span>
            <input type="text" placeholder="Charlie Irons" name="username"/>
        </div>

        <div className="input-box w-100 mt-3">
            <span className="prefix">Town\City:</span>
            <input type="text" placeholder="Stratford Upon Avon" name="town"/>
        </div>

        <div className='mt-3'>Channels:</div>
        <div className="input-box w-100 mt-2">
            <span className="prefix"><img className='channel-icon' src="/images/instagram-icon.png" alt="Instagram" width="40px"/></span>
            <input type="text" placeholder="https://instagram" name="instagram"/>
            <span className='channel-btn dark-btn w-25 text-center'>Upload</span>
        </div>

        <div className="input-box w-100 mt-2">
        <span className="prefix"><img className='channel-icon' src="/images/tiktok-icon.png" alt="Tik Tok" width="40px"/></span>
            <input type="text" placeholder='' name="tiktok"/>
            <span className='channel-btn dark-btn w-25 text-center'>Upload</span>
        </div>
  </form>
  <Footer/>
</div>
</>
);
}