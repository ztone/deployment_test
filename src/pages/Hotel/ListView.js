import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function ListView() {
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

      {/* List */}
      <div className="col-9">
      <div className='btn btn-dark w-75'>List View</div><br/>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}