import React, { useState } from 'react';

const SearchBar = ({ alBuscar }) => {
  const [texto, setTexto] = useState("");

  const manejarEnvio = (e) => {
   e.preventDefault();
  
  if (texto.includes('-')) {
    const [artista, cancion] = texto.split('-').map(str => str.trim());
    alBuscar(artista, cancion);
  } else {
    
    alBuscar(texto.trim(), "");
  }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ padding: '20px', textAlign: 'center' }}>
      <input 
        type="text" 
        placeholder="Busca      (Artista - Canción)" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: '10px', width: '300px', borderRadius: '4px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
