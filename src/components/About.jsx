import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

const About = () => {
  return (
    <div
      id="about"
      className="about container-wrapper relative flex justify-center items-center"
    >
      <div className="absolute top-0 right-4 about-image">
        <img src={about1} alt="about" className="h-screen w-auto" />
      </div>
      <div className="about-container flex justify-center items-center gap-6">
        <div className="about-container-image">
          <img src={about2} alt="about" />
        </div>
        <div className="about-container-content">
          <h2 className="text-4xl">Medusa</h2>
          <h4 className="text-xl">- The Queen of Meme -</h4>
          <p className="mt-6">
            The Gorgon snake empress that brings with her the raging destruction
            from Greek mythology. The Medusa - a unique symbol - can petrify
            people with a look. Submit to her and helps $MEDUSA to spread her
            power over the ERC20 crypto world.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
