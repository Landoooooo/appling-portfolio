import React, { useState, useRef, createRef } from "react";
import Delay from "../../gatsby-theme-banshorian/components/delay";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Container = styled.div`
  margin-top: 5em;
`;

const PostContainer = styled.div`
  margin-bottom: 2em;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: grey;
    }

    h2 {
      margin: 0;
    }
  }
`;

const Blogs = ({
  posts,
  transitionStatus,
  title,
  showLoadingAnimation = true,
  description,
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => setLoaded(true);

  const GetPosts = () => {
    return posts.map(
      ({
        node: {
          id,
          fields: { slug, readingTime },
          frontmatter: { title },
        },
      }) => {
        return (
          <PostContainer>
            <AniLink paintDrip to={slug} duration={1} hex="#000">
              <h2>{title}</h2>
              <span>{readingTime.text}</span>
            </AniLink>
          </PostContainer>
        );
      }
    );
  };
  return (
    <Container>
      <GetPosts />
    </Container>
  );
};

export default Blogs;
