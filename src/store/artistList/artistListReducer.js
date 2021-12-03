const initialState = {
  loading: true,
  artistList: null,
  artistFollowers: null,
  artistFollowed: null,
  limit: false,
  error: null,
};

const changeFollow = (list, id, follow) =>
  list?.map((artist) => {
    if (artist._id === id)
      return {
        ...artist,
        follow,
      };

    return artist;
  });

const artistListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //ListFollowersArtist Get
    case artistFollowersActions.get:
      state =
        payload.length < 10
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        loading: false,
        artistFollowers: payload,
        error: null,
      };
      return state;

    //ListFollowedArtist Get
    case artistFollowedActions.get:
      state =
        payload.length < 10
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        loading: false,
        artistFollowed: payload,
        error: null,
      };
      return state;

    //ListArtist
    case artistListActions.get:
      state =
        payload.length < 10
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        loading: false,
        artistList: payload,
        error: null,
      };
      return state;

    //ListArtist
    case artistListActions.update:
      state =
        payload.length === 0
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        loading: false,
        artistList: [...state.artistList, ...payload],
        error: null,
      };
      return state;

    case artistListActions.follow:
      state = {
        ...state,
        artistList: changeFollow(state.artistList, payload.id, payload.follow),
        artistFollowers: changeFollow(
          state.artistFollowers,
          payload.id,
          payload.follow
        ),
        artistFollowed: changeFollow(
          state.artistFollowed,
          payload.id,
          payload.follow
        ),
      };
      if (payload.follow && state.artistFollowed) {
        state = {
          ...state,
          artistFollowed: [...state?.artistFollowed, {
            ...payload?.artist,
            follow: true
          }],
        };
      } else if (!payload.follow && state.artistFollowed) {
        state = {
          ...state,
          artistFollowed: state?.artistFollowed?.filter(
            (artist) => artist._id !== payload.id
          ),
        };
      }
      return state;

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

    case artistListActions.resetError:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default artistListReducer;

export const artistListActions = {
  get: "[artistList] get",
  update: "[artistList] update",
  follow: "[artistList] follow",
  unfollow: "[artistList] unfollow",
  loading: "[artistList] loading",
  failure: "[artistList] failure",
  resetError: "[artistList] resetError",
};

export const artistFollowersActions = {
  get: "[artistFollowers] get",
};

export const artistFollowedActions = {
  get: "[artistFollowed] get",
};
