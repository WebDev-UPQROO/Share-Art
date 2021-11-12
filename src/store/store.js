import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import postsReducer from "./posts/postsReducer";
import userReducer from "./user/userReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({ userReducer, authReducer, postsReducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
