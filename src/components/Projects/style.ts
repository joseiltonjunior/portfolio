import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.Dark_600};
  border-radius: 6px;
  padding: 0.75rem;
  cursor: pointer;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;

  gap: 1rem;

  transition: all 0.2s;

  :hover:not(:disabled) {
    border: 1px solid ${(props) => props.theme.colors.Orange};
  }

  :disabled {
    cursor: default;
  }
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
`

export const ContentIcon = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.Orange};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 2.5rem;
    height: 2.5rem;
  }
`
