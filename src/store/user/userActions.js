import axios from "axios";
import API from "../../services/constants";
import { userActions } from "./userReducer";

export const userGetInfo = (userId) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const data = await axios.get(API.base + API.getUser + userId);
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
