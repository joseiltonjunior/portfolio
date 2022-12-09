import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-800);
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
  color: var(--gray-100);

  transition: color, 0.2s;
  cursor: pointer;

  :hover {
    color: var(--orange-600);
  }
`;

export const Title = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--gray-100);
`;

export const Content = styled.div`
  margin-top: 1rem;
`;
