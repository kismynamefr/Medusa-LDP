import React, { useRef } from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import { motion } from 'framer-motion'

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
        <motion.div
          className="about-container-image"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            bounce: 0.25,
            restDelta: 10,
            easeInOut: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={about2} alt="about" />
        </motion.div>
        <div className="about-container-content">
          <h2 className="text-4xl">Medusa</h2>
          <h4 className="text-xl">- The Queen of Meme -</h4>
          <motion.p
            className="mt-6"
            animate={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              easeInOut: [0, 0.5, 0.7, 1.01],
              delay: 0.5,
              type: 'spring',
              bounce: 0.25,
              restDelta: 10,
            }}
          >
            The Gorgon snake empress that brings with her the raging destruction
            from Greek mythology. The Medusa - a unique symbol - can petrify
            people with a look. Submit to her and helps $MEDUSA to spread her
            power over the ERC20 crypto world.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
