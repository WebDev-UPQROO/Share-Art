import { getArtistList, getFollowers, getFollowed } from "../../services/userService";
import { artistListActions, artistFollowersActions, artistFollowedActions } from "./artistListReducer";

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

export const artistFollowersHandleGet = (uid, history) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getFollowers(uid);
    dispatch(artistFollowersGetInfoSuccess(data.data));
  } catch ({ message }) {
    history.goBack();
    dispatch(artistListFailure(message));
  }
};

export const artistFollowersHandleUpdate =
  (uid, lastArtist, history) => async (dispatch) => {
    dispatch(artistListLoading());
    try {
      const data = await getFollowers(uid, lastArtist);
      dispatch(artistFollowersUpdateInfoSuccess(data.data));
    } catch ({ message }) {
      history.goBack();
      dispatch(artistListFailure(message));
    }
  };

export const artistFollowedHandleGet = (history) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getFollowed();
    dispatch(artistFollowedGetInfoSuccess(data.data));
  } catch ({ message }) {
    history.goBack();
    dispatch(artistListFailure(message));
  }
};

export const artistFollowedHandleUpdate =
  (uid, lastArtist, history) => async (dispatch) => {
    dispatch(artistListLoading());
    try {
      const data = await getFollowed(uid, lastArtist);
      dispatch(artistFollowersUpdateInfoSuccess(data.data));
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

export const artistFollowersGetInfoSuccess = (artistFollowers) => {
  return {
    type: artistFollowersActions.get,
    payload: artistFollowers,
  };
};

export const artistFollowersUpdateInfoSuccess = (artistFollowers) => {
  return {
    type: artistFollowersActions.update,
    payload: artistFollowers,
  };
};

export const artistFollowedGetInfoSuccess = (artistFollowed) => {
  return {
    type: artistFollowedActions.get,
    payload: artistFollowed,
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
