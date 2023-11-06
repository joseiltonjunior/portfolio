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

  object-fit: fill;
  transform: none;
  transition: transform 300ms;

  :hover {
    transform: scale(1.2);
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

  object-fit: fill;
  transform: none;
  transition: transform 300ms;

  cursor: pointer;

  :hover {
    transform: scale(1.2);
    background: ${(props) => props.theme.colors.Primary};
    color: ${(props) => props.theme.colors.Dark_800};
  }
`
