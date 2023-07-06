import React from 'react';
import '../Styles/Table.css';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { Delete, Edit, PlayArrow } from '@material-ui/icons';

function Table() {
  const customTheme = createTheme({
    // Configuración del tema personalizado
  });

  const columnas = [
    {
      title: 'Titulo',
      field: 'titulo',
    },
    {
      title: 'Artista',
      field: 'artista',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Acciones',
      render: (rowData) => (
        <>
          <PlayArrow
            onClick={() => handleIconClick(rowData.titulo, 'Play')}
            style={{ cursor: 'pointer' }}
          />
          <Edit
            onClick={() => handleIconClick(rowData.titulo, 'Editar')}
            style={{ cursor: 'pointer' }}
          />
          <Delete
            onClick={() => handleIconClick(rowData.titulo, 'Eliminar')}
            style={{ cursor: 'pointer' }}
          />
        </>
      ),
    },
  ];

  const data = [
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
    { titulo: 'mutter', artista: 'Rammstein', genero: 'Heavy metal' },
  ];

  const tableOptions = {
    paging: false,
    search: false,
    tableLayout: 'fixed',
    headerStyle: {
      backgroundColor: '#0D2B41',
      color: '#ffffff',
      fontFamily: 'Poppins',
      fontSize: '20px',
    },
    cellStyle: {
      backgroundColor: '#101010',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontSize: '14px',
    },
    responsive: 'scroll',
    padding: 'dense',
    toolbar: false,
    
  };

  const handleIconClick = (titulo, accion) => {
    alert(`${accion}: ${titulo}`);
  };

  return (
    <div className="Container-table">
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={customTheme}>
          <MaterialTable
            columns={columnas}
            data={data}
            title="Que canciones te gustan"
            components={{
              Toolbar: () => null, // Oculta la barra de herramientas predeterminada
            }}
            options={tableOptions}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export { Table };
