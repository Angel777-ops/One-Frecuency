import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import { EmptyMessage, LibraryContainer, TitleLibrary } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';

const Library = () => {
  const cancionesGuardadas = useSelector(state => state.songs);
  const dispatch = useDispatch();

  return (
    <LibraryContainer>
      <TitleLibrary>Mi Biblioteca</TitleLibrary>
      {cancionesGuardadas.length === 0 ? (
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