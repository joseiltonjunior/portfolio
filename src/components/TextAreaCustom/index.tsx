import { TextareaHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { Container, TextArea, Error } from './styles'

import { IconType } from 'react-icons'

interface textAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconType
  register: UseFormRegister<any>
  error?: FieldError
  name: string
}

export function TextAreaCustom({
  icon: Icon,
  register,
  error,
  name,
  ...rest
}: textAreaProps) {
  return (
    <Container>
      <TextArea isError={!!error}>
        {Icon && <Icon size={20} />}
        <textarea {...register(name)} {...rest} />
      </TextArea>
      {error && <Error>{error.message}</Error>}
    </Container>
  )
}
