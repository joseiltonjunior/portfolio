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
    props.restart ? props.theme.colors.Light : props.theme.colors.Primary};
  color: ${(props) => props.theme.colors.Dark_600};

  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;

  :hover {
    color: ${(props) =>
      props.restart ? props.theme.colors.Primary : props.theme.colors.Dark_100};
  }
`

export const Button = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.Primary};
  border: 1px solid ${(props) => props.theme.colors.Primary};
  border-radius: 8px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s;

  :hover {
    background: ${(props) => props.theme.colors.Primary};
    color: ${(props) => props.theme.colors.Dark_800};
  }
`
