import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import userReducer from "./user/userReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({ userReducer, authReducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
