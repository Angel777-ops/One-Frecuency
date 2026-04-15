import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import useFetch from '../Hooks/useFetch';

const Home = ({ canciones, alAñadir }) => { 
    
   
    const { movies, isLoading, error } = useFetch();

    
    if (isLoading) {
        return <h2 style={{ padding: '20px' }}>Cargando canciones...</h2>;
    }

    
    return (
        <div style={{ padding: '20px' }}>
            <h2>Canciones Disponibles</h2>
            {canciones?.map(c => (
                <ElementoCancion
                    key={c.idTrack}
                    info={c}
                    alPresionarBoton={alAñadir}
                    textoBoton="Añadir a Biblioteca"
                />
            ))}
        </div>
    );
}; 

export default Home;