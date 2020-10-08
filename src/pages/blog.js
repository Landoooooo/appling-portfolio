import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import LayoutContactMe from "../gatsby-theme-banshorian/components/layout/layout-contact-me";

const Blog = ({ data, transitionStatus }) => {
  console.log(transitionStatus);
  return (
    <LayoutContactMe>
      <Helmet>
        <title>Blog Posts</title>
      </Helmet>
      <Blogs
        posts={data.allMarkdownRemark.edges}
        transitionStatus={transitionStatus}
        title="Blog Posts"
        description="Some things I wrote."
      />
    </LayoutContactMe>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/blog/" } } }) {
      totalCount
      edges {
        node {
          id
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
          excerpt
        }
      }
    }
  }
`;
