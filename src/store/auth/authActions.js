import { changeCover, changeImage, login } from "../../services/authServices";
import { authActions } from "./authReducer";

export const authHandleLogin =
  (formData, history, handleReset) => async (dispatch) => {
    dispatch(authLoading());
    try {
      const data = await login(formData);
      dispatch(authLogin(data.data.user));

      const lastPath = localStorage.getItem("lastPath") || "/";
      history.replace(lastPath);
    } catch (e) {
      handleReset.resetForm();
      dispatch(authFailure(e.message));
      dispatch(resetError());
    }
  };

export const authHandleLogout = (history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    dispatch(authLogout());
  } catch (e) {
    dispatch(authFailure(e.message));
  }
  history.replace("/auth/login");
};

export const authHandleChangePhoto =
  (formData, loading) => async (dispatch) => {
    dispatch(authLoading());
    try {
      const data = await changeImage(formData);
      dispatch(authChangeImage(data.data.photo));
    } catch (e) {
      dispatch(authFailure(e.message));
    }
    loading(false);
  };

export const authHandleChangeCover =
  (formData, loading) => async (dispatch) => {
    dispatch(authLoading());
    try {
      const data = await changeCover(formData);
      dispatch(authChangeCover(data.data.cover));
    } catch (e) {
      dispatch(authFailure(e.message));
    }
    loading(false);
  };

export const authLogin = (uid) => {
  return {
    type: authActions.login,
    payload: uid,
  };
};

export const authLogout = () => {
  return {
    type: authActions.logout,
  };
};

export const authLoading = () => ({
  type: authActions.loading,
});

export const authChangeImage = (image) => {
  return {
    type: authActions.changeImage,
    payload: image,
  };
};

export const authChangeCover = (image) => {
  return {
    type: authActions.changeCover,
    payload: image,
  };
};

export const authFailure = (error) => ({
  type: authActions.failure,
  payload: error,
});

export const resetError = () => ({
  type: authActions.resetError,
});
