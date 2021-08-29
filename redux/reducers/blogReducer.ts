import React from 'react';
import { ADD_POST, SHOW_POST } from '../actions';
import { Action } from '../actions/actions';
import {HYDRATE} from "next-redux-wrapper";

export interface BlogState {
    title: string;
    body: string;
}

const initialState: BlogState = {
    title: "dsd", 
    body: "sdd",
};

export default function blogReducer(state = initialState, action: Action) {
    switch (action.type) {
        case HYDRATE: 
            return {...state}
        case "ADD_POST":
            return {...state, ...action.payload}
        case "SHOW_POST":
            return {...state}
        default:
            return state
    }
}
