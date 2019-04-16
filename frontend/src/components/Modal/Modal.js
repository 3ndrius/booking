import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal">
      <header>{props.title}</header>
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
