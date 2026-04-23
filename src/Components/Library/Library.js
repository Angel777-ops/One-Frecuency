import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import { EmptyMessage, LibraryContainer, TitleLibrary } from './styles';

const Library = ({ cancionesGuardadas, alEliminar }) => (
  <LibraryContainer style={{ padding: '20px' }}>
    <TitleLibrary>Mi Biblioteca</TitleLibrary>
    {cancionesGuardadas.length === 0 ? (
      <EmptyMessage>Tu biblioteca está vacía.</EmptyMessage>
    ) : (
      cancionesGuardadas?.map(c => (
        <ElementoCancion 
          key={c.id} 
          info={c} 
          alPresionarBoton={alEliminar} 
          textoBoton="Eliminar" 
         
        />
      ))
    )}
  </LibraryContainer>
);

export default Library;