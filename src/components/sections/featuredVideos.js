import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledVideo = styled.a`
  display: block;
  transform: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }
  .thumbnail {
    border-radius: var(--border-radius);
    border: 1px solid var(--bright-gray);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        border-radius: var(--border-radius);
        transition: var(--transition);
      }
    }
  }

  .title {
    color: var(--medium-gray);
    font-weight: 500;
    max-width: 100%;
    font-size: var(--fz-xl);
    margin-top: 1rem;
    margin-bottom: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

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
    font-size: var(--fz-sm);
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const FeaturedVideoGrid = styled.div`
  display: grid;
  margin-top: 40px;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`;

const MoreButton = styled.button`
  display: block;
  ${({ theme }) => theme.mixins.smallButton};
  margin: 80px auto;
  margin-bottom: 0;
`;

const FeaturedVideo = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/videos/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              link
              tags
            }
          }
        }
      }
    }
  `);

  const featuredVideos = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealVideo = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealVideo.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="featured-video">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Videos
      </h2>
      <FeaturedVideoGrid>
        {featuredVideos &&
          featuredVideos.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title, description, cover } = frontmatter;
            const image = getImage(cover);

            return (
              <StyledVideo key={i} href="#" ref={el => (revealVideo.current[i] = el)}>
                <GatsbyImage image={image} alt={title} class="thumbnail" />
                <div className="title">{title}</div>
                <div className="description">{description}</div>
              </StyledVideo>
            );
          })}
      </FeaturedVideoGrid>
      <MoreButton className="more-button" onClick={() => {}}>
        See all &rarr;
      </MoreButton>
    </section>
  );
};

export default FeaturedVideo;
