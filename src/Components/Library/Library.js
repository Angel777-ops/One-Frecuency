import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import { EmptyMessage, LibraryContainer, TitleLibrary } from './styles';
import { useSelector, useDispatch } from 'react-redux';
// 1. Importa la acción desde el slice
import { removeSong } from '../../redux/librarySlice'; 

const Library = () => {
  // 2. CORRECCIÓN: Accede a state.library.songs
  const cancionesGuardadas = useSelector(state => state.library.songs);
  const dispatch = useDispatch();

  return (
    <LibraryContainer>
      <TitleLibrary>Mi Biblioteca</TitleLibrary>
      {/* 3. Ahora cancionesGuardadas sí es un array y tiene .length */}
      {!cancionesGuardadas || cancionesGuardadas.length === 0 ? (
        <EmptyMessage>Tu biblioteca está vacía.</EmptyMessage>
      ) : (
        cancionesGuardadas.map(c => (
          <ElementoCancion 
            key={c.idTrack} 
            info={c} 
            alPresionarBoton={() => dispatch(removeSong(c.idTrack))} 
            textoBoton="Eliminar" 
          />
        ))
      )}
    </LibraryContainer>
  );
};

export default Library;
