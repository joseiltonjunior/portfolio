import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.section};

  border-radius: 8px;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShowButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.showButton};
  line-height: 0;
  transition: color, 0.2s;
  cursor: pointer;

  :hover {
    color: var(--orange-600);
  }
`;

export const Title = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
  color: ${(props) => props.theme.showButton};
`;

export const Content = styled.div`
  margin-top: 1rem;
`;
