const initialState = {
  loading: false,
  uid:
    localStorage.getItem("uid") === "null" ? null : localStorage.getItem("uid"),
  error: null,
  logged: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.login:
      return {
        ...state,
        uid: payload,
        loading: false,
      };

    case authActions.logout:
      return {
        ...state,
        uid: null,
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
