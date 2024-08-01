import React from 'react'
import Jotaro from '../asset/Jotaro.MP4'
import video from '../Component/VideoPlayer.module.css'
const VideoPlayer = () => {
  return (
  
    <video src={Jotaro} autoPlay loop muted />
  
  )
}

export default VideoPlayer
