import React, { useState, useRef, createRef } from "react";
import Delay from "../../gatsby-theme-banshorian/components/delay";
import { useMQResize } from "../../gatsby-theme-banshorian/components/hooks";
import isSSR from "../../gatsby-theme-banshorian/utils/isSSR";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const mediaQueries = {
  min52: "(min-width: 52.5em)",
  max36: "(max-width: 36em)",
};

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
          <div>
            <AniLink cover to={slug} direction="left" bg="#282b2f">
              <h2>{title}</h2>
              <span>{readingTime.text}</span>
            </AniLink>
          </div>
        );
      }
    );
  };
  return (
    <main>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <Delay
        wait={1000}
        cb={handleLoad}
        showLoadingAnimation={showLoadingAnimation}
      >
        <GetPosts />
      </Delay>
    </main>
  );
};

export default Blogs;
