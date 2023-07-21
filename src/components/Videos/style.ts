import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`

export const NoContent = styled.p`
  color: ${(props) => props.theme.colors.Primary};
`
