import React from 'react'
import { Container } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} variant={variant} type="button">
      {children}
    </Container>
  )
}
