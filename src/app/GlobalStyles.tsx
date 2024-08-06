import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
  height:100%;
  --font-sans-serif:
    -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  --font-serif:
    Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
    Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;

  /* Set a global default */
  font-family: var(--font-sans-serif);
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray1};
    color: ${({ theme }) => theme.colors.gray12};
    height:100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }


  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyle;
