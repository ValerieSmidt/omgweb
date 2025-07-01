import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="OsloMetGaming Logo" className='logo' />
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

export default Navbar