import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function CreateCampain() {
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

    {/* CreateCampain */}
    <div className="col-9">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Campaign Name:</span>
                        <input type="text" placeholder="Foodie Golf" name="username" disabled/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Persona:</span>
                        <input type="text" defaultValue="London golfer, gourmet enthusiast" name="username"/>
                    </div>
                    <div className="input-box w-100 mt-1">
                        <span className="prefix">Creator Tags:</span>
                        <input type="text" defaultValue="Foodie Golf Wellness" name="username"/>
                    </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Campaign Brief:</span>
                            <input type="text" defaultValue="2 nights accommodation in a main lodge standard room with 1 round of golf and breakfast each morning for creator + 1 guest." name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Follower Benefits:</span>
                            <input type="text" defaultValue="Package Stay Offer" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Additional Terms & Conditions:</span>
                            <input type="text" placeholder="" name="username"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Start Date:</span>
                            <input type="date" placeholder="" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">End Date:</span>
                            <input type="date" placeholder="" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Chennel(s):</span>
                            <input type="text" placeholder="" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Post Requirements:</span>
                            <input type="text" placeholder="5 stories, 1 grid post" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Minimum Followers:</span>
                            <input type="text" placeholder="" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Commission Offered:</span>
                            <input type="text" placeholder="" name="username"/>
                        </div>
                        <div className="input-box w-100 mt-1">
                            <span className="prefix">Add Images:</span>
                            <input type="text" placeholder="" name="username"/>
                        </div>
                        <div className='btn btn-dark mt-2 w-100'>Preview Campaign</div>
                        <div className='btn btn-dark mt-2 w-100'>Create Campaign</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}