import { SKillsDataProps } from '~/types/skills'
import { Container, Skill } from './style'

export function Skills({ skills }: SKillsDataProps) {
  return (
    <>
      {skills.map((item) => (
        <Container key={item.name}>
          <Skill>{item.name}</Skill>
        </Container>
      ))}
    </>
  )
}
