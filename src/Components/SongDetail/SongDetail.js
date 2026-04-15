import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SongDetail = () => {
    const { id } = useParams(); // Obtenemos el ID de la URL
    const [detalle, setDetalle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetalle = async () => {
            try {
                // Usamos el endpoint de track por ID: track.php?h={id}
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track.php?h=${id}`);
                
                if (response.data.track && response.data.track.length > 0) {
                    setDetalle(response.data.track[0]);
                } else {
                    setError("No se encontró información de la canción.");
                }
            } catch (err) {
                setError("Error al conectar con el servidor.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetalle();
    }, [id]);

    if (loading) return <h2 style={{ padding: '20px' }}>Cargando detalles...</h2>;
    if (error) return <p style={{ color: 'red', padding: '20px' }}>{error}</p>;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{detalle?.strTrack}</h1>
            <img src={detalle?.strTrackThumb || 'https://placeholder.com'} alt={detalle.strTrack} style={{ width: '300px', borderRadius: '10px' }} />
            <h3>Artista: {detalle?.strArtist}</h3>
            <p><strong>Álbum:</strong> {detalle.strAlbum}</p>
            <p><strong>Género:</strong> {detalle.strGenre || "No especificado"}</p>
            {detalle.strDescriptionEN && (
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'justify' }}>
                    <p>{detalle.strDescriptionEN}</p>
                </div>
            )}
        </div>
    );
};

export default SongDetail;
