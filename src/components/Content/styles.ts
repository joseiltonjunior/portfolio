import styled from "styled-components";

export const Section = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
`;

export const Container = styled.div`
  ${Section} + ${Section} {
    margin-top: 2rem;
  }
`;
