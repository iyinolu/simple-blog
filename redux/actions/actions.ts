import React from "react";
import {HYDRATE} from "next-redux-wrapper";
// import { ADD_POST, SHOW_POST }  from './index';

export type Action = 
    | {type: "ADD_POST", payload: object}  
    | {type: "SHOW_POST", payload?: object}     
    | {type: "FETCH_POST", payload: object}
    | {type: any, payload?: object}

