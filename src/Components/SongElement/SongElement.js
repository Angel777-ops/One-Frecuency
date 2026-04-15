import React from 'react';
import { Link } from 'react-router-dom';

const SongElement = ({ info, alPresionarBoton, textoBoton }) => (
  <div style={{ 
    border: "1px solid", 
    margin: '10px 0', 
    padding: '15px',
    borderRadius: '8px' 
  }}>
    {/* Línea corregida aquí abajo */}
    <img src={info.strTrackThumb} alt={info.strTrack} width="150" />
    
    <Link to={`/song/${info.idTrack}`} style={{ display: 'block', fontSize: '1.2em', fontWeight: 'bold', margin: '10px 0' }}>
        Canción: {info.strTrack}
    </Link>
    
    <p>Artista: {info.strArtist}</p>
    <p>Álbum: {info.strAlbum}</p> 
    
    <button 
      onClick={() => alPresionarBoton(info)} 
      style={{ marginTop: '10px', cursor: 'pointer', marginRight: '10px' }}
    >
      {textoBoton}
    </button>
  </div>
);

export default SongElement;
