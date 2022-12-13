import styled from "styled-components";

export const Skill = styled.a`
  font-size: 0.9rem;
  line-height: 1.45;

  transition: color 0.1s;

  text-decoration: none;
  color: ${(props) => props.theme.color};

  :hover {
    color: var(--orange-600);
  }
`;
