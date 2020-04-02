import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { getBlogPost } from "../../redux/actions/blogPost";

const BlogPostsPreview = ({ getBlogPost, blogPosts }) => {
  useEffect(() => {
    getBlogPost();
  }, [getBlogPost]);

  return (
    <div className="blog-posts-preview">
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
  );
};

const mapStateToProps = state => {
  return {
    blogPosts: state.blogPost.blogPosts
  };
};

export default connect(mapStateToProps, { getBlogPost })(BlogPostsPreview);
