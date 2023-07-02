import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Benefit from './components/Benefit'
import About from './components/About'
import Loading from './components/Loading'
import Token from './components/Token'
import Roadmap from './components/Roadmap'
import Panigation from './components/Panigation'
import { useScroll, useSpring } from "framer-motion"
import { motion } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return (
    // isLoading ? <Loading setIsLoading={setIsLoading}/> :
    <motion.div className="wrapper" style={{ scaleX }}>
      <Panigation />
      <Header />
      <Home />
      <About />
      <Token />
      <Benefit />
      <Roadmap />
    </motion.div>
  )
}

export default App
