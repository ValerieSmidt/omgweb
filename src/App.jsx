import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Events from './components/Events/Events'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App