import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import mixins from './mixins';
import { colors } from './variables';

// color palette
export const lightTheme = {
  body: colors.pureWhite,
  bodyLight: colors.white,
  bodyTranslucent: colors.pureWhiteTranslucent,
  logo: colors.blackLight,
  primary: colors.mediumGray,
  primaryLight: colors.lightGray,
  primaryLightest: colors.brightGray,
  primaryStrong: colors.darkGray,
  primaryStrongest: colors.black,
};

export const darkTheme = {
  // TODO: Add dark theme colors
  body: '#000000',
  text: '#ffffff',
  mediumGray: '#666666',
};

// theme object
const websiteTheme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  colors: lightTheme,
  mixins,
};

const ThemeContext = createContext();

export const WebsiteThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(websiteTheme);

  const toggleTheme = () => {
    setTheme(currentTheme =>
      theme.colors === lightTheme
        ? { ...currentTheme, colors: darkTheme }
        : { ...currentTheme, colors: lightTheme },
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

WebsiteThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
