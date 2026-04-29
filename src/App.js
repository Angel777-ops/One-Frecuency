import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Library from './Components/Library/Library';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar'; 
import SongDetail from './Components/SongDetail/SongDetail';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyles";
import Theme from "./theme";
import { NavContainer, StyledLink } from './AppStyles';
import { useSelector } from 'react-redux'; 

function App() {
  // 1. Extraemos el estado de búsqueda desde el slice 'search'
  const { results, loading, error } = useSelector(state => state.search);
  
  // 2. Extraemos la biblioteca desde el slice 'library'
  // Nota: Accedemos a state.library.songs por la estructura del slice
  const biblioteca = useSelector(state => state.library.songs);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <NavContainer>
          <StyledLink to="/">Inicio</StyledLink>
          
          <StyledLink to="/library">
            Mi Biblioteca ({biblioteca.length})
          </StyledLink>
          
          {/* Ya no pasamos manejarBusqueda, el SearchBar es autónomo */}
          <SearchBar />
        </NavContainer>

        {/* 3. Usamos loading y error que vienen de Redux */}
        <div style={{ textAlign: 'center' }}>
            {loading && <h2>Cargando canciones...</h2>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <Routes>
          {/* 4. Pasamos 'results' (de Redux) al componente Home */}
          <Route path="/" element={<Home canciones={results} />} />
          <Route path="/library" element={<Library />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
