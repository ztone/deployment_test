import React from 'react';
import { Link  } from 'react-router-dom';

export default function Footer() {
return (
    <>
        <div className='footer'>
            <div className="row  w-100">
                <div className="col text-center"><Link className="text-center" to='/campaigns'><img src="/images/campain-icon-footer.png" alt="Campaigns"/></Link></div>
                <div className="col text-center"><Link className="text-center" to='/hotels'><img src="/images/stays-icon-footer.png" alt="Stays"/></Link></div>
                <div className="col text-center"><Link className="text-center" to='/profile'><img src="/images/profile-icon-footer.png" alt="Profile"/></Link></div>
            </div> 
        </div>
    </>
);
}