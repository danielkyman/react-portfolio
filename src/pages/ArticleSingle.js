import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../CodeBlock";
import Moment from "react-moment";

import { useParams } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { getSinglePost } from "../redux/actions/singlePost";

//contentful
import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../contentful";
import * as contentful from "contentful";

const ArticleSingle = ({ getSinglePost, post, blogPosts }) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState();
  const { slug } = useParams();

  const client = contentful.createClient({
    space: "q2fivpqovvam",
    accessToken: "aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k",
  });

  useEffect(() => {
    // getSinglePost(slug);

    // const article = blogPosts.filter((post) => {
    //   return post.fields.slug === slug;
    // });

    client.getEntries().then((entries) => {
      entries.items.forEach((entry) => {
        if (entry.fields.slug === slug) {
          console.log("test entry - ", entry);
          setArticle(entry);
          setLoading(false);
        }
      });
    });

    // axios
    //   .get(
    //     // `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}`
    //     `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost&fields.slug=${slug}`
    //   )
    //   .then((res) => {
    //     console.log(res.data.items[0]);
    //     setArticle(res.data.items[0]);
    //     setLoading(false);
    //   });
  }, [slug]);

  const dateFormat = (date) => {
    // return <Moment fromNow>{date}</Moment>;
    return <Moment format="D MMM YYYY">{date}</Moment>;
  };

  return (
    <div className="article">
      {loading ? (
        <span>loading</span>
      ) : (
        <>
          <h1 className="article-title">{article.fields.title}</h1>
          <div className="article-date-content-format">
            <p className="article-date">
              Published {dateFormat(article.fields.publishDate)}
            </p>
            {/* <img src={article.fields.heroImage.fields.file.url} alt="" /> */}
            <div className="article-content">
              <ReactMarkdown
                source={article.fields.body}
                renderers={{ code: CodeBlock }}
              />
            </div>
          </div>
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
