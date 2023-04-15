import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Profile() {
let { id } = useParams();
return (
<>
<div className="container mt-3">  
  <div className='float-r'>
    <Link className="btn btn-light menu-btn" to='/'>Menu</Link>
  </div>
  <h1 className="text-center recenter">My Profile {id}</h1>
  <div className="row">
    <div className="col-sm">
        <p className="text-center">
            <img src="images/profile.png" alt="Girl in a jacket" width="200"  />
        </p>
        <p className="text-center">Change Verificaton Picture</p>
        <p className="text-center">Verified</p>
    </div>
    <div className="col-sm">
        <ul>
            <li>Name: John Johnson</li>
            <li>Town: London</li>
            <li>Channels
                <ul>Instagram</ul>
                <ul>Tik Tok</ul>
                <ul className="btn btn-dark">Add Channel</ul>
            </li>
            <li>
            {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    Channels
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Golf</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Gym</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Fitness</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lifestyle</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Luxury</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            </li>
            {/* <li>Total multichannel audience</li> */}
            <li>Tags
                <ul>Gym</ul>
                <ul>Travel</ul>
                <ul>Silver required</ul>
            </li>
            {/* <li>Performance Insights</li> */}
        </ul>
    </div>
  </div>
</div>
{/* <div>
    Bio: <input type="text" placeholder='Area to write/edit bio'></input>
</div> */}
</>
);
}