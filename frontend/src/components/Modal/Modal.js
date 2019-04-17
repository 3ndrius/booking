import React from 'react'

import './Modal.css';
export default function Modal(props) {
  return (
    <div className="modal">
      <header className="modal__header">{props.title}</header>
      <section className="modal__content">
            {props.children}
      </section>
      <section className="modal__actions">
       {props.canCancel && <button className="btn">Cancel</button>}
        {props.canConfirm && <button className="btn">Confirm</button>}
      </section>
    </div>
  )
}
