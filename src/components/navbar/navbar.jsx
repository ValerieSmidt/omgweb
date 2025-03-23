import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Events</li>
            <li>Membership</li>
            <li>Role Playing</li>
            <li>Volunteer</li>
            <li>About us</li>
            <li><button className='btn'>Norsk</button></li>
        </ul>
    </nav>
  )
}

export default navbar