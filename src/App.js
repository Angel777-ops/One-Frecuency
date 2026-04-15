import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Library from './Components/Library/Library';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar'; // Nuevo import
import useFetch from './Components/Hooks/useFetch';
import SongDetail from './Components/SongDetail/SongDetail';
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
    <div className='background-color'>
      <Router>
        <Header />
        <nav style={{ padding: '20px', background: '#222', color: '#fff' }}>
          <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Inicio</Link>
          <Link to="/biblioteca" style={{ color: '#fff' }}>
            Biblioteca ({biblioteca.length})
          </Link>
        </nav>

        {/* Mostramos la barra de búsqueda solo en el Inicio */}
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
  );
}

export default App;
