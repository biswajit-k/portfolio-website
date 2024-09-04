import { css } from 'styled-components';

const button = css`
  color: var(--black);
  background-color: transparent;
  border: 1px solid var(--black-light);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--medium-gray);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: var(--black);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1.3px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--black);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  button,

  smallButton: css`
    color: var(--black);
    background-color: transparent;
    border: 1px solid var(--black-light);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--medium-gray);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--black);
    background-color: transparent;
    border: 1px solid var(--black-light);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--medium-gray);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--medium-gray);
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--medium-gray);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--black);
      }
    }
  `,

  underlineLink: css`
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1.34px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--black);
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
