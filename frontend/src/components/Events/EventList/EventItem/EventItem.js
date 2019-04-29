import React from 'react'

import '../EventItem/EventItem.css';

export default function EventItem(props) {

        return (
          <li key={props.eventId} className="events__list-item">
            <div className="eventItem__header"> 
                <h1>{props.title}</h1>
                <h2>$10.99</h2>
            </div>
            <div>
                <button className="btn">View details</button>
                <p>You are creator of this event</p>
            </div>
          </li>
        );
 
}
