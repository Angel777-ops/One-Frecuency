import React from 'react';

import { ActionButton, Card, InfoText, SongImage, StyledLink } from './styles';

const SongElement = ({ info, alPresionarBoton, textoBoton, estaEnBiblioteca }) => (
  <Card $estaEnBiblioteca={estaEnBiblioteca}>
    <SongImage src={info.strTrackThumb} alt={info.strTrack} />
    
    <StyledLink to={`/song/${info.idTrack}`} >
        Canción: {info.strTrack}
    </StyledLink>
    
    <InfoText><span>Artista:</span> {info.strArtist}</InfoText>
    <InfoText><span>Álbum:</span> {info.strAlbum}</InfoText> 
    
    {/* Cambiamos el comportamiento según 'estaEnBiblioteca' */}
    <ActionButton 
      onClick={() => !estaEnBiblioteca && alPresionarBoton(info)} 
      disabled={estaEnBiblioteca}
      style={{ 
        backgroundColor: estaEnBiblioteca ? '#ccc' : '', 
        cursor: estaEnBiblioteca ? 'not-allowed' : 'pointer' 
      }}
    >
      {estaEnBiblioteca ? "Canción Añadida" : textoBoton}
    </ActionButton>
  </Card>
);

export default SongElement;
