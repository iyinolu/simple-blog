import React from "react";
// import { ADD_POST, SHOW_POST }  from './index';

export type Action = 
    | {type: "ADD_POST", payload: object}  
    | {type: "SHOW_POST"}     




// export interface AddPostAction {
//     type: typeof ADD_POST
//     payload: string
// }

// export interface SHOW_POT {
//     type: typeof SHOW_POST
// }