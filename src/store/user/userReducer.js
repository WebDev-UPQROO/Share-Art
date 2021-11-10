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
  get: "get",
  edit: "edit",
  loading: "loading",
  failure: "failure",
};
