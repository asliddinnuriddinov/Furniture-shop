import React from 'react'
import "./Contact.scss"
import map from "../../assets/map.png"
import { TiLocation } from "react-icons/ti";
import Container from '../../utils/Utils';

const Contact = () => {
  return (
    <>
    <div className='contact'>
        <div className="layer"></div>
        <h1>Contact us</h1>
        <div className="contact__wrapper">
            <div className="location">
                <h4>New york</h4>
                <small>address</small>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                <small>phone number</small>
                <p>(219) 456 6 456 66</p>
                <small>email address</small>
                <p>debra.holt@example.com</p>
                <div className="contact__map">
                    <img src={map} alt="" ></img>
                    <TiLocation/>
                </div>   
            </div>
            <div className="location">
                <h4>California</h4>
                <small>address</small>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                <small>phone number</small>
                <p>(219) 456 6 456 66</p>
                <small>email address</small>
                <p>debra.holt@example.com</p>
                <div className="contact__map">
                    <img src={map} alt="" ></img>
                    <TiLocation/>
                </div>            
            </div>
        </div>
    </div>
    <Container>
        <div className="contact__form__wrapper">
        <form className='contact__form' action="#">
            <h2>Let's talk</h2>
            <div className="contact__form-1-row">
                <input required type="text" placeholder='Your Name' />
                <input required type="text" placeholder='Last Name' />
            </div>
            <input required type="email" placeholder='Email Address' />
            <textarea required cols="30" rows="10" placeholder='Message'></textarea>
            <div className="contact__form-btn">
            <button>Send message</button>
            </div>
        </form>
        </div>
    </Container>
    </>
  )
}

export default Contact