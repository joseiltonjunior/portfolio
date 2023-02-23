import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
:focus{
  outline: transparent;
  box-shadow: 0 0 0 1px ${theme.colors.Orange};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${theme.colors.Dark_900};
  color: ${theme.colors.Dark_300};
  -webkit-font-smoothing: antialiased;
}

body::-webkit-scrollbar {
  width: 0.4rem;
}

body::-webkit-scrollbar-thumb {
  background: ${theme.colors.Orange};
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
  border-bottom: 1px solid ${theme.colors.Orange};
`;
