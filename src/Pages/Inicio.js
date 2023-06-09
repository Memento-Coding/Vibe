import React, { useEffect, useState }  from 'react'
import "../Styles/Inicio.css"
import axios from 'axios'
import { FaHeadphones, FaHeart, FaRegHeart } from 'react-icons/fa'
import { MusicPlayer } from '../Components/MusicPlayer'
import fotoInfo from '../img/info.jpg'


function Inicio() {
  const [song5, setSong5] = useState([]);
  const [song,  setSong] = useState(song5[0]?.file);
  const [img, setImage] = useState(song5[0]?.photo);

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);

  };
  

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
        <div className='mainInicio'>
          <div className='information'>
            <div className='infoImage'>
              <img src={ fotoInfo } alt=''></img>
            </div>
            <div className='title'>
              <h4>Tomorrow's tunes</h4>
            </div>
            <div className='text'>
              Lorem ipsum dolor sit amet, consectur
              adipiscing elit ut aliquam, venenatis <br/>
              64 songs - 16hrs+
            </div>
          </div>
          <div className='audioList'>
            <h2 className='title'>
              Track of the week
            </h2>
            <div className='songsContainer'>
              {song5.map((song) =>(
                <div className='songs' onClick={() => setMainSong(song?.file, song?.photo)}>
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
                          {
                            song?.favorite ?(
                              <i><FaHeart/></i>
                            ) : (
                              <i><FaRegHeart/></i>
                            )
                          }
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            
            
          </div>
          
          <MusicPlayer song={song} img={img}/>
        </div>
  )

}
export { Inicio }