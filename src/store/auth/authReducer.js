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

    default:
      return state;
  }
};

export const authActions = {
  login: "[auth] login",
  logout: "[auth] logout",
  loading: "[auth] loading",
  failure: "[auth] failure",
};
