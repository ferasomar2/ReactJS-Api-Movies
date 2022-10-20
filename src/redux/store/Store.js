import { applyMiddleware, createStore } from "redux";
import MoviesReducer from "../reducer/MoviesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
//1-create store
const Store = createStore(MoviesReducer,applyMiddleware(thunk));

export {Store}
