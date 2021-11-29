import { getHomePosts, getProfilePosts } from "../../services/postsServices";
import { postsActions } from "./postsReducer";

export const homePostsHandleGet = (uid, history) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getHomePosts(uid);
    dispatch(postsGet(data.data, "home" + uid));
  } catch ({ message }) {
    history.goBack();
    dispatch(postsFailure(message));
  }
};

export const homePostsHandleUpdate =
  (uid, lastPost, history) => async (dispatch) => {
    dispatch(postsLoading());
    try {
      const data = await getHomePosts(uid, lastPost);
      dispatch(postsUpdate(data.data));
    } catch ({ message }) {
      history.goBack();
      dispatch(postsFailure(message));
    }
  };

export const profilePostsHandleGet = (uid, history) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getProfilePosts(uid);
    dispatch(postsGet(data.data, "profile" + uid));
  } catch ({ message }) {
    history.goBack();
    dispatch(postsFailure(message));
  }
};

export const profilePostsHandleUpdate =
  (uid, lastPost, history) => async (dispatch) => {
    dispatch(postsLoading());
    try {
      const data = await getProfilePosts(uid, lastPost);
      dispatch(postsUpdate(data.data));
    } catch ({ message }) {
      history.goBack();
      dispatch(postsFailure(message));
    }
  };

export const postsGet = (posts, section) => {
  return {
    type: postsActions.get,
    payload: { posts, section },
  };
};

export const postsUpdate = (posts) => {
  return {
    type: postsActions.update,
    payload: posts,
  };
};

export const postsLoading = () => ({
  type: postsActions.loading,
});

export const postsFailure = (error) => ({
  type: postsActions.failure,
  payload: error,
});
