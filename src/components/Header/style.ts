import styled from "styled-components";

export const Containe = styled.div`
  background: ${(props) => props.theme.section};
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
