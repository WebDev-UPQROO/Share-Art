export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authActions.login:
      return {
        ...action.payload,
        logged: true,
      };

    case authActions.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

export const authActions = {
  login: "[auth] login",
  logout: "[auth] logout",
};
