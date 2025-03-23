import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Roll Dice, Draw Cards, Make Friends</h1>
        <p>Where OsloMet students gather to enjoy board games in good company</p>
        <button className='btn'>Join our Discord!</button>
      </div>
    </div>

  )
}

export default Hero