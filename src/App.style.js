// RESET stylesheet
// This stylesheet reset the default styles of all tag in all browsers
// This is a very hardcore reset
// Based on the work of Eric Meyer, Richard Clark and some personal experiences
// @see     http: //meyerweb.com/eric/tools/css/reset/
// @see     https: //code.google.com/p/html5resetcss/
// @version 2.1
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --yellow-primary: #FFC500;
  --yellow-dark: #ffae00;
  --gray-disabled: #e6e6e6;
  --gray-primary: #999999;
  --black-primary: #030303;
  --black-light: #333333;
  --white-primary: #f3f3f3;
}
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
a, hr,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  box-sizing: border-box; //ie8+
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Oxygen, Ubuntu, Cantarell, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  outline: 0;
}
input:not([type="radio"]),
input:not([type="checkbox"]),
select,
textarea {
  box-sizing: border-box; //ie8+
}
button,
select,
textarea,
input {
  font-family: inherit; //ff
}
// @note HTML5 display-role
// @css-for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
a img {
  display: block;
  border: none;
}
img {
  max-width: 100%;
}
li {
  list-style: none;
}
hr {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th, td {
  text-align: left;
}
input, select {
  vertical-align: middle;
}
:focus {
  outline: none;
}
`;