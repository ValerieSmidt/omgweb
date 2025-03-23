import React from 'react'
import './AboutUs.css'
import aboutUsImage from '../../assets/AboutUs.png'

export const AboutUs = () => {
  return (
    <div className='about-us-section'>
      <div className='container'>
        <div className='about-us-content'>
          <div className='about-us-text'>
            <h2>About Us</h2>
            <p>
              Hi! We at OsloMet Gaming are, simply put, a bunch of people who like games, 
              and who wish to have a social space where we can all gather games. We welcome 
              everyone, regardless of prior gaming experience and level of interest.
            </p>
            <p>
              We play video games, board games, card games and TTRPGs (TableTop Role-Playing Games, 
              like Dungeons & Dragons). We have a large collection of board games, consoles 
              and VR-equipment that we bring to our events, and as a member you will have access 
              to all of this during events.
            </p>
            <p>
              Every month we host 3 events. Unless otherwise specified, all events start at 5 PM. 
              All our events are fully alcohol and drug free.
            </p>
          </div>
          <div className='about-us-image'>
            <img src={aboutUsImage} alt="OsloMet Gaming group" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs