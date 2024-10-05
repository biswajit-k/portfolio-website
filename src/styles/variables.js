import { css } from 'styled-components';

export const colors = {
  darkNavy: '#020c1b',
  navy: '#0a192f',
  lightNavy: '#112240',
  lightestNavy: '#233554',
  navyShadow: 'rgba(2, 12, 27, 0.7)',
  darkSlate: '#495670',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  lightestSlate: '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
  greenTint: 'rgba(100, 255, 218, 0.1)',
  pink: '#f57dff',
  blue: '#57cbff',
  black: 'rgb(15 23 42 / 1)',
  blackLight: 'rgb(23 23 23 / 1)',
  darkGray: '#343a40',
  mediumGray: '#495057',
  lightGray: '#6c757d',
  brightGray: '#adb5bd',
  pureWhite: '#fff',
  pureWhiteTranslucent: 'rgba(255, 255, 255, 0.2)',
  textColor: 'rgb(55 65 81 / 1)',
};

const variables = css`
  :root {
    --dark-navy: ${colors.darkNavy};
    --navy: ${colors.navy};
    --light-navy: ${colors.lightNavy};
    --lightest-navy: ${colors.lightestNavy};
    --navy-shadow: ${colors.navyShadow};
    --dark-slate: ${colors.darkSlate};
    --slate: ${colors.slate};
    --light-slate: ${colors.lightSlate};
    --lightest-slate: ${colors.lightestSlate};
    --white: ${colors.white};
    --green: ${colors.green};
    --green-tint: ${colors.greenTint};
    --pink: ${colors.pink};
    --blue: ${colors.blue};
    --black: ${colors.black};
    --black-light: ${colors.blackLight};
    --dark-gray: ${colors.darkGray};
    --medium-gray: ${colors.mediumGray};
    --light-gray: ${colors.lightGray};
    --bright-gray: ${colors.brightGray};
    --pure-white: ${colors.pureWhite};
    --text-color: ${colors.textColor};

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-xxxl: 1.3em;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
