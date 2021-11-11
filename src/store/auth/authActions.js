import { authActions } from "./authReducer";

export const authHandleLogin =
  (email, password, history) => async (dispatch) => {
    dispatch(authLoading());
    try {
      //   const data = await axios.get(API.base + API.getUser + userId);
      dispatch(authLogin("6169a793fc358e71ee5fee8f"));

      const lastPath = localStorage.getItem("lastPath") || "/";
      history.replace(lastPath);
    } catch (e) {
      history.replace("/auth/login");
      dispatch(authFailure(e.message));
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
