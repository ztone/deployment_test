import React from 'react';
import { useParams, Link } from 'react-router-dom';
export default function Hotels() {
let { search } = useParams();
return (
<>
<form action="/hotels">
    <input type='text' placeholder='Search hotel' id="search" name="search"/>
    <input type="submit" value="Filter" />
</form>
<h1>Hotels {search}</h1>
<div class="container">
  <div class="row">
    <div class="col-sm">
        <Link to='hotel/1'>Feldon Vally</Link><br/>
        <p>Sutton Lane, Lower Brailes, OX15 5BB</p>
        <img src="images/felldonvalley.png" alt="Girl in a jacket" width="200"  />
    </div>
    <div class="col-sm">
        General description of campaign & keywords they are looking for
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
        <Link to='hotel/2'>Pennyhill Park</Link><br/>
        <p>London Road, Bagshot, GU19 5EU</p>
        <img src="images/pennyhillpark.png" alt="Girl in a jacket" width="200"  />
    </div>
    <div class="col-sm">
        General description of campaign & keywords they are looking for
    </div>
  </div>
</div>
</>
);
}