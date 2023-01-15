import { css } from "@emotion/react";

export const global = css`
  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-size: 14px;
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
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: "NanumSquareRound", sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
`;

export const colors = css`
  :root {
    --white-color: #fff;
    --brand-color-100: #f3f6ff;
    --brand-color-200: #e0e7ff;
    --brand-color-300: #a8bcff;
    --brand-color-400: #2559ff;
    --brand-color-500: #1149ff;
    --brand-color-600: #073ce9;
    --gray-color-100: #dbe2f4;
    --gray-color-200: #b4c1e3;
    --gray-color-300: #6978a0;
    --gray-color-400: #3d4666;
    --gray-color-500: #0d1942;
    --orange-color-100: #fff0e9;
    --orange-color-200: #ffd8c3;
    --orange-color-300: #f6b18c;
    --teal-color-100: #f3fdff;
    --teal-color-200: #82d8eb;
    --teal-color-300: #1592ae;
    --teal-color-400: #117187;
    --green-color-100: #dafff4;
    --green-color-200: #abefda;
    --green-color-300: #57c9a6;
    --green-color-400: #1aaa7e;
    --yellow-color-100: #fff8ef;
    --yellow-color-200: #ffd19d;
    --yellow-color-300: #f2a44d;
    --yellow-color-400: #d78121;
    --purple-color-100: #f3efff;
    --purple-color-200: #b499ff;
    --purple-color-300: #6a3cff;
    --red-color-100: #ffe6e5;
    --red-color-200: #ffa6a4;
    --red-color-300: #ff443f;
    --red-color-400: #da2722;
  }
`;
