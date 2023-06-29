import React, { useState, useRef, useEffect } from 'react'
import "../Styles/MusicPlayer.css"
import {FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepForward} from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs';



function MusicPlayer({ song, imgSrc }) {

  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0)

  const audioPlayer = useRef();
  const progresBar = useRef();

  useEffect(() =>{
    const seconds = audioPlayer.current.duration;
  }, [audioPlayer?.current, audioPlayer?.current?.readyState,])

  const changeLoved = () => {
    setLoved(!isLove);
  
  }

  const changePlayPause = () => {
    const prevValue = isPlaying;
    if(!prevValue){
      audioPlayer.current.play();
    }else{
      audioPlayer.current.pause();
    }
    setPlaying(!prevValue);
  }

  return (
    <div className='musicPlayer'>
      <div className='songImage'>
      </div>
      <div className='songAtributos'>
        <audio src={song} preload='metadata' ref={audioPlayer}/>
        <div className='top'>
          <div className='left'>
            <div className='loved' onClick={changeLoved}>
              {isLove ? (<i><FaHeart/></i>) : (<i><FaRegHeart/></i>)}
            </div>
            <div className='download'>
              <i>
                <BsDownload/>
              </i>
            </div>
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
          <div className='right'>
            <i>
              <FaShareAlt/>
            </i>
          </div>
        </div>
        <div className='bottom'>
          <div className='curretnTime'>00:00</div>
          <input type='range' className='progresBar' ref={progresBar}/>
          <div className='duration'>00:00</div>
        </div>
      </div>
    </div>
  )
}

export { MusicPlayer }