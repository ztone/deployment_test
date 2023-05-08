import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function MyPersonas() {
  let { search } = useParams();

return (
<>
  <TabletHeader />

    {/* Main */}
    <div className="row">
      
      {/* Buttons */}
      <div className="col">
        {/* <ListMenu /> */}
        <ListMenu />
      </div>

      {/* MyPersonas */}
      <div className="col-9">
        <div className='container'>
            <div className='row'>
                <div className='col-3 text-center fw-bold'>Persona</div>
                <div className='col-6 text-center fw-bold'>Description</div>
                <div className='col-3 text-center fw-bold'>Tags</div>
            </div>
            <div className='row mt-2'>
                <div className='col-3 border'>London golfer, gourmet enthusiast</div>
                <div className='col-6 border'>35-year-old foodie and avid golfer from London, looking for a luxurious Cotswolds retreat with gourmet dining and exceptional golfing experience.</div>
                <div className='col-3 border'>Foodie Golf Wellness</div>
            </div>
            <div className='row mt-2'>
                <div className='col-3 border'>Fun-seeking Bristolian girlfriends</div>
                <div className='col-6 border'>30-year-old professional from Bristol, seeking a fun and relaxing Cotswolds getaway with her girlfriends for pampering, shopping, and cocktails.</div>
                <div className='col-3 border'>Fun Girlies Fashion</div>
            </div>
            <div className='row mt-2'>
                <div className='col-3 border'>Family seeking fun-filled retreat</div>
                <div className='col-6 border'>John (40) and Jane (35) with their two kids, looking for a family-friendly Cotswolds retreat with activities, entertainment, and free accommodation for children.</div>
                <div className='col-3 border'>Family Kids Travel</div>
            </div>
            <div className='row mt-2'>
                <div className='col-3 border'>Dog-loving duo seeks retreat</div>
                <div className='col-6 border'>Max and his owner, Kate, a 28-year-old dog lover, seeking a pet-friendly Cotswolds retreat with dog amenities, walking trails, and cosy accommodations.</div>
                <div className='col-3 border'>Dogs Family Travel</div>
            </div>
            <div className='btn bg-white text-dark text-center w-100 border mt-5 mb-5'>Add New +</div>
        </div>
      </div>
    </div>
  
</>
);
}