import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import '../Styles/AddSong.css'
import axios from 'axios';

function AddSong() {

  


  const { register, formState: {errors}, handleSubmit } = useForm();


      const [selectedSong, setSelectedSong] = useState(null);
    
      const handleSongChange = (event) => {
        setSelectedSong(event.target.files[0]);
      };
  /*const onSubmit  = async (data) => {
    const formData = new FormData();
    const formData2 = new FormData();
    const photoFile = fileInputRef1.current?.files?.[0] || null;
    const fileFile = fileInputRef2.current?.files?.[0] || null;

    
    formData.append('file', photoFile);
    formData2.append('song', fileFile);

    console.log(data);
    /*try {
      const response = await fetch('https://thriving-insect-production.up.railway.app/v1/image/song/648bfe62ac46362ba1421cea', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Maneja la respuesta del servidor
      console.log(response.data);
    } catch (error) {
      // Maneja los errores
      console.error(error);
    }*/

    const onSubmit = async (data) => {
      data.preventDefault();
      
      try {
        const formData = new FormData();
        formData.append('song', selectedSong);
  
        const response = await fetch('https://thriving-insect-production.up.railway.app/v1/song/file', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Respuesta de la API:', data);
          console.log(response.status);
          console.log('El archivo se envió correctamente.');
        } else {
          console.error('Error al enviar el archivo.');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    /*try {
      const response = await fetch('https://thriving-insect-production.up.railway.app/v1/song/file', {
        method: 'POST',
        body: formData2,
      });
      // Maneja la respuesta del servidor
      console.log(response.data);
    } catch (error) {
      // Maneja los errores
      console.error(error);
    }*/
  

  return (
    <div className='containerForm'>
      <div className='form'>
        <h2>Sube tu canción</h2>
        <form onSubmit={onSubmit}>
            <div className='formFile'>
              <input type='file' name='photo' onChange={handleSongChange}/>
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