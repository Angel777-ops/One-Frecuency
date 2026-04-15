import React from 'react';
import ElementoCancion from '../SongElement/SongElement';

const Library = ({ cancionesGuardadas, alEliminar }) => (
  <div style={{ padding: '20px' }}>
    <h2>Mi Biblioteca</h2>
    {cancionesGuardadas.length === 0 ? (
      <p>Tu biblioteca está vacía.</p>
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
  </div>
);

export default Library;