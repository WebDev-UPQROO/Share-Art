const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case commentsActions.get:
      state = {
        ...state,
        comments: [...state.comments, ...payload.comments],
      };
      return state;

    default:
      return state;
  }
};

export const commentsActions = {
  get: "[comments] get",
};

export default commentsReducer;
