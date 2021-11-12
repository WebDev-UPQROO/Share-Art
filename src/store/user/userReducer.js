const initialState = {
  loading: true,
  user: [],
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.get:
      state = {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
      return state;

    case userActions.loading:
      return {
        ...state,
        loading: true,
      };

    case userActions.failure:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;

export const userActions = {
  get: "[user] get",
  edit: "[user] edit",
  loading: "[user] loading",
  failure: "[user] failure",
};
