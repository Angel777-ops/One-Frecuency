import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
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
import { useSelector } from 'react-redux'; 

function App() {
  const [busqueda, setBusqueda] = useState({ artista: "", cancion: "" });
  

   const { songs, isLoading, error } = useFetch(busqueda);
  
  // 2. Obtén la lista de canciones desde el estado global de Redux
  const biblioteca = useSelector(state => state.songs);
   
  const manejarBusqueda = (nuevoArtista, nuevaCancion) => {
  setBusqueda({ artista: nuevoArtista, cancion: nuevaCancion });
};
  
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <NavContainer>
          <StyledLink to="/">Inicio</StyledLink>
          
          {/* 3. Usa biblioteca.length para mostrar el contador actualizado */}
          <StyledLink to="/library">
            Mi Biblioteca ({biblioteca.length})
          </StyledLink>
          
          <SearchBar alBuscar={manejarBusqueda} />
        </NavContainer>

          {/* estado de carga y error*/}
        <div style={{ textAlign: 'center' }}>
            {isLoading && <h2>Cargando canciones...</h2>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <Routes>
          <Route path="/" element={<Home canciones={songs} />} />
          <Route path="/library" element={<Library />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
