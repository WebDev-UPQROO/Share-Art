import { toast } from "react-toastify";
import {
  changeCover,
  changeImage,
  changePassword,
  changePersonalInfo,
  changeProfileInfo,
  login,
} from "../../services/authServices";
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
      toast.success("Foto actualizada exitosamente");
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
      toast.success("Portada actualizada exitosamente");
    } catch (e) {
      dispatch(authFailure(e.message));
    }
    loading(false);
  };

export const authHandleChangeProfileInfo = (formData) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const data = await changeProfileInfo(formData);
    dispatch(authChangeProfileInfo(data.data));
    toast.success("Datos actualizados exitosamente");
  } catch (e) {
    dispatch(authFailure(e.message));
  }
};

export const authHandleChangePersonalInfo = (formData) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const data = await changePersonalInfo(formData);
    dispatch(authChangePersonalInfo(data.data));
    toast.success("Datos actualizados exitosamente");
  } catch (e) {
    dispatch(authFailure(e.message));
  }
};

export const authHandleChangePassword =
  (formData, resetForm) => async (dispatch) => {
    dispatch(authLoading());
    try {
      console.log(formData);
      await changePassword(formData);
      toast.success("Datos actualizados exitosamente");
    } catch (e) {
      dispatch(authFailure(e.message));
    }
    dispatch(resetError());
    resetForm();
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

export const authChangeProfileInfo = (data) => {
  console.log(data);
  return {
    type: authActions.changeProfileInfo,
    payload: data,
  };
};

export const authChangePersonalInfo = (data) => {
  console.log(data);
  return {
    type: authActions.changePersonalInfo,
    payload: data,
  };
};

export const authFailure = (error) => ({
  type: authActions.failure,
  payload: error,
});

export const resetError = () => ({
  type: authActions.resetError,
});
