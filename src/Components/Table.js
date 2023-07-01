import React from 'react'
import '../Styles/Table.css'
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import Delete from '@material-ui/icons/Delete';
import { Edit} from '@material-ui/icons';
import { PlayArrow } from '@material-ui/icons';



function Table() {
  
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#0D2B41', // Cambia el color 
        backgroundColor: "#0D2B41"
      },
    },
    typography: {
      fontFamily: 'Poppins', // Cambia el tipo de letra predeterminado
      fontSize: 16, // Cambia el tamaño de fuente predeterminado
      
    },
  });

  const columnas = [
    {
        title:"Titulo",
        field:"titulo"
    },
    {
        title:"Artista",
        field:"artista"
    },
    {
        title:"Genero",
        field:"genero"
    },

  ];

  const data = [
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    {titulo:"mutter", artista:"Rammstein", genero:"Heavy metal"},
    
  ];

  const tableOptions = {
    headerStyle: {
      backgroundColor: '#F2F2F2',
    },
  };


  return (
    <div className='Container-table'>
        <div style={{ width: '100%' }}>
           <ThemeProvider theme={customTheme}>
                <MaterialTable
                  columns={columnas}
                  data={data}
                  title={"Que canciones te gustan"}
                  actions={[
                    {
                      icon:PlayArrow,
                      tooltip: "Escuchar cancion",
                      onClick: (event, rowData)=>{
                        alert("Play")
                      }
                      
                    },
                    {
                      icon:Edit,
                      tooltip: "Editar cancion",
                      onClick: (event, rowData)=>{
                        alert("Editar")
                      }
                      
                    },
                    {
                      icon:Delete,
                      tooltip: "Eliminar cancion",
                      onClick: (event, rowData)=>alert("Eliminar")
                      
                      
                    },

                  ]}
                  components={{
                    Toolbar: () => null, // Oculta la barra de herramientas predeterminada
                  }}
                  options={{
                    paging: false,
                    search:false,
                    TablePagination: false,
                    headerStyle: {
                        backgroundColor: '#0D2B41',
                        color:"white",
                        fontFamily: 'Poppins', // Cambia el tipo de letra aquí
                        fontSize: '20px', // Cambia el tamaño de la fuente aquí
                      },
                    cellStyle: {
                        backgroundColor: '#0D2B41',
                        color:"white",
                        fontFamily: 'Arial', // Cambia el tipo de letra aquí
                        fontSize: '14px', // Cambia el tamaño de la fuente aquí
                  
                      },
                    
                      
              
                    
                    
                  }}
                />
            </ThemeProvider>
        </div>
        
    </div>
  );
}

export { Table };