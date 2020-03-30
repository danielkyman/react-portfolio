import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/navigation/NavBar";

//Redux
import { connect } from "react-redux";
import { getBlogPost } from "./redux/actions/blogPost";

import "./App.css";

function App({ getBlogPost, blogPosts }) {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPost.blogPost
  };
};

export default connect(mapStateToProps, { getBlogPost })(App);
