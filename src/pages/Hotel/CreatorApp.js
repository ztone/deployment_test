import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';
import ProfileInfo from '../Creator/ProfileInfo';

export default function CreatorApp() {
  let { search } = useParams();

return (
<>
  <TabletHeader />

  {/* Main */}
  {/* <div className='container'> */}
    <div className="row">
      
      {/* Buttons */}
      <div className="col">
        {/* <ListMenu /> */}
        <ListMenu />
      </div>

      {/* CreatorApp */}
      <div className="col-9">
        <div className='container'>
            <div className='row'>
                <div className='col'><ProfileInfo /></div>
                <div className='col'>
                    <div className="input-box w-100">
                        <span className="prefix bg-danger">________</span>
                        <input className='text-center' type="text" placeholder="Foodie Golf" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Engagement Rate:</span>
                        <input className='text-center' type="text" placeholder="3%" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Conversion Rate:</span>
                        <input className='text-center' type="text" placeholder="0.02%" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Voi Rating:</span>
                        <input className='text-center' type="text" placeholder="4.2/5" name="username" disabled/>
                    </div>
                    <div className='row mt-1'>
                        <div className='col text-center btn bg-danger text-white'>Reject</div>
                        <div className='col text-center btn bg-success text-white'>Accept</div>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col'><ProfileInfo /></div>
                <div className='col'>
                    <div className="input-box w-100">
                        <span className="prefix bg-danger">________</span>
                        <input className='text-center' type="text" placeholder="Foodie Golf" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Engagement Rate:</span>
                        <input className='text-center' type="text" placeholder="3%" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Conversion Rate:</span>
                        <input className='text-center' type="text" placeholder="0.02%" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Voi Rating:</span>
                        <input className='text-center' type="text" placeholder="4.2/5" name="username" disabled/>
                    </div>
                    <div className='row mt-1'>
                        <div className='col text-center btn bg-danger text-white'>Reject</div>
                        <div className='col text-center btn bg-success text-white'>Accept</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}