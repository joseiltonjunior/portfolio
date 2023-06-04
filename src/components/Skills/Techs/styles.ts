import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.Dark_900};
  border-radius: 6px;
  overflow: hidden;
`

export const Skill = styled.img`
  width: 3rem;
  height: 3rem;
`
export const Title = styled.div`
  color: ${(props) => props.theme.colors.Orange};
  background-color: ${(props) => props.theme.colors.Dark_900};
  text-align: center;
  padding: 0.5rem 0;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 0.5rem;
  gap: 0.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`
