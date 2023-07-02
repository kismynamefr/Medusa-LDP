import React from 'react'
import load from '../assets/loading.png'
import btn from '../assets/btn-md.png'

const Loading = ({ setIsLoading }) => {
  return (
    <div className="loading fixed inset-0">
      <div className="flex justify-center items-center flex-col w-full h-full">
        <div className="relative loading-container">
          <img src={load} alt="load" />
          <div className="loading-content text-center">
            <h2 className="text-4xl">Medusa</h2>
            <h4 className="text-xl mt-2">- The Queen of Meme -</h4>
          </div>
        </div>
        <div className="mt-5 w-52 btn" onClick={() => setIsLoading(false)}>
          <img src={btn} alt="btn" />
        </div>
      </div>
    </div>
  )
}

export default Loading
