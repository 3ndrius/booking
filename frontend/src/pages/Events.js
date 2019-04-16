import React, { Component } from 'react'
import './Events.css';
export default class Events extends Component {
  render() {
    return (
      <div className="events">
        <h2>Share with us events</h2>
        <button onClick={this.handleCreate}>Create event</button>
      </div>
    )
  }
}
