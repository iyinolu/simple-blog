import { createStore, applyMiddleware, Middleware, StoreEnhancer, Store } from "redux"
import { RootState } from './redux/reducers/index';
import { State } from './redux/reducers/blogReducer';
import blogReducer from './redux/reducers/blogReducer';

import { Context, MakeStore, createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const makeStore = (context: Context) => createStore(blogReducer, bindMiddleware([]));

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });

export default wrapper;