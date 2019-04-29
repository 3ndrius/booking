import React from 'react'

import '../EventItem/EventItem.css';

export default function EventItem(props) {

        return (
          <li key={props.eventId} className="events__list-item">
            {props.title}
          </li>
        );
 
}
