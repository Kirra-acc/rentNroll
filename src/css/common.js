import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

`;

export default Global;
