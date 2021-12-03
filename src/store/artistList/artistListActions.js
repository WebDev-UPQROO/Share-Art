import { toast } from "react-toastify";
import {
  getArtistList,
  getFollowers,
  getFollowed,
  follow,
} from "../../services/userService";
import {
  artistListActions,
  artistFollowersActions,
  artistFollowedActions,
} from "./artistListReducer";

export const artistListHandleGet =
  (id, idUser, history, service) => async (dispatch) => {
    dispatch(artistListLoading());
    try {
      const data = await service(id, idUser);
      dispatch(artistListGet(data.data));
    } catch ({ message }) {
      history.goBack();
      dispatch(artistListFailure(message));
    }
  };

export const artistListHandleUpdate =
  (id, idUser, lastArtist, history, service) => async (dispatch) => {
    dispatch(artistListLoading());
    try {
      const data = await service(id, idUser, lastArtist);
      dispatch(artistListUpdate(data.data));
    } catch ({ message }) {
      history.goBack();
      dispatch(artistListFailure(message));
    }
  };

export const artistFollowersHandleGet = (id, idUser) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getFollowers(id, idUser);
    dispatch(artistFollowersGet(data.data));
  } catch ({ message }) {
    dispatch(artistListFailure(message));
  }
};

export const artistFollowedHandleGet = (id, idUser) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await getFollowed(id, idUser);
    dispatch(artistFollowedGet(data.data));
  } catch ({ message }) {
    dispatch(artistListFailure(message));
  }
};

export const artistHandleFollow = (idFollower, artist, userFollow) => async (dispatch) => {
  dispatch(artistListLoading());
  try {
    const data = await follow(idFollower, artist._id);
    dispatch(artistListFollow(artist, data.follow, idFollower, userFollow));
    toast.success(
      data.follow ? "Has seguido a alguien" : "Dejaste de seguir a alguien"
    );
  } catch ({ message }) {
    dispatch(artistListFailure(message));
  }
  dispatch(artistListResetError());
};

export const artistListGet = (artistList) => {
  return {
    type: artistListActions.get,
    payload: artistList,
  };
};

export const artistListUpdate = (artistList) => {
  return {
    type: artistListActions.update,
    payload: artistList,
  };
};

export const artistFollowersGet = (artistFollowers) => {
  return {
    type: artistFollowersActions.get,
    payload: artistFollowers,
  };
};

export const artistFollowedGet = (artistFollowed) => {
  return {
    type: artistFollowedActions.get,
    payload: artistFollowed,
  };
};

export const artistListFollow = (artist, follow, idFollower, userFollow) => ({
  type: artistListActions.follow,
  payload: { id: artist._id, artist, follow, authId: idFollower, userId: userFollow },
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

export const artistListResetError = () => ({
  type: artistListActions.resetError,
});
