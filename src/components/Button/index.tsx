import React from 'react'
import ReactLoading from 'react-loading'
import { Container } from './styles'
import theme from '~/styles/theme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}

export function Button({
  children,
  isLoading,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} variant={variant}>
      {isLoading ? (
        <ReactLoading
          className="loading"
          type="bars"
          color={theme.colors.Orange}
          width={40}
          height={40}
        />
      ) : (
        children
      )}
    </Container>
  )
}
