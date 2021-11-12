const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postsActions.get:
      state = { ...state, posts: [...state.posts, ...payload], loading: false };
      return state;
      
    case postsActions.update:
      return { ...state, posts: [...state.posts, ...payload], loading: false };

    case postsActions.loading:
      return { ...state, loading: true };

    case postsActions.failure:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export const postsActions = {
  get: "[posts] get",
  update: "[posts] update",
  loading: "[posts] loading",
  failure: "[posts] failure",
};

export default postsReducer;
