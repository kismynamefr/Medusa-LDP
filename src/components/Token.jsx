import React from 'react'
import token from '../assets/token.png'
import token1 from '../assets/token1.png'
import token2 from '../assets/token2.png'
import token3 from '../assets/token3.png'
import token4 from '../assets/token4.png'
import { motion } from 'framer-motion'

const Token = () => {
  return (
    <div id="tokenomic" className="container-wrapper flex-col token">
      <div className="token-image">
        <motion.img
          src={token}
          alt="token"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            duration: 5,
            delay: 2,
            scale: [1, 2, 2, 1, 1],
          }}
          transition={{ type: 'spring' }}
        />
        <motion.div
          className="absolute item --first"
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          whileInView={{
            opacity: 1,
            duration: 5,
            delay: 0.2,
            scale: [1, 2, 2, 1, 1],
            x: 0,
          }}
          transition={{ type: 'spring' }}
        >
          <img src={token4} alt="token" />
        </motion.div>
        <motion.div
          className="absolute item --second"
          initial={{ opacity: 0, scale: 0.5, x: 200 }}
          whileInView={{
            opacity: 1,
            duration: 5,
            delay: 0.2,
            scale: [1, 2, 2, 1, 1],
            x: 0,
          }}
          transition={{ type: 'spring' }}
        >
          <img src={token3} alt="token" />
        </motion.div>
        <motion.div
          className="absolute item --third"
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
          whileInView={{
            opacity: 1,
            duration: 5,
            delay: 1,
            scale: [1, 2, 2, 1, 1],
            y: 0,
          }}
          transition={{ type: 'spring' }}
        >
          <img src={token1} alt="token" />
        </motion.div>
        <motion.div
          className="absolute item --fourth"
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          whileInView={{
            opacity: 1,
            duration: 5,
            delay: 0.1,
            scale: [1, 2, 2, 1, 1],
            x: 0,
          }}
          transition={{ type: 'spring' }}
        >
          <img src={token2} alt="token" />
        </motion.div>
      </div>
      <div className="token-content flex gap-5 mt-5">
        <h4>
          <span>Token symbol:</span> $MEDUSA
        </h4>
        <h4>
          <span>Total Supply: </span> 100,000,000
        </h4>
      </div>
    </div>
  )
}

export default Token
