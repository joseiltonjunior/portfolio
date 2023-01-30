import styled from "styled-components";

interface CardProps {
  thumb: string;
}

export const Container = styled.div``;

export const Title = styled.p`
  font-weight: 600;
  color: var(--orange-600);
  font-size: 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 0.9rem;
  text-align: left;
`;

export const Header = styled.div<CardProps>`
  height: 150px;
  width: 224px;

  background-color: transparent;
  background-image: url(${(props) => props.thumb});
  background-size: cover;

  border: 1px solid var(--gray-600);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s;

  :hover {
    border: 1px solid var(--orange-600);
  }
`;

export const Footer = styled.div`
  margin-top: 0.5rem;
`;
