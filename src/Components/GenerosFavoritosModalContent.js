import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'black',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modalTitle: {
    color: 'white',
  },
  checkbox: {
    color: 'white',
  },
  addButton: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgreen',
    },
  },
  closeButton: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
}));

const options = [
  { label: 'Rock', value: 'Rock' },
  { label: 'Pop', value: 'Pop' },
  { label: 'Jazz', value: 'Jazz' },
  // Agrega más opciones según sea necesario
];

function GenerosFavoritosModalContent({ favoritos, handleOptionSelect, closeModal }) {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <div align="center">
        <h2 className={classes.modalTitle}>Seleccionar géneros favoritos</h2>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                className={classes.checkbox}
                checked={favoritos.includes(option.value)}
                onChange={() => handleOptionSelect(option.value)}
              />
            }
            label={option.label}
          />
        ))}
        <Button className={classes.addButton} onClick={closeModal}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}

export default GenerosFavoritosModalContent;
