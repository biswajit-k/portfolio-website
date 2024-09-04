import React, { useEffect, useRef } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import sr from '@utils/sr';
import { srConfig } from '@config';

const StyledMainContainer = styled.main`
  & > header {
    text-align: center;
    margin-bottom: 100px;
    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  .post_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
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
    font-size: var(--fz-md);
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
    font-size: var(--fz-lg);
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

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const revealArchiveLink = useRef(null);

  useEffect(() => {
    sr.reveal(revealArchiveLink.current, srConfig());
  }, []);

  // Function to calculate read time
  const calculateReadTime = text => {
    const wordsPerMinute = 150; // Average reading speed
    const words = text.split(/\s+/).length; // Split by whitespace and count words
    const minutes = Math.ceil(words / wordsPerMinute); // Calculate minutes and round up
    return minutes;
  };

  return (
    <Layout location={location}>
      <Helmet title="Blog" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Blog</h1>
          <p className="subtitle">All the latest posts</p>
        </header>

        <div className="post_container">
          <StyledGrid>
            {posts.length > 0 &&
              posts.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title, description, slug, date } = frontmatter;
                const formattedDate = new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });
                const readTime = calculateReadTime(html);
                return (
                  <StyledPost key={i}>
                    <div className="metadata">
                      <p className="date">{formattedDate}</p>
                      <p className="read_time">{readTime} min read</p>
                    </div>
                    <div className="main">
                      <Link to={slug}>
                        <h3 className="title">{title}</h3>
                      </Link>
                      <p className="description">{description}</p>
                      <Link className="styled_link more_link" to={slug} ref={revealArchiveLink}>
                        Read More &rarr;
                      </Link>
                    </div>
                  </StyledPost>
                );
              })}
          </StyledGrid>
        </div>
      </StyledMainContainer>
    </Layout>
  );
};

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
          }
          html
        }
      }
    }
  }
`;
