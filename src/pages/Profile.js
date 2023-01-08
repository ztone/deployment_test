import React from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Profile() {
let { id } = useParams();
return (
<>
<h1 class="text-center">My Profile {id}</h1>
<div class="container">
  <div class="row">
    <div class="col-sm">
        <p class="text-center">
            <img src="images/profile.png" alt="Girl in a jacket" width="200"  />
        </p>
        <p class="text-center">Change Profile Picture</p>
    </div>
    <div class="col-sm">
        <ul>
            <li>Name: John Johnson</li>
            <li>Town: London</li>
            <li>
            <Dropdown>
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
            </Dropdown>
            </li>
            <li>Total multichannel audience</li>
            <li>Keywords eg. Gym, travel, lifestyle</li>
            <li>Performance Insights</li>
        </ul>
    </div>
  </div>
</div>
<div>
    Bio: <input type="text" placeholder='Area to write/edit bio'></input>
</div>
</>
);
}