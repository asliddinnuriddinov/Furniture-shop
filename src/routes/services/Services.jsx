import React from 'react'
import "./Services.scss"
import logo1 from "../../assets/service-logo-1.svg"
import logo2 from "../../assets/service-logo-2.svg"
import logo3 from "../../assets/service-logo-3.svg"
import logo4 from "../../assets/service-logo-4.svg"
import hero1 from "../../assets/service-2.png"
import hero2 from "../../assets/service-3.png"
import hero3 from "../../assets/service-4.png"
import Container from '../../utils/Utils'

const Services = () => {
  return (
    <div className='services'>
        <div className="services__main__hero">
            <div className="layer"></div>
            <h1>OUR SERVICES</h1>
        </div>
        <div className="services__presented">
            <div className="service__item">
                <div className="service__item-head">
                    <img src={logo1} alt="" />
                    <h4>Shop online</h4>
                </div>
                <p>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</p>
            </div>
            <div className="service__item">
                <div className="service__item-head">
                    <img src={logo2} alt="" />
                    <h4>Free Shipping</h4>
                </div>
                <p>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</p>
            </div>
            <div className="service__item">
                <div className="service__item-head">
                    <img src={logo3} alt="" />
                    <h4>Return Policy</h4>
                </div>
                <p>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</p>
            </div>
            <div className="service__item">
                <div className="service__item-head">
                    <img src={logo4} alt="" />
                    <h4>Payment Mehtods</h4>
                </div>
                <p>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</p>
            </div>
        </div>
        
        <Container>
        <div className="about__service">
            <div className="about__service-hero">
                <div className="service__left">
                    <h2>Our Philosophy</h2>
                    <p>Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat. Pharetra magna ac placerat vestibulum lectus. Felis eget velit aliquet sagittis id consectetur.</p>
                </div>
                <div className="service__right">
                    <img src={hero1} alt="" />
                </div>
            </div>
            <div className="about__service-hero">
                <div className="service__right">
                    <img src={hero2} alt="" />
                </div>
                <div className="service__left">
                    <h2>Starting Projects</h2>
                    <p>Cursus eget nunc scelerisque viverra mauris. Sit amet justo donec enim diam vulputate. Laoreet sit amet cursus sit amet dictum sit amet justo. Sed vulputate.</p>
                </div>
            </div>
            <div className="about__service-hero">
                <div className="service__left">
                    <h2>Function and beauty</h2>
                    <p>Volutpat est velit egestas dui id. Arcu felis bibendum ut tristique et egestas quis ipsum. Sed risus pretium quam vulputate. Aliquam id diam maecenas.</p>
                </div>
                <div className="service__right">
                    <img src={hero3} alt="" />
                </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Services