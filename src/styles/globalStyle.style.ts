import { css } from '@emotion/react'

export const GlobalStyle = css`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 100;
    src: url('./fonts/SpoqaHanSansNeo-Thin.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: url('./fonts/SpoqaHanSansNeo-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: url('./fonts/SpoqaHanSansNeo-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: url('.fonts/SpoqaHanSansNeo-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: url('./fonts/SpoqaHanSansNeo-Bold.ttf') format('ttf');
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Spoqa Han Sans Neo;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  body {
    background-color: #fff;
    font-family: 'SpoqaHanSansNeo';
  }
`
