import React from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Profile() {
let { id } = useParams();
return (
<>
<h1>My Profile {id}</h1>
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
</ul>
</>
);
}