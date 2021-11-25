import { authActions } from "./authReducer";

export const authHandleLogin =
  (email, password, history) => async (dispatch) => {
    dispatch(authLoading());
    try {
      //   const data = await axios.get(API.base + API.getUser + userId);
      const user = {
        _id: "61993b9f7d23fe6325ca8945",
        categories: [
          {
            tags: [],
            _id: "6169b476fc358e71ee6f30e0",
            name: "Photograpy",
            icon: "camera",
          },
        ],
        name: "Hiram Ordoñez",
        username: "@hiram221",
        email: "hiram@gmail.com",
        __v: 0,
        photo: "https://static.abc.es/media/series/000/003/977/pingu-2.jpg",
        bio: "Diseño Ux/UI",
        age: 20,
      };
      dispatch(authLogin(user));

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
