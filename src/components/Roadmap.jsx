import React from 'react'
import roadmap from '../assets/roadmap.png'

const Roadmap = () => {
  return (
    <div id="roadmap" className="container-wrapper roadmap flex-col">
      <div className="title --roadmap">Roadmap</div>
      <div className="mt-8 roadmap-image">
        <img src={roadmap} alt="roadmap" />
      </div>
    </div>
  )
}

export default Roadmap
