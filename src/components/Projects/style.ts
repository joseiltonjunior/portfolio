import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    width: calc(100vw - 60px);
  }
`

export const Slide = styled.a`
  background-color: ${(props) => props.theme.colors.Dark_700};
  border-radius: 8px;
  text-decoration: none;
  overflow: hidden;
  display: grid;
  grid-template-rows: 400px auto;

  box-shadow: none;
  outline: none;

  @media (max-width: 900px) {
    grid-template-rows: 186px auto;
  }
`

export const Title = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.colors.Primary};
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
  background-color: ${(props) => props.theme.colors.Dark_700};

  gap: 0.25rem;
  padding: 1.5rem;
`

export const Img = styled.img`
  object-fit: cover;

  height: 100%;
  width: 100%;
`

export const TechBox = styled.span`
  background-color: ${(props) => props.theme.colors.Primary};
`
