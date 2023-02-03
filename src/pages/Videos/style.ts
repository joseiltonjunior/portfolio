import styled from "styled-components";

export const MobileView = styled.div`
  display: none;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const WebView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export const Container = styled.div`
  @media (max-width: 558px) {
    ${MobileView} {
      display: grid;
    }

    ${WebView} {
      display: none;
    }
  }
`;

export const NoContent = styled.p`
  color: var(--orange-600);
`;
