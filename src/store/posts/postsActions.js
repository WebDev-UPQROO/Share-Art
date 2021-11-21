import { getCommentsPost, getHomePosts, getProfilePosts } from "../../services/postsServices";
import { postsActions } from "./postsReducer";

export const homePostsHandleGet = (uid, history) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getHomePosts(uid);
    dispatch(postsGet(data.data, "home"));
  } catch ({ message }) {
    history.goBack();
    dispatch(postsFailure(message));
  }
};

export const homePostsHandleUpdate = (uid, lastPost, history) => async (dispatch) => {
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
    dispatch(postsGet(data.data, "profile"));
  } catch ({ message }) {
    history.goBack();
    dispatch(postsFailure(message));
  }
};

export const profilePostsHandleUpdate = (uid, lastPost, history) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getProfilePosts(uid, lastPost);
    dispatch(postsUpdate(data.data));
  } catch ({ message }) {
    history.goBack();
    dispatch(postsFailure(message));
  }
};

export const commentsHandleGet = (comments) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getCommentsPost(comments);
    dispatch(commentsGet(data.data));
  } catch ({ message }) {
    dispatch(postsFailure(message));
  }
};

export const commentsHandleUpdate = (comments) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getCommentsPost(comments);
    dispatch(commentsUpdate(data.data));
  } catch ({ message }) {
    dispatch(postsFailure(message));
  }
};

export const postsGet = (posts, section) => {
  return {
    type: postsActions.get,
    payload: {posts, section},
  };
};

export const commentsGet = (posts, section) => {
  return {
    type: postsActions.get,
    payload: {posts, section},
  };
};

export const postsUpdate = (posts) => {
  return {
    type: postsActions.update,
    payload: posts,
  };
};

export const commentsUpdate = (posts) => {
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
