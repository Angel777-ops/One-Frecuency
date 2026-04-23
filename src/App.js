import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Library from './Components/Library/Library';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar'; 
import useFetch from './Components/Hooks/useFetch';
import SongDetail from './Components/SongDetail/SongDetail';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import Theme from "./theme";
import { NavContainer, StyledLink } from './AppStyles';
function App() {
  const [busqueda, setBusqueda] = useState({ artista: "", cancion: "" });
  const { songs, isLoading, error } = useFetch(busqueda);

  const [biblioteca, setBiblioteca] = useState([]);

 const manejarBusqueda = (nuevoArtista, nuevaCancion) => {
  setBusqueda({ artista: nuevoArtista, cancion: nuevaCancion });
};

  const agregarABiblioteca = (cancion) => {
    if (!biblioteca.find(c => c.idTrack === cancion.idTrack)) {
      setBiblioteca([...biblioteca, cancion]);
    } else {
      alert("Esta canción ya existe en tu biblioteca");
    }
  };

  const eliminarDeBiblioteca = (cancion) => {
    setBiblioteca(biblioteca.filter(c => c.idTrack !== cancion.idTrack));
  };

  return (
    
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <div className='background-color'>
          <Router>
            <Header />
            <NavContainer >
              <StyledLink to="/">Inicio</StyledLink>
              <StyledLink to="/biblioteca" >
                Biblioteca ({biblioteca.length})
              </StyledLink>
            </NavContainer>

            
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <SearchBar alBuscar={manejarBusqueda} />
                    {isLoading && <p>Cargando canciones...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Home canciones={songs} alAñadir={agregarABiblioteca} />
                  </>
                } 
              />
              <Route 
                path="/biblioteca" 
                element={<Library cancionesGuardadas={biblioteca} alEliminar={eliminarDeBiblioteca} />} 
              />

              <Route path="/song/:id" element={<SongDetail />} /> 
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    
  );
}

export default App;
