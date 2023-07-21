import styled from 'styled-components'

export const Container = styled.span`
  color: ${(props) => props.theme.colors.Light};
  font-size: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.Primary};
  border-radius: 8px;
  padding: 2px 4px;

  & + span {
    margin-left: 0.2rem;
  }
`
