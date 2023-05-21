import { PropsWithChildren } from 'react'
import { Container } from './styles'

export function Tag({ children }: PropsWithChildren) {
  return <Container>{children}</Container>
}
