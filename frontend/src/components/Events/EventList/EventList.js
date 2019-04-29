import React from 'react'
import EventItem from './EventItem/EventItem';

import './EventList.css';




export default function EventList(props) {
    const events = props.events.map(event=> {
       return <EventItem eventId={event._id} title={event.title} />
    })
  return (
    <ul className="events__list">{events}</ul>
  )
}
