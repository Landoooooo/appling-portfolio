import React from "react";
import { graphql, navigate } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const Post = ({
  data: {
    markdownRemark: { frontmatter, fields, html },
  },
}) => {
  return (
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      fields {
        slug
        readingTime {
          text
        }
      }
      html
    }
  }
`;
