import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
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

  .skill_container:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .skill_title {
    font-weight: 600;
    color: var(--black);
    margin-bottom: 0.4rem;
  }

  .highlight {
    color: var(--black);
    font-weight: 500;
  }
  li:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const ResumePage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Resume" />
    <StyledMainContainer>
      <header>
        <h1 className="big-heading">Biswajit Kaushik</h1>
        <Link className="subtitle styled_link" to="/archive">
          View in PDF
        </Link>
      </header>
      <StyledSectionContainer>
        <StyledSection>
          <div className="section">About</div>
          <div className="content">
            <p>
              I'm a software engineer professional deeply interested in
              <span className="highlight"> collaboratively building useful products</span>.I have
              experience in building software using{' '}
              <span className="highlight">Python, React, Flask, FastAPI, SQL, and AWS</span>. I've
              made notable open-source{' '}
              <a
                className="underline_link"
                href="https://github.com/osm-search/Nominatim/pulls?author=biswajit-k&closed"
                target="_blank"
                rel="noreferrer">
                contributions
              </a>{' '}
              to the{' '}
              <a
                className="underline_link"
                href="https://github.com/osm-search/Nominatim"
                target="_blank"
                rel="noreferrer">
                Nominatim project
              </a>{' '}
              of OpenStreetMap (3k stars on Github). I also have good problem-solving skills and
              I've solved multiple problems on the{' '}
              <a
                className="underline_link"
                href="https://leetcode.com/biswajit_kaushik"
                target="_blank"
                rel="noreferrer">
                Leetcode
              </a>{' '}
              platform.
            </p>
            <p>
              In my current role at Samsung R&D, I am the part of AI Platform team developing{' '}
              <span className="highlight">RAG workflows</span> using LangChain and{' '}
              <span className="highlight">integrating AI solutions</span> on smartphones. I
              continually strive for the <span className="highlight">optimal balance </span>between
              immediate value delivery and long-term sustainability.
            </p>
          </div>
        </StyledSection>
        <StyledSection>
          <div className="section">Work</div>
          <div className="content">
            <div className="job_container">
              <h2 className="numbered-heading company">
                <Link className="styled_link" to="https://research.samsung.com/">
                  Samsung R&D
                </Link>
              </h2>
              <div className="position_container">
                <div className="position">
                  <div className="role">Software Engineer</div>
                  <div className="time">July'24 - Present</div>
                </div>
                <p className="description">
                  Part of the AI Platform team developing{' '}
                  <span className="highlight">RAG workflows</span> using LangChain and{' '}
                  <span className="highlight">integrating AI solutions</span> on smartphones.
                  <p>Tech Stack: Python, Generative AI, Vector Database, LangChain, RAG</p>
                </p>
              </div>
              <div className="position_container">
                <div className="position">
                  <div className="role">Software Engineer Intern</div>
                  <div className="time">Jan'24 - June'24</div>
                </div>
                <p className="description">
                  Part of Samsung Health application team, creating solutions to{' '}
                  <span className="highlight">digitize the health record</span> of our users.
                  <ul>
                    <li>
                      Utilized <span className="highlight">AWS Lambda, DynamoDB</span> and{' '}
                      <span className="highlight">API Gateway</span> to develop backend servers for
                      fetching and storage of records.
                    </li>
                    <li>
                      Researched and analyzed various <span className="highlight">OCR</span>{' '}
                      solutions, <span className="highlight">LLM</span> for retrieval of lab
                      parameters from lab reports including Azure, AWS, ChatGPT and Google Gemini
                      that <span className="highlight">reduced cost by 30%</span>.
                    </li>
                    <li>
                      Delivered modern records share and download functionality in the app improving
                      creativity and user experience.
                    </li>
                    <li>
                      Deployed cryptography
                      <span className="highlight">
                        {' '}
                        encryption, decryption service on AWS EC2
                      </span>{' '}
                      providing secure transmission of records
                    </li>
                  </ul>
                  Tech Stack: Python, AWS(Lambda, DynamoDB, API Gateway), Machine Learning/LLM,
                  Android, Kotlin
                </p>
              </div>
            </div>

            <div className="job_container">
              <h2 className="numbered-heading company">
                <Link className="styled_link" to="https://www.openstreetmap.org/about">
                  OpenStreetMap
                </Link>
              </h2>
              <div className="position_container">
                <div className="position">
                  <div className="role">Python Developer(Open-Source)</div>
                  <div className="time">Jan' 23 - May' 23</div>
                </div>
                <p className="description">
                  Worked on development of a{' '}
                  <a
                    className="underline_link"
                    href="https://nominatim.org/"
                    target="_blank"
                    rel="noreferrer">
                    geocoding search engine
                  </a>{' '}
                  that serves 30 million queries daily on a single server.
                  <ul>
                    <li>
                      Implemented a{' '}
                      <a
                        className="underline_link"
                        href="https://github.com/osm-search/Nominatim/pull/2993"
                        target="_blank"
                        rel="noreferrer">
                        delete tags sanitizer
                      </a>{' '}
                      to prevent unwanted tags from entering the database. Ensured integrity by unit
                      testing using Pytest.
                    </li>
                    <li>
                      Reduced 20% redundancy in code by{' '}
                      <a
                        className="underline_link"
                        href="https://github.com/osm-search/Nominatim/pull/3006"
                        target="_blank"
                        rel="noreferrer">
                        generalizing filter function
                      </a>{' '}
                      for multiple use cases
                    </li>
                    <li>
                      Integrated CI/CD pipeline test on GitHub actions workflow reducing manual
                      effort by 10%
                    </li>
                    <li>
                      Performed shell scripting for{' '}
                      <a
                        className="underline_link"
                        href="https://github.com/osm-search/Nominatim/pull/3045"
                        target="_blank"
                        rel="noreferrer">
                        automation of project description
                      </a>{' '}
                    </li>
                    <li>
                      <a
                        className="underline_link"
                        href="https://github.com/openstreetmap/iD/pull/9483"
                        target="_blank"
                        rel="noreferrer">
                        Resolved bug in determining amenity
                      </a>{' '}
                      as area solving 6 current and multiple potential issues.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </StyledSection>
        <StyledSection>
          <div className="section">Education</div>
          <div className="content">
            <div className="job_container">
              <h2 className="numbered-heading company">
                <Link className="styled_link" to="https://www.google.com">
                  Indian Institute Of Information Technology(IIIT), Kota
                </Link>
              </h2>
              <div className="position_container">
                <div className="position">
                  <div className="role">B.Tech in Computer Science</div>
                  <div className="time">Nov' 20 - June' 24</div>
                </div>
                <p className="description">
                  CGPA: 8.68, DSA, Object-oriented programming, design patterns, Operating Systems,
                  Computer Network, Databases
                </p>
              </div>
            </div>
          </div>
        </StyledSection>
        <StyledSection>
          <div className="section">Skills</div>
          <div className="content">
            <div className="skill_container">
              <p className="skill_title">Programming Languages:</p>
              <p>Python, Javascript, Typescript, C++, Lua, Java, Kotlin</p>
            </div>
            <div className="skill_container">
              <p className="skill_title">Framework:</p>
              <p>
                Flask, FastAPI, Django, React, node.js, Next.js, Rest API, SQLAlchemy ORM, Tailwind
                CSS, HTML
              </p>
            </div>
            <div className="skill_container">
              <p className="skill_title">Database and Cloud:</p>
              <p> SQL, PostgreSQL, MongoDB, Redis, AWS (EC2, S3, Lambda, DynamoDB)</p>
            </div>
            <div className="skill_container">
              <p className="skill_title">Tools:</p>
              <p>
                Docker, Kubernetes, Apache Kafka, Linux, Bash, Elasticsearch, Version Control (Git)
              </p>
            </div>
            <div className="skill_container">
              <p className="skill_title">System Architecture:</p>
              <p>
                Database Design(SQL), Design Patterns, Monoliths, microservices and the in-between,
                APIs (modules, REST)
              </p>
            </div>
            <div className="skill_container">
              <p className="skill_title">Leadership & Communication Skills:</p>
              <p>Mentoring & Teaching, Empathy, Eye for process improvements and bottlenecks</p>
            </div>
          </div>
        </StyledSection>
      </StyledSectionContainer>
    </StyledMainContainer>
  </Layout>
);

ResumePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ResumePage;
