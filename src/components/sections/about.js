import React, { useEffect, useRef } from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  font-size: var(--fz-lg);
  .numbered-heading {
    &:before {
      display: none;
    }
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 6rem;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .detail {
    width: 300px;
    color: var(--dark-gray);
    margin-top: 30px;
    font-size: var(--fz-md);

    &__name {
      color: var(--black);
      font-weight: 600;
      font-size: var(--fz-xl);
      margin-bottom: 5px;
    }

    &__profession {
      margin-bottom: 10px;
    }

    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      svg {
        width: 20px;
        height: 20px;
        /* padding: 10px; */
        color: var(--light-gray) !important;
        margin-right: 10px;
      }
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 260px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--light-gray);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 240px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--white);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--bright-gray);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--bright-gray);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/content/about/index.md/" }) {
        frontmatter {
          name
          profession
          work
          location
          email
          cover {
            childImageSharp {
              gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          skills
        }
        html
      }
    }
  `);

  const { frontmatter, html } = data.about;

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = frontmatter.skills;
  const image = getImage(frontmatter.cover);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <GatsbyImage className="img" image={image} alt="Headshot" />
          </div>
          <div className="detail">
            <p className="detail__name">{frontmatter.name}</p>
            <p className="detail__profession">{frontmatter.profession}</p>
            <div className="detail__item">
              <Icon className="detail__item__icon" name="Job" />
              <p className="detail__item__text">{frontmatter.work}</p>
            </div>
            <div className="detail__item">
              <Icon className="detail__item__icon" name="Location" />
              <p className="detail__item__text">{frontmatter.location}</p>
            </div>
            <div className="detail__item">
              <Icon className="detail__item__icon" name="Inbox" />
              <p className="detail__item__text">{frontmatter.email}</p>
            </div>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
