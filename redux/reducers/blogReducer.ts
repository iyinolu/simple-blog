import React from 'react';
import { ADD_POST, SHOW_POST } from '../actions';
import { Action } from '../actions/actions';

export interface BlogState {
    title: string;
    body: string;
}

const initialState: BlogState = {
    title: "", 
    body: "",
};

export default function blogReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "ADD_POST":
            return {...state, ...action.payload}
        case "SHOW_POST":
            return {...state}
        default:
            return state
    }
}

// const temp = () => {
//     blogReducer({title: 'eje', body: "jdjd"}, 'jdhdh')
// }

