import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';
import ProfileInfo from '../Creator/ProfileInfo';

export default function BrowseCreators() {
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

      {/* BrowseCreators */}
      <div className="col-9">
        <div className='container'>
            <div className='row'>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
            </div>
            <div className='row mt-2'>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
            </div>
            <div className='row mt-2'>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
                <div className='col'><ProfileInfo /></div>
            </div>
        </div>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}