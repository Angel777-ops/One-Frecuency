import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../../redux/searchSlice';
 
import { FormContainer, SearchButton, StyledInput } from './styles';

const SearchBar = () => {
  const [texto, setTexto] = useState("");
  const dispatch = useDispatch();

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    if (texto.trim() === "") return;

    // Si el usuario escribe "Artista - Cancion", extraemos el artista
    // Nota: La API actual de fetchSongs busca por artista.
    let artistaBusqueda = texto;
    
    if (texto.includes('-')) {
      const [artista] = texto.split('-').map(str => str.trim());
      artistaBusqueda = artista;
    }

    // Despachamos la acción asíncrona de Redux Toolkit
    dispatch(fetchSongs(artistaBusqueda.trim()));
    
    // Opcional: limpiar el input después de buscar
    // setTexto(""); 
  };

  return (
    <FormContainer onSubmit={manejarEnvio}>
      <StyledInput 
        type="text" 
        placeholder="Busca un Artista" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <SearchButton type="submit">
        Buscar
      </SearchButton>
    </FormContainer>
  );
};

export default SearchBar;
