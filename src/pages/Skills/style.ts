import styled from "styled-components";

export const Container = styled.div``;

export const Skill = styled.p`
  font-size: 0.9rem;
  line-height: 1.45;
  cursor: default;
  transition: color 0.1s;

  color: ${(props) => props.theme.colors.Dark_300};

  :hover {
    color: ${(props) => props.theme.colors.Orange};
  }
`;
