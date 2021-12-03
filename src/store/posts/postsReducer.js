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
        ...state,
        posts: [...payload.posts],
        section: payload.section,
        loading: false,
        error: null,
      };
      return state;

    case postsActions.update:
      state =
        payload.length === 0
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        posts: [...state.posts, ...payload],
        loading: false,
        error: null,
      };
      return state;

    case postsActions.edit:
      state = {
        ...state,
        posts: [
          ...state.posts.map((post) => {
            return post._id == payload._id
              ? { ...payload, description: payload?.post }
              : post;
          }),
        ],
        loading: false,
        error: null,
      };
      return state;

    case postsActions.delete:
      state = {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== payload)],
        loading: false,
        error: null,
      };

      if (state.posts.length == 0)
        state = {
          ...state,
          limit: true,
        };

      return state;

    case postsActions.loading:
      return { ...state, loading: true };

    case postsActions.failure:
      return { ...state, error: payload, loading: false };

    case postsActions.resetError:
      return { ...state, error: null, loading: false };

    default:
      return state;
  }
};

export const postsActions = {
  get: "[posts] get",
  update: "[posts] update",
  edit: "[posts] edit",
  delete: "[posts] delete",
  loading: "[posts] loading",
  failure: "[posts] failure",
  resetError: "[posts] resetError",
};

export default postsReducer;
