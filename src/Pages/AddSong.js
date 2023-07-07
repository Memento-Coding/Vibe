import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../Styles/AddSong.css'
import axios from 'axios';

function AddSong() {

  


  const { register, formState: {errors}, handleSubmit } = useForm();


      const [selectedSong, setSelectedSong] = useState(null);
      const [selectedFile, setSelectedFile] = useState(null);
    
      const handleSongChange = (event) => {
        setSelectedSong(event.target.files[0]);
      };

      const handleFileChange = (event2) => {
        setSelectedFile(event2.target.files[0]);
      };



    const onSubmit = async (data) => {
      data.preventDefault();
      
      try {
        const formSong = new FormData();
        formSong.append('song', selectedSong);

        const formFile = new FormData();
        formFile.append('file', selectedFile);

        
  
        const response1 = await fetch('https://thriving-insect-production.up.railway.app/v1/song/file', {
          method: 'POST',
          body: formSong,
        });

        const datosSong = await response1.json()
  
        if (response1.ok) {
          console.log('Respuesta de la API:', data);
          console.log(response1.status);
          console.log('El archivo se envió correctamente.');

          let datosFile = null;

          if(response1.ok){
            const response2 = await fetch('https://thriving-insect-production.up.railway.app/v1/image/song/648bfe62ac46362ba1421cea', {
              method: 'POST',
              body: formFile,
            });
            if (response2.ok){
              datosFile = await response2.json();
            }else{
              console.error('Error en la segunda petición a la API');
            }
          }

          const formData = new FormData();
          formData.append("name", data.name);
          formData.append('artist', data.artist);
          formData.append('genre', data.genre);
          formData.append('image', datosFile);
          formData.append('file', datosSong);


          const response3 = await fetch('',{
            method: 'POST',
            body: formData,
          });

          if (response3.ok){
            console.log('Respuesta de la API:', data);
            console.log(response3.status);
          }else {
            console.error('Error al enviar el archivo.');
          }

        } else {
          console.error('Error al enviar el archivo.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
  

  return (
    <div className='containerForm'>
      <div className='form'>
        <h2>Sube tu canción</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='formFile'>
              <input type='file' name='photo' onChange={handleFileChange}/>
              <br />
              <input type='file' name='file' onChange={handleSongChange}/>
              <br />
            </div>
          <div className='formText'>
            <div className='nameSong'>
              <label>Nombre</label> <br/> <br/>
              <input type='text' {...register("name", {
                required: false,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Nombre esta vacio</p>}
            </div>
            <div className='artistSong'>
              <label>Artista</label><br/>
              <input type='text' {...register("artist", {
                required: false,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Artista esta vacio</p>}
            </div>
            <div className='genreSong'>
              <label>Genero</label><br/>
              <input type='text' {...register("genre", {
                required: false,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Genero esta vacio</p>}
            </div>
          </div>
          
          <input className='botonEnviar' type='submit' value='Agregar'/>
        </form>
      </div>
    </div>
    
    
  )
};

export { AddSong }