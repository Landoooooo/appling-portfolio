import React, { useState } from "react";
import Author from "../components/blogs/author";
import { graphql } from "gatsby";
import Delay from "../gatsby-theme-banshorian/components/delay";
import styled from "styled-components";
import SEO from "../components/seo";
import LayoutContactMe from "../gatsby-theme-banshorian/components/layout/layout-contact-me";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

const ContentDiv = styled.div`
  width: 50%;
  margin: 5em auto;

  h1 {
    margin-bottom: 2em;
  }
`;
const Post = ({
  data: {
    markdownRemark: { frontmatter, fields, html },
  },
  showLoadingAnimation = true,
  location,
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => setLoaded(true);

  return (
    <LayoutContactMe bgClassName="aboutme">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.image}
        pathname={location.pathname}
      />
      <Delay
        wait={500}
        cb={handleLoad}
        showLoadingAnimation={showLoadingAnimation}
      >
        <ContentDiv>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Author />
        </ContentDiv>
      </Delay>
    </LayoutContactMe>
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
