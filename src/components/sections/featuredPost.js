import React, { useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const FeaturedPostSection = styled.section`
  padding-top: 5rem;

  .link-container {
    margin-top: 4rem;
    text-align: end;
    a {
      font-size: var(--fz-md) !important;
    }

    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  .post_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: inline-flex;
  align-items: baseline;
  flex-direction: column;
  padding: 1rem;
  gap: 2.5rem;
`;

const StyledPost = styled.li`
  transition: var(--transition);
  display: flex;

  ${({ theme }) => theme.mixins.flexBetween};
  gap: 3rem;
  align-items: flex-start;

  .more_link {
    margin-left: 2px;
  }

  .metadata {
    display: flex;
    min-width: 8rem;
    flex-direction: column;
    justify-content: flex-start;
    font-size: var(--fz-lg);
  }

  .date {
    color: var(--medium-gray);
    margin: 0.2rem 0;
  }

  .read_time {
    color: var(--light-gray);
  }

  .title {
    font-size: var(--fz-xxl);
    color: var(--black);
    margin-top: 2px;
  }

  .description {
    margin: 1rem 0;
    margin-top: 0.4rem;
    font-size: var(--fz-xl);
  }

  @media (max-width: 870px) {
    flex-direction: column;
    gap: 0.5rem;

    .description {
      margin-top: 0;
    }

    .date {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

const FeaturedPost = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/*/" }
          frontmatter: { featured: { eq: true } }
        }
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

  const posts = data.featured.edges.filter(({ node }) => node);
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
      <div className="post_container">
        <StyledGrid>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, description, slug, date } = frontmatter;
              const formattedDate = new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <StyledPost key={i}>
                  <div className="metadata">
                    <p className="date">{formattedDate}</p>
                  </div>
                  <div className="main">
                    <Link to={slug}>
                      <h3 className="title">{title}</h3>
                    </Link>
                    <p className="description">{description}</p>
                  </div>
                </StyledPost>
              );
            })}
        </StyledGrid>
      </div>
      <div className="link-container">
        <Link className="styled_link" to="/blog" ref={revealArchiveLink}>
          see all posts &rarr;
        </Link>
      </div>
    </FeaturedPostSection>
  );
};

export default FeaturedPost;
