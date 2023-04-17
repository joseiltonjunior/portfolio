import styled from 'styled-components'

interface linkProps {
  restart?: boolean
}

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`

export const Link = styled.a<linkProps>`
  background: ${(props) =>
    props.restart ? props.theme.colors.Light : props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.Dark_600};

  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;

  :hover {
    color: ${(props) =>
      props.restart ? props.theme.colors.Orange : props.theme.colors.Dark_100};
  }
`

export const Button = styled.button`
  background: ${(props) => props.theme.colors.Light};
  color: ${(props) => props.theme.colors.Dark_600};
  border: none;
  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;

  :hover {
    color: ${(props) => props.theme.colors.Orange};
  }
`
