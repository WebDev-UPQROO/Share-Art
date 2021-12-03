import axios from "axios";
import { toast } from "react-toastify";
import API from "../../services/constants";
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

export const profilePostsHandleCreate = (formData) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    await axios.post(API.base + API.postPost, formData);
    toast.success("Pubicación creada");
  } catch ({ message }) {
    dispatch(postsFailure(message));
  }
  dispatch(postsResetError());
};

export const profilePostsHandleEdit = (formData) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await axios.put(API.base + API.editPost, formData);
    dispatch(postsEdit(data.data));
    toast.success("Publicación actualizada");
  } catch ({ message }) {
    dispatch(postsFailure(message));
  }
  dispatch(postsResetError());
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

export const postsEdit = (post) => {
  return {
    type: postsActions.edit,
    payload: post,
  };
};

export const postsLoading = () => ({
  type: postsActions.loading,
});

export const postsFailure = (error) => ({
  type: postsActions.failure,
  payload: error,
});

export const postsResetError = () => ({
  type: postsActions.resetError,
});
