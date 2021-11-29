import { login } from "../../services/authServices";
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

export const authFailure = (error) => ({
  type: authActions.failure,
  payload: error,
});

export const resetError = () => ({
  type: authActions.resetError,
});
