import React from 'react';
import { Link  } from 'react-router-dom';

export default function TabletHeader() {
return (
    <>
        {/* Header */}
        <div className="row w-100">
            <div className="col">
            <div className="logo">
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
    </>
);
}