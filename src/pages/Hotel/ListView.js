import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function ListView() {
  let { search } = useParams();

  let eventGuid = 0
  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
  let tomorrow = addDays(todayStr, 1).toISOString().replace(/T.*$/, '')
  
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function createEventId() {
    return String(eventGuid++)
  }

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: 'All-day event',
      start: todayStr
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: tomorrow + 'T12:00:00'
    }
  ];

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
        <div className="container">
            <div className='row'>
                <div className='col-1 list-text'>Key</div>
                <div className='col-1 list-text'>Campain</div>
                <div className='col-1 list-text'>Last Edited</div>
                <div className='col-1 list-text'>Start</div>
                <div className='col-1 list-text'>End</div>
                <div className='col-1 list-text'>Creators Applied</div>
                <div className='col-1 list-text'>Creators Confirmed</div>
                <div className='col-1 list-text'>Landing Page</div>
                <div className='col-1 list-text'>Bookings</div>
                <div className='col-1 list-text'>Revenue</div>
                <div className='col-1 list-text'>Commissions</div>
                <div className='col-1 list-text'>ROI</div>
            </div>
            <div className='row'>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'>Foodie Golf</div>
                <div className='col-1 list-text'>01.05.23</div>
                <div className='col-1 list-text'>02.05.23</div>
                <div className='col-1 list-text'>23.05.23</div>
                <div className='col-1 list-text'>2</div>
                <div className='col-1 list-text'>1</div>
                <div className='col-1 list-text'>www. feldonvalley .com/ promotions/ foodiegolf</div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
            </div>
            <div className='row'>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'>Girls Weekend</div>
                <div className='col-1 list-text'>01.05.23</div>
                <div className='col-1 list-text'>24.05.23</div>
                <div className='col-1 list-text'>24.06.23</div>
                <div className='col-1 list-text'>1</div>
                <div className='col-1 list-text'>1</div>
                <div className='col-1 list-text'>www. feldonvalley. com/ promotions/ girlsweekend</div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
                <div className='col-1 list-text'></div>
            </div>
        </div>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}