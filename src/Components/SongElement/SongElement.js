import React from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, Card, InfoText, SongImage, StyledLink } from './styles';

const SongElement = ({ info, alPresionarBoton, textoBoton }) => (
  <Card style={{ 
   
  }}>
    
    <SongImage src={info.strTrackThumb} alt={info.strTrack} />
    
    <StyledLink to={`/song/${info.idTrack}`} >
        Canción: {info.strTrack}
    </StyledLink>
    
    <InfoText><span>Artista:</span> {info.strArtist}</InfoText>
    <InfoText><span>Álbum:</span> {info.strAlbum}</InfoText> 
    
    <ActionButton 
      onClick={() => alPresionarBoton(info)} 
      
    >
      {textoBoton}
    </ActionButton>
  </Card>
);

export default SongElement;
