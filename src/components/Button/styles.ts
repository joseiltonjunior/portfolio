import styled, { css } from 'styled-components'

interface ContainerProps {
  variant: 'primary' | 'secondary'
}

export const Container = styled.button<ContainerProps>`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.Primary};
  font-weight: 600;
  padding: 0.6rem;
  height: 50px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.Primary};
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    svg {
      fill: ${(props) => props.theme.colors.Light};
    }
  }

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      border: 1px solid ${(props) => props.theme.colors.Dark_100};
      color: ${(props) => props.theme.colors.Dark_100};

      :focus {
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : css`
          :hover {
            color: ${(props) => props.theme.colors.Dark_100};
            background-color: ${(props) => props.theme.colors.Primary};
          }

          ${props.variant === 'secondary' &&
          css`
            :hover {
              color: ${(props) => props.theme.colors.Dark_600};
              background-color: ${(props) => props.theme.colors.Dark_100};
            }
          `}
        `}
`

export const Box = styled.div`
  max-width: 18.75rem;
`

Container.displayName = 'Button'
Box.displayName = 'Box'
