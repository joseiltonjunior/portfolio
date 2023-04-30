import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;

  @media (max-width: 900px) {
    width: calc(100vw - 60px);
  }
`

export const Slide = styled.a`
  text-decoration: none;
  box-shadow: none;
`

export const Title = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.colors.Orange};
  font-size: 1rem;
  text-align: left;
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.Dark_300};
  font-size: 0.9rem;
  text-align: left;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
`

export const Img = styled.img`
  object-fit: contain;

  height: 100%;
  width: 100%;

  border-radius: 8px;
`
