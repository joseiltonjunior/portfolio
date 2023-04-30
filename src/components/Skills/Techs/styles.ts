import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1rem;
`

export const Skill = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`
export const Title = styled.strong`
  color: ${(props) => props.theme.colors.Orange};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 0.5rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`
