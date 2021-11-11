import { getUser } from "../../services/userService";
import { userActions } from "./userReducer";

export const userGetInfo = (userId, history) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const data = await getUser(userId);
    dispatch(userGetInfoSuccess(data.data));
  } catch ({message}) {
    history.goBack();
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

export const userLoading = () => ({
  type: userActions.loading,
});

export const userFailure = (error) => ({
  type: userActions.failure,
  payload: error,
});
