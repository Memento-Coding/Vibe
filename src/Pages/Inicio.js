import React, { useEffect, useState }  from 'react'
import "../Styles/Inicio.css"
import { LeftMenu } from "../Components/LeftMenu"
import { Header } from "../Components/HeaderBar"
import { MusicPlayer } from '../Components/MusicPlayer'
import axios from 'axios'
import { FaHeadphones, FaHeart, FaRegHeart } from 'react-icons/fa'

function Inicio() {
  const [song5, setSong5] = useState([]);
  
    useEffect(() => {
      const getSong5 = async () => {
        try {
        const response = await axios.get('https://thriving-insect-production.up.railway.app/v1/song?count=5');
        const data = response.data;
        setSong5(data);
        } catch (error) {
          console.error('Error fetching songs', error);
        }
      };
      getSong5();
    },[]);
    
    
    

  return (
    <div className='contenedor'>
      <LeftMenu />
      <Header />
      <div className='inicio' id='background'>
        <div className='mainInicio'>
          <div className='audioList'>
            <h2 className='title'>
              Track of the week
            </h2>
            <div className='songsContainer'>
              {song5.map((song) =>(
                <div className='songs'>
                  <div className='song'>
                    <div className='imgBox'>
                      <img src={song?.photo} alt={song?.name}></img>
                    </div>
                    <div className='section'>
                      <p className='songName'>
                        {song?.name}
                        <span className='spanArtist'>{song.artist}</span>
                      </p>

                      <div className='hits'>
                        <p className='hit'>
                          <i><FaHeadphones/></i>
                          311k
                        </p>
                        <div className='favorite'>
                          <i><FaHeart/></i>
                          <i><FaRegHeart/></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            
            
          </div>
        </div>
      </div>
      <MusicPlayer/>
    </div>
    
  )

}
export { Inicio }