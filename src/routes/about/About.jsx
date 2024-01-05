import React, { useState } from 'react'
import "./About.scss"
import vector from "../../assets/vector.png"
import user from "../../assets/user.png"
import Container from '../../utils/Utils'
import style1 from "../../assets/style-1.png"
import style2 from "../../assets/style-2.png"
import style3 from "../../assets/hero-1.png"
import style4 from "../../assets/hero-3.png"
import style5 from "../../assets/service-3.png"
import style6 from "../../assets/service-4.png"
import style8 from "../../assets/service-2.png"
import style7 from "../../assets/style-2.png"

const About = () => {
    const [selectedStyle,setSelectedStyle]=useState('s')
  return (
    <div className='about'>
        <div className="about__hero">
            <h1>we're furniture store</h1>
        </div>
        <Container>
        <div className="about__hero-2">
            <div className="about__hero-2-left">
                <h2>Exceptional designs for your exception ideas</h2>
                <div className="hero-2-left-down">
                    <div>
                        <span>01</span>
                        <p>Cursus vitae congue mauris rhoncus. Amet est placerat in</p>
                    </div>
                    <div>
                        <span>02</span>
                        <p>Cursus vitae congue mauris rhoncus. Amet est placerat in</p>
                    </div>
                </div>
            </div>
            <div className="about__hero-2-right">
                <img src={vector} alt="" />
                <div className="hero-2-right__user">
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
        </Container>

        <Container>
        <div className="work__style">
                <ul className='work__style__category'>
                    <li onClick={e=>setSelectedStyle('s')} className={selectedStyle=='s'?"active__style":""}>
                        Shabby Chic
                    </li>
                    <li onClick={e=>setSelectedStyle('t')} className={selectedStyle=='t'?"active__style":""}>
                        Transitional
                    </li>
                    <li onClick={e=>setSelectedStyle('m1')} className={selectedStyle=='m1'?"active__style":""}>
                        Minimalistic style
                    </li>
                    <li onClick={e=>setSelectedStyle('m2')} className={selectedStyle=='m2'?"active__style":""}>
                        Modern Furniture
                    </li>
                </ul>

                <div className="style__text">
                    <div className="style__text__left">
                    <div className="style__text-1">
                        <h2>{selectedStyle=="s"?"M":selectedStyle=="t"?"L":selectedStyle=='m1'?"P":"V"}</h2>
                        <p>i in nulla posuere sollicitudin aliquam ultrices sagittis. Quisque id diam vel quam elementum pulvinar. Mi proin sed libero enim </p>
                    </div>
                        <p>sed faucibus turpis. Porttitor lacus luctus. Elementum nibh tellus molestie nunc non blandit massa. Malesuada fames ac turpis egestas.</p>
                    </div>
                    <p className='style__text-p-3'>Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat. Pharetra magna ac placerat vestibulum lectus. Porttitor lacus luctus accumsan tortor posuere ac ut.</p>
                </div>
        </div>
        <div className="style__gallery">
            <div className="style__gallery-left">
                <img src={selectedStyle=='s'?style1:selectedStyle=='t'?style3:selectedStyle=='m1'?style5:style7} alt="" />
            </div>
            <div className="style__gallery-right">
                <img src={selectedStyle=='s'?style2:selectedStyle=='t'?style4:selectedStyle=='m1'?style6:style8} alt="" />
            </div>
        </div>

        <div className="team">
            <h2>Meet the our team</h2>
            <div className="team__wrapper">
                <div className="team__item">
                    <img src={user} alt="" />
                    <h4>Guy Mccoy</h4>
                    <p>Art Director</p>
                </div>
                <div className="team__item">
                    <img src={user} alt="" />
                    <h4>Guy Mccoy</h4>
                    <p>Art Director</p>
                </div>
                <div className="team__item">
                    <img src={user} alt="" />
                    <h4>Guy Mccoy</h4>
                    <p>Art Director</p>
                </div>
                <div className="team__item">
                    <img src={user} alt="" />
                    <h4>Guy Mccoy</h4>
                    <p>Art Director</p>
                </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default About