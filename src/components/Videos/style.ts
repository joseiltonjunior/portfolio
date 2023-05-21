import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    width: calc(100vw - 60px);
  }
`

export const NoContent = styled.p`
  color: ${(props) => props.theme.colors.Orange};
`
