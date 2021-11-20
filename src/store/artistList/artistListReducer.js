const initialState = {
    loading: true,
    artistList: [],
    error: null,
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
    loading: "[artistList] loading",
    failure: "[artistList] failure",
  };
  