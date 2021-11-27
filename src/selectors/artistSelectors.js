export const selectArtist = (id, state) => {
    return state.artistList.find((artist) => artist._id === id);
  };