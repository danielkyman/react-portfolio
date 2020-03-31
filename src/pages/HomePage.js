import React from "react";

//components
import Intro from "../components/home/Intro";
import BlogPostsPreview from "../components/blogposts/BlogPostsPreview";
import ProjectsPreview from "../components/projects/ProjectsPreview";
import ReferencesPreview from "../components/references/ReferencesPreview";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Intro />
      <BlogPostsPreview />
      <ProjectsPreview />
      <ReferencesPreview />
    </div>
  );
};

export default HomePage;
