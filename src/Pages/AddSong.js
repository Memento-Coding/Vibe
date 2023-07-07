import React, { useState } from 'react'
import '../Styles/AddSong.css'


function AddSong() {

  

      const token = localStorage.getItem('token');

      const [selectedSong, setSelectedSong] = useState(null);
      const [selectedFile, setSelectedFile] = useState(null);
      const [name, setName] = useState('');
      const [artist, setArtist] = useState('');
      const [genre, setGenre] = useState('');
    
      const handleSongChange = (event) => {
        setSelectedSong(event.target.files[0]);
      };

      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };

      const handleArtistChange = (event) => {
        setArtist(event.target.value);
      };
    
      const handleGenreChange = (event) => {
        setGenre(event.target.value);
      };



    const onSubmit = async (data) => {
      data.preventDefault();



      try {
        let formDataSong = new FormData();
        formDataSong.append('song', selectedSong);
        let photo = "https://vibe-data-structure.s3.amazonaws.com/photo/Default.png";
        const responseFileSong = await fetch('https://thriving-insect-production.up.railway.app/v1/song/file', {
          method: 'POST',
          body: formDataSong
        });
        if (responseFileSong.ok) {
          console.log(name);
          console.log('La canción se envió correctamente.');
          const dataFileSong = await responseFileSong.json();

          const newSong = {
            name: name,
            artist: artist,  
            genre: genre,
            duration: "2:40",
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

        }
      }catch (error) {
        console.error('Error en la solicitud:', error);
      }

          
    };
  

  return (
    <div className='containerForm'>
      <div className='form'>
        <h2>Sube tu canción</h2>
        <form onSubmit={onSubmit}>
            <div className='formFile'>
              <input type='file' name='photo' onChange={handleFileChange}/>
              <br />
              <input type='file' name='file' onChange={handleSongChange}/>
              <br />
            </div>
          <div className='formText'>
            <div className='nameSong'>
              <label>Nombre</label> <br/> <br/>
              <input type='text' value={name} onChange={handleNameChange}/>
            </div>
            <div className='artistSong'>
              <label>Artista</label><br/>
              <input type='text' value={artist} onChange={handleArtistChange}/>
            </div>
            <div className='genreSong'>
              <label>Genero</label><br/>
              <input type='text' value={genre} onChange={handleGenreChange}/>
            </div>
          </div>
          
          <input className='botonEnviar' type='submit' value='Agregar'/>
        </form>
      </div>
    </div>
    
    
  )
};

export { AddSong }