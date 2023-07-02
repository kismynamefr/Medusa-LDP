import React from 'react'
import medusa from '../assets/video.mp4'
import btn from '../assets/btn-md.png'
import bg from '../assets/1.png'

const Home = () => {
  return (
    <div id="home" className="home relative">
      <video autoPlay loop>
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
