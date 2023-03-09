import styled from 'styled-components'

interface CardProps {
  thumb: string
}

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.Dark_600};
  overflow: hidden;
  border-radius: 6px;

  cursor: pointer;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.Orange};
  }
`

export const Video = styled.iframe`
  border: none;
`

export const Header = styled.div<CardProps>`
  background-color: transparent;
  background-image: url(${(props) => props.thumb});
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
  height: 8rem;
`

export const Footer = styled.div`
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme.colors.Dark_600};
  text-align: center;
`
