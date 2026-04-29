import React from 'react';
import ElementoCancion from '../SongElement/SongElement';
import { HomeContainer, Title } from './styles';
import { useSelector, useDispatch } from 'react-redux';
// 1. IMPORTANTE: Importa la acción desde el slice de la biblioteca
import { addSong } from '../../redux/librarySlice'; 

const Home = ({ canciones }) => { 
    const dispatch = useDispatch();
    
    // 2. CORRECCIÓN: Accede a state.library.songs (la nueva estructura de Toolkit)
    const biblioteca = useSelector(state => state.library.songs);

    return (
        <HomeContainer>
            <Title>Canciones Disponibles</Title>
            {/* Usamos optional chaining para evitar errores si canciones es null */}
            {canciones?.map(c => {
                // Ahora 'biblioteca' es el array correcto, por lo que .some() funcionará
                const yaEstaAgregada = biblioteca?.some(item => item.idTrack === c.idTrack);

                return (
                    <ElementoCancion
                        key={c.idTrack}
                        info={c}
                        alPresionarBoton={() => dispatch(addSong(c))}
                        estaEnBiblioteca={yaEstaAgregada} 
                        textoBoton="Añadir a Biblioteca"
                    />
                );
            })}
        </HomeContainer>
    );
};

export default Home;
