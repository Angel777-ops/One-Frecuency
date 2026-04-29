import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// El Thunk asíncrono que reemplaza a tu antiguo useFetch
export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artista, { rejectWithValue }) => {
    try {
      // Usamos encodeURIComponent para que nombres con espacios (ej: "The Weeknd") no rompan la URL
      const url = `https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${artista}`;
      
      const response = await axios.get(url);
      
      // Validamos si la API respondió pero no encontró nada (devuelve track: null)
      if (!response.data.track) {
        return rejectWithValue("¡No se encontró nada con esos datos!. :(");
      }
      
      return response.data.track; // Esto es lo que llegará al 'fulfilled'
    } catch (error) {
      // Capturamos el "Network Error" o cualquier otro fallo
      return rejectWithValue(error.message || "Error de conexión");
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null
  },
  reducers: {
    // Reducer para limpiar la búsqueda si lo necesitas
    resetResults: (state) => {
      state.results = [];
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.error = null;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.results = []; // Limpiamos resultados si hay error
        state.error = action.payload; // Aquí se guarda el mensaje de error
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
