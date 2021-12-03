import { toast } from "react-toastify";
import { follow, getUser, vote } from "../../services/userService";
import { userActions } from "./userReducer";

export const userGetInfo = (userId, authId, history) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const data = await getUser(userId, authId);
    dispatch(userGetInfoSuccess(data.data));
  } catch ({ message }) {
    history.goBack();
    dispatch(userFailure(message));
  }
};

export const userHandleFollow = (authId, userId) => async (dispatch) => {
  try {
    const data = await follow(authId, userId);
    dispatch(userFollow(data.follow));
    toast.success(
      data.follow ? "Has seguido a alguien" : "Dejaste de seguir a alguien"
    );
  } catch ({ message }) {
    dispatch(userFailure(message));
  }
};

export const userGetInfoSuccess = (user) => {
  return {
    type: userActions.get,
    payload: user,
  };
};

export const userEditName = (name) => {
  return {
    type: userActions.edit,
    payload: name,
  };
};

export const userFollow = (follow) => {
  return {
    type: userActions.follow,
    payload: follow
  };
};

export const userLoading = () => ({
  type: userActions.loading,
});

export const userFailure = (error) => ({
  type: userActions.failure,
  payload: error,
});
