import React, { useState } from "react";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import Author from "../components/blogs/author";
import Delay from "../gatsby-theme-banshorian/components/delay";
import LayoutContactMe from "../gatsby-theme-banshorian/components/layout/layout-contact-me";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 5em;
`;
const Blog = ({ data, transitionStatus, showLoadingAnimation = true }) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => setLoaded(true);
  return (
    <LayoutContactMe bgClassName="aboutme">
      <Container>
        <Delay
          wait={500}
          cb={handleLoad}
          showLoadingAnimation={showLoadingAnimation}
        >
          <Author />
          <Blogs
            posts={data.allMarkdownRemark.edges}
            transitionStatus={transitionStatus}
            title="Blog Posts"
            description="Some things I wrote."
          />
        </Delay>
      </Container>
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
