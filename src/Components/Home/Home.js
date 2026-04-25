import React from 'react';
import ElementoCancion from '../SongElement/SongElement';

import { HomeContainer, Title } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';

const Home = ({ canciones }) => { 
    const dispatch = useDispatch();
    // Obtenemos la biblioteca actual de Redux
    const biblioteca = useSelector(state => state.songs);

    return (
        <HomeContainer>
            <Title>Canciones Disponibles</Title>
            {canciones?.map(c => {
                // Verificamos si esta canción específica ya está guardada
                const yaEstaAgregada = biblioteca.some(item => item.idTrack === c.idTrack);

                return (
                    <ElementoCancion
                        key={c.idTrack}
                        info={c}
                        alPresionarBoton={() => dispatch(addSong(c))}
                        // Pasamos el estado como prop
                        estaEnBiblioteca={yaEstaAgregada} 
                        textoBoton="Añadir a Biblioteca"
                    />
                );
            })}
        </HomeContainer>
    );
};

export default Home;