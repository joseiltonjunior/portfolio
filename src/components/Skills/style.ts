import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
