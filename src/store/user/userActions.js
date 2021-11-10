import axios from "axios";
import { userActions } from "./userReducer";

export const userEditName = (name) => {
  return {
    type: userActions.edit,
    payload: name,
  };
};

export const userGetInfo = (userId) => async (dispatch) => {
  dispatch(userStarted());
  try {
    const data = await axios.get(
      `https://shareart-back.herokuapp.com/shareart/v1/profile/${userId}`
    );
    dispatch(userGetInfoSuccess(data.data));
  } catch (e) {
    dispatch(userFailure(e.message));
  }
};

export const userGetInfoSuccess = (user) => {
  return {
    type: userActions.get,
    payload: user,
  };
};

export const userStarted = () => ({
  type: userActions.loading,
});

export const userFailure = (error) => ({
  type: userActions.failure,
  payload: error,
});
