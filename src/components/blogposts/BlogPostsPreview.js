import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { getBlogPost } from "../../redux/actions/blogPost";
import { getSinglePost } from "../../redux/actions/singlePost";

const BlogPostsPreview = ({ getBlogPost, blogPosts, getSinglePost, posts }) => {
  const { push } = useHistory();
  useEffect(() => {
    getBlogPost();
  }, [getBlogPost]);

  const routeToPost = (e, slug, id) => {
    e.preventDefault();
    push(`/article/${slug}`);
  };

  return (
    <div className="blog-posts-preview">
      {blogPosts.map((post) => {
        return (
          <div key={post.sys.id}>
            <h3 onClick={(e) => routeToPost(e, post.fields.slug, post.sys.id)}>
              {post.fields.title}
            </h3>
            <h4>{post.fields.publishDate}</h4>
            <p>{post.fields.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPost.blogPosts,
    posts: state.singlePost,
  };
};

export default connect(mapStateToProps, { getBlogPost, getSinglePost })(
  BlogPostsPreview
);
