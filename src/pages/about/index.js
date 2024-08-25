import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout, About } from '@components';

const StyledMainContainer = styled.main`
  padding-top: 100px;
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

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="About" />
    <StyledMainContainer>
      {/* <header>
        <h1 className="big-heading">About</h1>
        <p className="subtitle">A little about me</p>
      </header> */}
      <About />
    </StyledMainContainer>
  </Layout>
);

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default AboutPage;
