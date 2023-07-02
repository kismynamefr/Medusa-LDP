import React from 'react'
import bg from '../assets/1.png'
import btn from '../assets/btn-md.png'
import medusa from '../assets/video.mp4'

const Home = () => {
  return (
    <div id="home" className="home relative">
      <video autoPlay loop muted>
        <source src={medusa} type="video/mp4" />
      </video>
      <img src={bg} alt="background" />
      <div className="home-btn btn">
        <img src={btn} alt="button" />
      </div>
    </div>
  )
}

export default Home
