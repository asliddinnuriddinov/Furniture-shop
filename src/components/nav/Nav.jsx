import React from 'react'
import "./Nav.scss"
import Container from "../../utils/Utils"
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Nav = () => {
    const {pathname}=useLocation()
    const cart=useSelector(state=>state.cart.cart)
  return (
    <Container>
    <nav>
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