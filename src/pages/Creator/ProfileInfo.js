import React from 'react';
import { Link  } from 'react-router-dom';

export default function ProfileInfo() {
return (
    <>
    <div className="row">
        <div className="col-auto">
            <img src="images/profile.png" alt="My Profile" width="120px"  />
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
    </>
);
}