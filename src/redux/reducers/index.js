import { combineReducers } from "redux";
import blogPost from "./blogPost";
import projects from "./projects";
import singlePost from "./singlePost";

export default combineReducers({ blogPost, projects, singlePost });
