


// Components/Hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (busqueda) => {
    const [moviesState, setMoviesState] = useState({ songs: [], isLoading: false, error: null });

    useEffect(() => {
        
        if (!busqueda?.artista) return;

        const fetchSongs = async () => {
            setMoviesState(prev => ({ ...prev, isLoading: true, error: null }));
            try {
               
                 const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${busqueda.artista}`);
                
               console.log(response.data);
                
                if (response.data.track) {
                    setMoviesState({ songs: response.data.track, isLoading: false, error: null });
                } else {
                    setMoviesState({ songs: [], isLoading: false, error: "¡No se encontró nada con esos datos!. :(" });
                }
                
            } catch (error) {
                setMoviesState({ songs: [], isLoading: false, error: "Error de conexión" });
            }
        };

        fetchSongs();                                                                                                   
    }, [busqueda]); 

    return moviesState;
}

export default useFetch;
