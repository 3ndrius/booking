import React from 'react'

import '../EventItem/EventItem.css';

export default function EventItem(props) {

        return (
          <li key={props.eventId} className="events__list-item">
            <div className="eventItem__header"> 
                <h1>{props.title}</h1>
                <h2>${props.price} | { new Date(props.date).toLocaleDateString('pl-PL') } </h2>
            </div>
            <div>
                {props.userId === props.creatorId ? <p>You are owner of the event</p> : <button className="btn">details</button>} 
            </div>
          </li>
        );
 
}
