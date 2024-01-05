import React from 'react'
import "./Feedback.scss"
import Container from '../../utils/Utils'

const Feedback = () => {
  return (
    <Container>
    <div className='feedback'>
        <h2>Customer review</h2>
        <span></span>
        <div className="feedback__wrapper">
            <div className="feedback__item">
                <div className="feedback__comment">
                    <h4>Very great product</h4>
                    <b><span></span></b>
                    <p>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</p>
                </div>
                <div className="feedback__user">
                    <div className="user__left">

                    </div>
                    <div className="user__right">
                        <p>Dianne Russel</p>
                        <small>Client</small>
                    </div>
                </div>
            </div>
            <div className="feedback__item">
                <div className="feedback__comment">
                    <h4>Very great product</h4>
                    <b><span></span></b>
                    <p>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</p>
                </div>
                <div className="feedback__user">
                    <div className="user__left">

                    </div>
                    <div className="user__right">
                        <p>Dianne Russel</p>
                        <small>Client</small>
                    </div>
                </div>
            </div>
            <div className="feedback__item">
                <div className="feedback__comment">
                    <h4>Very great product</h4>
                    <b><span></span></b>
                    <p>Nibh mauris cursus mattis molestie. Non pulvinar neque laoreet suspendisse interdum consectetur libero 😍.</p>
                </div>
                <div className="feedback__user">
                    <div className="user__left">

                    </div>
                    <div className="user__right">
                        <p>Dianne Russel</p>
                        <small>Client</small>
                    </div>
                </div>
            </div>
        </div>
        <button>ADD A REVIEW</button>
    </div>
    </Container>
  )
}

export default Feedback