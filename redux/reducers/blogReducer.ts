import React from 'react';
import { ADD_POST, SHOW_POST } from '../actions';
import { Action } from '../actions/actions';
import {HYDRATE} from "next-redux-wrapper";
import { AnyAction } from 'redux';

export interface BlogState {
    id?: number
    title: string;
    body: string;
}
export interface State {
    posts: BlogState[]
    name?: string
}

const initialState: State = {
    posts: [],
};

export default function blogReducer(state: State = initialState, action: AnyAction) {
    switch (action.type) {
        case HYDRATE:             
            console.log(action)
            return { ...state, ...action.payload }
        case "ADD_POST":
            return {...state, posts: [...state.posts, ...action.payload]}
        case "SHOW_POST":
            return {...state}
        default:
            return state
    }
}
