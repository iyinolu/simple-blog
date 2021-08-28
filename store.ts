import { createStore } from "redux";
import rootReducer from './redux/reducers/index';

export const store = (initialState={}) => {
    return createStore(rootReducer, initialState)
}