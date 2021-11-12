import { getPosts } from "../../services/postsServices";
import { postsActions } from "./postsReducer";

export const postsHandleGet = (uid, history) => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const data = await getPosts(uid);
    console.log(data);
    dispatch(postsGet(data.data));
  } catch ({ message }) {
    // history.goBack();
    dispatch(postsFailure(message));
  }
};

export const postsGet = (posts) => {
  return {
    type: postsActions.get,
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
