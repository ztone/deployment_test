import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View
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
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
                initialView="listWeek"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'listWeek'
                }}
                initialEvents={INITIAL_EVENTS}
            />
        </div>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}