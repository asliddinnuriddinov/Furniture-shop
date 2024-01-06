import React, { useEffect } from 'react'
import "./Nav.scss"
import Container from "../../utils/Utils"
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Nav = () => {
    const {pathname}=useLocation()
    const cart=useSelector(state=>state.cart.cart)

    useEffect(()=>{
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          });
    },[])
  return (
    <Container>
    <nav data-aos='fade-right' data-aos-duration={800}> 
        <h2 style={pathname=="/contact"?{color:"#fff"}:{color:"#000"}}>Akshan</h2>
        <ul>
            <li>
                <NavLink style={pathname=="/contact"?{color:"#fff"}:{color:"#181818"}} className={({isActive})=>isActive?"active__nav-link":""} to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink style={pathname=="/contact"?{color:"#fff"}:{color:"#181818"}} className={({isActive})=>isActive?"active__nav-link":""} to={'/services'}>Services</NavLink>
            </li>
            <li>
                <NavLink style={pathname=="/contact"?{color:"#fff"}:{color:"#181818"}} className={({isActive})=>isActive?"active__nav-link":""} to={'/about'}>About Us</NavLink>
            </li>
            <li>
                <NavLink style={pathname=="/contact"?{color:"#fff"}:{color:"#181818"}} className={({isActive})=>isActive?"active__nav-link":""} to={'/contact'}>Contact</NavLink>
            </li>
        </ul>
        <button>Cart ({cart.length}) </button>
    </nav>

    </Container>
  )
}

export default Nav