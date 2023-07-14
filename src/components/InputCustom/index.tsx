import { InputHTMLAttributes } from 'react'
import { Container, Error, Input } from './styles'

import { FieldError, UseFormRegister } from 'react-hook-form'

import { IconType } from 'react-icons'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  register: UseFormRegister<any>
  error?: FieldError
  name: string
}

export function InputCustom({
  icon: Icon,
  error,
  name,
  register,
  ...rest
}: inputProps) {
  return (
    <Container>
      <Input isError={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </Input>
      {error && <Error>{error.message}</Error>}
    </Container>
  )
}
