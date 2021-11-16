import { getArtistList } from "../../services/userService";
import { artistListActions  } from "./artistListReducer";

export const ArtistListHandleGet = (history) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getArtistList();
    dispatch(artistListGetInfoSuccess(data.data));
    console.log(data.data);
  } catch ({message}) {
    history.goBack();
    dispatch(artistListFailure(message));
  }
};

export const artistListGetInfoSuccess = (artistList) => {
  return {
    type: artistListActions.get,
    payload: artistList,
  };
};

export const artistListLoading = () => ({
  type: artistListActions.loading,
});

export const artistListFailure = (error) => ({
  type: artistListActions.failure,
  payload: error,
});
