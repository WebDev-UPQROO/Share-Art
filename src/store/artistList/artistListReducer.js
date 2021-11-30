const initialState = {
  loading: true,
  artistList: [],
  artistFollowers: [],
  artistFollowed: [],
  error: null,
  followed: false,
};

const artistListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //ListArtist
    case artistListActions.get:
      state = {
        ...state,
        loading: false,
        artistList: payload,
        error: null,
      };
      return state;
    //ListFollowersArtist Get
      case artistFollowersActions.get:
        state = {
          ...state,
          loading: false,
          artistFollowers: payload,
          error: null,
        };
      return state;
    //ListFollowersArtist Update
      case artistFollowersActions.update:
      state =
        payload.length === 0
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        artistFollowers: [...state.artistFollowers, ...payload],
        loading: false,
        error: null,
      };
      return state;

      //ListFollowedArtist Get
      case artistFollowedActions.get:
      state = {
        ...state,
        loading: false,
        artistFollowed: payload,
        error: null,
      };
      return state;
      //ListFollowedArtist Update
      case artistFollowedActions.update:
      state =
        payload.length === 0
          ? { ...state, limit: true }
          : { ...state, limit: false };

      state = {
        ...state,
        artistFollowed: [...state.artistFollowed, ...payload],
        loading: false,
        error: null,
      };
      return state;

      case artistListActions.follow:
      var artistList = state.artistList.map((artist) => {
        if (artist._id === payload)
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
       artistList = state.artistList.map((artist) => {
        if (artist._id === payload)
          return {
            ...artist,
            follow: false,
          };

        return artist;
      });

      state = {
        ...state,
        artistList,
      };
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

export const artistFollowersActions = {
  get: "[artistFollowers] get",
  update: "[artistFollowers] update",
  follow: "[artistFollowers] follow",
  unfollow: "[artistFollowers] unfollow",
  loading: "[artistFollowers] loading",
  failure: "[artistFollowers] failure",
};

export const artistFollowedActions = {
  get: "[artistFollowed] get",
  update: "[artistFollowed] update",
  follow: "[artistFollowed] follow",
  unfollow: "[artistFollowed] unfollow",
  loading: "[artistFollowed] loading",
  failure: "[artistFollowed] failure",
};

