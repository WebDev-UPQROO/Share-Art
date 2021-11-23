import { getComments } from "../../services/postsServices";
import { commentsActions } from "./commentsReducer";

export const commentsHandleGet = (comments) => async (dispatch) => {
    try {
      const data = await getComments(comments);
      dispatch(commentsGet(data.data));
    } catch ({ message }) {
    }
  };

  export const commentsGet = (comments, postId) => {
    return {
      type: commentsActions.get,
      payload: {comments, postId},
    };
  };