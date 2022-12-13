import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  --white: #fff;

  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-500: #00875f;

  --orange-600: #ff8c00;

  --purple-600: #993399;

  --purple-900: #4b0082;
}

:focus{
  outline: transparent;
  box-shadow: 0 0 0 1px var(--orange-600);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  -webkit-font-smoothing: antialiased;
}

body::-webkit-scrollbar {
  width: 0.4rem;
}

body::-webkit-scrollbar-thumb {
  background: var(--orange-600);
}

body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

`;

export const Line = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid var(--orange-600);
`;
