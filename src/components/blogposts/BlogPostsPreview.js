import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { getBlogPost } from "../../redux/actions/blogPost";

const BlogPostsPreview = ({ getBlogPost, blogPosts }) => {
  useEffect(() => {
    getBlogPost();
  }, [getBlogPost]);

  console.log(blogPosts);

  return (
    <div className="blog-posts-preview">
      <h1>blog posts preview</h1>
      <div className="container">
        {blogPosts.map(post => {
          return (
            <div key={post.sys.id}>
              <h3>{post.fields.title}</h3>
              <h4>{post.fields.publishDate}</h4>
              <p>{post.fields.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPost.blogPost
  };
};

export default connect(mapStateToProps, { getBlogPost })(BlogPostsPreview);
