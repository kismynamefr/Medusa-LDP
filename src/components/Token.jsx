import React from 'react'
import token from '../assets/token.png'
import token1 from '../assets/token1.png'
import token2 from '../assets/token2.png'
import token3 from '../assets/token3.png'
import token4 from '../assets/token4.png'

const Token = () => {
  return (
    <div id="tokenomic" className="container-wrapper flex-col token">
      <div className="token-image">
        <img src={token} alt="token" />
        <div className="absolute item --first">
          <img src={token4} alt="token" />
        </div>
        <div className="absolute item --second">
          <img src={token3} alt="token" />
        </div>
        <div className="absolute item --third">
          <img src={token1} alt="token" />
        </div>
        <div className="absolute item --fourth">
          <img src={token2} alt="token" />
        </div>
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
