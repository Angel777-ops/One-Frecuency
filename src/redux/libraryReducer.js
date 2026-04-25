const initialState = {
  songs: []
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      
      if (state.songs.find(s => s.idTrack === action.payload.idTrack)) {
        return state;
      }
      return {
        ...state,
        songs: [...state.songs, action.payload]
      };

    case 'REMOVE_SONG':
      return {
        ...state,
        songs: state.songs.filter(s => s.idTrack !== action.payload)
      };

    default:
      return state;
  }
};

export default libraryReducer;
