import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.png"
import Container from '../../utils/Utils'

const Footer = () => {
  return (
    <Container>
    <footer>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="footer__circle"></div>
        <div className="footer__links">
            <div className="footer__links-item">
                <h4>PRODUCT</h4>
                <ul>
                    <li>Living Room</li>
                    <li>Dining & Kitchen</li>
                    <li>Bed Room</li>
                    <li>Outdoor</li>
                </ul>
            </div>
            <div className="footer__links-item">
                <h4>ABOUT US</h4>
                <ul>
                    <li>Our Team</li>
                    <li>Services</li>
                    <li>Shop Page</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="footer__links-item">
                <h4>FOLLOW US</h4>
                <ul>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Twitter</a>
                    </li>
                    <li>
                        <a href="">Behance</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </Container>
  )
}

export default Footer