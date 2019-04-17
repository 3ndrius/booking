import React, { Component } from 'react'
import './Events.css';

import Modal from './../components/Modal/Modal';


export default class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal>Modal content</Modal>
      <div className="events">
        <h2>Share with us events</h2>
        <button onClick={this.handleCreate}>Create event</button>
      </div>
      </React.Fragment>
    )
  }
}
