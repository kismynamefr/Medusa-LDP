import React from 'react'
import icon1 from '../assets/menu2.svg'
import icon2 from '../assets/menu1.svg'

const Panigation = () => {
  return (
    <div className="panigation">
      <a data-menuanchor="firstPage" className="active" href="/">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>Home</p>
      </a>
      <a data-menuanchor="secondPage" href="#about">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>About Medusa</p>
      </a>
      <a data-menuanchor="thirdPage" href="#tokenomic">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>Tokenomic</p>
      </a>
      <a data-menuanchor="fourthPage" href="#benefit">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>Benefit</p>
      </a>
      <a data-menuanchor="fifthPage" href="#roadmap">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>Roadmap</p>
      </a>
    </div>
  )
}

export default Panigation
