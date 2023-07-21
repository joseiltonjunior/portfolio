import styled from 'styled-components'

interface errorProps {
  isError?: boolean
}

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.div<errorProps>`
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) =>
      props.isError ? props.theme.colors.Red_500 : props.theme.colors.Dark_600};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    fill: ${(props) =>
      props.isError ? props.theme.colors.Red_500 : props.theme.colors.Primary};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0.5rem 0;
    color: ${(props) => props.theme.colors.Light};

    :focus {
      outline: none;
      box-shadow: none;
      background-color: transparent;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.Light};
  }
`

export const Error = styled.span`
  position: absolute;
  right: 2px;
  margin-top: 2px;
`
