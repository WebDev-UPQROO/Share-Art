const initialState = {
    loading: true,
    artistList: [],
    error: null,
    followed: false
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
        console.log("hola");
          return {
            ...state,
            followed: true,
          };

      case artistListActions.unfollow:
            return {
              ...state,
              followed: false,
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
  