import styled from 'styled-components'

interface CardProps {
  thumb: string
}

export const Play = styled.iframe`
  border: none;
`

export const PlayMobile = styled.iframe`
  border: none;
  display: none;
`

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.Dark_600};
  overflow: hidden;
  border-radius: 6px;

  display: grid;
  grid-template-rows: 400px auto;
  cursor: pointer;

  @media (max-width: 900px) {
    grid-template-rows: 186px auto;
    ${Play} {
      display: none;
    }
    ${PlayMobile} {
      display: block;
    }
  }
`

export const Header = styled.div<CardProps>`
  position: relative;
  background-color: transparent;

  .iconPlay {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.5);
  }
`

export const Img = styled.img`
  object-fit: cover;

  height: 100%;
  width: 100%;

  border-radius: 8px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  background-color: ${(props) => props.theme.colors.Dark_600};

  span {
    margin-top: 1rem;
  }
`
