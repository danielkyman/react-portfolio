import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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

  // const dateFormat = (date) => {
  //   return <Moment fromNow>{date}</Moment>;
  // };

  return (
    <div className="blog-posts-preview">
      <div className="recent-articles-heading">
        <h1>Recent Articles</h1>
        <Link to="/articles">
          <button className="muted-button">View All</button>
        </Link>
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
              {/* <h4>{dateFormat(post.fields.publishDate)}</h4> */}
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
