import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import useFetch from '../Hooks/useFetch';
import { HomeContainer, LoadingMessage, Title } from './styles';

const Home = ({ canciones, alAñadir }) => { 
    
   
    const { movies, isLoading, error } = useFetch();

    
    if (isLoading) {
        return <LoadingMessage >Cargando canciones...</LoadingMessage>;
    }

    
    return (
        <HomeContainer >
            <Title>Canciones Disponibles</Title>
            {canciones?.map(c => (
                <ElementoCancion
                    key={c.idTrack}
                    info={c}
                    alPresionarBoton={alAñadir}
                    textoBoton="Añadir a Biblioteca"
                />
            ))}
        </HomeContainer>
    );
}; 

export default Home;