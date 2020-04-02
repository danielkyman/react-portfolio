import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/navigation/NavBar";

//pages
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutMe from "./pages/AboutMe";
import ContactPage from "./pages/ContactPage";

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
          <Route exact path="/articles" component={ArticlesPage} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={ContactPage} />
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
