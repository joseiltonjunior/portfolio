import React from 'react'
import ReactLoading from 'react-loading'
import { Container } from './styles'

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
          color={'#ff8c00'}
          width={40}
          height={40}
        />
      ) : (
        children
      )}
    </Container>
  )
}
