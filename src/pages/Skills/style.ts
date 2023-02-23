import styled from "styled-components";

export const Container = styled.div``;

export const Skill = styled.p`
  font-size: 0.9rem;
  line-height: 1.45;
  cursor: default;
  transition: color 0.1s;

  color: var(--gray-300);

  :hover {
    color: var(--orange-600);
  }
`;
