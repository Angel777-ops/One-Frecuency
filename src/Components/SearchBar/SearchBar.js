import React, { useState } from 'react';
import { FormContainer, SearchButton, StyledInput } from './styles';

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
    <FormContainer onSubmit={manejarEnvio} >
      <StyledInput 
        type="text" 
        placeholder="Busca      (Artista - Canción)" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: '10px', width: '300px', borderRadius: '4px' }}
      />
      <SearchButton type="submit" >
        Buscar
      </SearchButton>
    </FormContainer>
  );
};

export default SearchBar;
