import { combineReducers } from "redux";
import blogReducer, {BlogState} from "./blogReducer";

export type RootState = {
    blog: BlogState
}

export default combineReducers({
    blogReducer
})