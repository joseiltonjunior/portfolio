import styled from "styled-components";

interface CardProps {
  thumb: string;
}

export const Container = styled.div`
  border: 1px solid var(--gray-600);
  overflow: hidden;
  border-radius: 6px;

  :hover {
    border: 1px solid var(--orange-600);
  }
`;

export const Video = styled.iframe`
  border: none;
`;

export const Header = styled.div<CardProps>`
  height: 8.125rem;

  background-color: transparent;
  background-image: url(${(props) => props.thumb});
  background-size: cover;

  cursor: pointer;

  transition: all 0.2s;

  @media (max-width: 558px) {
    height: 10rem;
  }
`;

export const Footer = styled.div`
  padding: 1rem 0.5rem;
  background-color: var(--gray-600);
  text-align: center;
`;
