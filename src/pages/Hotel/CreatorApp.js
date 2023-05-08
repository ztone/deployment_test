import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

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
      <div className='btn btn-dark w-75'>CreatorApp View</div><br/>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}