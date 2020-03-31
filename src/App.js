import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/navigation/NavBar";
import HomePage from "./pages/HomePage";

//Redux
import { connect } from "react-redux";
import { getBlogPost } from "./redux/actions/blogPost";

// import "./App.css";
// import "./sass/test.scss";
import "./scss/main.scss";

function App({ getBlogPost, blogPosts }) {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPost.blogPost
  };
};

export default connect(mapStateToProps, { getBlogPost })(App);
