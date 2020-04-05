import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../CodeBlock";

import { useParams } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { getSinglePost } from "../redux/actions/singlePost";

import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../contentful";

const ArticleSingle = ({ getSinglePost, post, blogPosts }) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState();
  const { slug } = useParams();

  useEffect(() => {
    // getSinglePost(slug);

    // const article = blogPosts.filter((post) => {
    //   return post.fields.slug === slug;
    // });

    axios
      .get(
        // `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}`
        `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost&fields.slug=${slug}`
      )
      .then((res) => {
        console.log(res.data.items[0]);
        setArticle(res.data.items[0]);
        setLoading(false);
      });
  }, [blogPosts, slug]);

  return (
    <div className="article container">
      {loading ? (
        <span>loading</span>
      ) : (
        <>
          <h1>{article.fields.title}</h1>
          <p>Published on {article.fields.publishDate}</p>
          <ReactMarkdown
            source={article.fields.body}
            renderers={{ code: CodeBlock }}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.singlePost,
    blogPosts: state.blogPost.blogPosts,
  };
};

export default connect(mapStateToProps, { getSinglePost })(ArticleSingle);
