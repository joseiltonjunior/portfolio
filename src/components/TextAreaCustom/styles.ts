import styled from 'styled-components'

interface errorProps {
  isError?: boolean
}

export const Container = styled.div`
  position: relative;
`

export const TextArea = styled.div<errorProps>`
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) =>
      props.isError ? props.theme.colors.Red_500 : props.theme.colors.Orange};

  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    fill: ${(props) =>
      props.isError ? props.theme.colors.Red_500 : props.theme.colors.Orange};
  }

  textarea {
    width: 100%;
    background-color: transparent;
    border: none;

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
