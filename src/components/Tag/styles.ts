import styled from 'styled-components'

export const Container = styled.span`
  color: ${(props) => props.theme.colors.Dark_900};
  font-size: 0.75rem;
  background-color: ${(props) => props.theme.colors.Orange};
  border-radius: 8px;
  padding: 2px 4px;

  & + span {
    margin-left: 0.2rem;
  }
`
