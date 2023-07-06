import React from 'react'
import { useForm } from 'react-hook-form'
import '../Styles/AddSong.css'

function AddSong() {

  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='containerForm'>
      <div className='form'>
        <h2>Sube tu canción</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='formFile'>

          </div>
          <div className='formText'>
            <div className='nameSong'>
              <label>Nombre</label> <br/> <br/>
              <input type='text' {...register("name", {
                required: true,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Nombre esta vacio</p>}
            </div>
            <div className='artistSong'>
              <label>Artista</label><br/>
              <input type='text' {...register("artist", {
                required: true,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Artista esta vacio</p>}
            </div>
            <div className='genreSong'>
              <label>Genero</label><br/>
              <input type='text' {...register("genre", {
                required: true,
              })}/>
              {errors.name?.type === 'required' && <p>El campo Genero esta vacio</p>}
            </div>
          </div>
          
          <input className='botonEnviar' type='submit' value='Agregar'/>
        </form>
      </div>
    </div>
    
    
  )
}

export { AddSong }