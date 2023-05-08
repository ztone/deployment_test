import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function CalendarView() {
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


  const [currentEvents, setCurrentEvents] = useState([]);

  var handleEvents = (events) => {
    setCurrentEvents(events);
    //console.log(currentEvents);
  }

  function renderEventContent(eventInfo) {
    //console.log('renderEventContent');
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

return (
<>
  <TabletHeader />

  {/* Main */}
  <div className="row">
    
    {/* Buttons */}
    <div className="col">
      {/* <ListMenu /> */}
      <ListMenu />
    </div>

    {/* Calendar */}
    <div className="col-9">
      <div className='container'>
      <FullCalendar
        plugins={[dayGridPlugin , timeGridPlugin, interactionPlugin ]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        /*select={this.handleDateSelect}
        
        eventClick={this.handleEventClick}
        */
        eventContent={renderEventContent} // custom render function
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
      />
      </div>
    </div>
  </div>    
</>
);

}