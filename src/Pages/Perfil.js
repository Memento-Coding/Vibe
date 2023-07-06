import React, { useState, useContext } from 'react';
import '../Styles/Perfil.css';
import { Modal, Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import GenerosFavoritosModalContent from '../Components/GenerosFavoritosModalContent';
import { AuthContext } from '../context/AuthContext';

function Perfil() {
  const { decodedToken } = useContext(AuthContext);
  const [favoritos, setFavoritos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);

  console.log(decodedToken);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOptionSelect = (value) => {
    if (favoritos.includes(value)) {
      setFavoritos(favoritos.filter((item) => item !== value));
    } else {
      setFavoritos([...favoritos, value]);
    }
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPhotoURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <div className="Container-perfil">
      <div className="photo" {...getRootProps()}>
        <input {...getInputProps()} />
        {photoURL ? (
          <>
            <img src={photoURL} className="round-image" alt="Perfil" />
            <div className="change-photo-icon">
              <AiOutlineCloudUpload fontSize="large" />
            </div>
          </>
        ) : (
          <div className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <AiOutlineCloudUpload fontSize="large" />
            <div>Arrastra una foto aquí o haz clic para seleccionar una.</div>
          </div>
        )}
      </div>
      <div className="data-user">
        <h1 id="titulo">Perfil</h1>
        <h1 id="name-user">{decodedToken.username}</h1>
        <h1 id="numero-canciones">15 canciones favoritas</h1>
      </div>

      <div className="favorite-song">
        <h1 id="generos">Mis Géneros Favoritos</h1>
        <br />
        {favoritos.length > 0 ? (
          <ul>
            {favoritos.map((genero) => (
              <li key={genero}>{genero}</li>
            ))}
          </ul>
        ) : (
          <Button variant="contained" className="btn-agregar" color="primary" onClick={openModal}>
            Agregar géneros favoritos
          </Button>
        )}
      </div>

      <Modal open={modalOpen} onClose={closeModal}>
        <GenerosFavoritosModalContent
          favoritos={favoritos}
          handleOptionSelect={handleOptionSelect}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}

export { Perfil };