import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";

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

  const dateFormat = (date) => {
    return <Moment format="D MMM YYYY">{date}</Moment>;
  };

  return (
    <div className="blog-posts-preview">
      <div className="recent-articles-heading">
        <h1>Articles</h1>
      </div>
      <div className="inner-home">
        {blogPosts.map((post) => {
          return (
            <div
              key={post.sys.id}
              className="article-preview"
              onClick={(e) => routeToPost(e, post.fields.slug, post.sys.id)}
            >
              <h2>{post.fields.title}</h2>
              <p className="articles-date">
                {dateFormat(post.fields.publishDate)}
              </p>
              <p>- {post.fields.description}</p>
            </div>
          );
        })}
      </div>
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
