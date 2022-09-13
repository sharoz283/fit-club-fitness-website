import React from 'react'
import heart from '../assets/heart.png'
export default function HeartBeat() {
  return (
    <div>
      <div className="heartbeat">
        <img src={heart} alt="heart" />
        <h3  className='heartbeat-text'>heart rate</h3>
        <h4 className='heartbeat-speed'>116 bpm</h4>
      </div>
    </div>
  )
}
