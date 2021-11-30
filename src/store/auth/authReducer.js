const initialState = {
  loading: false,
  user:
    localStorage.getItem("user") === "null"
      ? null
      : JSON.parse(localStorage.getItem("user")),
  error: null,
  logged: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.login:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
      };

    case authActions.logout:
      return {
        ...state,
        user: null,
        loading: false,
      };

    case authActions.changeImage:
      return {
        ...state,
        user: {
          ...state.user,
          photo: payload,
        },
        loading: false,
        error: null,
      };

    case authActions.changeCover:
      return {
        ...state,
        user: {
          ...state.user,
          cover: payload,
        },
        loading: false,
        error: null,
      };

    case authActions.loading:
      return {
        ...state,
        loading: true,
      };

    case authActions.failure:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case authActions.resetError:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const authActions = {
  login: "[auth] login",
  logout: "[auth] logout",
  changeImage: "[auth] changeImage",
  changeCover: "[auth] changeCover",
  loading: "[auth] loading",
  failure: "[auth] failure",
  resetError: "[auth] resetError",
};
