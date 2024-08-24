import React, { useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const FeaturedPostSection = styled.section`
  .link-container {
    margin-top: 5rem;
    text-align: end;
  }
`;

const StyledPost = styled.div`
  .title {
    color: var(--medium-gray);
    font-weight: 500;
    font-size: clamp(24px, 5vw, 26px);

    &:hover {
      cursor: pointer;
      color: var(--black);
    }

    @media (min-width: 768px) {
      margin: 0 0 10px;
    }

    @media (max-width: 768px) {
      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .description {
    max-width: 700px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const FeaturedPost = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/posts/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
              slug
              tags
            }
            html
          }
        }
      }
    }
  `);

  const featuredPosts = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealPost = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealPost.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <FeaturedPostSection id="featured-posts">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Posts
      </h2>
      <div>
        {featuredPosts &&
          featuredPosts.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title, description } = frontmatter;

            return (
              <StyledPost key={i} ref={el => (revealPost.current[i] = el)}>
                <div className="title">{title}</div>
                <p className="description">{description}</p>
              </StyledPost>
            );
          })}
      </div>
      <div className="link-container">
        <Link className="styled_link" to="/archive" ref={revealArchiveLink}>
          see all posts &rarr;
        </Link>
      </div>
    </FeaturedPostSection>
  );
};

export default FeaturedPost;
