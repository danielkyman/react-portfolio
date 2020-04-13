import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";

//pages
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutMe from "./pages/AboutMe";
import ContactPage from "./pages/ContactPage";
import ArticleSingle from "./pages/ArticleSingle";

//Redux
// import { connect } from "react-redux";
// import { getBlogPost } from "./redux/actions/blogPost";

// import "./App.css";
// import "./sass/test.scss";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="global-format">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/article/:slug" component={ArticleSingle} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
