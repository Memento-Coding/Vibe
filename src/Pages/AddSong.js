import React, { useState, useEffect} from 'react'
import '../Styles/AddSong.css'
import { BiImageAdd } from 'react-icons/bi'
import { BsMusicNote } from 'react-icons/bs'
import axios from 'axios';
import { MusicPlayer } from '../Components/MusicPlayer'


function AddSong() {

  

      const token = localStorage.getItem('token');

      const [selectedSong, setSelectedSong] = useState(null);
      const [selectedFile, setSelectedFile] = useState(null);
      const [image, setImage] = useState("");
      const [song, setSong] = useState("");



      const [name, setName] = useState('');
      const [artist, setArtist] = useState('');
      const [genre, setGenre] = useState([]);
      const [selectedGenre, setSelectedGenre] = useState('');


      useEffect(() => {
        const getGenre = async () => {
          try {
            const response = await axios.get('https://thriving-insect-production.up.railway.app/v1/musicalGenre',{
              headers:{
                'Authorization':`Bearer ${token}`, 
                'Content-Type': 'application/json',
              }
            });
            const dataGenre = response.data.genres;
            setGenre(dataGenre);
          } catch (error) {
            console.error('Error fetching genre', error);
          }
        };
        getGenre();
      }, []);

    
      const handleSongChange = (event) => {
        setSelectedSong(event.target.files[0]);

        setSong(event.target.files[0]);
      }

      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);

        setImage(event.target.files[0]);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handleArtistChange = (event) => {
        setArtist(event.target.value);
      };
    
      const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
      };

      

    const onSubmit = async (data) => {
      data.preventDefault();

      try {
        let formDataSong = new FormData();
        formDataSong.append('song', selectedSong);
        

        const responseFileSong = await fetch('https://thriving-insect-production.up.railway.app/v1/song/file', {
          method: 'POST',
          body: formDataSong
        });
        if (responseFileSong.ok) {
          console.log('La canción se envió correctamente.');
          const dataFileSong = await responseFileSong.json();

          if (selectedSong) {
            const reader = new FileReader();
            reader.onload = function(e) {
              const audio = new Audio();
              audio.src = e.target.result;
              audio.addEventListener('loadedmetadata', async function() {
                const duration = audio.duration;
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);

                const newSong = {
                  name: name,
                  artist: artist,  
                  genre: selectedGenre,
                  duration: `${minutes}:${seconds}`,
                  file: dataFileSong.url
                };
                console.log(JSON.stringify(newSong));
      
                const responseCreateSong = await fetch('https://thriving-insect-production.up.railway.app/v1/song', {
                  method: 'POST',
                  body: JSON.stringify(newSong),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                if (responseCreateSong.ok) {
                  const dataCreateSong = await responseCreateSong.json();
                  console.log('Respuesta de la API de creación de canción:', dataCreateSong);
                  console.log(responseCreateSong.status);
                  console.log('La canción se creó correctamente.');
                  
                  if (selectedFile) {
                  let formDataFile = new FormData();
                  formDataFile.append('file', selectedFile);
                  console.log("ID DCE LA CANCIÓN " + dataCreateSong.newSong._id);
                  const responseFile = await fetch(`https://thriving-insect-production.up.railway.app/v1/image/song/${dataCreateSong.newSong._id}`, {
                    headers:{
                      'Authorization':`Bearer ${token}`,
                      'Access-Control-Allow-Origin': '*'
                    },
                    mode: "cors",
                    method: 'PUT',
                    body: formDataFile,
                  });
      
                  if (responseFile.ok) {
                    console.log('La foto se envió correctamente.');
                    ////Modal de Todo OK
                  }
                }else{
                  ////Modal de Todo OK
                }
                } else {
                  console.error('Error al crear la canción:', responseCreateSong.status);
                }
  
              });
            };
            reader.readAsDataURL(selectedSong);
          }

          

        }
      }catch (error) {
        console.error('Error en la solicitud:', error);
      }
      
          
    };
  

  return (
    <div className='containerForm'>
      <div className='form'>
        <div className='title'><h2>Sube tu canción</h2></div>
         
        <form onSubmit={onSubmit}>
          <div className='insideForm'>
            <div className='formFile'>
              <div className='uploadImage'>
                {image ? (
                  <img src={URL.createObjectURL(image)} alt='' width={'200px'} height={'200px'}/>
                ) : null}
                <input type='file' id='photo' accept='image/jpeg, image/png, image/jpg' onChange={handleFileChange}/>
                <label for='photo'>
                  <i>
                    <BiImageAdd/>
                  </i>&nbsp;
                  Escoger imagen</label>
              </div>
              
              <br />
              <div className='uploadSong'>
                {song ? (
                    <p>{song.name}</p>
                  ) : null}
                <input type='file' id='file' accept='.mp3' onChange={handleSongChange}/>
                <label for='file'>
                  <i>
                    <BsMusicNote/>
                  </i>&nbsp;
                  Escoger Canción</label>
              </div>
              
              <br />
            </div>
            <div className='formText'>
              <div className='nameSong'>
                <label>Nombre</label> <br/>
                <input type='text' value={name} onChange={handleNameChange}/>
              </div>
              <div className='artistSong'>
                <label>Artista</label><br/>
                <input type='text' value={artist} onChange={handleArtistChange}/>
              </div>
              <div className='genreSong'>
                <label>Genero</label><br/>
                <select value={selectedGenre} onChange={handleGenreChange}>
                  <option></option>
                  {genre.map((genreSong) => (
                    <option value={genreSong.name}>{genreSong.name}</option>
                  ))}
                </select>
              </div>
              <input className='botonEnviar' type='submit' value='Agregar'/>
            </div>
          
          </div>
            
        </form>
      </div>
      <MusicPlayer/>
    </div>
    
    
  )
};

export { AddSong }