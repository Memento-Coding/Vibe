import React, { useState } from 'react'
import "../Styles/MusicPlayer.css"
import {FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaStepForward} from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'


function MusicPlayer({ song, imgSrc }) {

  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const changeLoved = () => {
    setLoved(!isLove);
  }

  const changePlayPause = () => {
    setPlaying(!isPlaying);
  }

  return (
    <div className='musicPlayer'>
      <div className='songImage'></div>
      <div className='songAtributos'>
        <audio src={song} preload='metadata'/>
        <div className='top'>
          <div className='left'>
            <div className='loved' onClick={changeLoved}>
              {isLove ? (<i><FaHeart/></i>) : (<i><FaRegHeart/></i>)}
            </div>
            <div className='download'><i><BsDownload/></i></div>
          </div>
          <div className='middle'>
            <div className='back'>
              <i><FaStepForward/></i>
              <i><FaBackward/></i>
            </div>
            <div className='plplayPause' onClick={changePlayPause}>
              {isPlaying ? (<i><FaPause/></i>) : (<i><FaPlay/></i>)}
            </div>
            <div className='forward'>
              <i><FaForward/></i>
              <i><FaStepForward/></i>
            </div>
          </div>
          <div className='right'></div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  )
}

export { MusicPlayer }