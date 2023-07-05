import React, { useEffect, useState } from 'react';
import "../Styles/Inicio.css";
import axios from 'axios';
import { FaHeadphones, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MusicPlayer } from '../Components/MusicPlayer';
import fotoInfo from '../img/info.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Inicio() {
  const [song5, setSong5] = useState([]);
  const [song, setSong] = useState(song5[0]?.file);
  const [img, setImage] = useState(song5[0]?.photo);

  const [song6, setSong6] = useState([]);

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  };

  useEffect(() => {
    const getSong6 = async () => {
      try {
        const response = await axios.get('https://thriving-insect-production.up.railway.app/v1/song?count=6');
        const data6 = response.data;
        setSong6(data6);
      } catch (error) {
        console.error('Error fetching songs', error);
      }
    };
    getSong6();
  }, []);

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
  }, []);

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 3, // Número de elementos visibles en cada slide
    slidesToScroll: 1
  };

  return (
    <div className='mainInicio'>
      <div className='slider'>
        <Slider {...sliderSettings}>
          {song5.map((song) => (
            <div key={song.id} className='songs2' onClick={() => setMainSong(song?.file, song?.photo)}>
              <div className='song2'>
              <div className='imgBox2'>
                <img src={song?.photo} alt={song?.name} />
              </div>
              <div className='section2'>
                <p>{song?.name}<br/>{song.artist}</p>
                <i>
                  <BsPlayCircleFill/>
                </i>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='information'>
        <div className='infoImage'>
          <img src={fotoInfo} alt='' />
        </div>
        <div className='title'>
          <h4>Tomorrow's tunes</h4>
        </div>
        <div className='text'>
          Lorem ipsum dolor sit amet, consectur adipiscing elit ut aliquam, venenatis <br />
          64 songs - 16hrs+
        </div>
      </div>

      <div className='audioList'>
        <h2 className='title'>Track of the week</h2>
        <div className='songsContainer'>
          {song5.map((song) => (
            <div key={song.id} className='songs' onClick={() => setMainSong(song?.file, song?.photo)}>
              <div className='song'>
                <div className='imgBox'>
                  <img src={song?.photo} alt={song?.name} />
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

      <div className='songCard'>
        {song6.map((song) => (
          <div key={song.id} className='songs' onClick={() => setMainSong(song?.file, song?.photo)}>
            <div className='song'>
              <div className='imgBox'>
                <img src={song?.photo} alt={song?.name} />
              </div>
              <div className='section'>
                <p>{song?.name}<br/>{song.artist}</p>
                <i>
                  <BsPlayCircleFill/>
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MusicPlayer song={song} img={img}/>
    </div>
  );
}

export { Inicio };
