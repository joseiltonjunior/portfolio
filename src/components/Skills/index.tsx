import { SKillsDataProps } from '~/types/skills'
import { Container } from './style'
import { Techs } from './Techs'

export function Skills({ skills }: SKillsDataProps) {
  function filterTech(type: 'front-end' | 'back-end' | 'settings') {
    switch (type) {
      case 'front-end':
        return skills.filter((item) => item.type === 'front-end' && item.urlImg)

      case 'back-end':
        return skills.filter((item) => item.type === 'back-end' && item.urlImg)

      case 'settings':
        return skills.filter((item) => item.type === 'settings' && item.urlImg)

      default:
        return skills
    }
  }

  return (
    <Container>
      <Techs skills={filterTech('front-end')} name="Front-end" />
      <Techs skills={filterTech('back-end')} name="Back-end" />
      <Techs skills={filterTech('settings')} name="Ferramentas" />
    </Container>
  )
}
