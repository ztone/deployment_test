import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import TabletHeader from './TabletHeader';
import ListMenu from './ListMenu';

export default function CalendarView() {
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

      {/* Calendar */}
      <div className="col-9">
        <div className='container'>
      <FullCalendar
            plugins={[dayGridPlugin /*, timeGridPlugin, interactionPlugin */]}
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
            /*weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            */
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          </div>
      </div>
    </div>
  {/* </div> */}
    
</>
);
}