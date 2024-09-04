import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout, Projects, FeaturedProject } from '@components';

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

const ProjectPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Projects" />
    <StyledMainContainer>
      <header>
        <h1 className="big-heading">Projects</h1>
        <p className="subtitle">Some of my recent projects</p>
      </header>
      <FeaturedProject />
      <Projects />
    </StyledMainContainer>
  </Layout>
);

ProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectPage;
