import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, FeaturedPost, FeaturedVideo, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <FeaturedPost />
      <FeaturedVideo />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

// const App = ({ location }) => (
//   <ThemeProvider>
//     <IndexPage location={location} />
//   </ThemeProvider>
// );

export default IndexPage;

// App.propTypes = {
//   location: PropTypes.object.isRequired,
// };

// export default App;
