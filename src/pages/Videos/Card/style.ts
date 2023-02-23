import styled from "styled-components";

interface CardProps {
  thumb: string;
}

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.Dark_600};
  overflow: hidden;
  border-radius: 6px;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.Orange};
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
  background-color: ${(props) => props.theme.colors.Dark_600};
  text-align: center;
`;
