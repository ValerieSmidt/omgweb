import React from 'react'
import './Hero.css'
import omgLogo from '../../assets/omgfulllogo.png'

export const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-content'>
      <img src={omgLogo} alt="OMG Logo" className="hero-logo" />
        <div className="hero-text">
          <h1>Roll Dice, Draw Cards, Make Friends</h1>
          <p>Where OsloMet students gather to enjoy board games in good company</p>
          <a href="https://discord.com/invite/gxyJ28xe39" className='btn' target="_blank" rel="noopener noreferrer">Join our Discord!</a>
        </div>
      </div>
    </div>
      
  )
}

export default Hero