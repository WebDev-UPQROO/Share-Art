import { getArtistList } from "../../services/userService";
import { artistListActions } from "./artistListReducer";

export const artistListHandleGet = (history) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getArtistList();
    dispatch(artistListGetInfoSuccess(data.data));
  } catch ({ message }) {
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

export const artistListFollow = (id) => ({
  type: artistListActions.follow,
  payload: id,
});

export const artistListUnfollow = (id) => ({
  type: artistListActions.unfollow,
  payload: id,
});

export const artistListLoading = () => ({
  type: artistListActions.loading,
});

export const artistListFailure = (error) => ({
  type: artistListActions.failure,
  payload: error,
});
