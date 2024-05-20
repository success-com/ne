import audioBg from "../bgsong.m4a"
import React, { useRef, useEffect, useState } from 'react';

const Footer = () => {
  
  const audioRef = useRef(null)
  
  const audioPlay = () => {
    const audio = audioRef.current;
    if(audio) {
      audio.muted = false
      audio.play()
    }
  }
  const audioStop = () => {
    const audio = audioRef.current;
    if(audio) {
      audio.muted = true
      audio.pause()
    }
  }
  
  return (
  <footer className="footer">
    <audio loop ref={audioRef} src={audioBg}></audio>
  <div className="control-btn-container">
    
    <div className="song-control">
      <p onClick={audioPlay}>PLAY THE SONG</p>
      <p onClick={audioStop}>STOP THE SONG</p>
     </div>
  
    </div>
    
    </footer>
    )
}

export default Footer