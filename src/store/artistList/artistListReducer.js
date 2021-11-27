const initialState = {
  loading: true,
  artistList: [],
  error: null,
  followed: false,
};

const artistListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case artistListActions.get:
      state = {
        ...state,
        loading: false,
        artistList: payload,
        error: null,
      };
      return state;

    case artistListActions.follow:
      const artistList = state.artistList.map((artist) => {
        if (artist._id == payload)
          return {
            ...artist,
            follow: true,
          };

        return artist;
      });

      state = {
        ...state,
        artistList,
      };
      return state;

    case artistListActions.unfollow:
      return {
        ...state,
      };

    case artistListActions.loading:
      return {
        ...state,
        loading: true,
      };

    case artistListActions.failure:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default artistListReducer;

export const artistListActions = {
  get: "[artistList] get",
  follow: "[artistList] follow",
  unfollow: "[artistList] unfollow",
  loading: "[artistList] loading",
  failure: "[artistList] failure",
};
