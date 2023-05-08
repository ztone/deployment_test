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
            <form action="/hotels">
                <div className='w-100'>
                <input className='w-75' type='text' placeholder='Search' id="search" name="search"/>
                <input className='w-25' type="submit" value="Filter" />
                </div>
            </form>
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