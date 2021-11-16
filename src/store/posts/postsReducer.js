const initialState = {
  loading: false,
  section: null,
  posts: [],
  limit: false,
  error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postsActions.get:
      state =
        payload.posts.length === 0
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        posts: [...payload.posts],
        section: payload.section,
        loading: false,
        error: null
      };
      return state;

    case postsActions.update:
      if (payload.length === 0)
        state = {
          ...state,
          limit: true,
        };

      state = {
        ...state,
        posts: [...state.posts, ...payload],
        loading: false,
        error: null
      };
      return state;

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
