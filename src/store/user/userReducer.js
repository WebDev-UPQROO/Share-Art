const initialState = {
  loading: false,
  user: [],
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.get:
      state = {
        ...state,
        user: payload,
        loading: false
      };
      return state;

    case userActions.edit:
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
