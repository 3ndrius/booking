import React, { Component } from 'react'
import './Events.css';

import Modal from './../components/Modal/Modal';

import Backdrop from './../components/Backdrop/Backdrop';

export default class Events extends Component {

  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.setState({ 
      creating: true
    });
  }
  modalConfirmHandler = () =>{

  }
  modalCancelHandler = () => {
    this.setState({
      creating:false
    })
  }
  render() {
    return (
      <React.Fragment>
      {this.state.creating && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler} >Modal content</Modal>}
      {this.state.creating && <Backdrop/>}
      <div className="events">
        <h2>Share with us events</h2>
        <button onClick={this.startCreateEventHandler}>Create event</button>
      </div>
      </React.Fragment>
    )
  }
}
