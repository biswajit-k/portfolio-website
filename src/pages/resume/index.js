import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Remarkable } from 'remarkable';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  padding-top: 200px;
  font-size: var(--fz-lg);
  & > header {
    text-align: center;
    margin-bottom: 100px;
    a {
      font-size: var(--fz-lg);
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

const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const StyledSection = styled.div`
  display: flex;

  p > a,
  li > a {
    ${({ theme }) => theme.mixins.underlineLink};
  }

  .job_container:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  .section {
    font-size: var(--fz-xxl);
    font-weight: 600;
    color: var(--black);
    min-width: 10rem;
  }
  .company {
    font-family: var(--font-mono);
    margin: 0;
    margin-bottom: 10px;
    /* white-space: normal; */
    &:before {
      display: none;
    }
    &:after {
      width: 100%;
      height: 2px;
      top: 0;
      background-color: var(--light-gray);
    }
    & > .styled_link {
      font-size: var(--fz-lg) !important;
      font-weight: 600;
      &:after {
        bottom: 0;
      }
    }
  }

  .position_container:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  .position {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .role {
    font-size: var(--fz-lg);
    color: var(--black);
    font-weight: 600;
  }
  .time {
    font-size: var(--fz-md);
  }
  .description {
    margin-top: 0.5rem;
  }

  .skill_container {
    ul {
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }

    li:not(:last-child) {
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: var(--fz-xl);
      font-weight: 600;
      color: var(--black);
      margin-bottom: 0.4rem;
    }

    p {
    }
  }

  .highlight {
    color: var(--black);
    font-weight: 500;
  }
  li:not(:last-child) {
    margin-bottom: 0.4rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    .section {
      font-size: var(--fz-xxl);
    }
    gap: 1.2rem;
  }

  @media (max-width: 800px) {
    .company {
      white-space: normal;

      &:after {
        width: auto;
        flex-grow: 1;
      }
    }
  }
`;

const ResumePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/content/resume/about.md/" }) {
        html
      }

      work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/resume/work/" } }) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              company
              website
              job {
                role
                duration
                description
              }
            }
          }
        }
      }

      education: markdownRemark(fileAbsolutePath: { regex: "/content/resume/education.md/" }) {
        frontmatter {
          institute {
            name
            website
            specialization
            duration
            description
          }
        }
      }

      skills: markdownRemark(fileAbsolutePath: { regex: "/content/resume/skills.md/" }) {
        html
      }
    }
  `);

  const md = new Remarkable();

  const aboutContent = data.about.html;
  const workData = data.work.edges;
  const educationData = data.education.frontmatter.institute;
  const skillsData = data.skills.html;

  return (
    <Layout location={location}>
      <Helmet title="Resume" />
      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Biswajit Kaushik</h1>
          <a
            href="/resume.pdf"
            className='className="subtitle styled_link'
            target="_blank"
            rel="noopener noreferrer">
            View in PDF
          </a>
        </header>
        <StyledSectionContainer>
          <StyledSection>
            <div className="section">About</div>
            <div className="content" dangerouslySetInnerHTML={{ __html: aboutContent }} />
          </StyledSection>
          <StyledSection>
            <div className="section">Work</div>
            <div className="content">
              {workData.map((work, workIdx) => {
                const { company, website, job } = work.node.frontmatter;
                return (
                  <div className="job_container" key={workIdx}>
                    <h2 className="numbered-heading company">
                      <Link className="styled_link" to={website}>
                        {company}
                      </Link>
                    </h2>
                    {job.map((position, positionIdx) => {
                      const { role, duration, description } = position;

                      return (
                        <div className="position_container" key={positionIdx}>
                          <div className="position">
                            <div className="role">{role}</div>
                            <div className="time">{duration}</div>
                          </div>
                          <div
                            className="description"
                            dangerouslySetInnerHTML={{ __html: md.render(description) }}
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </StyledSection>
          <StyledSection>
            <div className="section">Education</div>
            <div className="content">
              {educationData.map((education, educationIdx) => {
                const { name, website, specialization, duration, description } = education;
                return (
                  <div className="job_container" key={educationIdx}>
                    <h2 className="numbered-heading company">
                      <Link className="styled_link" to={website}>
                        {name}
                      </Link>
                    </h2>
                    <div className="position_container">
                      <div className="position">
                        <div className="role">{specialization}</div>
                        <div className="time">{duration}</div>
                      </div>
                      <p className="description">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </StyledSection>
          <StyledSection>
            <div className="section">Skills</div>
            <div className="content">
              <div className="skill_container" dangerouslySetInnerHTML={{ __html: skillsData }} />
            </div>
          </StyledSection>
        </StyledSectionContainer>
      </StyledMainContainer>
    </Layout>
  );
};

ResumePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ResumePage;
