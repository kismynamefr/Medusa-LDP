import React from 'react'
import load from '../assets/loading.png'

const Loading = () => {
  return (
    <div className="loading fixed inset-0">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative loading-container">
          <img src={load} alt="load" />
          <div className="loading-content text-center">
            <h2 className="text-4xl">Medusa</h2>
            <h4 className="text-xl mt-2">- The Queen of Meme -</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
